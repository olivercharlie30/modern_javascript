
//Object Literals
let x;

const person = {
    name: 'oliver',
    age: 30,
    isAdmin: true,

    address: {
        street: '123 street daan matuwid',
        city: 'Quezon city',
        state: 'Philippines',
    },
    hobbies: ['eating', 'watching'],
};

x = person.name;
x = person.age;
x = person.isAdmin;
x = person.address.street;
x = person.hobbies[1];

person.name = 'zachary earl';
person['isAdmin'] = false;

x = person;

delete person.hobbies;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello my name ${this.name}`);
}

person.greet();

const person2 = {
    'first name': 'jess',
    'last name' : 'almarez',
}

x = person2['last name'];
x = person2['first name'];

console.log(x);