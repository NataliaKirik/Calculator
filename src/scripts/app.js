import '../styles/style.css'
import {Calculator} from "./calculator";
import {AppendNumberCommand} from "./commands/AppendNumberCommand";
import {OneOperandOperationsCommand} from "./commands/OneOperandOperationsCommand";
import {DeleteCommand} from "./commands/DeleteCommand";
import {ChangeOperandSignCommand} from "./commands/ChangeOperandSignCommand";
import {MemoryCommand} from "./commands/MemoryCommand";

const calculatorElement = document.querySelector('[data-calculator]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const previousOperationElement = document.querySelector('[data-previous-operation]')
const memoryElement = document.querySelector('[data-memory]')
const calculatorButtonsElements = document.querySelectorAll('[data-button]')


const calculator = new Calculator(previousOperationElement, currentOperandTextElement, memoryElement)

calculatorElement.addEventListener('click', (event) => {
    if (event.target.dataset.number === '') {
        calculator.executeCommandWithCurrentOperand(new AppendNumberCommand(event.target.innerText))
    }

    if (event.target.dataset.operation === '') {
        calculator.executeCommandWithCurrentOperand(new OneOperandOperationsCommand(event.target.innerText))
    }

    if (event.target.dataset.delete === '') {
        calculator.executeCommandWithCurrentOperand(new DeleteCommand())
    }

    if (event.target.dataset.memoryOperation === '') {
        if (event.target.innerText === 'MR') {
            calculator.executeCommandWithCurrentOperand(new MemoryCommand(event.target.innerText))
        }
        calculator.executeCommandWithMemory(new MemoryCommand(event.target.innerText))
    }

    if (event.target.dataset.changeSign === '') {
        calculator.executeCommandWithCurrentOperand(new ChangeOperandSignCommand())
    }

    if (event.target.dataset.twooperandOperation === '') {
        calculator.chooseOperation(event.target.innerText)
    }

    if (event.target.dataset.equal === '') {
        calculator.calculateOperations()
    }

    if (event.target.dataset.clearAll === '') {
        calculator.clearAll()
    }

    calculator.displayPreviousOperand()
    calculator.displayCurrentOperand()
    calculator.displayMemory()

    if (currentOperandTextElement.innerHTML.startsWith('Error')) {
        calculatorButtonsElements.forEach((button) => {
            button.setAttribute("disabled", "disabled")
        })
    } else {
        calculatorButtonsElements.forEach((button) => {
            button.removeAttribute("disabled")
        })
    }
})

