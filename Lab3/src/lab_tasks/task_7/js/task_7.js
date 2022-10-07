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
    if (!radioBuildingType[0].checked && !radioBuildingType[1].checked && !radioBuildingType[0].checked) {
        outputField.innerHTML = `<p>Choose type of dwelling!</p>`;
        console.log('Choose type of dwelling!');
    } else {
        if (numberPrice > 600000 || numberPrice < 0) {
            outputField.innerHTML = `<p>Price is more than <strong>600000</strong> or less than <strong>0</strong>!</p>`;
            console.log('Price is more than 600000!');
        } else {
            if (numberFloor < 1 || numberFloor > 47) {
                outputField.innerHTML = `<p>Floor is more than <strong>47</strong> or less than <strong>1</strong>!</p>`;
                console.log('Floor is more than 47 or less than 1!');
            } else {
                if ((radioBuildingType[0].checked || radioBuildingType[1].checked) && numberFloor >= 2 && numberFloor <= 6) {
                    outputField.innerHTML =
                        `<p><strong>Interested!</strong></p>`;
                    console.log('Interested!');
                } else {
                    if (radioBuildingType[2].checked) {
                        outputField.innerHTML =
                            `<p><strong>Interested!</strong></p>`;
                        console.log('Interested!');
                    } else {
                        outputField.innerHTML =
                            `<p><strong>Not interested!</strong></p>`;
                        console.log('Not interested!');
                    }
                }
            }
        }
    }
});