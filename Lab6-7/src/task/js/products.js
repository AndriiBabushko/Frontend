'use strict';

const showProductItems = (divItems) => {
    const programmingCourses = readProgrammingCoursesData();
    const productsTitle = document.querySelector('#productsTitle');
    productsTitle.parentElement.appendChild(divItems);
};

const createProductItems = () => {
    const programmingCourses = readProgrammingCoursesData();
    const divItemsContainer = document.createElement('div');
    divItemsContainer.setAttribute('id', 'itemsContainer');
    divItemsContainer.setAttribute('class', 'd-flex flex-row flex-wrap justify-content-center justify-content-lg-center justify-content-md-between align-items-center"');

    for (let i = 0; i < programmingCourses.length; i++) {
        const divItemBlock = document.createElement('div');
        divItemBlock.setAttribute('id', 'itemBlock');
        divItemBlock.setAttribute('class', 'card m-1 text-center');
        divItemBlock.style.width = '200px';

        // creating card header
        const divItemHeader = document.createElement('div');
        divItemHeader.setAttribute('class', 'card-header border-bottom');
        divItemHeader.style.backgroundColor = 'lightgrey';
        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerHTML = programmingCourses[i].title;
        divItemHeader.appendChild(cardTitle);

        // creating card body
        const divItemBody = document.createElement('div');
        divItemBody.setAttribute('class', 'card-body border-bottom');
        divItemBody.style.backgroundColor = '#f1f1f1';
        const cardPriceSubtitle = document.createElement('p');
        cardPriceSubtitle.setAttribute('class', 'card-subtitle fs-5');
        cardPriceSubtitle.innerHTML = 'Price';
        const cardPriceText = document.createElement('p');
        cardPriceText.setAttribute('class', 'card-text fw-normal fs-6');
        cardPriceText.innerHTML = programmingCourses[i].price + ' UAH';
        const cardTimeSubtitle = document.createElement('p');
        cardTimeSubtitle.setAttribute('class', 'card-subtitle fs-5');
        cardTimeSubtitle.innerHTML = 'Time to learn';
        const cardTimeText = document.createElement('p');
        cardTimeText.setAttribute('class', 'card-text fw-normal fs-6');
        cardTimeText.innerHTML = programmingCourses[i].time;
        divItemBody.appendChild(cardPriceSubtitle);
        divItemBody.appendChild(cardPriceText);
        divItemBody.appendChild(cardTimeSubtitle);
        divItemBody.appendChild(cardTimeText);

        // creating card footer
        const divItemFooter = document.createElement('div');
        divItemFooter.setAttribute('class', 'card-footer');
        divItemFooter.style.backgroundColor = 'darkgrey';
        const cardBasketButton = document.createElement('button');
        cardBasketButton.setAttribute('type', 'button');
        cardBasketButton.setAttribute('id', 'basketButton');
        cardBasketButton.setAttribute('class', 'btn btn-outline-light my-2');
        cardBasketButton.style.width = '100%';
        cardBasketButton.innerHTML = 'Add To Busket';

        // event to add product to basket
        cardBasketButton.addEventListener('click', (event) => {
            const basketData = readBasketData();
            let newBasketData = {};

            if (basketData.length > 0){
                newBasketData = {
                    'id': basketData.length + 1,
                    'title': programmingCourses[i].title,
                    'price': programmingCourses[i].price
                }
            } else {
                newBasketData = {
                    'id': 1,
                    'title': programmingCourses[i].title,
                    'price': programmingCourses[i].price
                }
            }

            addBasketData(newBasketData);

            cardBasketButton.setAttribute('class', 'btn btn-outline-success my-2');
            cardBasketButton.innerHTML = 'Successfully added!';
        });

        divItemFooter.appendChild(cardBasketButton);

        // creating comments dropdown button
        const divCommentButton = document.createElement('div');
        divCommentButton.setAttribute('class', 'btn-group');
        divCommentButton.style.width = '100%';
        const cardCommentsButton = document.createElement('button');
        cardCommentsButton.setAttribute('type', 'button');
        cardCommentsButton.setAttribute('id', 'commentsButton');
        cardCommentsButton.setAttribute('class', 'btn btn-outline-light dropdown-toggle my-2');
        cardCommentsButton.setAttribute('data-bs-toggle', 'dropdown');
        cardCommentsButton.setAttribute('aria-expanded', 'false');
        cardCommentsButton.style.width = '100%';
        cardCommentsButton.innerHTML = 'Show comments';
        const ulDropDownMenu = document.createElement('ul');
        ulDropDownMenu.setAttribute('class', 'dropdown-menu');

        const commentsData = readCommentsData();
        if(commentsData.length > 0){
            for (let j = 0; j < commentsData.length; j++) {
                const liDropdownItem = document.createElement('li');
                const dropdownItem = document.createElement('a');

                dropdownItem.setAttribute('href', '#');
                dropdownItem.setAttribute('class', 'dropdown-item card');
                dropdownItem.innerHTML = commentsData.username;

                liDropdownItem.appendChild(dropdownItem);
                ulDropDownMenu.appendChild(liDropdownItem);
            }
        } else {
            const liDropdownItem = document.createElement('li');
            const dropdownItem = document.createElement('a');

            dropdownItem.setAttribute('href', '#');
            dropdownItem.setAttribute('class', 'dropdown-item');
            dropdownItem.innerHTML = 'No comments here!';

            liDropdownItem.appendChild(dropdownItem);
            ulDropDownMenu.appendChild(liDropdownItem);
        }

        divCommentButton.appendChild(cardCommentsButton);
        divCommentButton.appendChild(ulDropDownMenu);
        divItemFooter.appendChild(divCommentButton);

        // add all blocks to one item
        divItemBlock.appendChild(divItemHeader);
        divItemBlock.appendChild(divItemBody);
        divItemBlock.appendChild(divItemFooter);
        divItemsContainer.appendChild(divItemBlock);
    }

    return divItemsContainer;
};

const deleteProductItems = () => {
    const itemsContainer = document.querySelector('#itemsContainer');
    itemsContainer.remove();
};

showProductItems(createProductItems());




