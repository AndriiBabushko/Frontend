'use strict';

const checkTwoDigitsNumber = (twoDigitsNumber) => {
    if (isNaN(twoDigitsNumber) || twoDigitsNumber < 10 || twoDigitsNumber > 99) {
        alert("Двозначне число введено не правильно!");
        return true;
    }

    return false;
};

const enterTwoDigitsNumber = () => {
    let twoDigitsNumber
    do {
        twoDigitsNumber = parseInt(prompt('Введіть двозначне у грн.: '));
    } while (checkTwoDigitsNumber(twoDigitsNumber))

    return twoDigitsNumber;
};

const getNumberName = (number) => {
    let stringNumber = number.toString();
    let unitsString = ['один ', 'два ', 'три ', 'чотири ', "п'ять ", 'шість ', 'сім ', 'вісім ', "дев'ять"];
    let tenthString = ['двадцять ', 'тридцять ', 'сорок ', "п'ятдесят ", 'шістдесят ', 'сімдесят ', 'вісімдесят ', "дев'яносто "];
    let tenthNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
    let numberName = '';

    if (number === 10) return 'десять';
    if (number === 11) return 'одинадцять';
    if (number === 12) return 'дванадцять';
    if (number === 13) return 'тринадцять';
    if (number === 14) return 'чотирнадцять';
    if (number === 15) return "п'ятнадцять";
    if (number === 16) return 'шістнадцять';
    if (number === 17) return 'сімнадцять';
    if (number === 18) return 'вісімнадцять';
    if (number === 19) return "дев'ятнадцять";

    for (let i = 0; i < tenthString.length; i++) {
        if (parseInt(stringNumber[0]) === tenthNumbers[i]) {
            numberName = numberName.concat(tenthString[i]);
            console.log(tenthString[i]);
            break;
        }
    }

    for (let i = 0; i < unitsString.length; i++) {
        if (parseInt(stringNumber[1]) === i + 1) {
            numberName += unitsString[i];
            console.log(unitsString[i]);
            break;
        }
    }
    console.log(numberName);
    return numberName;
};


let number = enterTwoDigitsNumber();
let numberName = getNumberName(number);
alert(`Ім'я двозначного числа ${number}: ${numberName}`);


