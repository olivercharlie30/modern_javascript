
let output;

//GET CHILD ELEMENTS

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].className;
output = parent.children[1].innerText;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'child Two';
parent.children[1].style.color = 'green';

parent.firstElementChild.innerText = 'child One';
parent.lastElementChild.innerText = 'child five';


//GET PARENT ELEMENT FROM CHILD
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '2px solid maroon';
child.parentElement.style.padding = '5px';


//SIBLING ELEMENTS
const secondItem = document.querySelector('.child:nth-child(2)');
secondItem.innerText = 'child Two';

output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'red';
secondItem.previousElementSibling.style.color = 'orange';


console.log(output);