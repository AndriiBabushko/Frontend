'use strict';

const divColorBlocks = document.querySelectorAll('.div_colors__div_color');
for (let i = 0; i < divColorBlocks.length; i++) {
    divColorBlocks[i].style.backgroundColor = divColorBlocks[i].getAttribute('value');
}

const pInput = document.querySelector('#pInput');

for (let i = 0; i < divColorBlocks.length; i++) {
    divColorBlocks[i].addEventListener('click', (event) => {
        pInput.style.color = event.target.getAttribute('value');
    });
}

const fontStyles = document.querySelectorAll('.div_font_styles__div_font_style');
for (let i = 0; i < fontStyles.length; i++) {
    fontStyles[i].addEventListener('click', (event) => {
        const target = event.target;

        if (target.getAttribute('value') === 'B') {
            if (pInput.style.getPropertyValue('font-weight')) {
                pInput.style.removeProperty('font-weight');
            } else {
                pInput.style.fontWeight = 'bold';
            }
        }

        if (target.getAttribute('value') === 'I') {
            if (pInput.style.getPropertyValue('font-style')) {
                pInput.style.removeProperty('font-style');
            } else {
                pInput.style.fontStyle = 'italic';
            }
        }

        if (target.getAttribute('value') === 'U') {
            if (pInput.style.getPropertyValue('text-decoration')) {
                pInput.style.removeProperty('text-decoration');
            } else {
                pInput.style.textDecoration = 'underline';
            }
        }
    });
}

const textFontSize = document.querySelector('#textFontSize');
textFontSize.addEventListener('change', () => {
    const fontValue = parseInt(textFontSize.value);
    if (fontValue <= 28)
        pInput.style.fontSize = textFontSize.value + 'px';
});

const fonts = document.querySelector('#fonts');
fonts.addEventListener('change', () => {
    pInput.style.fontFamily = fonts.value;
});
