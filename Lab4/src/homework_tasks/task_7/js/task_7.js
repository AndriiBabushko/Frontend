'use strict';

const setPosts = (target, postIndex, posts, postsStatus) => {
    if (!postsStatus.includes('active')) {
        target.nextElementSibling.classList.toggle('div_post__body_display');

        postsStatus[parseInt(target.getAttribute('value'))] = 'active';
    } else {
        if (postsStatus.includes('active')) {
            const activeIndex = postsStatus.findIndex((element) => element === 'active');

            posts[activeIndex].nextElementSibling.classList.toggle('div_post__body_display');
            target.nextElementSibling.classList.toggle('div_post__body_display');

            postsStatus[parseInt(posts[postIndex].getAttribute('value'))] = 'active';
            postsStatus[activeIndex] = 'inactive';
        }
    }
}

const posts = document.querySelectorAll('.button_section__div_post .div_post__head');
let postsStatus = [];

for (let i = 0; i < posts.length; i++) {
    posts[i].classList.add('inactive');
    posts[i].setAttribute('value', i.toString());
    postsStatus.push('inactive');

    posts[i].addEventListener('click', (event) => {
        const target = event.target;

        setPosts(target, i, posts, postsStatus);
    });

    // posts[i].addEventListener('mouseover', (event) => {
    //     const target = event.target;
    //
    //     setPosts(target, i, posts, postsStatus);
    // });
}