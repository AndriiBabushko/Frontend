'use strict';

const buttonPerimeterArea = document.querySelector('#buttonPerimeterArea');

buttonPerimeterArea.addEventListener('click', () => {
    const textSideA = parseInt(document.querySelector('#textSideA').value);
    const textSideB = parseInt(document.querySelector('#textSideB').value);

    if (isNaN(textSideA) || isNaN(textSideB)) {
        document.querySelector('.button_section__output_perimeter_area').innerHTML =
            `<section class="output_perimeter_area__section">
                <p>Values were entered <strong>incorrectly</strong>!</p>
            </section>`;
    } else {
        const rectanglePerimeter = Math.round((textSideA * 2 + textSideB * 2) * 100) / 100;
        const rectangleArea = textSideA * textSideB;
        document.querySelector('.button_section__output_perimeter_area').innerHTML =
            `<section class="output_perimeter_area__section">
                <p>Perimeter of rectangle: <strong>${rectanglePerimeter}см</strong></p>
                <p>Area of rectangle: <strong>${rectangleArea}см<sup>2</sup></strong></p>
            </section>`;
    }
});