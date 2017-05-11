//variables
var userMin = document.getElementById('user-min')
var userMax = document.getElementById('user-max')
var userInput = document.getElementById('user-input');
var guessedNumber = document.querySelector('.guessed-number');
var guessButton = document.querySelector('.guess');
var submitButton = document.getElementById('submit-button')
var clearButton = document.querySelector('.clear');
var resetButton = document.getElementById('reset-button');
var titleTaunt = document.querySelector('.title')
var output = document.querySelector('.output');
var randomNumber = getRandom(min, max);
var arrayOfGuesses = []
var min = 1
var max = 100

//Functions
function logicFunction (){
  var newInput = parseInt(userInput.value);
  if (newInput < parseInt(userMin.value) || newInput > parseInt(userMax.value)){
    guessedNumber.innerText = "You set the range. You can't make a guess inside it? IDIOT!";
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
  return Math.floor(Math.random() * (max - min)) + min;
};

//User Clicks 'Submit'
submitButton.addEventListener('click', function(){
  randomNumber = getRandom(parseInt(userMin.value), parseInt(userMax.value));
  toggleSubmitButton();
  console.log(randomNumber)
})

//User Clicks 'Guess'
guessButton.addEventListener('click', function() {
  guessedNumber.innerText = userInput.value;
  titleTaunt.innerText = "Your Last Guess Was..."
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
userInput.addEventListener('input', function(){
  toggleGuessButton();
  toggleClearButton();
});

userMax.addEventListener('input', function(){
  toggleSubmitButton();
})

userMin.addEventListener('input', function(){
  toggleSubmitButton();
})

function toggleSubmitButton(){
  if (userMin.value && userMax.value === ''){
    submitButton.disabled = true;
  } else {submitButton.disabled = false;
  }
};

function toggleGuessButton(){
  if (userInput.value === ''){
    guessButton.disabled = true;
  } else {guessButton.disabled = false}
}

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
