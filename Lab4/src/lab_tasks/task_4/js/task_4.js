'use strict';

const textInputs = document.querySelectorAll('.table__text');
for (let i = 0; i < textInputs.length; i++) {
    textInputs[i].addEventListener('focus', (event) => {
        const dataLength = parseInt(textInputs[i].dataset.length);
        const textInputValue = textInputs[i].value;

        if (textInputValue.length <= dataLength) {
            textInputs[i].style.borderColor = 'green';
            textInputs[i].style.borderWidth = '3px';
        } else {
            textInputs[i].style.borderColor = 'red';
            textInputs[i].style.borderWidth = '3px';
        }
    });
}