// document.getElementById();

console.log(document.getElementById("shopping-logo"));



//SET ATTRIBUTES
document.getElementById("shopping-logo").title = 'shopping-list';

document.getElementById("shopping-logo").setAttribute('class', 'title');

const title = document.getElementById('shopping-logo');



//GET / CHANGE CONTENT
title.textContent = 'hello world';
title.textContent = 'hi world';
title.innerText = 'hello again';
title.innerHTML = '<strong>Shopping List More</strong>';



//CHANGE STYLES
title.style.color = 'green';
title.style.backgroundColor = "yellow";
title.style.padding = '10px';
title.style.borderRadius = '5px';
title.style.margin = '5px';

console.log(title);

//DOCUMENT>QUERYSELECTOR()
console.log(document.querySelector('#item-list'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'halo halo fruits';
secondItem.style.color = 'white';


//USE THESE METHODS ON OTHER ELEMENTS
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'green';




