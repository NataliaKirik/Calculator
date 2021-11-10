import {Calculator} from "./_calculator";

const numberButtons = document.querySelectorAll('[data-number]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const previousOperationElement = document.querySelector('[data-previous-operation]')
const simpleOperationButtons = document.querySelectorAll('[data-simple-operation]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear-all]')
const memoryElement = document.querySelector('[data-memory]')
const memoryButtons = document.querySelector('[data-memory-operation]')


const calculator = new Calculator(previousOperationElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.displayData()
    })
})
simpleOperationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.displayData()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.calculateOperations(button.innerText)
        calculator.displayData()
    })
})
equalButton.addEventListener('click', () => {
    calculator.calculateSimpleOperations()
    calculator.calculateOperations()
    calculator.displayData()
})
allClearButton.addEventListener('click', () => {
    calculator.clearAll()
    calculator.displayData()
})
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.displayData()
})
