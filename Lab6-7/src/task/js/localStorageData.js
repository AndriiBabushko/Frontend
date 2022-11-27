function readProgrammingCoursesData() {
    let programmingCourses = null;

    if (localStorage.getItem('programmingCourses') === null) {
        programmingCourses = [];
    } else {
        programmingCourses = JSON.parse(localStorage.getItem('programmingCourses'));
    }

    return programmingCourses;
}

function addProgrammingCoursesData(addData) {
    const programmingCourses = readProgrammingCoursesData();

    programmingCourses.push(addData);

    localStorage.setItem('programmingCourses', JSON.stringify(programmingCourses))
}

function updateProgrammingCoursesDataById(updateData, id) {
    const programmingCourses = readProgrammingCoursesData();

    const objIndex = programmingCourses.findIndex((obj => obj.id == id));

    programmingCourses[objIndex].title = updateData.title;
    programmingCourses[objIndex].price = updateData.price;
    programmingCourses[objIndex].time = updateData.time;

    localStorage.setItem('programmingCourses', JSON.stringify(programmingCourses));
}

function deleteProgrammingCoursesDataById(id) {
    const programmingCourses = readProgrammingCoursesData();

    for (let j = programmingCourses.length - 1; j >= 0; --j) {
        if (programmingCourses[j].id === id) {
            programmingCourses.splice(j, 1);
        }
    }

    localStorage.setItem('programmingCourses', JSON.stringify(programmingCourses));
}

function readBasketData() {
    let basketData = null;

    if (localStorage.getItem('basketData') === null) {
        basketData = [];
    } else {
        basketData = JSON.parse(localStorage.getItem('basketData'));
    }

    return basketData;
}

function addBasketData(addData) {
    const basketData = readBasketData();

    basketData.push(addData);

    localStorage.setItem('basketData', JSON.stringify(basketData))
}

function deleteBasketDataById(id) {
    const basketData = readBasketData();

    for (let j = basketData.length - 1; j >= 0; --j) {
        if (basketData[j].id === id) {
            basketData.splice(j, 1);
        }
    }

    localStorage.setItem('basketData', JSON.stringify(basketData));
}

function readCommentsData(programmingCourseIndex) {
    let commentsData = null;

    if (localStorage.getItem('programmingCourses') === null) {
        commentsData = [];
    } else {
        const programmingCourses = JSON.parse(localStorage.getItem('programmingCourses'));
        commentsData = programmingCourses[programmingCourseIndex].comments;
    }

    return commentsData;
}

function addCommentsData(addData, programmingCourseIndex) {
    const commentsData = readCommentsData(programmingCourseIndex);

    commentsData.push(addData);

    let programmingCourses = JSON.parse(localStorage.getItem('programmingCourses'));
    programmingCourses[programmingCourseIndex].comments = commentsData;

    localStorage.setItem('programmingCourses', JSON.stringify(programmingCourses));
}

function deleteCommentsDataById(programmingCourseIndex, id) {
    const commentsData = readCommentsData(programmingCourseIndex);

    for (let j = commentsData.length - 1; j >= 0; --j) {
        if (commentsData[j].id === id) {
            commentsData.splice(j, 1);
        }
    }

    let programmingCourses = JSON.parse(localStorage.getItem('programmingCourses'));
    programmingCourses[programmingCourseIndex].comments = commentsData;

    localStorage.setItem('programmingCourses', JSON.stringify(programmingCourses));
}
