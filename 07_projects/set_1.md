# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-rftwlvgh?description=HTML/CSS/JS%20Starter&file=styles.css,index.html,01_ColorChanger%2Findex.html,01_ColorChanger%2Fstyle.css,01_ColorChanger%2Fscript.js&terminalHeight=10&title=Static%20Starter)

# Solution code

## project 1

```javascript
    const body = document.querySelector('body')

const button = document.querySelector(".button")

const grey = document.querySelector('#grey')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

grey.addEventListener("click", function () {
  body.style.backgroundColor = "grey"
})
blue.addEventListener("click", function () {
  body.style.backgroundColor = "blue"
})
yellow.addEventListener("click", function () {
  body.style.backgroundColor = "yellow"
})
white.addEventListener("click", function () {
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

