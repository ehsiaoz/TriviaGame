



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





var count = 5;
$("#timer").html("Time remaining: " + count + " Seconds.");

function timer() {
    count = count -1;
    if (count < 1) {

        clearInterval(counter);
        $("#answerResult").html("Out of Time!");
        $("#revealAns").html("The correct answer is: " + michigan.correctAnswer);
        switchContent();

    //return;
    }

    $("#timer").html("Time remaining: " + count + " Seconds.");
    return "dude";
}



//counter is a reference to where the setInterveral is placed in the browser
var counter = setInterval(timer, 1000);





//Constructor function to create character objects
function createNewQA(question, answers, correctAnswer){
  var QA = {
        question: question, 
        answers: answers,
        correctAnswer: correctAnswer, 
        //imageSrc: imageUrl,
      }
    return QA;
}

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



michigan = createNewQA("What is the University of Michigan's school mascot?", ["Badger", "Wolverine", "Spartan", "Lion"], "Wolverine");
stanford = createNewQA("What is the Stanford University's school mascot?", ["Tree", "Cardinal", "Book", "Bear"], "Tree");

var game = {

    questionList: [michigan, stanford],
    activeQuestion: {},
    numQuestion: 0,
    maxCount: 5,
    correctGuesses: null,
    selectQuestion: function() {

        activeQuestion = game.questionList[game.numQuestion];

        $("#question").html(activeQuestion.question);
        $("#ans1").html(activeQuestion.answers[0]);
        $("#ans2").html(activeQuestion.answers[1]);
        $("#ans3").html(activeQuestion.answers[2]);
        $("#ans4").html(activeQuestion.answers[3]);
    },
    restartCounter: function() {
        count = game.maxCount;
    },


};



game.selectQuestion();

//Buttons============================================

// $("#startGame").on('click', game.startGame);

$('.answerButton').on('click',function() {
    
    var x = $(this).text();
    console.log(x.valueOf());
    console.log(activeQuestion.correctAnswer.valueOf());
    //stop the timer count down
    clearInterval(counter);
    switchContent();

    if (x === activeQuestion.correctAnswer) {
        console.log("this is x inside if statement: " + x);
        $("#answerResult").html("Correct!");

        //increase numQuestion by one
        game.numQuestion++;
        //log a correct guess
        game.correctGuesses++;

        //select the next question in the questionList array populate the question and answer buttons
        game.selectQuestion();
        console.log("This is numQuestion: " + game.numQuestion);
        console.log("This is correctGuesses: " + game.correctGuesses);
        console.log("This is the new activeQuestion: " + activeQuestion.question);
        //switch the mainContent area from correct content back to the QA div
        setTimeout(switchContent, 3000);
        //reset the counter back to maxCount
        count = game.maxCount;
        console.log("This is the reset count: " + count);
        //Start the timer again



    }

    else {
        $("#answerResult").html("Wrong!");
        $("#revealAns").html("The correct answer is: " + activeQuestion.correctAnswer);
        game.numQuestion++;
        game.selectQuestion();
        setTimeout(switchContent, 3000);
    }
});
