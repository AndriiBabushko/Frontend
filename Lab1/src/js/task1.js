'use strict'

let totalMoney;
let burgerPrice;

const getBurgersCount = (money, price) => money / price;

do{
    totalMoney = parseFloat(prompt('Введіть суму грошей у гаманці у грн.: '));
    burgerPrice = parseFloat(prompt('Введіть ціну бургера у грн.: '));
} while(isNaN(getBurgersCount(totalMoney, burgerPrice)));

let burgerCount = getBurgersCount(totalMoney, burgerPrice);
alert(`Кількість бургерів, які ви можете придбати: ${burgerCount}`);