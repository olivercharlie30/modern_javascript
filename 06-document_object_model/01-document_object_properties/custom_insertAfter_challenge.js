
function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

}

//NEW ELEMENT TO INSERT
const li = document.createElement('li');
li.textContent = 'insert me after';


//EXISTING ELEMENT TO INSERT AFTER
const firstItem = document.querySelector('li:first-child');

//OUR CUSTOM FUNCTION
insertAfter(li, firstItem);