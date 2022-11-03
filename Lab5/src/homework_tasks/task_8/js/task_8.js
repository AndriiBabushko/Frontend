'use strict';

const footballStadium = document.querySelector('.football_stadium');
const ball = document.querySelector('#ball');

const ballTiming = {
    duration: 2000,
    iterations: 1,
}

footballStadium.addEventListener('click', (event) => {
    const FinishX = event.clientX;
    const FinishY = event.clientY;
    const footballStadiumRect = footballStadium.getBoundingClientRect()
    if (FinishY < footballStadiumRect.height + window.innerHeight * 0.05 && FinishX < footballStadiumRect.width + window.innerWidth * 0.2) {
        ball.style.top = FinishY - 50 + 'px';
        ball.style.left = FinishX - 50 + 'px';
    }
}, false);