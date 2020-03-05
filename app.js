const plus = document.querySelector('#plus');
const menu = document.querySelector('#menu');

var abc = 0;

function expand() {
  if (abc === 0) {
    menu.style.transform = 'scale(3)';
    plus.style.transform = 'rotate(45deg)';
    abc = 1;
  } else {
    menu.style.transform = 'scale(0)';
    plus.style.transform = 'rotate(0deg)';
    abc = 0;
  }
}
