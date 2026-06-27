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
