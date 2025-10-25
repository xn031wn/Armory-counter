console.log("heyy");
console.log("Hello world!");


//variables 
let visitCount = 0;

// selecting displays
let countDisplay = document.getElementById("count");
let previousCount = document.querySelector('.previous');

//selecting buttons for event listerners

let incrementBtn = document.getElementById("increment");
let saveBtn = document.getElementById("saveBtn");

//adding event listeners

incrementBtn.addEventListener('click', increment);
saveBtn.addEventListener("click", save);

//creating functions that work when event listeners are called.

function increment() {

    visitCount += 1;
    countDisplay.innerText = visitCount;

}


function save() {
    let pevc =  visitCount +  " - ";
    previousCount.textContent += pevc;
    visitCount = 0
    countDisplay.innerText = visitCount;
    
   
    
}