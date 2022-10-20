'use strict';

const links = document.querySelectorAll('.table__link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', (event)=> {
        const target = event.target;
        const link = target.getAttribute('href');
        const value = target.getAttribute('value');
        const splitLink = link.split(/\/\/|\//);
        links[i].innerHTML = `${value} ${splitLink[1]}`;
    });
}
