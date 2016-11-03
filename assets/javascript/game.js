
$( document ).ready();

window.onload = function(){
    
    $("#start").on('click', timer.start);
};




//Functions ===========================================

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
stanford = createNewQA("What is Stanford University's school mascot?", ["Tree", "Cardinal", "Book", "Bear"], "Tree", "assets/images/tree.png");
alabama = createNewQA("What is the name of the University of Alabama's school mascot?", ["Crimson Tide", "Tidal Wave", "Bam Bam", "Big Al"], "Big Al", "assets/images/big-al.jpg");
montana = createNewQA("What is the University of Montana's school mascot?", ["Mountain Lion", "Grizzly Bear", "Glacier", "Big Sky"], "Grizzly Bear", "assets/images/Monte.jpg");
sandiego = createNewQA("What is the name of the University of San Diego's school mascot?", ["Diego Toreros", "Los Lobos", "Sunny the Seal", "Inigo Montoya"], "Diego Toreros", "assets/images/sandiego.jpg");
olemiss = createNewQA("What is the name of the University of Mississippi's school mascot?", ["Colonel Reb", "Ole Missy", "Rebel Black Bear", "Bully the Bulldog"], "Rebel Black Bear", "assets/images/olemiss.jpg");



//Objects =======================================================

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
            game.switchContent();
            timer.start();
        }
    },
    start: function(){
        $("#timer").show();
        $("#mainContent").show();
        $("#start").hide();
        //if stopwatch.interval is null run
        if(!timer.interval){
        
        $("#timer").html("Time remaining: " + timer.timeLeft + " Seconds.");
         game.selectQuestion();

         timer.interval = setInterval(timer.countDown, 1000); 

        };
    },

    restart: function() {
        $("#restart").hide();
        $("#timer").show();
        game.switchContent();
        $(".logo").show();
        //set game object variables back to beginning
        game.activeQuestion = null;
        game.numQuestion = 0;
        game.correctGuesses = 0;
        game.incorrectGuesses = 0;
        game.unanswered = 0;
        timer.timeLeft = 5;
        timer.interval = null;

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
                $("#answerResult").css("border", "2px solid #ff0000");
                $("#answerResult").html("Out of Time!");
                $("#revealAns").html("The correct answer is: " + activeQuestion.correctAnswer);
                game.switchContent();
                setTimeout(timer.reset, 3000);
            };       
    },

};


var game = {

    questionList: [michigan, stanford, alabama, montana, sandiego, olemiss],
    activeQuestion: {},
    numQuestion: 0,
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

        $("#timer").hide();
        $("#answerResult").css("border", "none");
        $("#answerResult").html("All done! Here's how you did:");
        $("#revealAns").html("Correct Answers: " + game.correctGuesses +"</br>" + "Incorrect Answers: " + game.incorrectGuesses
            +"</br>" + "Unanswered: " + game.unanswered);
        $(".logo").hide();
        $("#restart").show();
    },

    //swaps content in mainContent section between Q/A & Correct Answer
    switchContent: function() {

        if ($('#content1').css('display')!='none') {
            $('#content2').show().siblings('div').hide();
        }
        else if ($('#content2').css('display')!='none') {
            $('#content1').show().siblings('div').hide(); 
        }
    },
};


//Buttons============================================



$('.answerButton').on('click',function() {
    
    var x = $(this).text();
    console.log(x.valueOf());
    console.log(activeQuestion.correctAnswer.valueOf());
    //stop the timer count down
    timer.stop();

    game.switchContent();

    if (x === activeQuestion.correctAnswer) {
        //notify user that they correctly answered the question
        $("#answerResult").html("Correct!");
        $("#answerResult").css("border", "2px solid #009933");
        $("#revealAns").html(" ");
        //log a correct guess
        game.correctGuesses++;

    
        $("#timer").html("Time remaining: " + timer.timeLeft + " Seconds.");

    }

    else {
        $("#answerResult").css("border", "2px solid #ff0000");
        $("#answerResult").html("Wrong!");
        $("#revealAns").html("The correct answer is: " + activeQuestion.correctAnswer);
        game.incorrectGuesses++;
    }

    //switch the mainContent area from correct content back to the QA div
     setTimeout(timer.reset, 3000);
});


 $("#restart").on('click', timer.restart);