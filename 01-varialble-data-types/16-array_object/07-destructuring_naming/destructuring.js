
const firstName = 'oliver';
const lastName = 'lapinig';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
}


//Destructuring

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'earl',
    }
};

const {
    id: todoId,
    title,
    user: { name },
} = todo;

console.log(todoId, title, name);



//Destructuring
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest)