var timer = document.getElementById('seconds');
var startPage = document.getElementById('begin');
var questions = document.querySelectorAll('.question');
var startBtn = document.getElementById('start');
var correct = document.querySelectorAll('[data-answer]');
var answerResult = document.getElementsByClassName('result');
var score = document.getElementById('score');
var initials = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var highScoresList = document.getElementById('all-scores');
var againBtn = document.getElementById('play-again');
var clear = document.getElementById('clear');

var timeLeft = 60;

// countdown function
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function zeroTime() {
    // change questions to hidden
    // #results to visible
    // set #score to remaining time
}

function questions() {
    // for loop for questions
        // while loop (time > 0) 
            // var choose question from array
            // change that question to visible
            // call answer function
        // end
            // call zeroTime()
}

// eventlistener for answer buttons?
    // changes visible to hidden
    // if (var for correct answers) add text correct in .result
        // else 
            // add text wrong
            // subtract 10 seconds from time

// eventlistener for #scores
    // turns #begin to hidden
    // turns #high-scores to visible

// eventlistener for start button
    // call setTime()
    // turns #begin to hidden
    // call questions()
    

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
