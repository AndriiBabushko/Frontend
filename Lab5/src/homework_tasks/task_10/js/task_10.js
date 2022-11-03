'use strict';

const booksToggle = (event, books, booksStatus, index) => {
    event.target.classList.toggle('active');

    clickedBooksIndexes.push(index)

    if (booksStatus[index] === 'active') {
        booksStatus[index] = 'inactive';
    } else {
        booksStatus[index] = 'active'
    }

    console.log(booksStatus);
};

const setBooks = (event, bookIndex, books, booksStatus, clickedBooksIndexes) => {
    const index = parseInt(event.target.getAttribute('value'));
    if (!booksStatus.includes('active') || event.ctrlKey) {
        booksToggle(event, books, booksStatus, index);
        return;
    }
    if (event.shiftKey){
        console.log('SHIFT');
        clickedBooksIndexes.push(index)
        const startIndex = clickedBooksIndexes[clickedBooksIndexes.length - 2];
        const finishIndex = clickedBooksIndexes[clickedBooksIndexes.length - 1];
        console.log(startIndex, finishIndex);
        if (startIndex > finishIndex){
            for (let i = startIndex; i >= finishIndex; i--) {
                if (i !== startIndex)
                    books[i].classList.toggle('active');
                booksStatus[i] = 'active';
            }
        }

        if (startIndex < finishIndex){
            for (let i = startIndex; i <= finishIndex; i++) {
                if (i !== startIndex)
                    books[i].classList.toggle('active');
                booksStatus[i] = 'active';
            }
        }
        console.log(booksStatus);
        return;
    }
    if (booksStatus.includes('active')) {
        console.log(clickedBooksIndexes);
        const activeIndex = clickedBooksIndexes[clickedBooksIndexes.length - 1];
        books[activeIndex].classList.toggle('active');
        booksStatus[activeIndex] = 'inactive';
        booksToggle(event, books, booksStatus, index);
    }
}

const books = document.querySelectorAll('.ol_list__li_book');

let booksStatus = [];
let clickedBooksIndexes = []
for (let i = 0; i < books.length; i++) {
    books[i].classList.add('inactive');
    books[i].setAttribute('value', i.toString());
    booksStatus.push('inactive');

    books[i].addEventListener('click', (event) => {
        console.log('EVENT!');
        setBooks(event, i, books, booksStatus, clickedBooksIndexes)
    });
}