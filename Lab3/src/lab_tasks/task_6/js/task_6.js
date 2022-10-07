'use strict';

const selectChooseImg = document.querySelector('#selectChooseImg');
selectChooseImg.addEventListener('input', () => {
    const img = selectChooseImg.value;
    const outputImg = document.querySelector('.button_section__output_img');
    switch (img) {
        case 'los_angeles': {
            outputImg.style.background = "url('../../.././img/los-angeles.jpg') no-repeat center";
            outputImg.style.backgroundSize = 'contain';
            break;
        }
        case 'new_york': {
            outputImg.style.background = "url('../../.././img/new-york.jpg') no-repeat center";
            outputImg.style.backgroundSize = 'contain';
            break;
        }
        case 'chicago': {
            outputImg.style.background = "url('../../.././img/chicago.jpg')  no-repeat center";
            outputImg.style.backgroundSize = 'contain';
            break;
        }
    }
});