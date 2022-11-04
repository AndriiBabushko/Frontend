'use strict';

const deleteElemFromArr = (array, deleteElem) => {
    const index = array.indexOf(deleteElem);

    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }

    return array
}

const removeSpacesAndBreakLines = (splitText) => {
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] === '' || /^[ \n\r]$/.test(splitText[i]))
            splitText = deleteElemFromArr(splitText, splitText[i]);
    }

    return splitText
}

document.addEventListener('keydown', (keyDownEvent) => {
    // if ((keyDownEvent.ctrlKey || keyDownEvent.metaKey) && (keyDownEvent.key === 'e' || keyDownEvent.key === 'E') ||
    //     (keyDownEvent.ctrlKey || keyDownEvent.metaKey) && (keyDownEvent.key === 's' || keyDownEvent.key === 'S')) {
    //     keyDownEvent.preventDefault();
    // }
    if ((keyDownEvent.key === 'e' || keyDownEvent.key === 'E')) {
        console.log('ctrl+e')

        const divText = document.querySelector('.div_text__text');

        let splitText = divText.firstElementChild.innerHTML.replace(/\n/g, '').split(' ');
        for (let i = 0; i < 3; i++) {
            splitText = removeSpacesAndBreakLines(splitText);
        }
        const text = splitText.join(' ');

        const divTextarea = document.createElement('div');
        const textarea = document.createElement('textarea');

        divTextarea.setAttribute('class', 'div_text__textarea');
        textarea.setAttribute('name', 'textareaTextChange');
        textarea.setAttribute('id', 'textareaTextChange');
        textarea.setAttribute('class', 'textarea__change_text');

        textarea.value = text;

        divTextarea.appendChild(textarea);
        divText.parentElement.appendChild(divTextarea);

        divText.remove();
    }

    if ((keyDownEvent.key === 's' || keyDownEvent.key === 'S')) {
        console.log('ctrl+s');

        const divTextarea = document.querySelector('.div_text__textarea');
        const textarea = document.querySelector('#textareaTextChange');
        const textareaText = textarea.value;

        const divText = document.createElement('div');
        const p = document.createElement('p');

        divText.setAttribute('class', 'div_text__text');

        p.textContent = textareaText;

        divText.appendChild(p);
        divTextarea.parentElement.appendChild(divText);

        divTextarea.remove();
    }
}, false);