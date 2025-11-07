
const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value;
}
function onChecked(e) {
    const inChecked = e.target.checked;
    heading.textContent = inChecked ? 'Checking' : 'Not Checked';
}
function onFocus() {
    console.log(`Input is Focused.`);
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}
function onBlur() {
    console.log(`Input is Not Focused.`);
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'red';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);