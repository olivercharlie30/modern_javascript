

(function () {

    const user = 'john';
    console.log(user);

    const hello = ()=> console.log('hello from the iife');
    hello();

})();



(function (name) {
    console.log('hello ' + name);
})('shawn');



(function hello() {
    console.log('hello');
})();