'use strict';

const checkClassNameInput = (enteredClassName) => enteredClassName.search(' ') === -1;

const removeClass = (obj, existedClass) => {
    let classNames = obj.className;
    let splitClassNames = classNames.split(' ');

    for (let i = 0; i < splitClassNames.length; i++) {
        console.log(splitClassNames[i]);
        if (splitClassNames[i] === existedClass) {
            delete splitClassNames[i];
            obj.className = splitClassNames.join(' ').split('  ').join(' ');
            return obj;
        }
    }
    return obj;
};


let obj = {
    className: "open menu new my",
};
let newClass = prompt("Введіть ім'я класу для видалення:");
if(checkClassNameInput(newClass)){
    let newObj = removeClass(obj, newClass);
    alert(`Новий об'єкт: ${newObj.className}`);
} else {
    alert('Назву класу введено не правильно!')
}
