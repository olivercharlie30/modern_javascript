const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

listItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.remove();
        console.log(e.target);
    })
})