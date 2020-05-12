const Questions = [
  [
    "Q1 of 6: What is your coffee experience level?",
    "I'm pretty new to all of this",
    "I’m at an intermediate stage",
    "I’m pretty advanced",
    "I’m a total coffee nerd",
  ],
  [
    "Q2 of 6: What's your preferred way to making coffee?",
    "Coffer Maker",
    "French Press/Pour Over",
    "Cold Brew",
    "Nespresso",
  ],
  [
    "Q3 of 6: Do you add anything to your coffee?",
    "Milk and/or Cream",
    "Sugar, Sweetener and/or Syrups",
    "Straight up Black",
    "A mix of these choices",
  ],
  [
    "Q4 of 6: Do you have a prefered roast level?",
    "Light Roast",
    "Medium Roast",
    "Dark Roast",
    "Not picky (or I'm not sure)",
  ],
  [
    "Q5 of 6 : How do you like your coffee to taste",
    "Classic and traditional",
    "Hints of something different",
    "Surprising and unconventional",
    "I'm not quite sure what I like",
  ],
  [
    "Q6 of 6 : How much do you spend on a cup of coffee regularly?",
    "$$",
    "$$$",
    "$$$$",
    "$$$$$",
  ],
];
const Answers = [];

("Dunkin' Donuts"); //count = 
("Starbucks");
("Peet's");
("Blue Bottle Coffee");
("Phil'z");

//Answers of the questions should be tallied to provide a final answer.
//The final answer will be the name of a coffee shop in which we'll locate the closet
//from their selected city choice.
$(document).ready(function () {
  var count = 0;

  var answer = $("#answer1").attr("value");
  var answer2 = $("#answer2").attr("value");

  // var question = document.querySelectorAll("#question2");
  // for (var i = 0; i < question.length; i++) {
  //   for (var j = 0; j < Questions.length; i++) {
  //     if (questions[i].value == {

  //     }
  //   }

  // }
  $("#answer1").on("click", function () {
    count++;
  });
  // else if ($("#answer2").on("click")) {
  //   count += 2;
  //   console.log(count);
  // }

  // $("#answer1").on("click", function () {
  //   count++;
  //   console.log(count);
  //   console.log(question);
  // });
  // $("#answer2").on("click", function () {
  //   count += 2;
  //   console.log(count);
  // });
  // $("#answer3").on("click", function () {
  //   count += 3
  //   console.log(count);
  // });
  // $("#answer4").on("click", function () {
  //   count += 4;
  //   console.log(count);
  // });
});