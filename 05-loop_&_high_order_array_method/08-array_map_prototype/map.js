
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);



const doubleNumbers2 = [];

numbers.forEach((num) => { 
    doubleNumbers2.push(num * 2);
});
console.log(doubleNumbers2);




const companies = [
    { name: 'honda', category: 'motorcycle', start: 1981, end: 2004 },
    { name: 'kawasaki', category: 'motorcycle', start: 1600, end: 2025 },
    { name: 'yamaha', category: 'motorcycle', start: 1577, end: 2010 },
    { name: 'ford', category: 'auto', start: 1330, end: 2020 },
    { name: 'kia', category: 'auto', start: 1972, end: 2015 },
    { name: 'toyota', category: 'auto', start: 1987, end: 2007},
        
];

//Create an array of company names

const companyNames = companies.map((companyName) => companyName.name);
console.log(companyNames);


//Create na array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(companyInfo);


//Create an array of the length of each company in years
const companyYear = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + ' years',
    };
});
console.log(companyYear);