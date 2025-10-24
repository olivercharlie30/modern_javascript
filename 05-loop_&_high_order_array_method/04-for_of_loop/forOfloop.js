
const items = ['book', 'table', 'chair', 'knife'];
const users = [
    { name: 'oliver' },
    { name: 'jessica' },
    {names: 'zachary earl'},
];


for ( const item of items){
    console.log(`${item}`);
}


for (const user of users) {
    console.log(`${user.name}`);
}


//LOOP OVER STRINGS
const str = 'hello worlds';

for (const letter of str) {
    console.log(` ${letter}`);
}


//LOOP OVER MAPS
const map = new Map();

map.set('name', 'kevin Durant');
map.set('age', 40);

for (const [key, value] of map) {
    console.log(key, value);
}