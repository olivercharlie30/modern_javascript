
//Array.prototype.foreach

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

console.log(socials.__proto__);


socials.forEach( item => {    //arrow function es6
    console.log(item);
});


socials.forEach((list) => {     //arrow function es6
    console.log(list);
});


socials.forEach((list) => console.log(list) );    //arrow function es6


// Call Back
socials.forEach((list, index, arr) => console.log(`${index} - ${list}`, arr) );    //call back



//
const socialobjs = [

    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedIn.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    
];

socialobjs.forEach((item) => console.log(item.url));