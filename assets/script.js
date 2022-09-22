// var timer (#seconds)
// var different sections
// var start button
// var correct answers
// var h3 .result
// var #score
// var form inputs
// var #all-scores
// var #play-again btn
// var #clear

// var time = 60

// countdown function setTime setInterval
    // timer begins to countdown
        // time shows in #seconds

// answer function
    // changes visible to hidden
    // if (var for correct answers) add text correct in .result
        // else 
            // add text wrong
            // subtract 10 seconds from time

// eventlistener for #scores
    // turns #begin to hidden
    // turns #high-scores to visible

// eventlistener for start button
    // call countdown function
    // turns #begin to hidden
    // for loop for questions
        // while loop (time > 0) 
            // var choose question from array
            // change that question to visible
            // call answer function
        // end
            // change questions to hidden
    // #results to visible
    // set #score to remaining time

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
