



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

var counter = setInterval(timer, 1000);

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
}



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

questionList = [michigan, stanford];

var numQuestion = 0;

var activeQuestion = questionList[numQuestion];

$("#question").html(activeQuestion.question);
$("#ans1").html(activeQuestion.answers[0]);
$("#ans2").html(activeQuestion.answers[1]);
$("#ans3").html(activeQuestion.answers[2]);
$("#ans4").html(activeQuestion.answers[3]);






// function selectQuestion() {
    

// var 

// };


//Buttons============================================

// $("#startGame").on('click', game.startGame);

$('.answerButton').on('click',function() {
    
    var x = $(this).text();
    console.log(x);
    console.log(activeQuestion.correctAnswer);
    //stop the timer count down
    clearInterval(counter);
    switchContent();

    if (x === activeQuestion.correctAnswer) {
        $("#answerResult").html("Correct!");
    }

    $("#answerResult").html("Wrong!");
    $("#revealAns").html("The correct answer is: " + michigan.correctAnswer);

});
