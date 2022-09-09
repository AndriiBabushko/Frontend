'use strict'

let stringNumber = prompt('Введіть довільне число: ');

let newNumber = stringNumber[stringNumber.length - 1];
for(let i = 0; i < stringNumber.length - 1; i++) {
    newNumber+=stringNumber[i];
}

alert(`Нове число: ${newNumber}`);
