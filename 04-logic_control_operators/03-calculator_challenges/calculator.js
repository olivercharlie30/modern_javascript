
/* 
CALCULATOR CHALLENGES

Create a function called calculator that three parameters:
num1, num2 and operator. The operator can be +, =, * or /. The function should return
the result fo the calculation, if anything other four operator is passed in, the function
should return an error message.
*/


function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = `Invalid Operator`;
    }
    console.log(result);
    
    return result;
  
}
calculator(10, 5, '+');   //Called Function.