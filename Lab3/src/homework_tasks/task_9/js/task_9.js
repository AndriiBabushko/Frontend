'use strict';

const buttonShowHideText = document.querySelector('#buttonShowHideText');
buttonShowHideText.addEventListener('click', () => {
   const text = document.querySelector('.button_section__div_text');
   if(text.hasAttribute('hidden')){
       text.removeAttribute('hidden');
   } else{
       text.setAttribute('hidden', '');
   }
});