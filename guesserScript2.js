//variables
var randomNumber = getRandom(1, 100);
var newRandomNumber = getRandom(1, 101);
var userInput = document.getElementById('user-input');
var guessedNumber = document.querySelector('.guessed-number');
var submitGuess = document.querySelector('.guess');
var titleTaunt = document.querySelector('.title')
var output = document.querySelector('.output');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');

//Functions
function logicFunction (){
  var newInput = parseInt(userInput.value);
  if (newInput > randomNumber){
    output.innerText = "Which is Too High, You Freaking IDIOT"
  } else if (newInput < randomNumber){
    output.innerText = "Which is Too Low, Ya Dump"
  } else if (newInput === randomNumber){
    output.innerText = "Well, Shit. You Win."
  }
};
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function zeroState(){
  userInput.value = "";
  titleTaunt.innerText = "You Think YOU Can Guess MY Number?!";
  guessedNumber.innerText = "?";
  output.innerText = "What Will Your Guess Be?";
}

//User Clicks 'Guess'
submitGuess.addEventListener('click', function() {
  guessedNumber.innerText = userInput.value;
  titleTaunt.innerText = "Your Last Guess Was..."
  console.log(randomNumber);
  logicFunction();
});
//Clear button
clearButton.addEventListener('click', function(){
  userInput.value = "";
  console.log('fuck');
});
//Reset button
resetButton.addEventListener('click', function(){
  zeroState();
});

//disable buttons
