# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/stackblitz-starters-rftwlvgh?file=package.json)

# Solution code

## project 1

```javascript
const body = document.querySelector('body')

const button = document.querySelector(".button")

const grey = document.querySelector('#grey')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

grey.addEventListener("click", function() {
    body.style.backgroundColor = "grey"
})
blue.addEventListener("click", function() {
    body.style.backgroundColor = "blue"
})
yellow.addEventListener("click", function() {
    body.style.backgroundColor = "yellow"
})
white.addEventListener("click", function() {
    body.style.backgroundColor = "white"
})

// Another Method

// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector('body')

// buttons. forEach(function (button) {
//   console. log(button);
//   button.addEventListener('click', function (e) {
//   console. log(e);
//   console. log(e.target);
//   if (e.target.id === 'grey') 
//   body.style.backgroundColor = e.target.id;

//   if (e.target.id === 'white') 
//   body.style.backgroundColor = e.target.id;

//   if (e.target.id === 'blue') 
//   body.style.backgroundColor = e.target.id;

//   if (e.target.id === 'yellow') 
//   body.style.backgroundColor = e.target.id;

//     });
//   });
```

## Project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (height === '' || height < 0 || isNaN(height)) {
        // alert("Please give valid height")
        results.innerHTML = 'Please give valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        // alert("Please give valid weight")
        results.innerHTML = 'Please give valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
```

## project 3

```javascript
const clock = document.getElementById('clock');

setInterval(function() {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```


# project 4

```javascript
const randomnNum = Math.round(Math.random() * 100 + 1);
console.log(randomnNum);

const submit = document.getElementById('subt');
const input = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let guessRem = 10;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 && guess > 100) {
    alert('enter the number in given range');
  } else {
    if (guessRem<1){
      displayGuess(guess);
      displayMessage(`Game over: The random number was ${randomnNum}`);
      endGame()
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnNum) {
    displayMessage('YAY you have guessed the number');
    endGame();
  }else if(guess < randomnNum){
    displayMessage('try bigger number')
  }else if(guess > randomnNum){
    displayMessage('try smaller number')
  }
}


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>(${message})</h2>`
}

function displayGuess(guess){
  input.value = '' // cleanup
  guessSlot.innerHTML += `${guess}, `;
  guessRem --;
  remaining.innerHTML = guessRem;
}

function endGame(){
  input.value = ' '
  input.setAttribute('diasabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomnNum = Math.round(Math.random() * 100 + 1)
    prevGuess = []
    guessRem = 10
    guessSlot.innerHTML = ''
    remaining.innerHTML = guessRem;
    input.removeAttribute('disabled')
    startOver.removeChild(p);

    playGame = true;
  })
}

```


# project 5

```javascript

const stop = document.querySelector("#stop")

// Generate a random color
const randomColor = function(){
const hex = '0123456789ABCDEF'
let color = '#';
for(let i = 0; i < 6; i++){
  color += hex[Math.floor(Math.random() * 16)];
}
return color;
};

let intervalId

const startChange = function(){
  if(!intervalId){
  intervalId = setInterval(changeBgColor, 1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChange = function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector("#start").addEventListener('click', startChange)
document.querySelector("#stop").addEventListener('click', stopChange)
```


# project 6

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```