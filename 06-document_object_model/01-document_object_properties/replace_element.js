
function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'replace first';

    firstItem.replaceWith9(li);
};



function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = `<li>replaced Second</li>`;
}



function replaceAllItem() {
    const lis = document.querySelector('li');

    // lis.forEach((item, index) => {

    //     if (index === 2) {
    //         item.innerHTML = `Second Item`;
    //     } else {
    //         item.innerHTML = `replace all`;
    // } 
    // });
     
    lis.forEach((item, index) => item.outerHTML = index === 1 ? `<li>replaced Second</li>` : `<li>Item</li>`);
   
};


function replaceChildHeading() {
    const header = document.querySelector('header');
    const h3 = document.querySelector('header h3');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'shoppee app';
    header.replaceChild(h2, h3);
}
replaceChildHeading();

//replaceAllItem();
//replaceFirstItem();
//replaceSecondItem();