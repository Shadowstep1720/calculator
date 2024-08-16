// Basic math functions
function add(addend1, addend2) { addend1 + addend2 };
function subtract(minuend, subtrahend) { minuend - subtrahend };
function multiply(multiplend1, multiplend2) { multiplend1 * multiplend2 };
function divide(numerator, denominator) { numerator / denominator }
function power(base, exponent) { base ** exponent }

// Accepts parsed input and returns calculation
function operate(number1, number2, operation) {
    let result;
    switch (operation) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "x":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        case "^":
            result = power(number1, number2);
            break;
    }
    return result;
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
function updateDisplay(newText) {
    const display = document.querySelector("#display");
    let operators = "+-^x/";
    if (newText === "Clear") {
        display.textContent = "";
    } else if (newText === ".") {
        decimalDisabled(true);
        display.textContent += newText;
    } else if (operators.includes(newText)) {
        decimalDisabled(false);
        display.textContent += ` ${newText} `;
    } else {
        display.textContent += newText;
    }
}

// Disable and re-enable decimal button
function decimalDisabled(bool) {
    const decimalBtn = document.querySelector("#decimal");
    decimalBtn.disabled = bool
}



