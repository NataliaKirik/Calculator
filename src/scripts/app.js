import '../styles/style.css'
import {Calculator} from "./calculator";

const calculatorElement = document.querySelector('[data-calculator]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const previousOperationElement = document.querySelector('[data-previous-operation]')
const memoryElement = document.querySelector('[data-memory]')


const calculator = new Calculator(previousOperationElement, currentOperandTextElement, memoryElement)

calculatorElement.addEventListener('click', (event) => {
    if (event.target.dataset.number === '') {
        calculator.appendNumber(event.target.innerText)
    }
    if (event.target.dataset.simpleOperation === '') {
        calculator.chooseOperation(event.target.innerText, false)
    }
    if (event.target.dataset.operation === '') {
        calculator.chooseOperation(event.target.innerText, true)
    }
    if (event.target.dataset.equal === '') {
        calculator.calculateOperations()
    }
    if (event.target.dataset.delete === '') {
        calculator.delete()
    }
    if (event.target.dataset.clearAll === '') {
        calculator.clearAll()
    }
    if (event.target.dataset.memoryOperation === '') {
        calculator.chooseMemoryOperation(event.target.innerText)
    }
    calculator.displayData()
})

