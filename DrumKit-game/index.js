const drum = document.querySelectorAll('.drum');

for (let index = 0; index < drum.length; index++) {
  document.querySelectorAll('.drum')[index].addEventListener('click', function () {
    playMusic(this.innerHTML);
    animation(this.innerHTML);
  });
};

// Keyboard EventListener
document.addEventListener('keydown', (param) => {
  playMusic(param.key);
  animation(param.key);
});

function playMusic(letter) {
  let audio;
  switch (letter) {
    case "1":
      audio = new Audio("sounds/sound1.mp3");
      audio.play();
      break;
    case "2":
      audio = new Audio("sounds/sound2.mp3");
      audio.play();
      break;
    case "3":
      audio = new Audio("sounds/sound3.mp3");
      audio.play();
      break;
    case "4":
      audio = new Audio("sounds/sound4.mp3");
      audio.play();
      break;
    case "5":
      audio = new Audio("sounds/sound5.mp3");
      audio.play();
      break;
    case "6":
      audio = new Audio("sounds/sound6.mp3");
      audio.play();
      break;
    case "7":
      audio = new Audio("sounds/sound7.mp3");
      audio.play();
      break;
    default: console.log(letter);
      break;
  };
};

function animation(param) {
  let buttonClicked = document.querySelector('.d' + param);
  buttonClicked.classList.add('active');
  setTimeout(() => {
    buttonClicked.classList.remove('active');
  }, 100);
};