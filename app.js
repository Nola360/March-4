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


const mic = document.querySelector('.fas.fa-microphone');
const user = document.querySelector('.fas.fa-user');
const mail = document.querySelector('.fas.fa-envelope');
const video = document.querySelector('.fas.fa-video');
const camera = document.querySelector('.fas.fa-camera');
const bell = document.querySelector('.fas.fa-bell');

mic.addEventListener('mouseover', function () {
  let message = document.querySelector('.message');
  // console.log('microphone');
  message.textContent = 'Speaker';
})

user.addEventListener('mouseover', function () {
  let message = document.querySelector('.message');
  // console.log('microphone');
  message.textContent = 'User';
})

mail.addEventListener('mouseover', function () {
  let message = document.querySelector('.message');
  // console.log('microphone');
  message.textContent = 'E-Mail';
})


video.addEventListener('mouseover', function () {
  let message = document.querySelector('.message');
  // console.log('microphone');
  message.textContent = 'Video';
})

camera.addEventListener('mouseover', function () {
  let message = document.querySelector('.message');
  // console.log('microphone');
  message.textContent = 'Camera';
})

bell.addEventListener('mouseover', function () {
  let message = document.querySelector('.message');
  // console.log('microphone');
  message.textContent = 'Bell';
})






const description = document.querySelector('.fas.fa-microphone');


description.addEventListener('click', function (e) {

  if (e.target === 'fas fa-microphone') {
    console.log('test');
  }
  // for (var i = 0; i < description.length; i++)
  // console.log(description);
  // console.log('test');
})

// description.forEach(function (icon) {
//   icon.addEventListener('click', function () {
//     console.log('test');
//   })
// })

// console.log(description[i]);