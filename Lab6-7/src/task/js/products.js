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
    console.log(programmingCourses.length);
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

        // creating comments modal button
        const divCommentButton = document.createElement('div');
        divCommentButton.setAttribute('class', 'btn-group');
        divCommentButton.style.width = '100%';
        const cardCommentsButton = document.createElement('button');
        cardCommentsButton.setAttribute('type', 'button');
        cardCommentsButton.setAttribute('id', 'commentsButton');
        cardCommentsButton.setAttribute('class', 'btn btn-outline-light my-2');
        cardCommentsButton.setAttribute('data-bs-toggle', 'modal');
        cardCommentsButton.setAttribute('data-bs-target', `#staticBackdrop${i}`);
        cardCommentsButton.style.width = '100%';
        cardCommentsButton.innerHTML = 'Show comments';

        // modal header
        const titleModalHeader = document.createElement('h1');
        titleModalHeader.setAttribute('class', 'modal-title fs-5');
        titleModalHeader.setAttribute('id', 'staticBackdropLabel');
        titleModalHeader.innerHTML = 'Comments';

        const buttonModalHeader = document.createElement('button');
        buttonModalHeader.setAttribute('type', 'button');
        buttonModalHeader.setAttribute('class', 'btn-close');
        buttonModalHeader.setAttribute('data-bs-dismiss', 'modal');
        buttonModalHeader.setAttribute('aria-label', 'Close');

        const divModalHeader = document.createElement('div');
        divModalHeader.setAttribute('class', 'modal-header');
        divModalHeader.appendChild(titleModalHeader);
        divModalHeader.appendChild(buttonModalHeader);

        // create comment Button
        const createCommentButton = document.createElement('button');
        createCommentButton.setAttribute('type', 'button');
        createCommentButton.setAttribute('class', 'btn btn-outline-success my-2');
        createCommentButton.setAttribute('id', 'createCommentButton');
        createCommentButton.style.width = '100%';
        createCommentButton.innerHTML = 'Create comment';
        // add event to create comment button
        let divForm = document.createElement('div');
        createCommentButton.addEventListener('click', () => {
            for (let j = 0; j < 2; j++) {
                divForm = createCommentForm(divForm, j, i);
            }

            createCommentButton.parentElement.appendChild(divForm);
            createCommentButton.remove();
        });

        // modal body
        const divModalBody = document.createElement('div');
        divModalBody.setAttribute('class', 'modal-body');
        divModalBody.appendChild(createCommentButton);

        createModalCommentCards(divModalBody, createCommentButton, i);

        // modal footer
        const divModalFooterCloseButton = document.createElement('button');
        divModalFooterCloseButton.setAttribute('type', 'button');
        divModalFooterCloseButton.setAttribute('class', 'btn btn-secondary');
        divModalFooterCloseButton.setAttribute('data-bs-dismiss', 'modal');
        divModalFooterCloseButton.innerHTML = 'Close';

        const divModalFooter = document.createElement('div');
        divModalFooter.setAttribute('class', 'modal-footer');
        divModalFooter.appendChild(divModalFooterCloseButton);

        // modal content
        const divModalContent = document.createElement('div');
        divModalContent.setAttribute('class', 'modal-content');
        divModalContent.appendChild(divModalHeader);
        divModalContent.appendChild(divModalBody);
        divModalContent.appendChild(divModalFooter);

        const divModalDialog = document.createElement('div');
        divModalDialog.setAttribute('class', 'modal-dialog modal-dialog-scrollable');
        divModalDialog.appendChild(divModalContent);

        const divModalFade = document.createElement('div');
        divModalFade.setAttribute('class', 'modal fade');
        divModalFade.setAttribute('id', `staticBackdrop${i}`);
        divModalFade.setAttribute('data-bs-backdrop', 'static');
        divModalFade.setAttribute('data-bs-keyboard', 'false');
        divModalFade.setAttribute('tabindex', '-1');
        divModalFade.setAttribute('aria-labelledby', 'staticBackdropLabel');
        divModalFade.setAttribute('aria-hidden', 'true');
        divModalFade.appendChild(divModalDialog);

        divItemFooter.appendChild(cardCommentsButton);
        divItemFooter.appendChild(divModalFade);

        // add all blocks to one item
        divItemBlock.appendChild(divItemHeader);
        divItemBlock.appendChild(divItemBody);
        divItemBlock.appendChild(divItemFooter);
        divItemsContainer.appendChild(divItemBlock);
    }

    return divItemsContainer;
};

function createCommentForm(divForm, j, i) {
    divForm.setAttribute('id', 'createCommentForm');

    const divFormBlock = document.createElement('div');
    divFormBlock.setAttribute('class', 'mb-3 text-start fs-5 fw-normal');

    switch (j) {
        case 0: {
            const label = document.createElement('label');
            label.setAttribute('class', 'form-label');
            label.innerHTML = 'Input comment here:';
            label.setAttribute('for', 'commentText');

            const textArea = document.createElement('textarea');
            textArea.setAttribute('class', 'form-control form-control-lg');
            textArea.setAttribute('rows', '3');
            textArea.setAttribute('id', 'commentText');
            textArea.setAttribute('name', 'commentText');

            divFormBlock.appendChild(label);
            divFormBlock.appendChild(textArea);
            break;
        }
        case 1: {
            const button = document.createElement('button');

            button.setAttribute('class', 'btn btn-outline-success mb-2');
            button.setAttribute('type', 'button');
            button.setAttribute('id', 'buttonOK');
            button.setAttribute('name', 'buttonOK');
            button.style.width = '100%';
            button.innerHTML = 'OK'

            button.addEventListener('click', () => {
                const commentText = document.querySelector('#commentText').value;
                const commentsData = readCommentsData(i);
                const userData = 'admin';
                const timePost = new Date().toLocaleDateString('de-DE');
                console.log(timePost);
                let commentData = {};

                if (commentsData.length > 0){
                    let id = commentsData[commentsData.length - 1].id;
                    id++;
                    commentData = {
                        'id': id,
                        'username': userData,
                        'time': timePost,
                        'commentText': commentText
                    };
                } else {
                    commentData = {
                        'id': 1,
                        'username': userData,
                        'time': timePost,
                        'commentText': commentText
                    };
                }

                addCommentsData(commentData, i);
                location.reload();
            });

            divFormBlock.appendChild(button);
            break;
        }
    }

    divForm.appendChild(divFormBlock);

    return divForm;
}

function createModalCommentCards(divModalBody, createCommentButton, i) {
    const commentsData = readCommentsData(i);
    if(commentsData.length > 0){
        for (let j = 0; j < commentsData.length; j++) {
            console.log(`${i} product`);
            console.log(commentsData[j]);
            // creating comment card header
            const commentCardUsername = document.createElement('h5');
            commentCardUsername.setAttribute('class', 'card-title');
            commentCardUsername.innerHTML = commentsData[j].username;

            const commentCardTime = document.createElement('p');
            commentCardTime.setAttribute('class', 'card-subtitle fs-6');
            commentCardTime.innerHTML = commentsData[j].time;

            const divCommentCardHeader = document.createElement('div');
            divCommentCardHeader.setAttribute('class', 'card-header border-bottom');
            divCommentCardHeader.style.backgroundColor = 'lightgrey';
            divCommentCardHeader.appendChild(commentCardUsername);
            divCommentCardHeader.appendChild(commentCardTime);

            // creating comment card body
            const commentCardComment = document.createElement('p');
            commentCardComment.setAttribute('class', 'card-text fw-normal fs-6');
            commentCardComment.innerHTML = commentsData[j].commentText;

            const divCommentCardBody = document.createElement('div');
            divCommentCardBody.setAttribute('class', 'card-body border-bottom');
            divCommentCardBody.style.backgroundColor = '#f1f1f1';
            divCommentCardBody.appendChild(commentCardComment);

            // creating card footer
            const deleteCommentButton = document.createElement('button');
            deleteCommentButton.setAttribute('type', 'button');
            deleteCommentButton.setAttribute('class', 'btn btn-outline-danger my-2');
            deleteCommentButton.style.width = '100%';
            deleteCommentButton.innerHTML = 'Delete Comment';

            deleteCommentButton.addEventListener('click', () => {
                deleteCommentsDataById(i, commentsData[j].id);
                deleteModalCommentCards();
                createModalCommentCards(divModalBody, createCommentButton, i);
            });

            const divCommentCardFooter = document.createElement('div');
            divCommentCardFooter.setAttribute('class', 'card-footer');
            divCommentCardFooter.style.backgroundColor = 'lightgrey';
            divCommentCardFooter.appendChild(deleteCommentButton);

            const divCommentCard = document.createElement('div');
            divCommentCard.setAttribute('id', 'commentCard');
            divCommentCard.setAttribute('class', 'card m-1');
            divCommentCard.appendChild(divCommentCardHeader);
            divCommentCard.appendChild(divCommentCardBody);
            divCommentCard.appendChild(divCommentCardFooter);

            divModalBody.firstChild.before(divCommentCard);
        }
    }
    else {
        console.log('EMPTY COMMENTS');
        const warningNoCommentsBlock = document.createElement('div');
        warningNoCommentsBlock.setAttribute('class', 'alert alert-secondary');
        warningNoCommentsBlock.innerHTML = 'No comments yet here!';
        createCommentButton.before(warningNoCommentsBlock);
    }
}

function deleteModalCommentCards() {
    const divCommentCard = document.querySelectorAll('#commentCard');
    for (let i = 0; i < divCommentCard.length; i++) {
        divCommentCard[i].remove();
    }
}

showProductItems(createProductItems());