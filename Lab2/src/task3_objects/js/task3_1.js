'use strict';

const checkRepeatedClassNames = (className, classNames) => {
    for (let i = 0; i < classNames.length; i++) {
        if (classNames[i] === className) {
            return false;
        }
    }
    return true;
};

const addClass = (obj, newClass) => {
    let classNames = obj.className;
    if (checkRepeatedClassNames(newClass, classNames.split(' '))) {
        obj.className += ` ${newClass}`;
        return obj;
    }
    return obj;
};


let obj = {
    className: "open menu",
};
let newClass = prompt("Введіть ім'я класу:");
let newObj = addClass(obj, newClass);
alert(`Новий об'єкт: ${newObj.className}`);
