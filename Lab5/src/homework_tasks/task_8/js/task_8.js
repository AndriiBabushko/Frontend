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

    if (FinishY < footballStadiumRect.height && FinishX < footballStadiumRect.width) {
        ball.style.top = FinishY - 50 + 'px';
        ball.style.left = FinishX - 50 + 'px';
    }
}, false);