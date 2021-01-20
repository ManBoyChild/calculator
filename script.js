//CALCULATOR FUNCTIONS
const add = (prev, curr) => prev + curr;
const subtract = (prev, curr) => prev - curr;
const multiply = (prev, curr) => prev * curr;
const divide = (prev, curr) => prev * curr;
const operator = (operatorFunction, prev, curr) => {
    operatorFunction(prev, curr);
}

//NUMBER BUTTON FUNCTIONALITY
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

one.addEventListener("click", updateDisplay);
two.addEventListener("click", updateDisplay);
three.addEventListener("click", updateDisplay);
four.addEventListener("click", updateDisplay);
five.addEventListener("click", updateDisplay);
six.addEventListener("click", updateDisplay);
seven.addEventListener("click", updateDisplay);
eight.addEventListener("click", updateDisplay);
nine.addEventListener("click", updateDisplay);

function updateDisplay() {
    let number = this.innerHTML;
    let display = document.getElementById("display");
    switch(number) {
        case 1:
            display.innerText = "1";
            break;
        case 2:
            display.innerText = "2";
            break;
        case 3:
            display.innerText = "3";
            break;
        case 4:
            display.innerText = "4";
            break;
        case 5:
            display.innerText = "5";
            break;
        case 6:
            display.innerText = "6";
            break;
        case 7:
            display.innerText = "7";
            break;
        case 8:
            display.innerText = "8";
            break;
        case 9:
            display.innerText = "9";
            break;
    }
}