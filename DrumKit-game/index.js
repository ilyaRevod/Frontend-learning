const drum = document.querySelectorAll('.drum');

for (let index = 0; index < drum.length; index++) {
  document.querySelectorAll('.drum')[index].addEventListener('click', function () {
    let letter = this.innerHTML;
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
    }
  });
};