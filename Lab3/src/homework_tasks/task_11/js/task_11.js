'use strict';

const progressBar = document.querySelector('#progressBar');
const buttonAddProgressBar = document.querySelector('#buttonAddProgressBar');

buttonAddProgressBar.addEventListener('click', () => {
    progressBar.value += 5;
});

const buttonRemoveProgressBar = document.querySelector('#buttonRemoveProgressBar');

buttonRemoveProgressBar.addEventListener('click', () => {
    progressBar.value -= 5;
});