
//
let x;

const todo =new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;
    

x = todo;

const person = {
    address: {
        coords: {
            lat:42.9384,
            lng:-71.3232
        }
    }
}

x = person.address.coords.lat;


const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Oliver', },
    { id: 2, name: 'Jess', },
    {id: 3, name: 'Zachary earl', }
]

x = todos[0].name;
x = Object.keys(todo);
x = Object.keys(todo).length;

x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty();

console.log(x);