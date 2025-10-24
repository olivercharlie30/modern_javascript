
// ||= assigns the right side side values only if the left id a falsy values.
let a = null;

if (!a) {
    a = 10;
}

a ||= 20;


a ||= a || 10; 

console.log(a);




// &&= assigns the right side value only if the left is a truthy value.

let b = 10;

if (b) {
    b = 20;
}
 
b = b && 20;

b &&= 20;

console.log(b);



// ??= assigns the right side value only if the left is null or underfined.
let c = null;


if (c === null || c === undefined) {
    c = 20;
}

console.log(c);



// TERNARY OPERATORS
const age = 30;

// Using an if statement
if (age >= 18) {
    console.log('You can Vote');
} else {
    console.log('You can not Vote');
}


//Using a TERNARY OPERATORS
age >= 18 ? console.log('You can Vote') : console.log("you can not vote");



// Assignment a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote!' : 'You can not Vote';

console.log(canVote2);



//MULTIPLE STATEMENT

const auth = true;


if (auth) {
    alert('Welcome to the dashboard');
    redirect = '/dashboard';

} else {
    alert('Access Denied');
    redirect = '/login';
}
const redirect = auth ? (alert('Welcome admin'), '/dashborad') : (alert('Access Denied'), '/login');

console.log(redirect);


auth && console.log('Welcome to the dashboard');


