
const email = 'test@test.com';

if (email) {
    console.log(`You passed in an email`);
}
console.log(Boolean(email));



const array = [];
const object = {};


if (object) {
    console.log(`This is Truthy`);
} else {
    console.log(`This is Fulsy`);
}


//Truthy and Falsy Caveats
const children = 2;

if (!isNaN(children)) {
    console.log(`You have ${children} children.`);
} else {
    console.log(`Please enter number of children`);
}



//Checking for empty Arrays
const posts = [];

if (posts.length > 0) {
    console.log(`list posts`);
} else {
    console.log(`no posts to list`);
}


//Checking for empty Objects
const user = {
    name: 'oliver',
    age: 30,
};

if (posts.length > 0) {
    console.log(`list posts`);
} else {
    console.log(`no posts to list`);
}

