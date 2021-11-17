import {SumCommand} from "./commands/mathCommands/SumCommand";
import {SubtractCommand} from "./commands/mathCommands/SubtractCommand";
import {MultiplyCommand} from "./commands/mathCommands/MultiplyCommand";
import {DivisionCommand} from "./commands/mathCommands/DivisionCommand";
import {PercentCommand} from "./commands/mathCommands/PercentCommand";
import {InvolutionCommand} from "./commands/mathCommands/InvolutionCommand";
import {EvolutionCommand} from "./commands/mathCommands/EvolutionCommand";

export class Calculator {
    constructor(previousOperationElement, currentOperandTextElement, memoryElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryElement = memoryElement

        this.operation = ''
        this.previousOperand = ''
        this.memory = ''
        this.clearAll()
    }

    executeCommandWithCurrentOperand(command) {
        this.currentOperand = command.execute(this.currentOperand, this.memory)
    }

    executeCommandWithMemory(command) {
        this.memory = command.execute(this.currentOperand, this.memory)
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return

        if (this.previousOperand !== '') {
            this.calculateOperations()
        }
        //add current operand to second display's block
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        this.operation = operation
    }

    calculateOperations() {
        let result = this.currentOperand
        const previousBlock = Number(this.previousOperand)
        const currentBlock = Number(this.currentOperand)
        if (isNaN(previousBlock) || isNaN(currentBlock)) return
        if (this.currentOperand === '') return
        switch (this.operation) {
            case '+':
                result = new SumCommand(previousBlock, currentBlock).execute()
                break
            case '-':
                result = new SubtractCommand(previousBlock, currentBlock).execute()
                break
            case '*':
                result = new MultiplyCommand(previousBlock, currentBlock).execute()
                break
            case '÷':
                result = new DivisionCommand(previousBlock, currentBlock).execute()
                break
            case '%':
                result = new PercentCommand(previousBlock, currentBlock).execute()
                break
            case 'xʸ':
                result = new InvolutionCommand(previousBlock, currentBlock).execute()
                break
            case 'ʸ√x':
                result = new EvolutionCommand(previousBlock, currentBlock).execute()
                break
            default:
                break
        }
        if (currentBlock > 99999999 || previousBlock > 99999999) result = 'Error: calculator can work with numbers smaller then 99 999 999'
        this.previousOperand = ''
        this.currentOperand = result
        this.operation = undefined
    }

    clearAll() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.memory = ''
        this.operation = ''
    }

    displayPreviousOperand() {
        this.previousOperationElement.innerText = `${this.previousOperand} ${this.operation}`

        if (this.operation) {
            this.previousOperationElement.innerText = `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperationElement.innerText = ''
        }
    }

    displayCurrentOperand() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }

    displayMemory() {
        this.memoryElement.innerText = this.memory
    }
}

