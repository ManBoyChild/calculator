//CALCULATOR FUNCTIONS
//const add = (prev, curr) => prev + curr;
function add(prev, curr) {
    return prev + curr;
}
const subtract = (prev, curr) => prev - curr;
const multiply = (prev, curr) => prev * curr;
const divide = (prev, curr) => prev * curr;
const operate = (chosenOperator, prev, curr) => {
    if (chosenOperator == "add") {
        add(prev, curr);
    } else if (chosenOperator == "subtract") {
        subtract(prev, curr);
    } else if (chosenOperator == "multiply") {
        multiply(prev, curr);
    } else if (chosenOperator == "divide") {
        divide(prev, curr);
    }
}

let displayInput = "";
let prev = 0;
let curr = 0;
let chosenOperator = "";

//OPERATOR BUTTON FUNCTIONS
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

addBtn.addEventListener("click", updateOperator);
subtractBtn.addEventListener("click", updateOperator);
multiplyBtn.addEventListener("click", updateOperator);
divideBtn.addEventListener("click", updateOperator);

function updateOperator (e) {
    chosenOperator = e.target.classList[0];
    return chosenOperator;
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

// DISPLAY AND NUMBER VALUE LOGIC
function updateDisplay() {
    let number = this.innerHTML;
    let display = document.getElementById("display");
    switch(parseInt(number)) {
        case 1:
            displayInput = "1";
            if (prev === 0 || chosenOperator === "") {
                prev = 1;
            } else {
                curr = 1;
            }
            break;
        case 2:
            displayInput = "2";
            if (prev === 0 || chosenOperator === "") {
                prev = 2;
            } else {
                curr = 2;
            }
            break;
        case 3:
            displayInput = "3";
            if (prev === 0 || chosenOperator === "") {
                prev = 3;
            } else {
                curr = 3;
            }
            break;
        case 4:
            displayInput = "4";
            if (prev === 0 || chosenOperator === "") {
                prev = 4;
            } else {
                curr = 4;
            }
            break;
        case 5:
            displayInput = "5";
            if (prev === 0 || chosenOperator === "") {
                prev = 5;
            } else {
                curr = 5;
            }
            break;
        case 6:
            displayInput = "6";
            if (prev === 0 || chosenOperator === "") {
                prev = 6;
            } else {
                curr = 6;
            }
            break;
        case 7:
            displayInput = "7";
            if (prev === 0 || chosenOperator === "") {
                prev = 7;
            } else {
                curr = 7;
            }
            break;
        case 8:
            displayInput = "8";
            if (prev === 0 || chosenOperator === "") {
                prev = 8;
            } else {
                curr = 8;
            }
            break;
        case 9:
            displayInput = "9";
            if (prev === 0 || chosenOperator === "") {
                prev = 9;
            } else {
                curr = 9;
            }
    }
    console.log(prev, chosenOperator, curr);
    return display.innerText = `${displayInput}`; 
}

const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsOperation);

function equalsOperation() {
    let equalsValue = operate(chosenOperator, prev, curr);
    console.log(equalsValue);
    // display.innerText = `${equalsValue}`;
    // prev = parseInt(equalsValue);
    // curr = 0;

}