
const colorObj = {

    color1: 'red',
    color2: 'blue',
    color3: 'white',
    color4: 'black',
};



for (const key in colorObj) { 
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'yello'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}