// GLOBAL VARIABLES
let displayInput = "";
let prev = 0;
let curr = 0;
let chosenOperator = "";

//CALCULATOR FUNCTIONS
const add = (prev, curr) => prev + curr;
const subtract = (prev, curr) => prev - curr;
const multiply = (prev, curr) => prev * curr;
const divide = (prev, curr) => prev / curr;
const operate = (chosenOperator, prev, curr) => {
    let result = 0;
    if (chosenOperator == "add") {
        result = add(prev, curr);
    } else if (chosenOperator == "subtract") {
        result = subtract(prev, curr);
    } else if (chosenOperator == "multiply") {
        result = multiply(prev, curr);
    } else if(chosenOperator === "divide" && curr === 0) {
        alert("You are unable to divide by zero under the contrains of this calculator. Please select a differnt input");
        curr = 0;
    } else if (chosenOperator == "divide") {
       result = divide(prev, curr);
    }
    return result;
}

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
    displayInput = "";
    console.log(displayInput, prev, chosenOperator, curr);
    return chosenOperator;
    
}

//NUMBER BUTTON FUNCTIONALITY
const zero = document.querySelector(".zero")
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

zero.addEventListener("click", updateDisplay);
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
        case 0:
            displayInput += "0";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 1:
            displayInput += "1";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 2:
            displayInput += "2";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 3:
            displayInput += "3";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 4:
            displayInput += "4";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 5:
            displayInput += "5";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 6:
            displayInput += "6";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 7:
            displayInput += "7";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 8:
            displayInput += "8";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 9:
            displayInput += "9";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
    }
    console.log(displayInput, prev, chosenOperator, curr);
    return display.innerText = `${displayInput}`; 
}

//DECIMAL BUTTON FUNCTION AND LOGIC
const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", decimalNumber);

function decimalNumber() {
    while(!displayInput.includes(".")) {
        displayInput += ".";
        if (prev === 0 || chosenOperator === "") {
            prev = parseFloat(displayInput);
        } else {
            curr = parseFloat(displayInput);
        }
    }
}

//EQUALS BUTTON FUNCTION AND LOGIC
const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsOperation);

function equalsOperation() {
    let equalsValue = operate(chosenOperator, prev, curr)
    console.log(equalsValue);
    // if (equalsValue.includes(".") ) {
    //     equalsValue.toPrecision(6)
    // }
    if (curr >= 1) {
        display.innerText = `${equalsValue}`;
        prev = equalsValue;
        curr = 0;
        chosenOperator = "";
    }
    console.log(displayInput, prev, chosenOperator, curr);
}

// CLEAR BUTTON FUNCTION AND LOGIC
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearHistory);

function clearHistory () {
    display.innerText = "0";
    displayInput = "";
    prev = 0;
    curr = 0;
    chosenOperator = "";
    console.log(displayInput, prev, chosenOperator, curr);
}