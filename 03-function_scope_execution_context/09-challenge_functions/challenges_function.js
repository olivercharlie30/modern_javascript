/* 
Challenges 1
Create a function called getCelsius() that takes a temperature
in fashrenheit as an argument and returns the temperature in cetsius.

For bonus points, write it as a one line arrow function
*/

function getCelsius(f) {
    const celsius = (f - 32) * 5 / 9;
    return celsius;
}
console.log(getCelsius(50));



//ARROW FUNCTION ONE LINE
const setCelsius = (f)=> ((f - 32) * 5) / 9;
console.log(`The temp is ${setCelsius(10)} \xB0C`);




//CHALLENGES 2
function minMax(arr) {
    const min = Math.min(...arr);
    console.log(min);

     const max = Math.max(...arr);
    console.log(max);


    return {
        min,
        max,
    };
}
minMax([1, 2, 3, 4, 5]);



//CHALLENGES 3
((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a length if ${length} and a width of ${width} is ${area}.`;

    console.log(output);
})(20, 10);

