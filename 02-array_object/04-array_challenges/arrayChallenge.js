

/*Use some of the array methods that we looked at to mutate
 the following array to = the expected result below:*/

 //Challenges
const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr);


//Challenges
const arr1 = [1, 2, 3, 4, 50];
const arr2 = [5, 6, 7, 8, 9, 10];

//Solution
const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3)

//Solution
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1)


console.log(arr4)


