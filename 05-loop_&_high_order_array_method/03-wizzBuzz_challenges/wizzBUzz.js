
/**
 FIZZ BUZZ Challenges

 .Print/log the numbers from 1 to 100
 .For multiples of these print 'fizz' instead of the number
 .For multiple of five print 'buzz'
 .For numbers which are multiple of booth three and five print 'FizzBuzz'
 */

//FOR LOOP
for (let i = 1; i <= 10; i++){
     
    if (i % 3 === 0) {
        console.log(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(` ${i}`);
    }
}