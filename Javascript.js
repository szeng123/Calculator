/* calculator functions */
let add = function(a,b) {
    return a + b
};

let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b; 

/*calculator parameters */
let firstNumber = 2;
let secondNumber = 3;
let operator = '+';
let result = 0;

const operate = function(a,operation,b) {
    switch (operation) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            alert('please enter an operator!');
            break;
    };
};


