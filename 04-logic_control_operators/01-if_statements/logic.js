
const x = 10;
const y = 15;

if (x >= y) {

    for (let i = 0; i <= 3; i++){
        console.log(`10 greater than 15 ? ${i}`)
    }

} else {
    
      for (let i = 0; i <= 3; i++){
        console.log(`10 less than 15 ? ${i}`)
    }
}


//else if 
const d = new Date(10, 17, 2025, 8, 48, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('good morning');
} else if (hour < 18) {
    console.log('good afternoon');
} else {
    console.log('good night');
}



//Nested if
if (hour < 12) {
    console.log('good morning');
    
    if (hour === 6) {
        console.log('wake up.');
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('good night');
    
    if (hour >= 20) {
        console.log('Zzzzzzz');
    }
}



if (hour >= 7 && hour < 15) {
    console.log('It is work time.')
}


if (hour === 6 || hour === 20) {
    console.log('Brush your teeth');
}