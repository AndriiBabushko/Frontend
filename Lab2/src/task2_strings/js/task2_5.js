'use strict';

// text for check:
// Bla bla bla 2017.12.12 bla bla bla lkasjdfklsad  2011.12.3 fdsdf 23.03.2001

const formatTextDates = (textWithDates) => {
    let splitTextWithDates = textWithDates.split(' ');
    let dateRegex = new RegExp('\\d{4}\\.(0?[1-9]|1[012])\\.(0?[1-9]|[12]\\d|3[01])*');
    console.log(splitTextWithDates);
    for (let i = 0; i < splitTextWithDates.length; i++) {
        let searchIndexDate = splitTextWithDates[i].search(dateRegex)
        if (searchIndexDate !== -1) {
            console.log(`${i} Рядок ${splitTextWithDates[i]} знайдено в ${searchIndexDate}`);
            splitTextWithDates[i] = splitTextWithDates[i].slice(8, 10) + '.'
                + splitTextWithDates[i].slice(6, 7) + '.'
                + splitTextWithDates[i].slice(0, 4);
            console.log(`Рядок змінено на ${splitTextWithDates[i]}`);
        }
    }

    return splitTextWithDates.join(' ');
};

let textWithDates = prompt('Введіть який завгодно текст з датами типу рррр.мм.дд:');
let newTextWithDates = formatTextDates(textWithDates);
alert(`Новий текст з відформатованими датами:\n\n${newTextWithDates}`);