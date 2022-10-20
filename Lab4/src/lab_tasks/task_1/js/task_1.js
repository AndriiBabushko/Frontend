'use strict';

const raccoonImages = document.querySelectorAll('.table__img');
for (let i = 0; i < raccoonImages.length; i++) {
    raccoonImages[i].addEventListener('click', (event) => {
        const imgIndex = i + 1
        console.log(imgIndex);
        const outputDiv = document.querySelector(`.table__div_raccoon_${imgIndex}_src`);
        console.log(event.target.src);
        console.log(outputDiv);
        outputDiv.innerHTML = `<p>Img source: ${event.target.src}</p>`;
    })
}
