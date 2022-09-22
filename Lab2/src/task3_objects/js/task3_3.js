'use strict'

const toKebabCase = (cssStyle) => {
    for (let i = 0; i < cssStyle.length; i++) {
        if (cssStyle[i] === cssStyle[i].toUpperCase()) {
            cssStyle = cssStyle.substring(0, i) + '-' + cssStyle[i].toLowerCase() + cssStyle.substring(i + 1);
            break;
        }
    }
    return cssStyle;
};

const checkUpperLetters = (string) => {
    for (let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()){
            return true;
        }
    }
    return false;
};

let cssStyleString = prompt('Введіть css стиль в CamelCase:').toString();
if(checkUpperLetters(cssStyleString)){
    alert(`Сконвертований css стиль за допомогою toKebabCase(): ${toKebabCase(cssStyleString)}`);
} else{
    alert('Введений рядок не є в стилі CamelCase!');
}
