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

    console.log('Before update: ', programmingCourses[objIndex]);

    programmingCourses[objIndex].title = updateData.title;
    programmingCourses[objIndex].price = updateData.price;
    programmingCourses[objIndex].time = updateData.time;

    console.log('After update: ', programmingCourses[objIndex]);

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

function readCommentsData() {
    let commentsData = null;

    if (localStorage.getItem('commentsData') === null) {
        commentsData = [];
    } else {
        commentsData = JSON.parse(localStorage.getItem('commentsData'));
    }

    return commentsData;
}

function addCommentsData(addData) {
    const commentsData = readBasketData();

    commentsData.push(addData);

    localStorage.setItem('commentsData', JSON.stringify(commentsData))
}
