import './css/styles.css'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId = null;
let backgroundColor = localStorage.getItem('background')
const INTERVAL_DELAY = 1000;
const refs = {
  buttonStartEl: document.querySelector('[data-action="start"]'),
  buttonStopEl: document.querySelector('[data-action="stop"]'),
  bodyEl: document.querySelector('body')
}
const { buttonStartEl, buttonStopEl, bodyEl } = refs


buttonStartEl.addEventListener('click', onButtonStartClick)
buttonStopEl.addEventListener('click', onButtonStopClick)

// It's just for myself to get value from localStorage and set into backgroud
bodyEl.style.backgroundColor = backgroundColor

function onButtonStartClick() {
  startInterval()
  makeButtonAvailability()
  
}

function onButtonStopClick() {
  stopInterval()
  if (buttonStartEl.hasAttribute('disabled')) {
    makeButtonAvailability()
  }
  localStorage.setItem('background', bodyEl.style.backgroundColor)
}

function startInterval() {
  intervalId = setInterval(() => {
  setBodyBackgroundColor()
}, INTERVAL_DELAY )
}

function stopInterval() {
  clearInterval(intervalId)
}

function makeButtonAvailability() {
  buttonStartEl.toggleAttribute('disabled')
  buttonStartEl.classList.toggle('disabled')
}

function setBodyBackgroundColor() {
  bodyEl.style.backgroundColor = colors[randomIntegerFromInterval([0], colors.length-1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

