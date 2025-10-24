
//QUERYSELECTORALL()

// const listItems = document.querySelectorAll('#item');

// console.log(listItems[0].innerText);
// listItems[0].style.color = 'blue';


// listItems.forEach((item, index) => {
//     item.style.color = 'gold';

//     if (index === 1) {
//         item.remove();
//     }

//     if (index === 0) {
//         item.innerHTML`Star Apple
//                       <button class='remove-item btn-link text-red'>
//                       <i class='fa-solid fa-xmark'></i>
//                       </button>
//                        `;
//     }
// });

const listItems2 = document.querySelectorAll('#item');

const listArray = Array.from(listItems2);
listArray.forEach( item => {
    console.log(item.innerText);
});

console.log(listArray[0]);


const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[2].innerText);
