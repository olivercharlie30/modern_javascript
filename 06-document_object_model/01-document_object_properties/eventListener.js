/**
 * WHAT IS ARE EVENT
 * 
 * action or occurrences that happen in the 
 * system you are programming, which the system tells you about 
 * so you code can react to them.
 * 
 * /Click on an element
 * /Typing into a text field
 * /Hovering over and element
 * /Submitting a form
 * /Clossing a window
 * /Dragging an element
 * /Resizing an element etc etc.
 * 
 * 
 * 
 */

//JavaScript Event Listener

const clearBtn = document.querySelector('.buttonRun');

function onClear() {
    const itemList = document.querySelector('ul');
  //  itemList.innerHTML = '';
    const item = itemList.querySelectorAll('li');
    // item.forEach((item) => item.remove());
    
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// clearBtn.addEventListener('click', () => {
//     alert('clear item');
// });


// clearBtn.onclick = function () {
//     alert('clear item2');
// };


//clearBtn.onclick = () => alert('clear item3');

clearBtn.addEventListener('click', onClear);
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => {
//     clearBtn.click();
// }, 2000);