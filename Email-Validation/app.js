const inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keydown", validate);

function validate () {
    let form  = document.querySelector(".main-form");

    let pattern  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(inputBox.value.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
    }else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}