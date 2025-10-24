
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0; 
});
console.log(evenNumbers);


const shortVersionArrow = numbers.filter((num) => num % 3 === 0);
console.log(shortVersionArrow);



//Same with foreach
let evNumbers = [];
numbers.forEach((num) => {
    if (num % 4 === 0) {
        evNumbers.push(num);
    }

});
console.log(evNumbers);



const companies = [
    { name: 'honda', category: 'motorcycle', start: 1981, end: 2004 },
    { name: 'kawasaki', category: 'motorcycle', start: 1600, end: 2025 },
    { name: 'yamaha', category: 'motorcycle', start: 1577, end: 2010 },
    { name: 'ford', category: 'auto', start: 1330, end: 20020 },
    { name: 'kia', category: 'auto', start: 1972, end: 2015 },
     {name: 'toyota', category: 'auto', start: 1987, end: 2007},
        
];

//GET Only auto Companies
const autoCompanies = companies.filter(
    (auto) => auto.category === 'auto',
);
console.log(autoCompanies);



//GET Companies that started in or after and end
const yearCompanies = companies.filter((year) =>
    year.start >= 1980 && year.end <= 2004
);
console.log(yearCompanies);



//GET Companies that lasted 10 years or more 
const longCompanies = companies.filter((longYear) => 
    longYear.end - longYear.start >= 10
);
console.log(longCompanies);