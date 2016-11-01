var count = 5;

var counter = setInterval(Timer, 1000);

function Timer() {
    count = count -1;
    if (count <= 0) {
    clearInterval(counter);
    $("#timer").html("Time is up!");
    return;
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

$("#question").html(questionList[0].question);
$("#ans1").html(questionList[0].answers[0]);
$("#ans2").html(questionList[0].answers[1]);
$("#ans3").html(questionList[0].answers[2]);
$("#ans4").html(questionList[0].answers[3]);





// function selectQuestion() {

// var 

// };


//Buttons============================================

// $("#startGame").on('click', game.startGame);

$('.answerButton').on('click',function(){



    //replaces answer butttons with correct answer/image
    if($('#content1').css('display')!='none'){
    $('#content2').show().siblings('div').hide();
    }else if($('#content2').css('display')!='none'){
        $('#content1').show().siblings('div').hide();
    }
});
