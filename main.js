var panel = $("#quiz-area");

var countStartNumber = 30;

//Question set
var questions = [

   {
       question: "WHat is the total amount of Avenger movies?",
       answer: ["1","2","3","4"],
       correctAnswer: "4",
       image: "assets\avenger gif.gif"
   },

   {
       question: "Whats the company that created Mario?",
       answer: ["Microsoft","Sony","Nintendo","Marvel"],
       correctAnswer: "Nintendo",
       image: "C:\Users\0266863\Desktop\trivia-gameja\assets\f75ff23cd22d200f24bfd21f3a8b1f86.gif.crdownload"
   },
]

//Variable to hold our setInterval
var timer;

var game = {
   questions: questions,
   currentQuestion: 0,
   counter: countStartNumber,
   correct: 0,
   incorrect: 0,

   countdown: function() {
       game.counter--;
       $("#counter-number").html(game.counter);
       if(game.counter === 0) {
           console.log("STOP TIMES UP");
           game.timeUp();
       }
   },

   loadQuestion: function() {
       timer = setInterval(game.countdown, 1000);
       panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
       for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
           panel.append("<button class='answer-button' id='button' data-name=' " + questions[this.currentQuestion].answer[i] + "'>" + question[this.currentQuestion].answers[i] + "</button>");
       }
   },

   nextQuestion: function() {
       game.counter = countStartNumber;
       $("#counter-number").html(game.counter);
       game.currentQuestion++;
       game.loadQuestion();
   },

   timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + question[this.currentQuestion].correctAnswer);
    panel.append("<img src+'" + questions[this.currentQuestion}.image + "'/>" );

    if (game.currentQuestion === questions.length - 1)
    {
        setTimeout(game.results, 3 * 1000);
    }
    else
    {
        setTimeout(game.nextQuestion, 3 * 1000);
    }
   },

   results: function() {
       clearInterval(timer);
       panel.html("<h2>All done, heres how you did!</h2>");
       $("#counter-number").html(game.counter);
       panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (game.correct + game.incorrect)) + "</h3>");
        panel.append("<br><button id='start-over'>Start-Over?</button>");
   },
}

