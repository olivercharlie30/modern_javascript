console.log("hello world");
console.warn("warning");
console.info("Information");
console.table({name:'oliver', email:'oliver@gamil.com'});

console.error("Alert");
console.groupEnd();

const name = {
    name: 'oliver charlie',
    age:30
}
const styles = 'padding:10px; background-color:green; color:white;';
const error = 'padding:10px; background-color:red; color:white;';

console.log(`%c hi ${name.name} how doing.`, styles);
console.log(`%c ${name.name} you'r code are a lot of error.`, error);