//step 1
const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

//step2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);


//step3
const { title: firstBook } = library[2];
console.log(firstBook);


//Step 4
const libraryJson = JSON.stringify(library);

console.log(libraryJson);