// console testing
console.log("testing");
console.log("working");

// Variable Declaration
let amountRotate;

let button = document.querySelectorAll('.button');

let wheel = document.getElementById('wheel');

function randomInteger(min, max) {
     //return a random int between min and max
     return Math.floor(Math.random() * (max - min + 1)) + min;
   
}

function spinWheel() {
     console.log("spin");

     amountRotate = randomInteger(1800, 2160);
     console.log("amountRotate");

     for (let i = 0; i < amountRotate; i++) {
          wheel.style.transform = "rotate(1deg)";
     }
}

button.addEventListener('click', spinWheel);