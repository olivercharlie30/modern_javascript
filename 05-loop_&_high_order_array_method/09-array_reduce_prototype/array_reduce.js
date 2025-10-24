
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);



//USING A FOR LOOP

const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
};

const cart = [
    { id: 1, name: 'product 1', price: 130 },
    { id: 2, name: 'product 2', price: 145 },
    { id: 3, name: 'product 3', price: 175 },
    { id: 4, name: 'product 4', price: 150 },
    
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0);
console.log(total);

