console.log("heyy");
console.log("Hello world!");


let countDisplay = document.getElementById("count");


let visitCount = 0
console.log(visitCount);

function increment() {

    visitCount += 1;
    countDisplay.innerText = visitCount;

}


function save() {
    console.log(visitCount)
}