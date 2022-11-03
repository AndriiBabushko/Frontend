'use strict';

const getRandomInt = (fromNumber, toNumber) => Math.round((Math.random() * (toNumber - fromNumber) + fromNumber));
const generateRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

function addEventListenersToList(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', (event) => {
            const chosenCss = getRandomInt(0, 2);
            const target = event.target;
            console.log(chosenCss);
            switch (chosenCss) {
                case 0:
                    target.style.backgroundColor = '#' + generateRandomColor();
                    break;
                case 1:
                    target.style.fontSize = getRandomInt(8, 28) + 'px';
                    break;
                case 2:
                    target.style.padding = `${getRandomInt(0, 25)}px, ${getRandomInt(0, 25)}px, ${getRandomInt(0, 25)}px, ${getRandomInt(0, 25)}px`;
                    break;
            }
        })
    }
}

const buttonAddElemList = document.querySelector('#buttonAddElemList');
const olList = document.querySelector('#olList');
let olListElements = document.querySelectorAll('.ol_list__li_element');

let elemsList = []
for (let i = 0; i < olListElements.length; i++) {
    elemsList.push(olListElements[i].textContent);
}
addEventListenersToList(olListElements);

buttonAddElemList.addEventListener('click', () => {
    const element = document.createElement('li');
    element.innerHTML = `${elemsList.length + 1}`;
    element.classList.add('ol_list__li_element');

    elemsList.push((elemsList.length + 1).toString());
    olList.appendChild(element);

    olListElements = document.querySelectorAll('.ol_list__li_element');
    addEventListenersToList(olListElements);
});
