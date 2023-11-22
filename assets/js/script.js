const questions = [
    "What's the capital of Italy?",
    "What's the capital of France?",
    "What's the capital of Germany?",
    "What's the capital of Malta?",
];

function displayQuestion() {
    let questionIndex = 0;
    document.getElementById("question").innerHTML = questions[0];

};
displayQuestion();
