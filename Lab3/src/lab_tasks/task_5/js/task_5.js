'use strict';

const colorChooseColor = document.querySelector('#colorChooseColor');

colorChooseColor.addEventListener('input', () => {
    const color = colorChooseColor.value;
    const outputColor = document.querySelector('.button_section__output_color');

    outputColor.innerHTML = `<p class="output_color__p">${color}</p>`;
    outputColor.style.backgroundColor = color;
});