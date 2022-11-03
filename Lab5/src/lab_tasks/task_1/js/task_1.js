'use strict'

const findOutButtonClick = (button) => {
    switch (button) {
        case 0:
            return 'Left button clicked.';
        case 1:
            return 'Middle button clicked.';
        case 2:
            return 'Right button clicked.';
        case 3:
            return 'Back button clicked.';
        case 4:
            return 'Forward button clicked.';
        default:
            return `Unknown button code: ${button}`;
    }
}

const coordinates = document.querySelector('.coordinates');
const mouse_click = document.querySelector('.mouse_click');

document.querySelector('.wrapper').addEventListener('mousemove', (e) => {
    const coordinateX = e.clientX;
    const coordinateY = e.clientY;
    coordinates.innerHTML = `X: ${coordinateX}; Y: ${coordinateY}`;
});

window.addEventListener('mouseup', (e) => {
    mouse_click.innerHTML = `${findOutButtonClick(e.button)}`
})

