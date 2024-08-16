// Basic math functions
const add = (addend1, addend2) => addend1 + addend2;
const subtract = (minuend, subtrahend) => minuend - subtrahend;
const multiply = (multiplend1, multiplend2) => multiplend1 * multiplend2;
const divide = (numerator, denominator) => numerator / denominator;
const power = (base, exponent) => base ** exponent;

// accepts parsed input and returns calculation
const operate = (number1, number2, operation) => {
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



