'use strict';

const showBasketTable = (basketTable) => {
    const basketTitle = document.querySelector('#basketTitle');
    basketTitle.parentElement.appendChild(basketTable);
    addEventsToRemoveButtons();
};

const createBasketTable = () => {
    const basketData = readBasketData();
    if (basketData.length > 0) {
        const alertNoProduct = document.querySelector('#alertNoProduct');
        if (document.body.contains(alertNoProduct))
            alertNoProduct.remove();
        const table = document.createElement('table');
        table.setAttribute('class', 'table fs-5 fw-normal');
        table.setAttribute('id', 'basketTable');
        const thead = document.createElement('thead');
        thead.setAttribute('class', 'table-dark')
        const tbody = document.createElement('tbody');

        // create basket table header
        const thead_tr = document.createElement('tr');
        for (let i = 0; i < 4; i++) {
            const thead_th = document.createElement('th');
            thead_th.setAttribute('scope', 'col');

            switch (i) {
                case 0: {
                    thead_th.innerHTML = '№';
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
                    thead_th.innerHTML = 'Action';
                    break;
                }
            }

            thead_tr.appendChild(thead_th);
        }
        thead.appendChild(thead_tr);

        // create table body
        for (let i = 0; i < basketData.length; i++) {
            const tbody_tr = document.createElement('tr');
            const values = Object.values(basketData[i]);

            for (let j = 0; j < 3; j++) {
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

            const tbody_td_remove_button = document.createElement('td');
            const removeButton = document.createElement('button');

            removeButton.setAttribute('type', 'button');
            removeButton.setAttribute('class', 'btn btn-outline-danger p-2');
            removeButton.setAttribute('id', 'buttonRemove');
            removeButton.setAttribute('value', values[0].toString());

            removeButton.innerHTML = 'Remove';

            tbody_td_remove_button.appendChild(removeButton);
            tbody_tr.appendChild(tbody_td_remove_button);
            tbody.appendChild(tbody_tr);
        }

        const tfoot = document.createElement('tfoot');
        tfoot.setAttribute('class', 'table-dark');
        const tfootTr = document.createElement('tr');
        const tfootLabelTd = document.createElement('td');
        tfootLabelTd.setAttribute('colspan', '2');
        tfootLabelTd.setAttribute('scope', 'row');
        tfootLabelTd.setAttribute('class', 'text-center');
        tfootLabelTd.innerHTML = 'Total price:';

        const tfootTotalPriceTd = document.createElement('td');
        tfootTotalPriceTd.setAttribute('colspan', '2');
        tfootTotalPriceTd.setAttribute('class', 'text-center');
        let totalPrice = 0;
        for (let i = 0; i < basketData.length; i++) {
            totalPrice += parseInt(basketData[i].price);
        }
        tfootTotalPriceTd.innerHTML = totalPrice.toString();

        tfootTr.appendChild(tfootLabelTd);
        tfootTr.appendChild(tfootTotalPriceTd);
        tfoot.appendChild(tfootTr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);

        return table;
    } else {
        const alert = document.createElement('div');
        alert.setAttribute('class', 'alert alert-dark');
        alert.setAttribute('id', 'alertNoProduct');
        alert.innerHTML = 'Here is no items in basket!';
        document.querySelector('#basketTitle').parentElement.appendChild(alert);

        return null;
    }
};

const deleteTable = () => {
    const table = document.querySelector('#basketTable');
    table.remove();
};

function addEventsToRemoveButtons() {
    const removeButtons = document.querySelectorAll('#buttonRemove');

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', (event) => {
            const target = event.target;
            const id = parseInt(target.getAttribute('value'));

            deleteBasketDataById(id);
            deleteTable();
            callTableCreation();
        });
    }
}

function callTableCreation() {
    const table = createBasketTable();
    if (table) {
        showBasketTable(table);
    }
}

callTableCreation()
