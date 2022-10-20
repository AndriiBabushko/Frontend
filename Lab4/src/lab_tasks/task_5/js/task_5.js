'use strict';

const element = document.querySelector('#element');
const divOutputInfo = document.querySelector('#divOutputInfo');
const buttonAddRemoveFirstName = document.querySelector('#buttonAddRemoveFirstName');
const buttonAddRemoveLastName = document.querySelector('#buttonAddRemoveLastName');
const buttonAddRemoveMiddleName = document.querySelector('#buttonAddRemoveMiddleName');
const buttonCheckClasses = document.querySelector('#buttonCheckClasses');

const checkElementClass = (element, className) => {
    if (element.classList.contains(className)) {
        console.log(`HAVE '${className}' CLASS!!!`);
        return true;
    }
    console.log(`DON'T HAVE '${className}' CLASS!!!`);
    return false;
};

buttonAddRemoveFirstName.addEventListener('click', () => {
    if (checkElementClass(element, 'first_name')) {
        element.classList.remove('first_name');
    } else {
        element.classList.add('first_name');
    }
});

buttonAddRemoveLastName.addEventListener('click', () => {
    if (checkElementClass(element, 'last_name')) {
        element.classList.remove('last_name');
    } else {
        element.classList.add('last_name');
    }
});

buttonAddRemoveMiddleName.addEventListener('click', () => {
    if (checkElementClass(element, 'middle_name')) {
        element.classList.remove('middle_name');
    } else {
        element.classList.add('middle_name');
    }
});

buttonCheckClasses.addEventListener('click', () => {
    divOutputInfo.innerHTML = '';
    if (element.classList.contains('first_name'))
        divOutputInfo.innerHTML += `<p>Elem HAS <strong>'first name'</strong> class!</p>`;
    else
        divOutputInfo.innerHTML += `<p>Elem HASN'T <strong>'first name'</strong> class!</p>`;
    if (element.classList.contains('last_name'))
        divOutputInfo.innerHTML += `<p>Elem HAS <strong>'last name'</strong> class!</p>`;
    else
        divOutputInfo.innerHTML += `<p>Elem HASN'T <strong>'last name'</strong> class!</p>`;
    if (element.classList.contains('middle_name'))
        divOutputInfo.innerHTML += `<p>Elem HAS <strong>'middle name'</strong> class!</p>`;
    else
        divOutputInfo.innerHTML += `<p>Elem HASN'T <strong>'middle name'</strong> class!</p>`;
});