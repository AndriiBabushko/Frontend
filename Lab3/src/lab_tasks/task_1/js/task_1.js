'use strict';

const textGreeting = document.querySelector('#textGreeting');
const buttonGreeting = document.querySelector('#buttonGreeting');
buttonGreeting.addEventListener('click', () => {
    textGreeting.value = 'Hello, ' + textGreeting.value + '!';
})