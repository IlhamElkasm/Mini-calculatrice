let inputN = document.getElementById("input");
let outputN = document.getElementById("output");
let operator = '';

function addNumber(numbr){
    inputN.value += numbr;
}

function addDecimal(){
    if(!inputN.value.includes('.')) {
        inputN.value += '.';
    }
}

function clearInput(){
    inputN.value = "";
}

function clearInpOut(){
    inputN.value = "";
    outputN.value = "";
}

function addOperator(op){
    operator = op;
    if (inputN.value !== '') {
        inputN.value += ' ' + operator + ' ';
    }
}


function calculateResult(){
    let Nomb = inputN.value;
    let numbers = Nomb.split(' ');
    let result;

    let num1 = parseFloat(numbers[0]);
    let num2 = parseFloat(numbers[2]);

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
            if (num2 === 0) {
                outputN.value = "Error: Division by zero";
                return;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            outputN.value = "Error: Invalid operator";
            return;
    }
     //inputN.value = result;
     outputN.value = result;
}