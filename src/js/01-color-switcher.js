const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const background = document.querySelector('body');
let intervalId = null;

start.addEventListener('click', processStart);

function processStart() {
  intervalId = setInterval(() => {
    background.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.disabled = true;
}

stop.addEventListener('click', processStop);

function processStop() {
  clearInterval(intervalId);
  start.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
