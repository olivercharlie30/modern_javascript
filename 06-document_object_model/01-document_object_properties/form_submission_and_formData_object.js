const form = document.querySelector('#item-form');


const onSubmit = (e) => { 
    e.preventDefault();

    const item = document.querySelector('#item-input').value;
    const priority = document.querySelector('#priority-input').value;

    if (item === '' || priority === '0') {

        alert('Please fill in all fields');
        return;
    }

    console.log(item, priority);
};

const onSubmit2 = (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const item = formData.get('item'); // name
    const priority = formData.get('priority'); // name

    console.log(item, priority);
};

form.addEventListener('submit', onSubmit2);