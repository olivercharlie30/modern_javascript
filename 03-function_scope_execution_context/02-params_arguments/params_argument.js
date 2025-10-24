

//DEFAULT PARAMS
function registerUser(user = 'oliver') {
    
    return `${user} is registered.`;
    
}
console.log(registerUser());




//REST PARAMS
function sum(...numbers) {
    
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));




//OBJECT AS PARAMS
function loginUser(user) {
    
    return `The user ${user.name} with the id of ${user.id} is logged in.`;

}

const user = {
    id:100,
    name: 'admin oliver',
};

console.log(loginUser(user));
console.log(loginUser({ id: 200, name: 'jessica', }),);




//01.ARRAYS AS PARAMS 
function getRamdom(arr) {
    const ramdomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[ramdomIndex];
    console.log(item);
}

console.log(getRamdom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
