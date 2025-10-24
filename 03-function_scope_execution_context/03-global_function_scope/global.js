//window.alert("global function");

function run() {
    
    let x = 100;

    console.log(window.innerHeight);
    console.log(`${x} in function`);

    
    if (true) {
        
        console.log(x, 'in block');
    }
}
run();
