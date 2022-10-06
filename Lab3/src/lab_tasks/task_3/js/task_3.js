'use strict';

const buttonPerimeterArea = document.querySelector('#buttonPerimeterArea');
buttonPerimeterArea.addEventListener('click', () => {
    if (!isNaN(textSideA) || !isNaN(textSideB)) {
        document.querySelector('.button_section__output_perimeter_area').innerHTML =
            '<p>Значення введено <strong>не правильно</strong>!</p>'
    } else {
        const textSideA = parseInt(document.querySelector('#textSideA').value);
        const textSideB = parseInt(document.querySelector('#textSideB').value);
        const rectanglePerimeter = Math.round((textSideA * 2 + textSideB * 2) * 100) / 100;
        const rectangleArea = textSideA * textSideB;
        document.querySelector('.button_section__output_perimeter_area').innerHTML =
            `<section class="output_perimeter_area__section">
                <p>Perimeter of rectangle: <strong>${rectanglePerimeter}</strong></p>
                <p>Area of rectangle: <strong>${rectangleArea}</strong></p>
            </section>`;
    }
});