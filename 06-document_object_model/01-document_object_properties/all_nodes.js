let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'child one';
output = parent.childNodes[5].style.color = 'gold';

//PARENT NODE
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = 'violet';
child.parentNode.style.padding = '5px';


//SIBLINGS
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.textContent;
output = secondItem.innerHTML = 'child two';

output = secondItem.nextSibling;
output = secondItem.previousSibling;


console.log(output);