
// QUICK & DIRTY
function createListItem(item) {

    const li = document.createElement('li');
    li.id = 'item';
    li.innerHTML =
                 ` ${item}  <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
    document.querySelector('.items').appendChild(li);

};
createListItem('egg'); //Call Back Function




// CLEAN & PERFORMANT
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
};
createNewItem('Fresh Vegetable');
