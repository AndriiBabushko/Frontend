'use strict';

const isNum = (char) => !isNaN(char);

const solveExpression = (expression) => {
    let nums = [];
    let action;
    let splitExpression = expression.split(' ', 3);

    for (let i = 0; i < splitExpression.length; i++) {
        if (isNum(splitExpression[i])) {
            nums.push(+splitExpression[i]);
        }
        if (splitExpression[i] === '+' || splitExpression[i] === '-' || splitExpression[i] === '*' || splitExpression[i] === '/') {
            action = splitExpression[i];
        }
    }

    switch (action) {
        case '+':
            return nums[0] + nums[1];
        case '-':
            return nums[0] - nums[1];
        case '*':
            return nums[0] * nums[1];
        case '/':
            return nums[0] / nums[1];
    }
};

const checkExpression = (expression) => isNum(+expression[0]) && expression[1] === ' ' && expression[3] === ' ' && isNum(+expression[4]);


let calculatorExpression = prompt("Введіть якийсь вираз для обчислення.\nОперації, які підтримуються(+, -, *, /)\nПриклад: 2 + 2");
if (checkExpression(calculatorExpression)) {
    alert(`Результат обчислення виразу ${calculatorExpression} = ${solveExpression(calculatorExpression)}`);
} else {
    alert("Вираз введено не правильно!");
}

