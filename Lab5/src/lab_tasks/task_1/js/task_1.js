'use strict'

const coordinatesContainer = document.querySelector('.coordinates_container');
document.querySelector('.wrapper').addEventListener('mousemove', (e) => {
    const coordinateX = e.clientX
    const coordinateY = e.clientY
    coordinatesContainer.innerHTML = `X: ${coordinateX}; Y: ${coordinateY}`;
});