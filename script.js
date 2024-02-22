// console testing
console.log("testing");
console.log("working");

// Variable Declaration
let amountRotate, spin;

let button = document.querySelector('.button');

let wheel = document.querySelector('.wheel');

function randomInteger(min, max) {
     //return a random int between min and max
     return Math.floor(Math.random() * (max - min + 1)) + min;
   
}

function spinWheel() {
     console.log("spin");

     spin = Number(wheel.dataset.spin);

     amountRotate = randomInteger(1800, 2160);
     amountRotate += spin;
     console.log(amountRotate);

     wheel.dataset.spin = amountRotate;

     wheel.style.transform = "rotate(" + amountRotate + "deg)";

}
