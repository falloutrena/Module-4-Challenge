// array wth all quiz questions
var quizQuestions = [
    {
      question: "Question 1: Commonly used data types do NOT include?",
      choices: ["strings", "booleans", "alerts", "numnbers"],
      correctAnswer: "alerts"
    },
    {
      question: "Question 2: The condition in an if/else statement is enclosed with ___",
      choices: ["curly brackets", "quotes", "parentheses", "square brackets"],
      correctAnswer: "parentheses"
    },
    {
        question: "Question 3: Arrays in JavaScript can be used to store ___",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Question 4: String values must be enclosed in ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is ___",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    },
  ];
  
  var currentQuestionIndex = 0;
  var time = 60;
  var timerInterval;
  var score = 0;
  console.log(currentQuestionIndex, time, timerInterval, score)
  
  // references to HTML elements
  var startButton = document.getElementById("start-button");
  var questionContainer = document.getElementById("question");
  var choicesContainer = document.getElementById("choices");
  var timerDisplay = document.getElementById("timer");
  var endScreen = document.getElementById("end-screen");
  var scoreDisplay = document.getElementById("score");
  var initialsInput = document.getElementById("initials");
  var submitButton = document.getElementById("submit-button");

  startButton.addEventListener("click", startQuiz);
  
  function startQuiz() {
    
    timerInterval = setInterval(function() {
      time--;
      timerDisplay.textContent = "Time: " + time;
  
      if (time <= 0 || currentQuestionIndex === quizQuestions.length) {
        endQuiz();
      }
    }, 1000);

    displayQuestion();
  }
  
  function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
  
    questionContainer.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
  
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = currentQuestion.choices[i];
      choiceButton.setAttribute("data-index", i);
      choiceButton.addEventListener("click", checkAnswer);
      choicesContainer.appendChild(choiceButton);
    }
  }
  
  function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    var currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    } else {
      time -= 10; // Penalty for wrong answer
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === quizQuestions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
  
    scoreDisplay.textContent = "Final Score: " + score;

    endScreen.style.display = "block";
  }

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initials = initialsInput.value.trim();
  
    if (initials !== "") {
      // Save initials and score (you can customize this part)
      console.log("Initials:", initials);
      console.log("Score:", score);
    }
  });
  