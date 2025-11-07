
function removeClearButton() {
    const clearBtn = document.querySelector('h1');
    clearBtn.remove();
};
// removeClearButton();

document.querySelector("#clear").addEventListener('click', () =>
    removeClearButton()
);


function removeClearButton2() {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');

    ul.removeChild(li);
};
removeClearButton2(2);

