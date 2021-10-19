// Your code goes here

// set up a DOMcontent event listener
//use event call back function DOMContentLoaded
// target index with the


// function newText(str) {
//     let text = document.querySelector('p')
//     text.textContent = "This is really cool!"
// }



document.addEventListener("DOMContentLoaded", function() {
 let newText = document.getElementById('text')
 newText.textContent = "This is really cool!"
 console.log(newText.textContent)
});

console.log('This console.log() fires when index.js loads - before DOMContentLoaded is triggered')

