'use strict';

let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const enterDate = () => {
    let day = parseInt(prompt('Введіть день у вигляді числа: '));
    let month = parseInt(prompt('Введіть місяць у вигляді числа: '));
    let year = parseInt(prompt('Введіть рік у вигляді числа: '));
    return [day, month, year];
};

const isLeapYear = (date) => date[2] % 400 === 0 || (date[2] % 4 === 0 && date[2] % 100 !== 0);

const checkDate = (date) => {
    if (date[0] > monthsDays[date[1] - 1] || date[0] < 1 || isNaN(date[0])) {
        alert('Число введено не правильно!');
        return false;
    } else {
        if (date[1] > 12 || date[1] < 1 || isNaN(date[1])) {
            alert('Місяць введено не правильно!');
            return false;
        } else {
            if (date[2] < 0 || isNaN(date[2])) {
                alert('Рік введено не правильно!');
                return false;
            }
            if (isLeapYear(date)) {
                monthsDays[1] = 29;
                if (date[1] === 2 && !(date[0] < 29)) {
                    alert(`Число введено не правильно, бо рік ВИСОКОСНИЙ!!!`);
                    return false;
                }
            } else{
                monthsDays[1] = 28;
            }
        }
    }
    return true;
};

const getDateBefore = (date) => {
    let day, month, year = 0;
    month = date[1];
    year = date[2];
    // day check
    if (date[0] === 1) {
        day = monthsDays[date[1] - 2];
        month = date[1] - 1;
        // month check
        if (date[1] === 1) {
            month = 12;
            year = date[2] - 1;
        }
    } else {
        day = date[0] - 1;
    }
    return [day, month, year]
};

const getDateAfter = (date) => {
    let day, month, year = 0;
    month = date[1];
    year = date[2];
    // day check
    if (date[0] === monthsDays[date[1] - 1]) {
        day = 1;
        month = date[1] + 1;
        // month check
        if (date[1] === 12) {
            month = 1;
            year = date[2] + 1;
        }
    } else {
        day = date[0] + 1;
    }
    return [day, month, year]
};

let date;
do {
    date = enterDate();
} while (!checkDate(date));

let dateBefore = getDateBefore(date);
let dateAfter = getDateAfter(date);
alert(`Дата ПЕРЕД введеною датою: ${dateBefore};\nДата ПІСЛЯ введеною датою: ${dateAfter};`);
