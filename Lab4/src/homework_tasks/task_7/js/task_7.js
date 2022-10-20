'use strict';
const radioBuildingType = document.querySelectorAll('input[name="radioBuildingType"]');

const hiddenFloor = () => {
    document.querySelector('.table__floor_tr').setAttribute('hidden', '');
};

const unHiddenFloor = () => {
    document.querySelector('.table__floor_tr').removeAttribute('hidden');
};

radioBuildingType[0].addEventListener('change', unHiddenFloor)
radioBuildingType[1].addEventListener('change', unHiddenFloor)
radioBuildingType[2].addEventListener('change', hiddenFloor)

const buttonCheckSuggestions = document.querySelector('#buttonCheckSuggestions');

buttonCheckSuggestions.addEventListener('click', () => {
    const numberPrice = document.querySelector('#numberPrice').value;
    const numberFloor = document.querySelector('#numberFloor').value;
    const outputField = document.querySelector('.button_section__output_status');

    if (!radioBuildingType[0].checked && !radioBuildingType[1].checked && !radioBuildingType[2].checked) {
        outputField.innerHTML = `<p>Choose type of dwelling!</p>`;
        console.log('Choose type of dwelling!');
    } else {
        if (numberPrice > 600000 || numberPrice < 0) {
            outputField.innerHTML = `<p><strong>Not interested!</strong></p>`;
            console.log('Not interested!');
        } else {
            if (radioBuildingType[0].checked || radioBuildingType[1].checked) {
                if (numberFloor < 1 || numberFloor > 47) {
                    outputField.innerHTML = `<p><strong>Not interested!</strong></p>`;
                    console.log('Not interested!');
                } else {
                    if (numberFloor >= 2 && numberFloor <= 6) {
                        outputField.innerHTML =
                            `<p><strong>Interested!</strong></p>`;
                        console.log('Interested!');
                    } else {
                        outputField.innerHTML =
                            `<p><strong>Not interested!</strong></p>`;
                        console.log('Not interested!');
                    }
                }
            } else {
                outputField.innerHTML =
                    `<p><strong>Interested!</strong></p>`;
                console.log('Interested!');
            }
        }
    }
});