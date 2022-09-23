'use strict';

function getRandomInt(fromNumber, toNumber) {
    return Math.round(Math.random() * (toNumber - fromNumber) + fromNumber);
}

function ShoppingList(productName, productCount, productBoughtStatus) {
    this.productName = productName;
    this.productCount = productCount;
    this.productBoughtStatus = productBoughtStatus;
}

function createShoppingList() {
    let shoppingList = [];
    let someProductNames = ['Помідори', 'Кетчуп', 'Гречка', 'Гарбуз', 'Печиво',
        'Вода', 'Вино', 'Виноград', 'Манго', 'Соняшникова олія'];
    let someProductBoughtStatus = [true, false];

    for (let i = 0; i < 10; i++) {
        shoppingList.push(new ShoppingList(someProductNames[i], getRandomInt(1, 10), someProductBoughtStatus[getRandomInt(0, 1)]));
    }

    return shoppingList;
}

function compareObjStatus(obj1, obj2) {
    if(obj1.productBoughtStatus > obj2.productBoughtStatus)
        return 1;

    if(obj1.productBoughtStatus < obj2.productBoughtStatus)
        return -1;

    return 0;
}

function sortShoppingListByBoughtStatus(objArray) {
    return objArray.sort(compareObjStatus);
}

function getShoppingListOutPut(shoppingList) {
    let outputString = '';

    for (let i = 0; i < shoppingList.length; i++) {
        outputString += `<section class="outputSection"><p class="id">№${i + 1}</p>`;
        outputString += `<p>Назва продукту: <strong>${shoppingList[i].productName}</strong></p>`;
        outputString += `<p>Кількість для покупки: <strong>${shoppingList[i].productCount}</strong></p>`;
        outputString += `<p>Статус покупки: <strong>${shoppingList[i].productBoughtStatus}</strong></p></section>`;
    }

    return outputString;
}

function addProductToShoppingList(objs, productName, productCount, productStatus){
    for (let i = 0; i < objs.length; i++) {
        if(objs[i].productName === productName) {
            return objs;
        }
    }

    if(productStatus === '+') productStatus = true;
    if(productStatus === '-') productStatus = false;

    objs.push(new ShoppingList(productName, productCount, productStatus));

    return objs;
}

function checkProductAddInputs(productName, productCount, productStatus) {
    return !(isNaN(productCount) || productCount <= 0 || (productStatus !== '+' && productStatus !== '-'));
}

function markProductStatus(objs, productName) {
    for (let i = 0; i < objs.length; i++) {
        if(objs[i].productName === productName){
            objs[i].productBoughtStatus = true;
            return objs;
        }
    }

    return objs;
}

function checkExistProductName(objs, productName){
    for (let i = 0; i < objs.length; i++) {
        if(objs[i].productName === productName){
            return true;
        }
    }

    return false;
}

let shoppingList = null;

let buttonCreateList = document.querySelector('#buttonCreateList');
buttonCreateList.addEventListener('click', () => {
    shoppingList = createShoppingList();
    document.getElementById('outputCreateListField"').innerHTML = '<p><strong>Список покупок створено!</strong></p>';
});

let buttonOutputList = document.querySelector('#buttonOutputList');
buttonOutputList.addEventListener('click', () => {
    if(shoppingList === null) alert('Список покупок пустий!');
    else{
        document.getElementById('outputListField').innerHTML = getShoppingListOutPut(sortShoppingListByBoughtStatus(shoppingList));
    }
});

let buttonAddProductToList = document.querySelector('#buttonAddProductToList');
buttonAddProductToList.addEventListener('click', () => {
    if(shoppingList === null) {
        document.getElementById('outputAddElemToListField').innerHTML = '<p><strong>Список покупок пустий!</strong></p>';
    }
    else{
        let productName = document.getElementById('productName').value;
        let productCount = document.getElementById('productCount').value;
        let productStatus = document.getElementById('productStatus').value;
        if(productName === null || productCount === null || productStatus === null)
            document.getElementById('outputAddElemToListField').innerHTML = '<p><strong>Поле(я) для введення пусті!</strong></p>';
        else{
            if(checkProductAddInputs(productName, productCount, productStatus)){
                shoppingList = addProductToShoppingList(shoppingList, productName, productCount, productStatus);
                document.getElementById('outputAddElemToListField').innerHTML = '<p><strong>Елемент додано до списку покупок!</strong></p>';
            } else{
                document.getElementById('outputAddElemToListField').innerHTML = '<p><strong>Значення введено не правильно!</strong></p>';
            }
        }
    }
});

let buttonMarkProductInList = document.querySelector('#buttonMarkProductInList');
buttonMarkProductInList.addEventListener('click', () => {
    if(shoppingList === null) {
        document.getElementById('outputMarkProductInListField').innerHTML = '<p><strong>Список покупок пустий!</strong></p>';
    } else{
        let productName = document.getElementById('markProductInList').value;
        if(productName === null){
            document.getElementById('outputMarkProductInListField').innerHTML = '<p><strong>Поле для введення пусті!</strong></p>';
        } else{
            if(checkExistProductName(shoppingList, productName)){
                shoppingList = markProductStatus(shoppingList, productName);
                document.getElementById('outputMarkProductInListField').innerHTML = '<p><strong>Продукт було помічено як куплений!</strong></p>';
            } else{
                document.getElementById('outputMarkProductInListField').innerHTML = '<p><strong>Продукт НЕ було помічено як куплений!</strong></p>';
            }
        }
    }
});
