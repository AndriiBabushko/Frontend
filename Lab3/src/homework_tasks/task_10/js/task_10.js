'use strict';

const chooseSelector = (chosenElem) => chosenElem.style.backgroundColor = '#6389df';

const unChooseSelector = (chosenElem) => chosenElem.style.backgroundColor = '#4169E1FF';

const hiddenSelector = (selector) => selector.style.display = 'none';
// const hiddenSelector = (selector) => selector.setAttribute('hidden', '');

const unhiddenSelector = (selector) => selector.style.display = 'flex';
// const unhiddenSelector = (selector) => selector.removeAttribute('hidden');

const divHTMLText = document.querySelector('#divHTMLText');
const divCSSText = document.querySelector('#divCSSText');
const divJSText = document.querySelector('#divJSText');

const asideHTML = document.querySelector('#asideHTML');
const asideCSS = document.querySelector('#asideCSS');
const asideJS = document.querySelector('#asideJS');

chooseSelector(asideHTML);
hiddenSelector(divCSSText);
hiddenSelector(divJSText);

asideHTML.addEventListener('click', () => {
    chooseSelector(asideHTML);
    unChooseSelector(asideCSS);
    unChooseSelector(asideJS);

    unhiddenSelector(divHTMLText);
    hiddenSelector(divCSSText);
    hiddenSelector(divJSText);
});

asideCSS.addEventListener('click', () => {
    chooseSelector(asideCSS);
    unChooseSelector(asideHTML);
    unChooseSelector(asideJS);

    unhiddenSelector(divCSSText);
    hiddenSelector(divHTMLText);
    hiddenSelector(divJSText);
});

asideJS.addEventListener('click', () => {
    chooseSelector(asideJS);
    unChooseSelector(asideHTML);
    unChooseSelector(asideCSS);

    unhiddenSelector(divJSText);
    hiddenSelector(divHTMLText);
    hiddenSelector(divCSSText);
});
