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
let operator = 'add';
let result = 0;

const operate = function(a,operation,b) {
    if (operation == 'add') {
       add(a,b);
   } else if (operation = 'subtract') {
       subtract(a,b);
   } else if (operation = 'multiply') {
       multiply(a,b);
   } else if (operation = 'divide') {
       divide(a,b);
   } else {
       alert("Please enter a proper operation");
   }
};


