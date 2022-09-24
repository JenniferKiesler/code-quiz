var timer = document.getElementById('seconds');
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

var highScoresList = document.getElementById('all-scores');
var againBtn = document.getElementById('play-again');
var clear = document.getElementById('clear');

var timeLeft = 60;
var index = 0;
var stopTime

// countdown function
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
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
            timer.textContent = timeLeft;
            score.textContent = timeLeft;
            clearInterval(stopTime);
        } 
    }
}

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


// eventlistener for #scores
    // turns #begin to hidden
    // turns #high-scores to visible


    

// eventlistener for submit button
    // save to localstorage #score and #initials
    // #results to hidden
    // get data from localstorage and display in #all-scores as list item as initials - score
    // add background and padding to list item
    // #high-scores to visible

// eventlistener for #play-again
    // #high-scores hidden
    // #begin visible

// eventlistener for #clear
    // clear list items
