'use strict';

const generateRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const setEventsToBlocks = () => {
    let blocks = document.querySelectorAll('.div_blocks_container__block');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('click', (event) => {
            event.target.remove();
        });
    }
};

const buttonNewBlock = document.querySelector('#buttonNewBlock');
const blocksContainer = document.querySelector('.table__div_blocks_container');


buttonNewBlock.addEventListener('click', () => {
    const block = document.createElement('div');
    const color = generateRandomColor();

    block.classList.add('div_blocks_container__block');
    block.style.backgroundColor = '#' + color;

    blocksContainer.appendChild(block);
    setEventsToBlocks();
});
