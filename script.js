// properties or variables
const score = document.getElementById('score');
const colorDisplay = document.getElementById('colorDisplay');
const buttonContainer = document.querySelector('.color-container');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('#result');
let count = 0;
const colorArray = ['red', 'green', 'yellow', 'pink', 'blue', 'orange'];

// random function
function random() {
  let random = Math.floor(Math.random() * colorArray.length + 1);
  let color = colorArray[random];
  let display = (colorDisplay.style.backgroundColor = color);
  return display;
}

// counter updating function
function updateDisplay() {
  score.innerText = count;
}

// option button color function
buttonContainer.addEventListener('click', (e) => {
  if (e.target.id == 'green') {
    if (colorDisplay.style.backgroundColor == 'green') {
      score.innerText = count++;
      result.innerText = 'correct!!';
      result.style.color = 'green';
      random();
      updateDisplay();
    } else {
      result.innerText = 'wrong!!';
      result.style.color = 'red';
    }
  } else if (e.target.id == 'red') {
    if (colorDisplay.style.backgroundColor == 'red') {
      score.innerText = count++;
      result.innerText = 'correct!!';
      result.style.color = 'green';
      random();
      updateDisplay();
    } else {
      result.innerText = 'wrong!!';
      result.style.color = 'red';
    }
  } else if (e.target.id == 'orange') {
    if (colorDisplay.style.backgroundColor == 'orange') {
      score.innerText = count++;
      result.innerText = 'correct!!';
      result.style.color = 'green';
      random();
      updateDisplay();
    } else {
      result.innerText = 'wrong!!';
      result.style.color = 'red';
    }
  } else if (e.target.id == 'blue') {
    if (colorDisplay.style.backgroundColor == 'blue') {
      score.innerText = count++;
      result.innerText = 'correct!!';
      result.style.color = 'green';
      random();
      updateDisplay();
    } else {
      result.innerText = 'wrong!!';
      result.style.color = 'red';
    }
  } else if (e.target.id == 'yellow') {
    if (colorDisplay.style.backgroundColor == 'yellow') {
      score.innerText = count++;
      result.innerText = 'correct!!';
      result.style.color = 'green';
      random();
      updateDisplay();
    } else {
      result.innerText = 'wrong!!';
      result.style.color = 'red';
    }
  } else if (e.target.id == 'pink') {
    if (colorDisplay.style.backgroundColor == 'pink') {
      score.innerText = count++;
      result.innerText = 'correct!!';
      result.style.color = 'green';
      random();
      updateDisplay();
    } else {
      result.innerText = 'wrong!!';
      result.style.color = 'red';
    }
  } else if (e.target.id == 'reset') {
    count = 0;
    e.target.innerText = 'NEW GAME';
    updateDisplay();
    result.style.color = 'navy';
    resetBtn.style.backgroundColor = '#110e33';
    result.innerText = 'Guess the color !!';
    score.innerText = 0;
    random();
    return display;
  } else {
    return;
  }
});
