var startBtn = document.getElementById("start");
var quizQuestions = document.getElementById("questions")

const quizQuestions = [
    //Question 1
   {
    question1: "Commonly used data types DO Not include:",
    
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
  
    answer: "Alerts"
   },

    //Question 2
    {
    question2: "The condition in an if/else statement is enclosed with______?",
    
    choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],

    answer: "Boolean"
    },

    //Question 3
    {
    question3: "Arrays in JavaScript can be used to store______?",

    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],

    answer: "All of the above"
    },

    //Question 4
    {
    question4: "String values must be enclosed within ______ when being assigned to variables?",

    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    
    answer: "Quotes"
    },

    //Question 5
    {
    question5: "A very useful tool used during development and debugging for printint content to the debugges is?",

    choices: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],

    answer: "console.log"
    }
];

//Keep track of the user's score
let score = 0;

//Keep track of the current question
let currentQuestionIndex = 0;

// Set the initial question
question.textContent = questions[currentQuestionsIndex];

startBtn,addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        question.textContent = questions[currentQuestionIndex];
    } else {
        startBtn.disabled = true;
    }
})

// for (let i=0; i < quizQuestions.clientHeight; i++){

// }

// startBtn.onclick = function(Questions){

// }
