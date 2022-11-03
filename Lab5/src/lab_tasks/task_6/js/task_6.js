'use strict';

function addEventListenersToTable(tableNodeList) {
    for (let i = 0; i < tableNodeList.length; i++) {
        tableNodeList[i].addEventListener('click', (event) => {
            const target = event.target;
            const surname = target.parentElement.firstChild.textContent;
            const name = target.parentElement.lastChild.textContent;
            alert(`Clicked row:\nSurname: '${surname}'; Name: '${name}'`);
        });
    }
}

const buttonAddElemTable = document.querySelector('#buttonAddElemTable');

buttonAddElemTable.addEventListener('click', (event) => {
    const surname = prompt('Enter surname to add to table:');
    const name = prompt('Enter name to add to table');

    const outputNameSurnameTable = document.querySelector('#outputNameSurnameTable')

    const newTableRow = document.createElement('tr');
    const newSurnameColumn = document.createElement('td');
    const newNameColumn = document.createElement('td');

    newSurnameColumn.innerHTML = surname;
    newNameColumn.innerHTML = name;

    newTableRow.appendChild(newSurnameColumn);
    newTableRow.appendChild(newNameColumn);
    outputNameSurnameTable.appendChild(newTableRow);

    const outputTableElems = document.querySelectorAll('#outputNameSurnameTable tr');
    console.log(outputTableElems);
    addEventListenersToTable(outputTableElems);
});