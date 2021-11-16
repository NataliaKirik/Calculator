import '../styles/style.css'
import {Calculator} from "./calculator";
import {AppendNumberCommand} from "./commands/AppendNumberCommand";
import {CalculateOperations} from "./commands/CalculateOperationsCommand";

const calculatorElement = document.querySelector('[data-calculator]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const previousOperationElement = document.querySelector('[data-previous-operation]')
const memoryElement = document.querySelector('[data-memory]')


const calculator = new Calculator(previousOperationElement, currentOperandTextElement, memoryElement)

calculatorElement.addEventListener('click', (event) => {
    if (event.target.dataset.number === '') {
        calculator.executeCommand(new AppendNumberCommand(event.target.innerText))
    }
    if (event.target.dataset.twooperandOperation === '') {
        calculator.chooseOperation(event.target.innerText, false)
    }
    if (event.target.dataset.operation === '') {
        calculator.executeCommand(new CalculateOperations(event.target.innerText))
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
    if (event.target.dataset.changeSign === '') {
        calculator.changeOperandSign()
    }
    calculator.displayData()
})

