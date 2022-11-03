'use strict';

const wrapper = document.querySelector('.wrapper');
const square = document.querySelector('.square');

wrapper.addEventListener('click', (e) => {
    const coordinateX = e.clientX;
    const coordinateY = e.clientY;

    square.style.position = 'absolute';
    square.style.left = coordinateX + 'px';
    square.style.top = coordinateY + 'px';
});