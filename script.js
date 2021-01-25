//INTIAL VARIABLES
const display = document.getElementById("display");
const container = document.querySelector(".container");
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
    if (prev !== 0 && chosenOperator !== "" && curr !== 0) {
        equalsOperation();
        chosenOperator = e.target.classList[0];
        display.innerText = "0";
    } else {
        chosenOperator = e.target.classList[0];
        display.innerText = "0";
    }
    console.log(display.innerText, prev, chosenOperator, curr);
    return chosenOperator;
}

//OPPERATOR AND EQUALS KEYBOARD FUNCTION
document.addEventListener("keydown", operatorKeyboad);

function operatorKeyboad(e) {
    let keyboardCode = e.keyCode;
    switch(keyboardCode) {
        case 107:
            chosenOperator = "add";
            break;
        case 187:
            if(e.shiftKey) {
                chosenOperator = "add";
            }
            break;
        case 109:
        case 189:
            chosenOperator = "subtract";
            break;
        case 106:
            chosenOperator = "multiply";
            break;
        case 56:
            if(e.shiftKey) {
                chosenOperator = "multiply";
            }
            break;
        case 111:
        case 191:
            chosenOperator = "divide";
            break;
        default:
            display.innerText = display.innerText;
    }
    display.innerText = "0";
    return chosenOperator;
}

//NUMBER BUTTON EVENT LISTENERS
const numberBtn = document.querySelectorAll(".number");
numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener("click", updateDisplay);
});

//DISPLAY AND NUMBER VALUE LOGIC
function updateDisplay(e) {
    if (display.innerText === 0) {
        display.innerText = "0";
    } else if (prev === 0 || chosenOperator === "") {
        display.innerText = display.innerText.replace(/^0+/, '');
        display.innerText += e.target.innerText;
        prev = parseFloat(display.innerText);
    } else {
        display.innerText = display.innerText.replace(/^0+/, '');
        display.innerText += e.target.innerText;
        curr = parseFloat(display.innerText);
    }
    console.log(display.innerText, prev, chosenOperator, curr);
}

//ADDING NUMBER AND DECIMAL KEYBOARD FUNCTIONALITY
document.addEventListener("keydown", keyboardFunction);

function keyboardFunction(e) {
    switch(e.keyCode) {
        case 110:
        case 190:
            decimalNumber();
            break;
        case 48:
        case 96:
            if (display.innerText === 0) {
                display.innerText = "0";
            } else if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText = "0";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "0";
                curr = parseFloat(display.innerText);
            }
            break;
        case 49:
        case 97:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "1";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "1";
                curr = parseFloat(display.innerText);
            }
            break;
        case 50:
        case 98:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "2";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "2";
                curr = parseFloat(display.innerText);
            }
            break;
        case 51:
        case 99:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "3";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "3";
                curr = parseFloat(display.innerText);
            }
            break;
        case 52:
        case 100:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "4";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "4";
                curr = parseFloat(display.innerText);
            }
            break;
        case 53:
        case 101:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "5";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "5";
                curr = parseFloat(display.innerText);
            }
            break;
        case 54:
        case 102:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "6";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "6";
                curr = parseFloat(display.innerText);
            }
            break;
        case 55:
        case 103:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "7";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "7";
                curr = parseFloat(display.innerText);
            }
            break;
        case 56:
        case 104:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "8";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "8";
                curr = parseFloat(display.innerText);
            }
            break;
        case 57:
        case 105:
            if (prev === 0 || chosenOperator === "") {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "9";
                prev = parseFloat(display.innerText);
            } else {
                display.innerText = display.innerText.replace(/^0+/, '');
                display.innerText += "9";
                curr = parseFloat(display.innerText);
            }
            break;
        default:
            break;
    }
    console.log(display.innerText, prev, chosenOperator, curr);
    return display;
}

//DECIMAL BUTTON FUNCTION AND LOGIC
const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", decimalNumber);

function decimalNumber(e) {
    while(!display.innerText.includes(".")) {
        if(display.innerText === "") {
            displayInput += 0;
        }
        display.innerText += e.target.innerText;
        if (prev === 0 || chosenOperator === "") {
            prev = parseFloat(display);
        } else {
            curr = parseFloat(display);
        }
    }
}

//EQUALS BUTTON FUNCTION AND LOGIC
const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsOperation);

function equalsOperation() {
    let equalsValue = 0;
    if (prev !== 0 && chosenOperator !== "" && curr === 0) {
        if (chosenOperator === "divide") {
            curr = 0;
        } else {
            curr = prev;
        }
        equalsValue = operate(chosenOperator, prev, curr);
        if (equalsValue > 99999999999 || equalsValue < -9999999999) {
            equalsValue = equalsValue.toExponential(2);
        } else {
            equalsValue = parseFloat((equalsValue).toPrecision(12));
        }
    } else {
        equalsValue = operate(chosenOperator, prev, curr);
        if (equalsValue > 99999999999 || equalsValue < -9999999999) {
            equalsValue = equalsValue.toExponential(2);
        } else {
            equalsValue = parseFloat((equalsValue).toPrecision(12));
        }
    }

    display.innerText = `${equalsValue}`;

    if (Number.isInteger(parseInt(curr))) {
        prev = equalsValue;
        curr = 0;
        chosenOperator = "";
    }
    console.log(display.innerText, prev, chosenOperator, curr);
    return equalsValue;
}

//EQUALS BUTTON KEYBOAD SUPPORT
document.addEventListener("keydown", equalsKeyboard);

function equalsKeyboard(e){
    const keyboardCode = e.keyCode
    switch(keyboardCode) {
        case 13:
        case 187:
            equalsOperation();
            break;
    }
}

//CLEAR BUTTON FUNCTION AND LOGIC
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearHistory);

function clearHistory () {
    display.innerText = "0";
    prev = 0;
    curr = 0;
    chosenOperator = "";
    console.log(display.innerText, prev, chosenOperator, curr);
}

//CORRECTION KEY
const correct = document.querySelector(".correct");
correct.addEventListener("click", backSpace);

function backSpace() {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
    if (display.innerText.length === 0) {
        display.innerText = "0";
    }
}

//CORRECTION KEYBOARD SUPPORT
document.addEventListener("keydown", backSpaceKeyboard);

function backSpaceKeyboard(e) {
    let keyboardCode = e.keyCode;
    switch(keyboardCode) {
        case 8:
        case 46:
            backSpace();
            break;
    }
}