/* calculator functions */
let add = function(a,b) {
    return a+b
};

let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b; 

/*calculator parameters */

let firstNumber = '';
let secondNumber = '';
let chosenOperator = null;

const operate = function(a,operation,b) {
    a = Number(a);
    b = Number(b);
    switch (operation) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '÷':
            if (b == 0) return null
            else return divide(a,b);
    };
};

/*Function to round number of float number*/ 
function RoundNumber(number) {
    if (number == null) return null;
    return Math.round(number * 1000) / 1000;
};

/* Number and operation functions */

const buttons = document.querySelector('button'); // select all calculator buttons 
const lowerDisplay = document.getElementById('lowerDisplay'); // select lower calculator display area
const upperDisplay = document.getElementById('upperDisplay'); // select upper calculator display area

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
    else if (lowerDisplay.textContent === '0' && number !== '.'){  // changes from zero to decimal number if number is pressed
        lowerDisplay.textContent = number.toString();
    } else if ((lowerDisplay.textContent == '')&&(number === '.')){
        lowerDisplay.textContent = '0' + number.toString();
    } else {
    lowerDisplay.textContent = lowerDisplay.textContent.toString() + number.toString();
    }};

// syntax to determine operator
const operatorButtons = document.getElementsByClassName('operator-button'); // select operator buttons 

for (let button of operatorButtons) {  //loop through all operator buttons
    button.addEventListener('click', e => 
    chooseOperator(e.target.textContent));
};

function chooseOperator(operator) { 
    if ((chosenOperator !== null) && (lowerDisplay.textContent === '')) { //switches operator if second operand has not been decided yet
        firstOperand.textContent = lowerDisplay.textContent;

        displayOperator.textContent = operator.toString();
        chosenOperator = displayOperator.textContent; 
    }
    else if ((chosenOperator !== null) && (secondOperand.textContent == '') && (lowerDisplay.textContent.length !==0)) { //if operator is already shown in upper display, perform operations
        secondNumber = lowerDisplay.textContent;
        let newFirstOperand = RoundNumber(operate(firstNumber, chosenOperator, secondNumber));

        if ((newFirstOperand == null) && (chosenOperator == '÷')) {
            alert('Cannot divide by zero!'); // do nothing if value is going to be null (value divided by zero)
            return;
        } else {  //update first Operand value after performing evaluation 
            firstOperand.textContent = newFirstOperand;
            firstNumber = newFirstOperand;

            displayOperator.textContent = operator.toString();
            chosenOperator = displayOperator.textContent;
        
            secondOperand.textContent = '';

            lowerDisplay.textContent = '';
        };
    } else if (secondOperand.textContent.includes('=')){   //updates first Operand after evaluation button has been pressed 
        firstOperand.textContent = lowerDisplay.textContent;
        firstNumber = firstOperand.textContent;

        displayOperator.textContent = operator.toString();
        chosenOperator = displayOperator.textContent; 

        secondOperand.textContent = '';
        lowerDisplay.textContent = '';

    } else {  // only update display with firstOperand and chosen operation 
        firstOperand.textContent = lowerDisplay.textContent;
        firstNumber = firstOperand.textContent;

        displayOperator.textContent = operator.toString();
        chosenOperator = displayOperator.textContent;

        lowerDisplay.textContent = '';
    }
};

// syntax for evaluate button operation
const equalsAction = document.getElementById('equalSign');

equalsAction.addEventListener('click', e => compute(e.target.textContent));

function compute(button) {
    if ((firstOperand.textContent !== '') && (displayOperator.textContent !== '') && (!secondOperand.textContent.includes('=')) && (lowerDisplay.textContent !== '')) {  // if firstOperand, operator and secondOperand is decided
        secondNumber = lowerDisplay.textContent; // update upper display with secondOperand and equals sign
        
        let result = RoundNumber(operate(firstNumber, chosenOperator, secondNumber));
        if ((result == null) && (chosenOperator == '÷')) {
            alert('Cannot divide by zero!'); // do nothing if value is going to be null (value divided by zero)
            return;
        } else {
        secondOperand.textContent = secondNumber + button.toString(); 
        lowerDisplay.textContent = result;
        };
    }else return  // do nothing otherwise
};

// Syntax for Clear-all button 

const clearallAction = document.getElementById('clear');

clearallAction.addEventListener('click', e => reset(e.target.textContent));

function reset(button) {
    firstOperand.textContent = '';
    firstNumber = '';
    displayOperator.textContent = '';
    chosenOperator = null;
    secondOperand.textContent = '';
    secondNumber = '';
    lowerDisplay.textContent = '0';
};

// Syntax for delete button 

const deleteAction = document.getElementById('delete');

deleteAction.addEventListener('click', e => backspace(e.target.textContent));

function backspace(button) {
    if (lowerDisplay.textContent == '0'){
        return // do nothing if the number is already 0 
    } else if (lowerDisplay.textContent.length == 1){
        lowerDisplay.textContent = '0';   //revert number to zero on last digit
    } else 
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0,-1);
};


