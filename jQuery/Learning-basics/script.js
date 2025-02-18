// js
// document.querySelector('h1').style.color = 'yellow';

//jQuery
// $('h1').css('color', 'purple');



// $('input').keydown((param) => {
//   $('h1').text(param.key);
// });

$('input').on("keydown", (param) => {
  $('h1').text(param.key);
});


$('h1').on('click', () => {
  $('h1').text('Clicked!');
});


$('h1').on('mouseover', () => {
  $('h1').text('Mouse!');
});
