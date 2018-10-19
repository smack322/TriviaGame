console.log("connected");
//define global varibles
var gameTimer = 120;
var intervalId;
var correctAnswerText = 0;
var incorrectAnswerText = 0;
var unasweredQuestionText = 0;

// create objects to store questions and answers 
var scoobyQA = {
    question: "What breed of dog is Scooby Doo?",
    correct_answer: "Great Dane",
    answers: ["Pit bull","Boxer", "Great Dane", "Doberman Pinscher"]  
}

var bojackQA = {
    question: "Which of these Bojack Horseman characters is a human?",
    correct_answer: "Todd Chavez",
    answers: ["Todd Chavez","Lennie Turtletaub","Princess Carolyn","Tom Jumbo-Grumbo"]
}

var thronesQA = {
    question: "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    correct_answer: "Essos",
    answers: ["Easteros","Westereast","Esuntos", "Essos"]
}

var rickQA = {
    question: "When did the TV show Rick and Morty first air on Adult Swim",
    correct_answer: "2013",
    answers: ["2013","2014","2016","2015"]
}

var chrisQA = {
    question: "What is the name of Chris' brother in &quot;Everybody Hates Chris?",
    correct_answer: "Drew",
    answers: ["Jerome", "Drew", "Greg","Joe"]
}

var disneyQA = {
    question: "Which of these Disney shows is classified as an anime?",
    correct_answer:"Stitch!",
    answers: ["Hannah Montana","The Emperor's New Grove","Kim Possible"]
}

var madMenQA = {
    question: "In the TV show Mad Men, what was Donald Draper's birthname?",
    correct_answer: "Richard Whitman",
    answers: ["Donald Draper", "John Ashbury", "Stitch!","Michael Wilhelm"]
}

var breakingQA = {
    question: "In the television show Breaking Bad, what is the street name of Walter and Jesse's notorious product?",
    correct_answer: "Blue Sky",
    answers: ["Baby Blue","Rock Candy","Pure Glass", "Blue Sky"]
}

var strangerQA = {
    question: "Which of these characters in &quot;Stranger Things has the power of Telekinesis?",
    correct_answer: "Eleven",
    answers: ["Mike", "Eleven","Lucas","Karen"]
}

var friendsQA = {
    question: "What was the name of Ross' pet monkey on Friends?",
    correct_answer: "Marcel",
    answers: ["Marcel","Jojo","George","Champ"]
}

// start button function to kick off the trivia game
$("#start").on("click", function() {
    startGame();
    $(this).hide();
    displayQuestions();
    createDoneButton ();

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

       var questionDiv = $("questions");
       var newDiv1 = $("#question1").html("<div>" + scoobyQA.question + "</div>");
       $('#question1').append(questionDiv);

       //  Once number hits zero...
       if (gameTimer === 0) {
         clearInterval(intervalId);
         alert("Time Up! Try again next time.");     
       }
     }

     function displayQuestions () {
     $("#scoobyQ").append(scoobyQA.question);
     $("#scoobyA").append(scoobyQA.answers);
     $("#scoobyQ").text(bojackQA.question);
     $("#scoobyA").text(bojackQA.answers);
     $("#scoobyQ").text(thronesQA.question);
     $("#scoobyA").text(bojackQA.answers);
     $("#scoobyQ").text(rickQA.question);
     $("#scoobyA").text(rickQA.answers);
     $("#scoobyQ").text(chrisQA.question);
     $("#scoobyA").text(chrisQA.answers);
     $("#scoobyQ").text(disneyQA.question);
     $("#scoobyA").text(disneyQA.answers);
     $("#scoobyQ").text(madMenQA.question);
     $("#scoobyA").text(madMenQA.answers);
     $("#scoobyQ").text(breakingQA.question);
     $("#scoobyA").text(breakingQA.answers);
     $("#scoobyQ").text(strangerQA.question);
     $("#scoobyA").text(strangerQA.answers);
     $("#scoobyQ").text(friendsQA.question);
     $("#scoobyA").text(friendsQA.answers);
     }
    //  displayQuestions();
     
     function allDone () {
        $("#correctAnswer").html("<h2>" + "Correct Answers: " + "</h2>");
     }

     function createDoneButton () {
        //create button to submit answers
       var button = $("<button></button>").text("Done");
       $("#doneButton").append(button);
     }
 


