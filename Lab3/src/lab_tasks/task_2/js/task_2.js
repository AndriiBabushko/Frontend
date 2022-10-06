'use strict';

let textFirstText = document.querySelector('#textFirstText');
let textSecondText = document.querySelector('#textSecondText');
const buttonSwap = document.querySelector('#buttonSwap');
buttonSwap.addEventListener('click', () => {
    [textFirstText.value, textSecondText.value] = [textSecondText.value, textFirstText.value]
});
