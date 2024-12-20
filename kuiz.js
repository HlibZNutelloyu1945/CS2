const questions = [
  {
      question: "Яка максимальна кількість гравців у команді CS2? НЕ лише матчмейкінг.",
      answers: [
          { text: "5", correct: false },
          { text: "2", correct: false },
          { text: "10", correct: true }
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
  },
  {
      question: "Як називається найбільша карта в CS2?",
      answers: [
          { text: "Даст II", correct: false },
          { text: "Нюк", correct: false },
          { text: "Оверпасс", correct: true }
      ]
  },
  {
      question: "Який пістолет найбільш популярний в CS2?",
      answers: [
          { text: "Глок", correct: false },
          { text: "Дiгл", correct: true },
          { text: "Берета", correct: false }
      ]
  },
  {
      question: "Як називається іконка, яка з'являється після вбивства ворога в CS в голову?",
      answers: [
          { text: "Хедшот", correct: true },
          { text: "Фраг", correct: false },
          { text: "Блайнд", correct: false }
      ]
  },
  {
      question: "Як можна збільшити швидкість бігу з ножем в CS 1.6 - CS:GO (HE CS2)?",
      answers: [
          { text: "Використовувати гранату", correct: false },
          { text: "Пристосуватися до мишки", correct: false },
          { text: "Баніхоп", correct: true }
      ]
  },
  // додати більше питань, якщо потрібно...
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
