'use strict';

const buttonAddProgressBar = document.querySelector('#buttonAddProgressBar');
const progressBar = document.querySelector('#progressBar');

buttonAddProgressBar.addEventListener('click', () => {
    progressBar.value += 5;
});

const buttonRemoveProgressBar = document.querySelector('#buttonRemoveProgressBar');

buttonRemoveProgressBar.addEventListener('click', () => {
    progressBar.value -= 5;
});