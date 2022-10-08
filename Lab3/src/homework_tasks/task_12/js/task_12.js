'use strict';

const buttonLike = document.querySelector('#buttonLike');

buttonLike.addEventListener('click', () => {
    buttonLike.value = `${parseInt(buttonLike.value) + 1}`;
    buttonLike.innerHTML = `<img src="../../../../img/icons/racoon_animal_icon_123571.ico" alt="raccoon_ico" 
                            class="button_section__raccoon_ico">
                            Like ${buttonLike.value}`;
});