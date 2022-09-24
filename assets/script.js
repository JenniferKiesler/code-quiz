var viewHighScores = document.getElementById('scores');
var timer = document.getElementById('time');
var seconds = document.getElementById('seconds');
var startPage = document.getElementById('begin');
var startBtn = document.getElementById('start');

var questions = document.querySelectorAll('.question');
var optionsOne = document.getElementById('one');
var optionsTwo = document.getElementById('two');
var optionsThree = document.getElementById('three');
var optionsFour = document.getElementById('four');
var optionsFive = document.getElementById('five');

var answerResult = document.querySelectorAll('.result');

var resultsPage = document.getElementById('results')
var score = document.getElementById('score');
var initials = document.getElementById('initials');
var submitBtn = document.getElementById('submit');

var highScoresPage = document.getElementById('high-scores');
var highScoresList = document.getElementById('all-scores');
var againBtn = document.getElementById('play-again');
var clear = document.getElementById('clear');

var timeLeft = 60;
var index = 0;
var stopTime
var initialsList = [];
var scores = [];

// countdown function
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        seconds.textContent = timeLeft;
        stopTime = timerInterval;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            zeroTime()
        }
    }, 1000);
}

// no time left function
function zeroTime() {
    questions[index].setAttribute('data-state', 'hidden');
    resultsPage.setAttribute('data-state', 'visible');
    score.textContent = timeLeft;
}

// guessing answer
function guessAnswer(event) {
    var element = event.target;

    if (element.matches('button')) {
        var correct = element.getAttribute('data-answer');
        
        questions[index].setAttribute('data-state', 'hidden');
       
        if (correct === 'correct') {
            answerResult[index].textContent = 'Correct!';
            index++;
        } else {
            answerResult[index].textContent = 'Wrong!';
            index++;
            timeLeft = timeLeft - 10;
        }
        
        if (index <= 4) {
            questions[index].setAttribute('data-state', 'visible');
        } else {
            questions[4].setAttribute('data-state', 'hidden');
            resultsPage.setAttribute('data-state', 'visible');
            seconds.textContent = timeLeft;
            score.textContent = timeLeft;
            clearInterval(stopTime);
        } 
    }
}

// renders initials and score into a li element
function renderHighScores() {
    resultsPage.setAttribute('data-state', 'hidden');
    highScoresPage.setAttribute('data-state', 'visible');

    for (var i = 0; i < initialsList.length; i++) {
        var newInitials = initialsList[i];
        var newScores = scores[i];

        var li = document.createElement('li');
        li.textContent = newInitials + ' - ' + newScores;
        // add class or id or attribute then set the style inside CSS?
            // add style so list is numbered not 'none'
            // font size bigger
            // add background and padding to list item

        highScoresList.appendChild(li);
    }
}

// gets stored initials and scores from local storage
function getStoredScores() {
    var storedInitials = JSON.parse(localStorage.getItem('initialsList'));
    var storedScores = JSON.parse(localStorage.getItem('scores'));

    if (storedInitials !== null) {
        initialsList = storedInitials;
        scores = storedScores;
    }
}

// stores initials and score into local storage
function storeScores() {
    localStorage.setItem('initialsList', JSON.stringify(initialsList));

    localStorage.setItem('scores', JSON.stringify(scores));
}

viewHighScores.addEventListener('click', function() {
    startPage.setAttribute('data-state', 'hidden');
    timer.setAttribute('data-state', 'hidden');
    viewHighScores.setAttribute('data-state', 'hidden');
    highScoresPage.setAttribute('data-state', 'visible');
})

startBtn.addEventListener('click', function() {
    setTime();
    startPage.setAttribute('data-state', 'hidden');
    questions[0].setAttribute('data-state', 'visible');
}) 

optionsOne.addEventListener('click', guessAnswer)
optionsTwo.addEventListener('click', guessAnswer)
optionsThree.addEventListener('click', guessAnswer)
optionsFour.addEventListener('click', guessAnswer)
optionsFive.addEventListener('click', guessAnswer)

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    timer.setAttribute('data-state', 'hidden');

    var initialsText = initials.value.trim();

    if (initialsText === "") {
        return;
    }

    initialsList.push(initialsText);
    initials.value = "";
    scores.push(score.textContent);
    storeScores();
    getStoredScores()
    renderHighScores();
});

againBtn.addEventListener('click', function() {
    highScoresPage.setAttribute('data-state', 'hidden');
    startPage.setAttribute('data-state', 'visible');
    timer.setAttribute('data-state', 'visible');
    timeLeft = 60;
    seconds.textContent = timeLeft;
    index = 0;
    initialsList = [];
    scores = [];
})

clear.addEventListener('click', function() {
    localStorage.removeItem('scores');
    localStorage.removeItem('initialsList');
    highScoresList.textContent = "";
})
