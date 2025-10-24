
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

div.style.backgroundColor = 'green';
div.style.padding = '8px';
div.style.borderRadius = '5px';
div.style.margin = '5px';

const text = document.createTextNode('New Div');
div.appendChild(text);

document.body.appendChild(div);

console.log(div);



