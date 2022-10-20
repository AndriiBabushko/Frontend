'use strict';

function removeItemFromArray(array, item) {
    const itemIndex = array.indexOf(item);

    if (itemIndex > -1)
        array.splice(itemIndex, 1);

    return array;
}

function addEventListenersToList(nodeList, elemsList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', (event) => {
            const target = event.target;
            elemsList = removeItemFromArray(elemsList, target.textContent);
            target.remove();
        })
    }
}

const buttonAddElemList = document.querySelector('#buttonAddElemList');
const buttonRemoveElemList = document.querySelector('#buttonRemoveElemList');

const olList = document.querySelector('#olList');
let olListElements = document.querySelectorAll('.ol_list__li_element');

let elemsList = []
for (let i = 0; i < olListElements.length; i++) {
    elemsList.push(olListElements[i].textContent);
}

buttonAddElemList.addEventListener('click', () => {
    const element = document.createElement('li');
    element.innerHTML = `${elemsList.length + 1}`;
    element.classList.add('ol_list__li_element');

    elemsList.push((elemsList.length + 1).toString());
    olList.appendChild(element);

    olListElements = document.querySelectorAll('.ol_list__li_element');
    addEventListenersToList(olListElements, elemsList);
});

buttonRemoveElemList.addEventListener('click', () => {
    olListElements[elemsList.length - 1].remove()
    elemsList.pop();
});
