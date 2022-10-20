'use strict';

const getRandomInt= (fromNumber, toNumber) => Math.round((Math.random() * (toNumber -
    fromNumber) + fromNumber));

const paragraphs = document.querySelectorAll('.table__paragraph');
for (let i = 0; i < paragraphs.length; i++) {
    const generatedNumber = getRandomInt(-10, 10);
    paragraphs[i].innerHTML = `${generatedNumber}`;
    paragraphs[i].setAttribute('value', generatedNumber.toString())
    paragraphs[i].addEventListener('click', (event) => {
        const number = parseInt(event.target.getAttribute('value')) ** 2;
        paragraphs[i].setAttribute('value', number.toString())
        paragraphs[i].innerHTML = `${number}`;
    });
}