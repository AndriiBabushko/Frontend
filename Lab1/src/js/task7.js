'use strict';

function enterSK() {
    let S, K;

    do {
        S = parseFloat(prompt('Введіть число S:'))
        K = parseFloat(prompt('Введіть цифру K:'))
    } while (checkSK([S, K], ['S', 'K']));

    return [S, K];
}

function checkSK(numbers, SK) {
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            alert(`Число ${SK[i]} введено не правильно!`);
            return true;
        }
    }
    if (numbers[1] >= 10 || numbers[1] <= -10) {
        alert('Цифра K не є цифрою!');
        return true;
    }
    if (numbers[0] <= 9 && numbers[0] >= -9) {
        alert('Число S не є числом!');
        return true;
    }
    return false;
}

const questionToContinue = () => {
    let answer = prompt('Чи бажаєте ви вирішити продовжити введення?\n(так/ні)');

    switch (answer) {
        case 'Так':
        case 'так':
            return true;
        case 'Ні':
        case 'ні':
            return false;
    }
};

const specialSKPow = () => {
    let SK = enterSK();
    let S = SK[0].toString();
    let secondNumber = parseFloat(S[1]);
    return Math.pow(SK[1], secondNumber);
};

do {
    let result = specialSKPow();
    alert(`Результат піднесення цифри K до 2 цифри числа S: ${result}`);
} while (questionToContinue());
