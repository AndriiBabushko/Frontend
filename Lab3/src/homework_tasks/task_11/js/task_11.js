'use strict';

const progressBar = document.querySelector('#progressBar');

const buttonAddProgressBar = document.querySelector('#buttonAddProgressBar');

const checkProgressValue = () => {
    if (progressBar.value < 25) {
        console.log('<25');
        // let n = 2 * parseInt(progressBar.getAttribute("value"));
        // progressBar.style.setProperty("--c", "rgb("+n+","+n+",20)");
        progressBar.style['-webkit-progress-value'].backgroundColor = 'red';
        return;
    }
    if (progressBar.value >= 25 && progressBar.value <= 75) {
        console.log('<=75');
        // let n = 2 * parseInt(progressBar.getAttribute("value"));
        // progressBar.style.setProperty("--c", "rgb("+n+","+n+",20)");
        progressBar.style['-webkit-progress-value'].backgroundColor = 'orange';
        return;
    }
    // let n = 2 * parseInt(progressBar.getAttribute("value"));
    // progressBar.style.setProperty("--c", "rgb("+n+","+n+",20)");
    progressBar.style['-webkit-progress-value'].backgroundColor = 'green';
};

buttonAddProgressBar.addEventListener('click', () => {
    progressBar.value += 5;
    // checkProgressValue()
});

const buttonRemoveProgressBar = document.querySelector('#buttonRemoveProgressBar');

buttonRemoveProgressBar.addEventListener('click', () => {
    progressBar.value -= 5;
    // checkProgressValue()
});