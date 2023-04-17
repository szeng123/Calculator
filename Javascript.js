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

/* Number and operation functions */

const buttons = document.getElementsByClassName('button'); // select calculator buttons 
const displayValue = document.getElementById('current-results'); // select calculator display area

const numberButtons = document.getElementsByClassName('number-button'); 

let x = 0; // counter for array elements
const numberArray = []; // initialize empty array 
numberArray.length = 17; //calculator display size limit

const updateDisplay = e => {    // event to update 2nd row calculator display (limit of 17 digits)
    if (x < numberArray.length) {
    numberArray[x] = e.target.textContent;
    x++;
    displayValue.innerHTML = concatenateNumbers(numberArray);
    };
}


function concatenateNumbers(numbers) {
    return numbers.join('');
}

for (let button of numberButtons) {
    button.addEventListener('click', updateDisplay);
}