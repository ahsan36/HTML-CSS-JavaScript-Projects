const questions = [{
        que: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },

    {
        que: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        que: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },

    {
        que: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }

];

let index = 0;
let total = questions.length;

let right = 0, wrong = 0;

const quesBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options');

// Load Questions Function

const loadQuestion = () => {

    if(index === total){
        return endQuiz()
    }
    reset()

    const data = questions[index];
    // Add Questions 
    quesBox.innerText = `${index + 1}) ${data.que}`;

    // Add Options
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

// Submit Question Function

let submitQuiz = () => {
    const data = questions[index];

    const ans = getAnswer()

    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }

    index++;
    loadQuestion();
    return;
}

// Get Answer Function

const getAnswer = () => {
    let answer;

    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )

    return answer;
}

// reset Function : for new question selected radio button

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}

// End Quiz Function

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
            <div style ="text-align:center;">
                <h3> Thank You </h3>
                <h2> ${right} / ${total} are correct </h2>
            </div>    
        `
}

loadQuestion();

