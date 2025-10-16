

//Primitive data Types
// 01. String     -->Sequence of characters. Must be in quotes or backticks
//02. number      -->Integers as well as floating-point numbers
//03.boolean      -->Logical Entity / true or False
//04.null         -->Intertional Absence of any object value
//05.undifined    -->A Variable that has not yet been defined / assigned
//06.symbol       -->Built-in object whose constructor retruns a uiniques symbol
//07.bigInt       -->numbers that are greather than the "number" type can handle



//Reference Types (objects)


//string
const firstName = "oliver";

console.log(firstName, typeof firstName);

//number Floating
const floating = 20.35;
//number Integers
const Integers = 66;

console.log(floating, typeof floating)
console.log(Integers, typeof Integers)


//Boolean
const boolean = [true, false];
console.log(boolean[0], typeof boolean);


//Reference Types
person = {
    name: 'father'
}
console.log(person.name)


function sayHello() {
    console.log("hello guys");
}

const output = sayHello;
console.log(output, typeof output)