'use strict';

const section = document.querySelector('.section');

section.addEventListener('click', (event) => {
    if (event.button === 0)
        section.style.backgroundColor = 'lightgrey';

    if ((event.ctrlKey || event.metaKey) && event.isTrusted)
        section.style.backgroundColor = 'red';

    if ((event.altKey) && event.isTrusted)
        section.style.backgroundColor = 'green';

    if (event.shiftKey && event.isTrusted)
        section.style.backgroundColor = 'blue';
})

