
// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run
                      // as long as it is met or until the condition is false
//INCREMENT EXPRESSION - Conditiona that will be executed after each.
                      //iteration of the loop. Usually increment the valiable.
// STATEMENT - Code that will ne executed each time the loop is run.
                     // to execute a `block` of code, user the `{}` syntax.
                
for (let i = 0; i <= 10; i++) {
    console.log(`Number ${i}`);
}


const user = ['oliver', 'jessica', 'zachary earl'];

for (let x = 0; x < user.length; x++) {
    console.log(`user: ${user[x]}`);
  
}



for (let x = 0; x <= 10; x++) {
    if (x === 7) {
        console.log(`7 is my lucky number`);
        break;
    } else {
        console.log(`number ${x}`);
    }
}


//NESTED LOOPS
for (let x = 1; x <= 10; x++){

    console.log(`number ${x}`);
     
    for (let i = 1; i <= 5; i++){
        console.log(`${x} * ${i} = ${x * i}`);
    }

}



//LOOP THROUGH AN ARRAY
const names = ['ivana', 'sarah', 'robin'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'ivana') {
        console.log(`${names[i]} is the best artest`);
        break;
    } else {
        console.log(`${names[i]}`);
     }
}


//Continue
for (let i = 0; i <= 15; i++) {
    if (i === 13) {
        console.log(`Skipping 13....`);
        continue;
    }

    console.log(i);
}