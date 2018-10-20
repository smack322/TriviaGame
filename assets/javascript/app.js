console.log("connected");
//define global variaßbles
var gameTimer = 15;
var intervalId;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;

// create objects to store questions and answers 
var trivia = [

{
    question: "What breed of dog is Scooby Doo?",
    correct_answer: "Great Dane",
    answers: ["Pit bull","Boxer", "Great Dane", "Doberman Pinscher"]  
},

{
    question: "Which of these Bojack Horseman characters is a human?",
    correct_answer: "Todd Chavez",
    answers: ["Todd Chavez","Lennie Turtletaub","Princess Carolyn","Tom Jumbo-Grumbo"]
},

{
    question: "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    correct_answer: "Essos",
    answers: ["Easteros","Westereast","Esuntos", "Essos"]
},

{
    question: "When did the TV show Rick and Morty first air on Adult Swim",
    correct_answer: "2013",
    answers: ["2013","2014","2016","2015"]
},

{
    question: "What is the name of Chris' brother in Everybody Hates Chris?",
    correct_answer: "Drew",
    answers: ["Jerome", "Drew", "Greg","Joe"]
},

{
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer:"Stitch!",
    answers: ["Hannah Montana","The Emperor's New Grove","Kim Possible", "Stitch!"]
},

{
    question: "In the TV show Mad Men, what was Donald Draper's birthname?",
    correct_answer: "Richard Whitman",
    answers: ["Donald Draper", "John Ashbury", "Blake Janelle" ,"Michael Wilhelm"]
},

{
    question: "In the television show Breaking Bad, what is the street name of Walter and Jesse's notorious product?",
    correct_answer: "Blue Sky",
    answers: ["Baby Blue","Rock Candy","Pure Glass", "Blue Sky"]
},

{
    question: "Which of these characters in Stranger Things has the power of Telekinesis?",
    correct_answer: "Eleven",
    answers: ["Mike", "Eleven","Lucas","Karen"]
},

{
    question: "What was the name of Ross' pet monkey on Friends?",
    correct_answer: "Marcel",
    answers: ["Marcel","Jojo","George","Champ"]
}
];
// create questions and answers with radio buttons via a double for loop
function addTrivia () {
    for (var i = 0; i < trivia.length; i++) {
        var div = $("<div>");
        var h2 = $("<h2>");
        h2.text(trivia[i].question);
        div.append(h2);
        for (var k = 0; k < trivia[i].answers.length; k++) {
            var input = $('<input type="radio" name="answers" value="' + k + '" checked>');
            div.append(input);
            div.append(trivia[i].answers[k]);
        }
        var container = $(".container");
        $(container.append(div));
    }
}


// start button function to kick off the trivia game
$("#start").on("click", function() {
    startGame();
    $(this).hide();
    addTrivia();
    displayResults();
    createDoneButton ();
    gradeQuestions();

});
    // function to clear the timer and to set it to go down by 1 second at a time
     function startGame() {
       clearInterval(intervalId);
       intervalId = setInterval(decrementTimer, 1000);
     }
     //  The decrement function to run the timer for the game.
     function decrementTimer() {
       gameTimer--;

       //  Show the number in the timer tag.
       $("#timer").html("<h2>" + "Time remaining: " + gameTimer + "</h2>");

       //  Once number hits zero...
       if (gameTimer === 0) {
         clearInterval(intervalId);
         alert("Time Up! Try again next time.");     
       }
     }


     
     function allDone () {
        $("#correctAnswer").html("<h2>" + "Correct Answers: " + "</h2>");
     }

     function createDoneButton () {
        //create button to submit answers
       var button = $("<button></button>").text("Done");
       $("#doneButton").append(button);

    };

    gradeQuestions = function () {

        var userAnswer = (trivia.answers[l].querySelector('input[name=answers'+l+']:checked')||{}).value;
        var allAnswers = ["Great Dane", "Todd Chavez", "Essos", "2013", "Drew", "Stitch!", "Richard Whitman", "Blue Sky", "Eleven", "Marcel"];
        for (var l = 0; l < trivia.answers.length; l++) {
            if (userAnswer === trivia.correct_answer) {
                correctCounter++;
            }
            else if (userAnswer !== allAnswers) {
                incorrectCounter++;
            }
            console.log(correctCounter);
            console.log(incorrectCounter);
           
        }
        
    }

    displayResults = function () {
        $("#doneButton").on("click", function() {
            console.log("test");
            var container = $(".container");
            container.css("visibility", "hidden");
            // correctCounter = document.getElementById("#correctAnswer");
            var newIncorrectDiv = $("<div>");
            // incorrectCounter = document.getElementById("#incorrectAnswer");
            var newCorrectDiv = $("#<div>");
            // unasweredCounter = document.getElementById("#unanswered");
            var newUnasweredDiv = $("#");


            // correctCounter.textContent = "Correct Answers: " + correctCounter;
            $("#correctCounter").text("Correct Answers: " + correctCounter);
            // incorrectCounter.textContent = "Incorrect Answers: " + incorrectCounter;
            $("#correctCounter").text("Incorrect Answers: " + incorrectCounter);
            // unasweredCounter.textContent = "Unanswered Questions: " + unasweredCounter;
            $("#unansweredCounter").text("Unanswered Questions: " + unansweredCounter);
         })
    }

    
    