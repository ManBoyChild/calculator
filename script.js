// SETTING INTIAL VALUES
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
const operatorFunctions = document.querySelectorAll(".function");
operatorFunctions.forEach(operator => {
    operator.addEventListener("click", updateOperator);
});

function updateOperator (e) {
    chosenOperator = e.target.classList[0];
    displayInput = "";
    return chosenOperator;
    
}

//NUMBER BUTTON EVENT LISTENERS
const numberBtn = document.querySelectorAll(".number");
numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener("click", updateDisplay);
});

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
    console.log(displayInput.length, prev, chosenOperator, curr);
    return display.innerText = `${displayInput}`; 
}

//ADDING KEYBOARD FUNCTIONALITY
document.addEventListener("keydown", keyboardFunction);

function keyboardFunction(e) {
    let keyboardCode = e.keyCode;
    console.log(keyboardCode, e.shiftKey);
    let display = document.getElementById("display");
    switch(keyboardCode) {
        case 110:
        case 190:
            decimalNumber();
            break;
        case 48:
        case 96:
            displayInput += "0";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 49:
        case 97:
            displayInput += "1";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 50:
        case 98:
            displayInput += "2";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 51:
        case 99:
            displayInput += "3";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 52:
        case 100:
            displayInput += "4";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 53:
        case 101:
            displayInput += "5";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 54:
        case 102:
            displayInput += "6";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 55:
        case 103:
            displayInput += "7";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 56:
        case 104:
            displayInput += "8";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        case 57:
        case 105:
            displayInput += "9";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(displayInput);
            } else {
                curr = parseFloat(displayInput);
            }
            break;
        default:
            break;
    }
    console.log(displayInput.length, prev, chosenOperator, curr);
    return display.innerText = `${displayInput}`; 
}

//DECIMAL BUTTON FUNCTION AND LOGIC
const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", decimalNumber);

function decimalNumber() {
    let display = document.getElementById("display");
    while(!displayInput.includes(".")) {
        if(displayInput === "") {
            displayInput += 0;
        }
        displayInput += ".";
        if (prev === 0 || chosenOperator === "") {
            prev = parseFloat(displayInput);
        } else {
            curr = parseFloat(displayInput);
        }
        return display.innerText = `${displayInput}`;
    }
}

//EQUALS BUTTON FUNCTION AND LOGIC
const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsOperation);

function equalsOperation() {
    let equalsValue = operate(chosenOperator, prev, curr)
    if (equalsValue > 99999999999) {
        equalsValue = equalsValue.toExponential(2);
    } else {
        equalsValue = parseFloat((equalsValue).toPrecision(12));
    }
    if (curr >= 1) {
        displayInput = "";
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