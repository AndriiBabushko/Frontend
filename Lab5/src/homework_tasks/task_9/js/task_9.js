'use strict';

const navBarItems = document.querySelectorAll('.nav_bar__item');

for (let i = 0; i < navBarItems.length; i++) {
    navBarItems[i].addEventListener('click', (event) => {
        const subNavBarElement = event.target.firstElementChild
        if (subNavBarElement){
            console.log('SUB NAV BAR!');
            subNavBarElement.classList.toggle('active');
        }
    });
}