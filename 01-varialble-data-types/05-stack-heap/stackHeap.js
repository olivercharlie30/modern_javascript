
//Values are stored on the stack
const name = 'oliver';
const age = 30;

//Refence Values are stored on the heap
const person = {
    name: 'lapinig',
    age: 60,
};

let newName = name;
newName = 'papa';

let newPerson = person;
newPerson.name = 'jessica'

console.log(name, newName)
console.log(person, newName)