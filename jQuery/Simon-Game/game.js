// colors
let buttonColours = ["red", "blue", "green", "yellow"];

// patterns
let gamePattern = [];
let userPattern = [];

// game setup
let started = false;
let level = 0;

// keyDown eventListener
$(document).on('keydown', function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  };
});

// click eventListener
$(".btn").on('click', function () {
  let userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userPattern.length - 1);
});

// checking user answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    };
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  };
};

// generate next level
function nextSequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

// animate for buttons using jQuery
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

// play audio using JS
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

// reStart the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
};
