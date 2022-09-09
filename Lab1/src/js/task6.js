'use strict';

function enterNumber() {
    let number;

    do {
        number = parseFloat(prompt('Щоб зупинити введення чисел введіть 0.\nВведіть число:'));
    } while (checkNumber(number));

    return number;
}

function checkNumber(number) {
    if (isNaN(number)) {
        alert('Число введено не правильно!');
        return true;
    }
    return false
}

const questionToContinue = () => {
    let answer = prompt('Чи бажаєте ви продовжити введення?\n(так/ні)');

    switch (answer) {
        case 'Так':
        case 'так':
            return true;
        case 'Ні':
        case 'ні':
            return false;
    }
};

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}

const sumUntilNot0 = () => {
    let sum = 0;
    let number;
    let sumNumbers = '';
    do {
        number = enterNumber();
        sumNumbers += number.toString() + '+';
        sum += number;
    } while (number !== 0);

    sumNumbers = sumNumbers.replaceAt(sumNumbers.length - 1, '=');

    console.log(sumNumbers + sum.toString());
    return sumNumbers + sum.toString();
};

do {

    alert(`Сума введених чисел: ${sumUntilNot0()};`);
} while (questionToContinue());

