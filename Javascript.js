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
const display = document.getElementById('current-results'); // select calculator display area

const buttonPressed = e => {    // event to capture value of button press
    display.innerHTML = e.target.textContent;
}

for (let button of buttons) {
    button.addEventListener('click', buttonPressed);
}