const questions = [
  {
    question: "What is the capital of France?",
    options: {
      A: "Berlin",
      B: "Madrid",
      C: "Paris",
      D: "Rome",
    },
    correctAnswer: "C",
  },
  {
    question: "What is 2 + 2?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "B",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      A: "Earth",
      B: "Mars",
      C: "Jupiter",
      D: "Saturn",
    },
    correctAnswer: "B",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const scoreText = document.getElementById('score');

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  let optionsHTML = '';
  for (let option in currentQuestion.options) {
    optionsHTML += `
      <li>
        <input type="radio" name="option" value="${option}" id="${option}">
        <span>${currentQuestion.options[option]}</span>
      </li>
    `;
  }
  optionsContainer.innerHTML = optionsHTML;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  const answer = selectedOption.value;
  if (answer === questions[currentQuestionIndex].correctAnswer) {
    score++;
    resultText.textContent = "Correct!";
  } else {
    resultText.textContent = `Incorrect! The correct answer is ${questions[currentQuestionIndex].correctAnswer}.`;
  }

  scoreText.textContent = score;
  resultContainer.style.display = "block";
  submitBtn.disabled = true;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    resultContainer.style.display = "none";
    submitBtn.disabled = false;
  } else {
    resultText.textContent = "Quiz Finished! Final Score: " + score;
    submitBtn.disabled = true;
  }
}

submitBtn.addEventListener('click', checkAnswer);
loadQuestion();
