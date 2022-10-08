'use strict';

const getRandomFloat = (fromNumber, toNumber) => Math.round((Math.random() * (toNumber - fromNumber) + fromNumber) * 100) / 100;

const buttonRandomNumber = document.querySelector('#buttonRandomNumber');

buttonRandomNumber.addEventListener('click', () => {
    document.querySelector('.div_output_number__h3').innerHTML = getRandomFloat(-100, 100);
})