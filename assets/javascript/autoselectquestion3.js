
window.onload = function(){
    
    // $('#stop').on('click', stopwatch.stop);
    // $('#reset').on('click', stopwatch.reset);
    $("#start").on('click', timer.start);
};


setTimeout(switchContent, 3000);

//swaps content in mainContent section between Q/A & Correct Answer
var switchContent = function() {

    if ($('#content1').css('display')!='none') {

        $('#content2').show().siblings('div').hide();

    }

    else if ($('#content2').css('display')!='none') {

        $('#content1').show().siblings('div').hide();

        
    }

};












//Constructor function to create character objects
function createNewQA(question, answers, correctAnswer, imageUrl){
  var QA = {
        question: question, 
        answers: answers,
        correctAnswer: correctAnswer, 
        imageSrc: imageUrl,
      }
    return QA;
}

michigan = createNewQA("What is the University of Michigan's school mascot?", ["Badger", "Wolverine", "Spartan", "Lion"], "Wolverine", "assets/images/wolverine.png");
stanford = createNewQA("What is the Stanford University's school mascot?", ["Tree", "Cardinal", "Book", "Bear"], "Tree", "assets/images/tree.png");
alabama = createNewQA("What is the name of The University of Alabama's school mascot?", ["Crimson Tide", "Tidal Wave", "Bam Bam", "Big Al"], "Big Al", "assets/images/big-al.jpg");
// function questionList() {
// 	var questions = {}
// 	questions["michigan"] = createNewQA("What is the University of Michigan's school mascot?", ["badger", "wolverine", "spartan", "lion"], "wolverine");
// 	questions["stanford"] = createNewQA("What is the Stanford University's school mascot?", ["tree", "cardinal", "book", "bear"], "tree");
// 	// questions["yale"] = createNewQA("What is the Yale University's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["northwestern"] = createNewQA("What is the Northwestern University's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["illinois"] = createNewQA("What is the University of illinois' school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["florida"] = createNewQA("What is the University of Florida's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["southCarolina"] = createNewQA("What is the University of South Carolina's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["montana"] = createNewQA("What is the University of Montana's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["nevada"] = createNewQA("What is the University of Nevada's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	// questions["newmexico"] = createNewQA("What is the University of New Mexico's school mascot?", ["badger", "wolverine", "Spartan", "Lion"], "wolverine", "./assets/images/wolverine.jpg");
// 	return questions;
// };


var timer = {
    timeLeft:5,
    interval: null,
    reset: function(){
        game.numQuestion++;
    
        if (game.numQuestion === game.questionList.length) {
            game.endGame();
        }

        else {

        timer.timeLeft = 5;
        $("#timer").html("Time remaining: " + timer.timeLeft + " Seconds.");
        game.selectQuestion();
        switchContent();
        timer.start();
        }
    },
    start: function(){

        $("#mainContent").attr("style", "visibility: visible")
        $("#start").remove();
        //if stopwatch.interval is null run
        if(!timer.interval){
        
        $("#timer").html("Time remaining: " + timer.timeLeft + " Seconds.");
         game.selectQuestion();

         timer.interval = setInterval(timer.countDown, 1000); 

        };
    },
    stop: function(){
        // DONE: Use clearInterval to stop the count here.
        clearInterval(timer.interval);
        //set stopwatch.interval back to null so that stopwatch.start can reset the counter
        timer.interval = null;
    },
    countDown: function(){
        timer.timeLeft--;
        $("#timer").html("Time remaining: " + timer.timeLeft + " Seconds.");

        if (timer.timeLeft < 1) {
                game.unanswered++;
                timer.stop();
                $("#answerResult").html("Out of Time!");
                $("#revealAns").html("The correct answer is: " + activeQuestion.correctAnswer);
                switchContent();
                setTimeout(timer.reset, 3000);
            };       
    },

};



var counter;
var game = {

    count: 5,
    questionList: [michigan, stanford, alabama],
    activeQuestion: {},
    numQuestion: 0,
    maxCount: 5,
    correctGuesses: 0,
    incorrectGuesses: 0,
    unanswered: 0,
    selectQuestion: function() {

        activeQuestion = game.questionList[game.numQuestion];

        $("#question").html(activeQuestion.question);
        $("#ans1").html(activeQuestion.answers[0]);
        $("#ans2").html(activeQuestion.answers[1]);
        $("#ans3").html(activeQuestion.answers[2]);
        $("#ans4").html(activeQuestion.answers[3]);
        $("#logo").attr('src', activeQuestion.imageSrc);
    },

    endGame: function() {

        $("#answerResult").html("All done! Here's how you did:");
        $("#revealAns").html("Correct Answers: " + game.correctGuesses +"</br>" + "Incorrect Answers: " + game.incorrectGuesses
            +"</br>" + "Unanswered: " + game.unanswered);
        $(".logo").empty();
        $("#content2").append("<button>Start Again</button>");
        $("button").attr('id', 'restart');
    }


//     timerF: function() {
//         timer.timeLeft = timer.timeLeft - 1;
//         if (timer.timeLeft < 1) {

//             clearInterval(counter);
//             $("#answerResult").html("Out of Time!");
//             $("#revealAns").html("The correct answer is: " + activeQuestion.correctAnswer);
//             switchContent();
//             game.numQuestion++;
//             game.selectQuestion();
//             // game.restartCounter();
//             setTimeout(switchContent, 3000);


//         //return;
//         }

//         $("#timer").html("Time remaining: " + game.count + " Seconds.");
//         //return;
//     },

//     startCountdown: function() {
//         //counter is a reference to where the setInterveral is placed in the browser
//         counter = setInterval(game.timer, 1000);

//     }



};

// $("#timer").html("Time remaining: " + game.count + " Seconds.");



//Buttons============================================



$('.answerButton').on('click',function() {
    
    var x = $(this).text();
    console.log(x.valueOf());
    console.log(activeQuestion.correctAnswer.valueOf());
    //stop the timer count down
    timer.stop();

    switchContent();

    if (x === activeQuestion.correctAnswer) {
        //notify user that they correctly answered the question
        $("#answerResult").html("Correct!");
        $("#revealAns").html(" ");
        //log a correct guess
        game.correctGuesses++;

        
        console.log("this is the current time: " + timer.timeLeft)
        console.log("This is numQuestion: " + game.numQuestion);
        console.log("This is correctGuesses: " + game.correctGuesses);
        console.log("This is still the activeQuestion: " + activeQuestion.question);
        
        //reset the counter back to maxCount
        //game.restartCounter();
        // console.log("This is the reset count: " + game.count);
        //start the timer again (hopefully from maxCount)
        $("#timer").html("Time remaining: " + timer.timeLeft + " Seconds.");
       
        
        //Start the timer again

    }

    else {
        $("#answerResult").html("Wrong!");
        $("#revealAns").html("The correct answer is: " + activeQuestion.correctAnswer);
        game.incorrectGuesses++;
    }

    //select the next question in the questionList array populate the question and answer buttons
    // game.selectQuestion();
    //switch the mainContent area from correct content back to the QA div
     setTimeout(timer.reset, 3000);
});
