//variables
var userInput = document.getElementById('user-input');
var guessedNumber = document.querySelector('.guessed-number');
var guessButton = document.querySelector('.guess');
var submitButton = document.getElementById('submit-button')
var clearButton = document.querySelector('.clear');
var resetButton = document.getElementById('reset-button');
var titleTaunt = document.querySelector('.title')
var output = document.querySelector('.output');
var randomNumber = getRandom(parseInt($('.user-min').val(), parseInt($('.user-max').val())));
var arrayOfGuesses = []
var min = 1
var max = 100


//Functions
function logicFunction (){
  var newInput = parseInt(userInput.value);
  if (newInput < parseInt($('.user-min').val()) || newInput > parseInt($('.user-max').val())){
    titleTaunt.innerText = "You set the range. You can't make a guess inside it?";
    guessedNumber.innerText = "Guess a number between " + $('.user-min').val() + " and " + $('.user-max').val();
    output.innerText = "I Feel Like I'm Taking Crazy Pills!";
  }else if (newInput > randomNumber){
    output.innerText = "Which is Too High, You Freaking IDIOT";
  } else if (newInput < randomNumber){
    output.innerText = "Which is Too Low, Ya Dump";
  } else if (isNaN(newInput)){
    guessedNumber.innerText = "Not a Number, Dummy!";
    output.innerText = "Try Guessing a Number...";
  } else if (newInput === randomNumber){
      return userWin();
    };

function userWin(){
  var newUserMin = parseInt($('.user-min').val()) - 10;
  var newUserMax = parseInt($('.user-max')) + 10;
  var newRandom = getRandom(newUserMin, newUserMax);
  $('.user-min').val() = newUserMin;
  $('.user-max').val() = newUserMax;
    output.innerText = "Congrats. You Beat Me. I think its a fluke. Guess again between " + newUserMin + " and " + newUserMax;
    console.log(newUserMin, newUserMax);
    console.log(newRandom);
    randomNumber = newRandom;
  }
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function toggleSubmitButton(){
  if ($('.user-min').val() && $('.user-max').val() === ''){
    submitButton.disabled = true;
  } else {submitButton.disabled = false}
};

function toggleGuessButton(){
  if (userInput.value === ''){
    guessButton.disabled = true;
  } else {guessButton.disabled = false}
};

function toggleClearButton(){
  if (userInput.value === ''){
    clearButton.disabled = true;
  } else {clearButton.disabled = false}
};

function toggleResetButton(){
  if (arrayOfGuesses.length > 0){
    resetButton.disabled = false;
  } else {resetButton.disabled = true};
};

//User Interaction
submitButton.addEventListener('click', function(){
  randomNumber = getRandom(parseInt($('.user-min').val()), parseInt($('.user-max').val()));
  toggleSubmitButton();
  console.log(randomNumber)
});

guessButton.addEventListener('click', function() {
  guessedNumber.innerText = userInput.value;
  titleTaunt.innerText = "Your Last Guess Was..."
  logicFunction();
  arrayOfGuesses.push(userInput.value);
  toggleResetButton();
  userInput.value = ""
});

clearButton.addEventListener('click', function(){
  userInput.value = "";
  toggleClearButton();
  toggleGuessButton();
});

resetButton.addEventListener('click', function(){
  location.reload();
});

userInput.addEventListener('input', function(){
  toggleGuessButton();
  toggleClearButton();
});

$('.user-max').on('input', function(){
  toggleSubmitButton();
});

$('.user-min').on('input', function(){
  toggleSubmitButton();
});
