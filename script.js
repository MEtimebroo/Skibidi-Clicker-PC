const btnElement = document.getElementById("btn");
const btnElement1 = document.getElementById("btn1");
const spnElement = document.getElementById("span");
let score = 0;

const buttonContainer = document.getElementById('upgradeButtons');
// array of buttons for create
const buttons = [
    { name: 'Skibidi', scoreNeed: 10, scoreInc: 1},
    { name: 'Cameraman', scoreNeed: 30, scoreInc: 5},
    { name: 'Speakerman', scoreNeed: 80, scoreInc: 10},
    { name: 'Astro Toilet', scoreNeed: 200, scoreInc: 30},
    { name: 'Titan TV Man', scoreNeed: 500, scoreInc: 60},
];
// all created intervals
const intervals = [];
// do create action buttons from array
buttons.forEach(button => {
  const addButton = document.createElement('button'); // create btn
  addButton.classList.add('btns'); // add class
  addButton.innerText = `${button.name} (${button.scoreNeed} clicks)`; // add text
  addButton.addEventListener('click', () => { // add listener
    if (score < button.scoreNeed) {
      console.log('poor');
    } else {
      score -= button.scoreNeed;
      spnElement.innerText = score;
      let timerId = setInterval(() => {
        score = score % 1000000 + button.scoreInc;
        spnElement.innerText = score;
      }, 1000);
      intervals.push(timerId);
    }
  })
  buttonContainer.appendChild(addButton); // append in DOM
})

function inc() {
  spnElement.innerText = score++;
}

function clear() {
  intervals.forEach(clearInterval); // stop all intervals
  intervals.length = 0; // clear array
  spnElement.innerText = 0;
  score = 1;
}

btnElement.addEventListener("click", inc);
btnElement1.addEventListener("click", clear);
document.body.addEventListener("keyup", function(event) {
  if (event.code === "Space") inc();
});

document.body.addEventListener("keydown", function(event) {
  if (event.code === "Enter") clear();
});
