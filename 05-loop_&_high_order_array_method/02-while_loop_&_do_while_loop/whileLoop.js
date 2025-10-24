
let i = 0;

while (i <= 10) {
    console.log(`number ${i}`);
    i++;
};




// LOOP OVER ARRAYS
const arr = [10, 20, 30, 40, 50];
let x = 0;

while (x < arr.length) {
    console.log(arr[x]);
    x++;
};



//NESTING WHILE LOOP
let y = 0;

while (y <= 3) {
    console.log(`number ${y}`);

    let j = 1;

    while (j <= 3) {
        console.log(`while loop: ${y} * ${j} = ${y * j}`);
        j++;
    }

    y++;
} 


//DO WHILE LOOP
let k = 0;
do {
    console.log(`do while loop: ${k}`);
    k++;
} while (k <= 5);