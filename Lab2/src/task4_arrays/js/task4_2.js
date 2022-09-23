'use strict';

function getRandomFloat(fromNumber, toNumber) {
    return Math.round((Math.random() * (toNumber - fromNumber) + fromNumber) * 100) / 100;
}

function getRandomInt(fromNumber, toNumber) {
    return Math.round(Math.random() * (toNumber - fromNumber) + fromNumber);
}

function Receipt(productName, productCount, productPrice){
    this.productName = productName;
    this.productCount = productCount;
    this.productPrice = productPrice;
}

function createReceipt() {
    let newReceipt = [];
    let someProductNames = ['Помідори', 'Кетчуп', 'Гречка', 'Гарбуз', 'Печиво',
        'Вода', 'Вино', 'Виноград', 'Манго', 'Соняшникова олія'];

    for (let i = 0; i < 10; i++) {
        newReceipt.push(new Receipt(someProductNames[i], getRandomInt(0, 10), getRandomFloat(1, 250)));
    }

    return newReceipt;
}

function getReceiptOutput(receipt){
    let outputString = '';

    for (let i = 0; i < receipt.length; i++) {
        outputString += `<section class="outputSection"><p class="id">№${i + 1}</p>`;
        outputString += `<p>Назва продукту: <strong>${receipt[i].productName}</strong></p>`;
        outputString += `<p>Кількість для покупки: <strong>${receipt[i].productCount}</strong></p>`;
        outputString += `<p>Ціна покупки за 1шт./кг.: <strong>${receipt[i].productPrice}</strong></p></section>`;
    }

    return outputString;
}

function getTotalReceiptSum(receipt){
    let receiptSum = 0;

    for (let i = 0; i < receipt.length; i++) {
        receiptSum += receipt[i].productPrice;
    }

    return receiptSum;
}

function getMostExpensivePurchase(receipt){
    let receiptPrices = [];

    for (let i = 0; i < receipt.length; i++) {
        receiptPrices.push(receipt[i].productPrice)
    }

    return Math.max(...receiptPrices);
}

function countAverageCostPurchase(receipt) {
    return Math.round((getTotalReceiptSum(receipt) / receipt.length) * 100) / 100;
}

let receipt = null;
let buttonCreateReceipt = document.querySelector('#buttonCreateReceipt');
buttonCreateReceipt.addEventListener('click', () => {
    receipt = createReceipt();
    document.getElementById('outputCreateReceiptField"').innerHTML = '<p><strong>Чек створено!</strong></p>';
});

let buttonOutputReceipt = document.querySelector('#buttonOutputReceipt');
buttonOutputReceipt.addEventListener('click', () => {
    if(receipt === null) {
        document.getElementById('outputReceiptField').innerHTML = '<p><strong>Чек не створений!</strong></p>';
    } else {
        document.getElementById('outputReceiptField').innerHTML = getReceiptOutput(receipt);
    }
});

let buttonCountTotalReceiptSum = document.querySelector('#buttonCountTotalReceiptSum');
buttonCountTotalReceiptSum.addEventListener('click', () => {
    if(receipt === null) {
        document.getElementById('outputCountTotalReceiptSumField').innerHTML = '<p><strong>Чек не створений!</strong></p>';
    } else {
        document.getElementById('outputCountTotalReceiptSumField').innerHTML = `Загальна сума покупки: ${getTotalReceiptSum(receipt)}`
    }
});

let buttonGetMostExpensivePurchase = document.querySelector('#buttonGetMostExpensivePurchase');
buttonGetMostExpensivePurchase.addEventListener('click', () => {
    if(receipt === null) {
        document.getElementById('outputGetMostExpensivePurchaseField').innerHTML = '<p><strong>Чек не створений!</strong></p>';
    } else {
        document.getElementById('outputGetMostExpensivePurchaseField').innerHTML = `Найдорожчий товар в чеку: ${getMostExpensivePurchase(receipt)}`
    }
});

let buttonCountAverageCostPurchase = document.querySelector('#buttonCountAverageCostPurchase');
buttonCountAverageCostPurchase.addEventListener('click', () => {
    if(receipt === null) {
        document.getElementById('outputCountAverageCostPurchaseField').innerHTML = '<p><strong>Чек не створений!</strong></p>';
    } else {
        document.getElementById('outputCountAverageCostPurchaseField').innerHTML = `Середня вартість 1 товару в чеку: ${countAverageCostPurchase(receipt)}`
    }
});
