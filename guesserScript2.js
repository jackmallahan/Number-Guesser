//variables
var randomNumber = getRandom(1, 100);
var userInput = document.getElementById('user-input');
var guessedNumber = document.querySelector('.guessed-number');
var submitGuess = document.querySelector('.guess');
var titleTaunt = document.querySelector('.title')
var output = document.querySelector('.output');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');
var arrayOfGuesses = []

//Functions
function logicFunction (){
  var newInput = parseInt(userInput.value);
  if (newInput < 1 || newInput > 100){
    guessedNumber.innerText = "The Range is 1-100. IDIOT!";
    output.innerText = "I Feel Like I'm Taking Crazy Pills!";
  }else if (newInput > randomNumber){
    output.innerText = "Which is Too High, You Freaking IDIOT";
  } else if (newInput < randomNumber){
    output.innerText = "Which is Too Low, Ya Dump";
  } else if (newInput === randomNumber){
    output.innerText = "Well, Shit. You Win.";
  } else if (isNaN(newInput)){
    guessedNumber.innerText = "Not a Number, Dummy!";
    output.innerText = "Try Guessing a Number...";
  }
};
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

//User Clicks 'Guess'
submitGuess.addEventListener('click', function() {
  guessedNumber.innerText = userInput.value;
  titleTaunt.innerText = "Your Last Guess Was..."
  console.log(randomNumber);
  logicFunction();
  arrayOfGuesses.push(userInput.value);
  toggleResetButton();
});

//Clear button
clearButton.addEventListener('click', function(){
  userInput.value = "";
  toggleClearButton();
  toggleGuessButton();
});

//Reset button
resetButton.addEventListener('click', function(){
  location.reload();
});

//toggle buttons
// The clear button should be disabled if there is nothing to clear.
// The reset button should be disabled if there is nothing to reset.
// The Guess Button should be disabled unless there is a valid input
function toggleGuessButton(){
  if (userInput.value === ''){
    submitGuess.disabled = true;
  } else {submitGuess.disabled = false}
}

userInput.addEventListener('input', function(){
  toggleGuessButton();
  toggleClearButton();
});

function toggleClearButton(){
  if (userInput.value === ''){
    clearButton.disabled = true;
  } else {clearButton.disabled = false}
}

function toggleResetButton(){
  if (arrayOfGuesses.length > 0){
    resetButton.disabled = false;
  } else {resetButton.disabled = true};
}
