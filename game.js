console.log("test!")
const question = document.getElementById('question');
console.log("test!0")
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log("test!1")
console.log(choices);
let currentquestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
{question: "Inside which HTML element do we put the JavaScript ??",
choicel: "<script>", 
choice2: "<javascript>",
choice3: "<js>",        
choice: "<scripting>",
answer: 2
},
{       
question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
choicel: "<script href='xxx.js'>",
choice2: "<script name='xxx.js'/>",
choice3: "<script src='xxx.js'/>",        
choice4: "<script file='xxx.js'/>",        
answer: 3
},
{
question: "How do you write 'Hello World' in an alert box?",        
choicel: "msgBox('Hello World');",
choice2: "alertBox('Hello World');",
choice3: "msg('Hello World');",        
choices: "alert('Hello World');",
answer: 2
},
]
//constants
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 20;

StartGame = () => {
questionCounter = 0;
score = 0;
availableQuestion = [...questions];
console.log(availableQuestion); 
GetnewQuestion();
};
GetnewQuestion = () =>{

    if (availableQuestion.length===0|| questionCounter>=MAX_QUESTIONS){
        return window.location.assign('/end.html');
    }


    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestion.length)
    currentquestion = availableQuestion[questionIndex]
    question.innerText = currentquestion.question;

    choices.forEach(choice => {
        console.log("test choice");
        const number = choice.dataset["number"];
        choice.innerText = currentquestion["choice"+number];
    });
    availableQuestion.splice(questionIndex,1)
    acceptingAnswers = true
};

choices.forEach(choice =>{
    choice.addEventListener('click',e=>{
        console.log("Test!2s");
        console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer,currentquestion.answer);
        let ClasstoApply = "incorrect";

        if(selectedAnswer == currentquestion.answer){
            ClasstoApply = "correct";
        }
        console.log(ClasstoApply);  
        selectedChoice.parentElement.classList.add(ClasstoApply);
        selectedChoice.parentElement.classList.remove(ClasstoApply);
        GetnewQuestion();

    }
    );
});
StartGame();
