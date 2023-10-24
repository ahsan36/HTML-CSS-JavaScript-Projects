const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", 
        function(){
            addNote();
        }
)

const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];

    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    );

    if(data.length === 0){
        localStorage.removeItem("notes");
    }else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
    
}

const addNote = (text = "") => {
    const note = document.createElement("div");

    note.classList.add("note")
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>

        <textarea>${text}</textarea>`;
    
    // Delete Note   
    note.querySelector(".trash").addEventListener(
        "click", 
        function(){
            note.remove();
            saveNote();
        }
    ) 

    // Save Note 
    
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNote();
        }
    )

    main.appendChild(note);    
    saveNote();        
}

(
    function() {
        const lsNote = JSON.parse(localStorage.getItem("notes"));

        if(lsNote == null){
            addNote();
        }else {
            lsNote.forEach(
                (lsNote) => {
                    addNote(lsNote);        
            });
        }
    }

)()