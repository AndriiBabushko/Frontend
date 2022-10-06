'use strict';

document.querySelector('#buttonSpeedMovement').addEventListener('click', () => {
    const timeOfMovement = parseFloat(document.querySelector('#textTimeOfMovement').value);
    const distance = parseFloat(document.querySelector('#textDistance').value);
    if (isNaN(timeOfMovement) || isNaN(distance)) {
        document.querySelector('.button_section__output_speed_movement').innerHTML =
            `<section class="button_section__output_speed_movement">
                <p>Incorrect type of entered values!</p>
            </section>`;
    } else {
        console.log(timeOfMovement, distance);
        const speedOfMovement = Math.round((distance / timeOfMovement) * 100) / 100;
        document.querySelector('.button_section__output_speed_movement').innerHTML =
            `<section class="output_speed_movement__section">
                <p>Speed of movement: <strong>${speedOfMovement}km/hour</strong></p>
            </section>`;
    }
});