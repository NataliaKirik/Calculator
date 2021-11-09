const numberButtons = document.querySelectorAll('[data-number]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const simpleOperationButtons = document.querySelectorAll('[data-simple-operation]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperationElement = document.querySelector('[data-previous-operation]')
// const memoryElement = document.querySelector('[data-memory]')
// const memoryButtons = document.querySelector('[data-memory-operation]')


let currentOperand = ''
let lastOperand = '';
let lastOperation = '';
let haveDot = false
let result = null
// let memory = null


numberButtons.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (event.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (event.target.innerText === "." && haveDot) {
            return;
        }
        currentOperand += event.target.innerText;
        currentOperandTextElement.innerText = currentOperand;
    });
});

simpleOperationButtons.forEach((operation) => {
    operation.addEventListener("click", (event) => {
        if (!currentOperand) return;
        haveDot = false;
        const operationName = event.target.innerText;
        if (previousOperationElement && currentOperand && lastOperand) {
            simpleMathOperation();
        } else {
            result = parseFloat(currentOperand);
        }
        setCurrentNumberToMemory(operationName);
        lastOperation = operationName;
    });
});
operationButtons.forEach((operation) => {
    operation.addEventListener("click", (event) => {
        if (!currentOperand) return;
        haveDot = false;
        if (currentOperand) {
            mathOperation(event.target.innerText);
        } else {
            result = parseFloat(currentOperand);
        }
    });
});
// memoryButtons.forEach((operation) => {
//     operation.addEventListener("click", () => {
//         if (!currentOperand) return;
//         if (currentOperand) {
//            //
//         } else {
//             result = parseFloat(currentOperand);
//         }
//     });
// });

function setCurrentNumberToMemory(name = "") {
    lastOperand += currentOperand + " " + name + " ";
    previousOperationElement.innerText = lastOperand;
    currentOperandTextElement.innerText = "";
    currentOperand = '';
}

function simpleMathOperation() {
    switch (lastOperation) {
        case '*':
            result = parseFloat(result) * parseFloat(currentOperand);
            break
        case '+':
            result = parseFloat(result) + parseFloat(currentOperand);
            break
        case '-':
            result = parseFloat(result) - parseFloat(currentOperand);
            break
        case '÷':
            result = parseFloat(result) / parseFloat(currentOperand);
            break
        case '%':
            result = parseFloat(result) % parseFloat(currentOperand);
            break
        default:
            break
    }
    lastOperand = result
    currentOperand = '';
}

function mathOperation(operation) {
    switch (operation) {
        case 'x²':
            result = parseFloat(currentOperand) ** 2
            break
        case 'x³':
            result = parseFloat(currentOperand) ** 3
            break
        case '1/x':
            result = 1 / parseFloat(currentOperand)
            break
        case '√x':
            result = Math.sqrt(parseFloat(currentOperand))
            break
        case '∛x':
            result = Math.cbrt(parseFloat(currentOperand))
            break
        case 'log':
            result = Math.log(parseFloat(currentOperand))
            break
        case 'log10':
            result = Math.log10(parseFloat(currentOperand))
            break
        default:
            break
    }
    currentOperandTextElement.innerText = result
}



equalButton.addEventListener('click', () => {
    if (!currentOperand || !lastOperand) return;
    haveDot = false;
    simpleMathOperation();
    setCurrentNumberToMemory();
    currentOperandTextElement.innerText = result;
    currentOperand = result;
    lastOperand = '';
});

allClearButton.addEventListener("click", () => {
    lastOperand = "";
    currentOperand = "";
    previousOperationElement.innerText = "";
    currentOperandTextElement.innerText = "";
    result = "";
});

deleteButton.addEventListener("click", () => {
    if (currentOperandTextElement.innerText.length) {
        currentOperandTextElement.innerText = currentOperandTextElement.innerText.slice(0, -1)
        currentOperand = currentOperandTextElement.innerText
    } else {
        currentOperand = ''
    }
});
