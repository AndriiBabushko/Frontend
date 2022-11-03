'use strict';

const outputField = document.querySelector('.table__output_text');
const inputText = document.querySelector('#inputText');

inputText.addEventListener('input', (event) => {
    outputField.innerHTML = `<p>Entered input text:</p><p>${event.target.value}</p>`;
})
