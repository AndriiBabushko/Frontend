const showTable = () => {
    const programmingCourses = readProgrammingCoursesData();
    addEventToCreateOKButtons(programmingCourses);
    addEventsToEditButtons(programmingCourses);
    addEventsToRemoveButtons(programmingCourses);
};

const createTable = (programmingCourses) => {
    const table = document.createElement('table');
    table.setAttribute('class', 'table fs-5 fw-normal');
    table.setAttribute('id', 'languagesTable');
    const thead = document.createElement('thead');
    thead.setAttribute('class', 'table-dark')
    const tbody = document.createElement('tbody');

    // create table header
    const thead_tr = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
        const thead_th = document.createElement('th');
        thead_th.setAttribute('scope', 'col');

        switch (i) {
            case 0: {
                thead_th.innerHTML = 'ID';
                break;
            }
            case 1: {
                thead_th.innerHTML = 'Title';
                break;
            }
            case 2: {
                thead_th.innerHTML = 'Price';
                break;
            }
            case 3: {
                thead_th.innerHTML = 'Time to learn';
                break;
            }
            case 4: {
                thead_th.setAttribute('colspan', '2');
                thead_th.innerHTML = 'Buttons';
                break;
            }
        }

        thead_tr.appendChild(thead_th);
    }
    thead.appendChild(thead_tr);

    // create table body
    for (let i = 0; i < programmingCourses.length; i++) {
        const tbody_tr = document.createElement('tr');
        const keys = Object.keys(programmingCourses[i]);
        const values = Object.values(programmingCourses[i]);
        for (let j = 0; j < keys.length; j++) {
            if (j === 0) {
                const tbody_th = document.createElement('th');
                tbody_th.setAttribute('scope', 'row');
                tbody_th.innerHTML = values[j].toString();
                tbody_tr.appendChild(tbody_th);
            } else {
                const tbody_td = document.createElement('td');
                tbody_td.innerHTML = values[j].toString();
                tbody_tr.appendChild(tbody_td);
            }
        }
        const tbody_td_edit_button = document.createElement('td');
        const editButton = document.createElement('button');

        editButton.setAttribute('type', 'button');
        editButton.setAttribute('class', 'btn btn-outline-primary p-2');
        editButton.setAttribute('id', 'buttonEdit');
        editButton.setAttribute('value', values[0].toString());

        editButton.innerHTML = 'Edit';
        tbody_td_edit_button.appendChild(editButton);

        const tbody_td_remove_button = document.createElement('td');
        const removeButton = document.createElement('button');

        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'btn btn-outline-danger p-2');
        removeButton.setAttribute('id', 'buttonRemove');
        removeButton.setAttribute('value', values[0].toString());

        removeButton.innerHTML = 'Remove';
        tbody_td_remove_button.appendChild(removeButton);

        tbody_tr.appendChild(tbody_td_edit_button);
        tbody_tr.appendChild(tbody_td_remove_button);
        tbody.appendChild(tbody_tr);
    }

    const createButton = document.createElement('button');

    createButton.setAttribute('type', 'button');
    createButton.setAttribute('class', 'btn btn-outline-success mb-2');
    createButton.setAttribute('id', 'buttonCreate');

    createButton.style.width = '100%';
    createButton.innerHTML = 'Create';

    table.appendChild(thead);
    table.appendChild(tbody);

    const adminPageTitle = document.querySelector('#adminTitle');
    adminPageTitle.parentElement.appendChild(table);
    adminPageTitle.parentElement.appendChild(createButton);

    return table;
};

const deleteTable = () => {
    const table = document.querySelector('#languagesTable');
    table.remove();
};

function addEventToCreateOKButtons(programmingCourses) {
    const createButton = document.querySelector('#buttonCreate');

    if (document.body.contains(createButton)) {
        createButton.addEventListener('click', (event) => {
            let divForm = document.createElement('div');
            for (let i = 0; i < 3; i++) {
                divForm = createForm(divForm, i);
            }

            createButton.parentElement.appendChild(divForm);

            const buttonOK = document.createElement('button');

            buttonOK.setAttribute('type', 'button');
            buttonOK.setAttribute('class', `btn btn-outline-success mb-2`);
            buttonOK.setAttribute('id', 'buttonOK');

            buttonOK.style.width = '100%';
            buttonOK.innerHTML = 'OK';

            createButton.parentElement.appendChild(buttonOK);
            createButton.remove();

            buttonOK.addEventListener('click', (event) => {
                const titleValue = document.querySelector('#title').value;
                const priceValue = document.querySelector('#price').value;
                const timeToLearnValue = document.querySelector('#timeToLearn').value;

                let programmingCourse = {};
                if (programmingCourses.length > 0) {
                    let id = programmingCourses[programmingCourses.length - 1].id;
                    id++;
                    programmingCourse = {
                        'id': id,
                        'title': titleValue,
                        'price': priceValue,
                        'time': timeToLearnValue
                    };
                } else {
                    programmingCourse = {
                        'id': 1,
                        'title': titleValue,
                        'price': priceValue,
                        'time': timeToLearnValue
                    };
                }

                addProgrammingCoursesData(programmingCourse);
                deleteTable();
                programmingCourses = readProgrammingCoursesData();
                showTable(createTable(programmingCourses));

                document.querySelector('#createForm').remove();
                buttonOK.remove();
            });
        });
    }
}

function addEventsToEditButtons(programmingCourses) {
    const editButtons = document.querySelectorAll('#buttonEdit');

    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (event) => {
            let divForm = document.createElement('div');
            for (let i = 0; i < 3; i++) {
                divForm = createForm(divForm, i);
            }

            const createButton = document.querySelector('#buttonCreate');

            createButton.parentElement.appendChild(divForm);

            const buttonEdit = document.createElement('button');

            buttonEdit.setAttribute('type', 'button');
            buttonEdit.setAttribute('class', `btn btn-outline-primary mb-2`);
            buttonEdit.setAttribute('id', 'buttonEdit');

            buttonEdit.style.width = '100%';
            buttonEdit.innerHTML = 'EDIT';

            createButton.parentElement.appendChild(buttonEdit);
            createButton.remove();

            buttonEdit.addEventListener('click', () => {
                const titleValue = document.querySelector('#title').value;
                const priceValue = document.querySelector('#price').value;
                const timeToLearnValue = document.querySelector('#timeToLearn').value;

                const id = event.target.getAttribute('value');
                const programmingCourse = {
                    'title': titleValue,
                    'price': priceValue,
                    'time': timeToLearnValue
                };

                updateProgrammingCoursesDataById(programmingCourse, id);
                deleteTable();
                programmingCourses = readProgrammingCoursesData();
                showTable(createTable(programmingCourses));

                document.querySelector('#createForm').remove();
                buttonEdit.remove();
            });
        });
    }
}

function addEventsToRemoveButtons(programmingCourses) {
    const removeButtons = document.querySelectorAll('#buttonRemove');

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', (event) => {
            const target = event.target;
            const id = parseInt(target.getAttribute('value'));

            deleteProgrammingCoursesDataById(id);
            deleteTable();
            programmingCourses = readProgrammingCoursesData();
            showTable(createTable(programmingCourses));

            document.querySelector('#buttonCreate').remove();
            addEventToCreateOKButtons(programmingCourses);
        });
    }
}

function createForm(divForm, i) {
    const divFormBlock = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    divForm.setAttribute('id', 'createForm');
    divFormBlock.setAttribute('class', 'mb-3 text-start fs-5 fw-normal');
    label.setAttribute('class', 'form-label');
    input.setAttribute('class', 'form-control form-control-lg');

    switch (i) {
        case 0: {
            label.innerHTML = 'Title:';
            label.setAttribute('for', 'title');

            input.setAttribute('type', 'text');
            input.setAttribute('id', 'title');
            input.setAttribute('name', 'title');
            break;
        }
        case 1: {
            label.innerHTML = 'Price:';
            label.setAttribute('for', 'price');

            input.setAttribute('type', 'number');
            input.setAttribute('id', 'price');
            input.setAttribute('name', 'price');
            break;
        }
        case 2: {
            label.innerHTML = 'Time to learn:';
            label.setAttribute('for', 'timeToLearn');

            input.setAttribute('type', 'text');
            input.setAttribute('id', 'timeToLearn');
            input.setAttribute('name', 'timeToLearn');
            break;
        }
    }

    divFormBlock.appendChild(label);
    divFormBlock.appendChild(input);
    divForm.appendChild(divFormBlock);

    return divForm;
}

let programmingCourses = readProgrammingCoursesData();

createTable(programmingCourses)
showTable();