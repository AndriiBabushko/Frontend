'use strict';

function enterNumbersAndAction() {
    let firstNum = 0;
    let secondNum = 0;
    let action = '';
    do {
        firstNum = parseFloat(prompt('Введіть перше число: '));
        secondNum = parseFloat(prompt('Введіть друге число: '));
        action = prompt('Введіть дію для виконання між числами:\nДоступні дії: +, -, *, /, ^, %');
        console.log(action);
    } while (checkNumbersAndAction([firstNum, secondNum], action))

    return [[firstNum, secondNum], action];
}

function checkNumbersAndAction(numbers, action) {
    if(action === '+' || action === '-' || action === '*' || action === '/' || action === '^' || action === '%'){
        for (let i = 0; i < numbers.length; i++) {
            if (isNaN(numbers[i])) {
                return true;
            }
        }
    } else{
        alert('Дію введено не правильно!');
        return true;
    }

    return false;
}

const calculate2Numbers = (numbers, action) => {
    if(action === '+') return numbers[0] + numbers[1];
    if(action === '-') return numbers[0] - numbers[1];
    if(action === '*') return numbers[0] * numbers[1];
    if(action === '/') return numbers[0] / numbers[1];
    if(action === '^') return Math.pow(numbers[0], numbers[1]);
    if(action === '%') return numbers[0] % numbers[1];
};

const questionToContinue = () => {
    let answer = prompt('Чи бажаєте ви вирішити ще один приклад?\n(так/ні)');

    switch (answer) {
        case 'Так':
        case 'так':
            return true;
        case 'Ні':
        case 'ні':
            return false;
    }
};

const calculator = () => {
    do {
        // local calculator variables
        let numbersAndAction = enterNumbersAndAction();
        let numbers = [numbersAndAction[0][0], numbersAndAction[0][1]];
        let action = numbersAndAction[1];
        let result = calculate2Numbers(numbers, action);

        console.log(numbers, action, result);

        alert(`Результат виконання ${numbers[0]} ${action} ${numbers[1]} = ${result};`);
    } while (questionToContinue())
};

calculator();
