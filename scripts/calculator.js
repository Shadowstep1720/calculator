// Basic math functions
const add = (addend1, addend2) => addend1 + addend2;
const subtract = (minuend, subtrahend) => minuend - subtrahend;
const multiply = (multiplend1, multiplend2) => multiplend1 * multiplend2;
const divide = (numerator, denominator) => numerator / denominator;
const power = (base, exponent) => base ** exponent;

// Accepts parsed input and returns calculation
function operate(inputArray) {
    let number1, number2, operation;
    if (inputArray[0]) {
        number1 = parseFloat(inputArray[0]);
    } else {
        return [0];
    }

    if (inputArray[1]) {
        operation = inputArray[1];
    } else {
        return [number1];
    }

    if (inputArray[2]) {
        number2 = parseFloat(inputArray[2]);
    } else {
        return [number1];
    }
    inputArray.splice(0, 3);
    switch (operation) {
        case "+":
            inputArray.unshift(add(number1, number2));
            break;
        case "-":
            inputArray.unshift(subtract(number1, number2));
            break;
        case "x":
            inputArray.unshift(multiply(number1, number2));
            break;
        case "/":
            inputArray.unshift(divide(number1, number2));
            break;
        case "^":
            inputArray.unshift(power(number1, number2));
            break;
    }
    return inputArray;
}

// Event listener functions

// Button event listeners
const inputButtons = document.querySelectorAll(".input");
for (button of inputButtons) {
    button.addEventListener("click", (event) => {
        let newText = event.target.textContent;
        updateDisplay(newText);
    })
}

// Update and clear display
function updateDisplay(text) {
    const display = document.querySelector("#display");
    let operators = "+-^x/";
    let newText = `${text}`
    if (newText.includes(".")) {
        decimalDisabled(true);
    }
    if (newText === "Clear") {
        display.textContent = "";
        decimalDisabled(false);
    } else if (newText === ".") {
        display.textContent += newText;
    } else if (operators.includes(newText)) {
        display.textContent += ` ${newText} `;
        decimalDisabled(false)
    } else {
        display.textContent += newText;
    }
}

// Disable and re-enable decimal button
function decimalDisabled(bool) {
    const decimalBtn = document.querySelector("#decimal");
    decimalBtn.disabled = bool
}

function parseInput(input) {
    let inputArray = input.split(' ');
    return inputArray;
}

// "=" click event handler
function enterHandler() {
    let display = document.querySelector("#display");
    let input = display.textContent;
    let parsedInput = parseInput(input);
    let resultArray = operate(parsedInput)
    updateDisplay("Clear");
    resultArray.forEach(element => updateDisplay(element))
};


const enterBtn = document.querySelector("#enter");
enterBtn.addEventListener("click", enterHandler);

