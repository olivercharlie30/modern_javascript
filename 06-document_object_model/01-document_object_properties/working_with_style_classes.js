const text = document.querySelector('p');
const itemlist = document.querySelector('.item-list');
const items = document.querySelector('li');


const run = () => {
    
  //className
  console.log(itemlist.className);


  //classList
  console.log(itemlist.classList);

  itemlist.classList.forEach((c) => console.log(c));

  //text.classList.add('dark');
  // text.classList.remove('card');
  //text.classList.toggle('hidden');
  //text.classList.replace('card', 'dark');

  //CHANGE STYLE
  //itemlist.style.lineHieght = '3';
  // const element = Array.from(itemlist);

  // element.forEach((item, index) => {
  //   item.style.color = 'red';

  //   if (index === 2) {
  //     item.style.color = 'blue';
  //   }
  // });




};







document.querySelector('.buttonRun').onclick = run;