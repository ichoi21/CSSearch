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

"Q7 of 7 : Can you let us know what city you're in or provide one where you want to drink?",
//UserInput to grab location to match closet coffee shop with specified shop.


const Answers = [];

("Dunkin' Donuts"); //$$, new, coffee maker, mix - 6 or less
("Starbucks"); //$$$, cold brew, nespresso, - 
("Peet's"); //$$$, cold brew, nespresso, medium, intermediate - 
("Phil'z"); //$$$$, pour over, dark, hints, advance - 
("Blue Bottle Coffee"); //$$$$$, light, pour over, nerd - 30 or higher

//Answers of the questions should be tallied to provide a final answer.
//The final answer will be the name of a coffee shop in which we'll locate the closet
//from their selected city choice.
