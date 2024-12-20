const questions = [
    {
        question: "Яка максимальна кількість гравців у команді CS2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true }
        ]
    },
    {
        question: "Яка карта відома своїми подвійними дверима?",
        answers: [
            { text: "Міраж", correct: false },
            { text: "Даст II", correct: true },
            { text: "Нюк", correct: false }
        ]
    },
    {
        question: "Що означає термін 'еко-раунд'?",
        answers: [
            { text: "Повне закупівля", correct: false },
            { text: "Мінімальні витрати", correct: true },
            { text: "Без гранат", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.style.display = 'none';
    nextButton.disabled = true;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.disabled = true;
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(answersElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    scoreDisplay.style.display = 'block';
    scoreElement.innerText = `${score} з ${questions.length}`;
    nextButton.disabled = true;
}

startQuiz();
