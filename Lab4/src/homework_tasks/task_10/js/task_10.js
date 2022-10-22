'use strict';

const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return dd + '.' + mm + '/' + yyyy;
}

const createComment = (author, comment) => {
    const divComment = document.createElement('div');
    divComment.classList.add('button_section__div_comment');
    const divCommentHead = document.createElement('div');
    divCommentHead.classList.add('div_comment__head');
    const divHeadAuthor = document.createElement('div');
    divHeadAuthor.classList.add('head__author');
    divHeadAuthor.innerHTML = author;
    const divHeadCommentTime = document.createElement('div');
    divHeadCommentTime.classList.add('head__comment_time');
    divHeadCommentTime.innerHTML = getTodayDate();
    const divCommentBody = document.createElement('div');
    divCommentBody.classList.add('div_comment__body');
    const paragraphBody = document.createElement('p');
    paragraphBody.classList.add('body__paragraph');
    paragraphBody.innerHTML = comment;

    divCommentHead.appendChild(divHeadAuthor);
    divCommentHead.appendChild(divHeadCommentTime);
    divCommentBody.appendChild(paragraphBody);
    divComment.appendChild(divCommentHead);
    divComment.appendChild(divCommentBody);

    const hr = document.querySelector('.button_section__hr');
    hr.parentNode.insertBefore(divComment, hr);
};

const buttonAddComment = document.querySelector('#buttonAddComment');
const textName = document.querySelector('#textName');
const textareaComment = document.querySelector('#textareaComment');

buttonAddComment.addEventListener('click', () => {
    const nameValue = textName.value;
    const commentValue = textareaComment.value;

    createComment(nameValue, commentValue);
});