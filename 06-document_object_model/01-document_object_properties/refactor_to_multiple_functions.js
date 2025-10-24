
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
};


function createButton(item) {
    const button = document.createElement('button');
    button.className = item;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
};

function createIcon(item) {
    const icon = document.createElement('i');
    icon.className = item;

    return icon;

};
createNewItem("Fresh Vegetable");
createNewItem("Fresh Fish");
createNewItem("Rice Red");