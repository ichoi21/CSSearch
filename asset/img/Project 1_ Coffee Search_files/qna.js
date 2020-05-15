// const Questions = [
//   [
//     "Q1 of 6: What is your coffee experience level?",
//     "I'm pretty new to all of this",
//     "I’m at an intermediate stage",
//     "I’m pretty advanced",
//     "I’m a total coffee nerd",
//   ],
//   [
//     "Q2 of 6: What's your preferred way to making coffee?",
//     "Coffee Maker",
//     "French Press/Pour Over",
//     "Cold Brew",
//     "Nespresso",
//   ],
//   [
//     "Q3 of 6: Do you add anything to your coffee?",
//     "Milk and/or Cream",
//     "Sugar, Sweetener and/or Syrups",
//     "Straight up Black",
//     "A mix of these choices",
//   ],
//   [
//     "Q4 of 6: Do you have a prefered roast level?",
//     "Light Roast",
//     "Medium Roast",
//     "Dark Roast",
//     "Not picky (or I'm not sure)",
//   ],
//   [
//     "Q5 of 6 : How do you like your coffee to taste",
//     "Classic and traditional",
//     "Hints of something different",
//     "Surprising and unconventional",
//     "I'm not quite sure what I like",
//   ],
//   [
//     "Q6 of 6 : How much do you spend on a cup of coffee regularly?",
//     "$$",
//     "$$$",
//     "$$$$",
//     "$$$$$",
//   ],

//   "Q7 of 7 : Can you let us know what city you're in or provide one where you want to drink?",
//   //UserInput to grab location to match closet coffee shop with specified shop.
// ];

// const Answers = ["1", "2", "3", "4", "5"];

// ("Dunkin' Donuts"); //$$, new, coffee maker, mix - 6 or less
// ("Starbucks"); //$$$, cold brew, nespresso, -
// ("Peet's"); //$$$, cold brew, nespresso, medium, intermediate -
// ("Phil'z"); //$$$$, pour over, dark, hints, advance -
// ("Blue Bottle Coffee"); //$$$$$, light, pour over, nerd - 30 or higher

// //Answers of the questions should be tallied to provide a final answer.
// //The final answer will be the name of a coffee shop in which we'll locate the closet
// //from their selected city choice.

$(document).ready(function () {
  var count = 0;
  var question = document.querySelectorAll("#answer");
  var answer = "";
  var array = [];
  init();

  function init() {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
  }
  function cafeFinder() {
    $("#button").on("click", function () {
      if (count <= 6) {
        answer = "Dunkin' Donuts";
        return answer;
      } else if (count > 6 && count <= 12) {
        answer = "Peet's Coffee";
        return answer;
      } else if (count > 12 && count <= 18) {
        answer = "Starbucks";
        return answer;
      } else if (count > 18) {
        answer = "Blue Bottle Coffee";
        return answer;
      }
    });

    // for (var i = 0; i < question.length; i++) {
    //   array.push(question[i].value);
    // }
    // console.log(array);

    // // function question1() {
    // $("#answer").on("click", function () {
    //   for (var j = 0; j < array.length; j++) {
    //     if (array[j] == "option1") {
    //       console.log(array[j]);
    //       count++;
    //       console.log(count);
    //     }
    //     else if (array[j] == "option2") {
    //       count += 2;
    //       console.log(count);
    //     }
    //   }
    // });
    function question1() {
      $("#answer1").on("click", function () {
        count++;
        console.log(count);
      });
      $("#answer2").on("click", function () {
        count += 2;
        console.log(count);
      });
      $("#answer3").on("click", function () {
        count += 3;
        console.log(count);
      });
      $("#answer4").on("click", function () {
        count += 4;
        console.log(count);
      });
    }
    function question2() {
      $("#answer5").on("click", function () {
        count++;
        console.log(count);
      });
      $("#answer6").on("click", function () {
        count += 2;
        console.log(count);
      });
      $("#answer7").on("click", function () {
        count += 3;
        console.log(count);
      });
      $("#answer8").on("click", function () {
        count += 4;
        console.log(count);
      });
    }
    // }
    // else if ($("#answer2").on("click")) {
    //   count += 2;
    //   console.log(count);
    // }
    function question3() {
      $("#answer9").on("click", function () {
        count++;
        console.log(count);
        console.log(question);
      });
      $("#answer10").on("click", function () {
        count += 2;
        console.log(count);
      });
      $("#answer11").on("click", function () {
        count += 3;
        console.log(count);
      });
      $("#answer12").on("click", function () {
        count += 4;
        console.log(count);
      });
    }
    function question4() {
      $("#answer13").on("click", function () {
        count++;
        console.log(count);
        console.log(question);
      });
      $("#answer14").on("click", function () {
        count += 2;
        console.log(count);
      });
      $("#answer15").on("click", function () {
        count += 3;
        console.log(count);
      });
      $("#answer16").on("click", function () {
        count += 4;
        console.log(count);
      });
    }
    function question5() {
      $("#answer17").on("click", function () {
        count++;
        console.log(count);
        console.log(question);
      });
      $("#answer18").on("click", function () {
        count += 2;
        console.log(count);
      });
      $("#answer19").on("click", function () {
        count += 3;
        console.log(count);
      });
      $("#answer20").on("click", function () {
        count += 4;
        console.log(count);
      });
    }
    function question6() {
      $("#answer21").on("click", function () {
        count++;
        console.log(count);
        console.log(question);
      });
      $("#answer22").on("click", function () {
        count += 2;
        console.log(count);
      });
      $("#answer23").on("click", function () {
        count += 3;
        console.log(count);
      });
      $("#answer24").on("click", function () {
        count += 4;
        console.log(count);
      });
    }
  }
});
