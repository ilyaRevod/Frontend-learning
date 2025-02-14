const dice = {
  0: './images/dice.png',
  1: './images/dice2.png',
  2: './images/dice3.png',
  3: './images/dice4.png',
  4: './images/dice5.png',
  5: './images/dice6.png'
};

function randomNumber() {
  return Math.floor(Math.random() * 6);
}

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const h1 = document.querySelector('h1');

const player1Num = randomNumber();
const player1 = dice[player1Num];

const player2Num = randomNumber();
const player2 = dice[player2Num];

image1.setAttribute('src', player1);
image2.setAttribute('src', player2);

if (player1Num === player2Num) {
  h1.innerText = 'DRAW';
} else if (player1Num > player2Num) {
  h1.innerText = 'Player 1 Wins!';
} else {
  h1.innerText = 'Player 2 Wins!';
}
