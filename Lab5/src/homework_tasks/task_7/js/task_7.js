'use strict';

const containsNumbers = (str) => /\d/.test(str);

const inputName = document.querySelector('#inputName');

inputName.addEventListener('input', (event) => {
    if (containsNumbers(event.target.value)){
        console.log('CONTAIN DIGITS!')
        console.log(`Target  value: ${event.target.value}`);
        event.target.value = event.target.value.replace(/\d/g, '');
    }
});