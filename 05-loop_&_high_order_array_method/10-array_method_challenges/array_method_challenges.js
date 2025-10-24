
//CHALLENGES 1
const people = [
    {
        firstName: 'oliver',
        lastName: 'lapinig',
        email: 'oliverlapinig@gmail.com',
        phone: '09105096099',
        age:30,
    },
    {
        firstName: 'jessica',
        lastName: 'almarez',
        email: 'jessicaAlmarez@gmail.com',
        phone: '0933000150',
        age:25,
    },
    {
        firstName: 'zachary earl',
        lastName: 'lapinig',
        email: 'zacharyearl@gmail.com',
        phone: '0915500320',
        age: 1,
    }
];

const youngPeople = people.filter((person) => person.age === 25);

console.log(youngPeople);


const agePeople = people.map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email,
}));
    
console.log(agePeople);


//CHALLENGES 2
//add all of the positive numbers in the array.
const numbers = [2, -30, 50, 20, -20, -9, 7];

const positiveSum = numbers
    .filter((num) => num > 0)
    .reduce((acc, cur) => acc + cur, 0);


console.log(positiveSum);


//CHALLENGES 3
//Create a new array called capitalizedWords with the words from the words
//array with the first letter of each word capitalized.
const word = ['coder', 'programmer', 'developer'];

const capitalizedWords = word.map((word) => { 
    return word.toUpperCase();
});
console.log(capitalizedWords);



const sliceWords = word.map((sliceWord) => {
    return sliceWord[0].toLocaleUpperCase() + sliceWord.slice(1, word.length);
});
console.log(sliceWords);