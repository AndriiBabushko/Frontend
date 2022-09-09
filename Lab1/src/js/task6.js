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

const sumUntilNot0 = () => {
    let sum = 0;
    let number;
    do {
        number = enterNumber();
        sum += number;
    } while (number !== 0);

    return sum;
};

do {
    alert(`Сума введених чисел = ${sumUntilNot0()};`);
} while (questionToContinue());

