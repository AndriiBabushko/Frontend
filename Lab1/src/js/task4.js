'use strict';

const checkYears = (years) =>{
    if(years < 1 || years > 69) {
        alert('Роки введено не правильно!');
        return false;
    }
    return true;
}

const checkYearsSpelling = (years) => {
    for(let i = 21; i <= 69; i+=10) {
        if(years === 1 || years === i) {
            return 'рік'
        }
    }

    for(let i = 22; i <= 69; i+=10) {
        if((years >= 2 && years <= 4) || (years >= i && years <= i + 2)) {
            return 'роки'
        }
    }

    for(let i = 25; i <= 69; i+=10){
        if((years >= 5 && years <= 20) || (years >= i && years <= i + 5)) {
            return 'років'
        }
    }
};

let years;
do{
    years = parseInt(prompt('Скільки вам років?'));
} while(!checkYears(years));

let allYears = [];

for(let i = 1; i <= 69; i++){
    allYears.push(checkYearsSpelling(i));
}

for(let i = 1; i <= 69; i++){
    console.log(`Вам ${i} ${allYears[i - 1]}`);
}

alert(`Вам ${years} ${checkYearsSpelling(years)}`);