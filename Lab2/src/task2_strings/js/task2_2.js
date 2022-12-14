'use strict';

const toCamelCase = (cssStyle) => {
    for (let i = 0; i < cssStyle.length; i++) {
        if (cssStyle[i] === '-') {
            cssStyle = cssStyle.substring(0, i) + cssStyle[i + 1].toUpperCase() + cssStyle.substring(i + 2);
            break;
        }
    }
    return cssStyle;
}

let cssStyleString = prompt('Введіть css стиль: ').toString();
alert(`Сконвертований css стиль за допомогою toCamelCase(): ${toCamelCase(cssStyleString)}`);
