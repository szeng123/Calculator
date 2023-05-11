/* calculator functions */
let add = function(a,b) {
    return a + b
};

let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b; 

/*calculator parameters */

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

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

/* Number and operation functions */

const buttons = document.querySelector('button'); // select all calculator buttons 
const lowerDisplay = document.getElementById('lowerDisplay'); // select lower calculator display area
const upperDisplay = document.getElementById('upperDisplay'); // select upper calculator display area

const clearAction = document.getElementById('clear');
const deleteAction = document.getElementById('delete');
const equalsAction = document.getElementById('equalSign');

const firstOperand = document.getElementById('firstOperand');
const displayOperator = document.getElementById('operator');
const secondOperand = document.getElementById('secondOperand');

// syntax to generate operands
const numberButtons = document.getElementsByClassName('number-button'); // select calculator number buttons

for (let button of numberButtons) {  //loop through all numbers
    button.addEventListener('click', e => appendNumber(e.target.textContent));
};

function appendNumber(number) {
    if (number === '.' && lowerDisplay.textContent.includes('.')) return //do nothing if number already contains decimal
    else if (lowerDisplay.textContent.length > 16) return //do nothing if length of number exceeds digits displayed
    else if (lowerDisplay.textContent === '0' && number !== '.'){  // changes from zero to digit if number is pressed
        lowerDisplay.textContent = number.toString();
    } else {
    lowerDisplay.textContent = lowerDisplay.textContent.toString() + number.toString();
    }};

// syntax to determine operator
const operatorButtons = document.getElementsByClassName('operator-button'); // select operator buttons 

for (let button of operatorButtons) {
    button.addEventListener('click', e => chooseOperator(e.target.textContent));
};

function chooseOperator(operator) {
    if (operator !== null ) operate(); // if operator is declared with first and second operand, calculate result instead
    firstOperand.textContent = lowerDisplay.textContent;
    displayOperator.textContent = operator.toString();
}