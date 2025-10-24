

//ARROW FUNCTION
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 5));


//IMPICIT RETURN
const substraction = (a, b) => a - b;
console.log(substraction(15, 7));



//RETURNING AN OBJECT
const createObj = () => ({
    name: 'earl',
    age: '8 months',
});
console.log(createObj());
console.log(createObj().name);
console.log(createObj().age);



const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log('solution 1:' + n);
});

numbers.forEach(n => console.log(`solution 2: ${n}`))
