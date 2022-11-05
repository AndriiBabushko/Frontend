'use strict';

const getElement = (element) => {
    if (element.charAt(0) === "#") {
        return document.querySelector(element);
    }

    return document.querySelectorAll(element);
};

const calculatorField = getElement("#calculatorField");
const calculatorEqual = getElement("#calculatorEqual");
const calculatorNumbers = getElement(".calculator__number");
const calculatorActions = getElement(".calculator__action");
let currentNumber = "", firstNumber = "", resultNumber, operator;

const setNumber = function () {
    if (resultNumber) {
        currentNumber = this.getAttribute("data-num");
        resultNumber = "";
    } else {
        currentNumber += this.getAttribute("data-num");
    }

    calculatorField.value = currentNumber;
};

const moveNumber = function () {
    firstNumber = currentNumber;
    currentNumber = "";
    operator = this.getAttribute("data-action");

    calculatorEqual.setAttribute("data-result", "");
};

const displayNumber = () => {
    firstNumber = parseFloat(firstNumber);
    currentNumber = parseFloat(currentNumber);

    switch (operator) {
        case "Add":
            resultNumber = firstNumber + currentNumber;
            break;

        case "Subtract":
            resultNumber = firstNumber - currentNumber;
            break;

        case "Multiply":
            resultNumber = firstNumber * currentNumber;
            break;

        case "Divide":
            resultNumber = firstNumber / currentNumber;
            break;

        default:
            resultNumber = currentNumber;
    }

    if (!isFinite(resultNumber)) {
        if (isNaN(resultNumber)) {
            resultNumber = "NaN!";
        } else {
            resultNumber = "Dividing by zero!";
        }
    }

    calculatorField.value = resultNumber;
    calculatorEqual.setAttribute("data-result", resultNumber);

    firstNumber = 0;
    currentNumber = resultNumber;
};

const clearAll = () => {
    firstNumber = "";
    currentNumber = "";
    calculatorField.value = "0";
    calculatorEqual.setAttribute("data-result", resultNumber);
};

for (let i = 0; i < calculatorNumbers.length; i++) {
    calculatorNumbers[i].onclick = setNumber;
}

for (let i = 0; i < calculatorActions.length; i++) {
    calculatorActions[i].onclick = moveNumber;
}

calculatorEqual.onclick = displayNumber;

getElement("#calculatorTotalClear").onclick = clearAll;