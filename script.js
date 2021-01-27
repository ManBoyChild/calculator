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
    if (keyboardCode === 107 || (keyboardCode === 187 && e.shiftKey === true)) {
        chosenOperator = "add";
        display.innerText = "0";
    } else if (keyboardCode === 109 || keyboardCode === 189) {
        chosenOperator = "subtract";
        display.innerText = "0";
    } else if (keyboardCode === 106 || (keyboardCode === 56 && e.shiftKey === true)) {
        chosenOperator = "multiply";
        display.innerText = "0";
    } else if (keyboardCode === 111 || keyboardCode === 191) {
        chosenOperator = "divide";
        display.innerText = "0";
    } else {
        chosenOperator = chosenOperator;
        display.innerText = display.innerText;
    }
    return chosenOperator;
}

//NUMBER BUTTON EVENT LISTENERS
const numberBtn = document.querySelectorAll(".number");
numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener("click", updateDisplay);
});

//DISPLAY AND NUMBER VALUE LOGIC
function updateDisplay(e) {

    //STOPS THE USER FROM ADDING NUMBERS PAST THE DISPLAY BOX
    if (display.innerText.length >11) {
        numberBtn.forEach(numberBtn => {
            numberBtn.removeEventListener("click", updateDisplay);
        })
    }

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
    
    console.log(display.innerText.length, prev, chosenOperator, curr);
}

//ADDING NUMBER AND DECIMAL KEYBOARD FUNCTIONALITY
document.addEventListener("keydown", keyboardFunction);

function keyboardFunction(e) {
    let keyPress = String.fromCharCode(e.keyCode);

    //STOPS THE USER FROM ADDING NUMBERS PAST THE DISPLAY BOX
    if (display.innerText.length >12) {
        document.removeEventListener("keydown", keyboardFunction);
    }

    if (keyPress == 0) {
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
    } else if (keyPress == 1) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "1";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "1";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 2) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "2";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "2";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 3) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "3";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "3";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 4) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "4";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "4";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 5) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "5";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "5";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 6) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "6";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "6";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 7) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "7";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "7";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 8 && e.shiftKey === false) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "8";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "8";
            curr = parseFloat(display.innerText);
        }
    } else if (keyPress == 9) {
        if (prev === 0 || chosenOperator === "") {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "9";
            prev = parseFloat(display.innerText);
        } else {
            display.innerText = display.innerText.replace(/^0+/, '');
            display.innerText += "9";
            curr = parseFloat(display.innerText);
        }
    } else {
        display.innerText = display.innerText;
    }
    return display;
}

//DECIMAL BUTTON FUNCTION AND LOGIC
const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", decimalNumber);

function decimalNumber(e) {
    while(!display.innerText.includes(".")) {
        if(display.innerText === "") {
            display.innerText += 0;
        }
        display.innerText += e.target.innerText;
        if (prev === 0 || chosenOperator === "") {
            prev = parseFloat(display);
        } else {
            curr = parseFloat(display);
        }
    }
}

//DECIMAL BUTTON KEYBOARD SUPPORT
document.addEventListener("keydown", decimalKeyboard);

function decimalKeyboard (e) {
    let keyboardCode = e.keyCode
    if (keyboardCode === 110 || (keyboardCode === 190 && e.shiftKey === false)) {
        while(!display.innerText.includes(".")) {
            if(display.innerText === "") {
                display.innerText += 0;
            }
            display.innerText += ".";
            if (prev === 0 || chosenOperator === "") {
                prev = parseFloat(display);
            } else {
                curr = parseFloat(display);
            }
        }
    } else {
        display.innerText = display.innerText;
        return;
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
    let keyboardCode = e.keyCode
    if (keyboardCode === 13 || keyboardCode === 187) {
        equalsOperation();
    } else {
        return
    }
}

//CLEAR ALL BUTTON FUNCTION AND LOGIC
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearHistory);

function clearHistory () {
    display.innerText = "0";
    prev = 0;
    curr = 0;
    chosenOperator = "";
    console.log(display.innerText, prev, chosenOperator, curr);
}

//CLEAR ALL BUTTON KEYBOARD SUPPORT
document.addEventListener("keydown", clearKeyboard);

function clearKeyboard(e){
    let keyboardCode = e.keyCode

    if (keyboardCode === 67) {
        clearHistory ();
    } else {
        return
    }
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

    if (keyboardCode === 8 || keyboardCode === 46) {
        backSpace();
    } else {
        return;
    }
}