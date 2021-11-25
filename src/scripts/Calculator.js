import {SumCommand} from "./commands/mathCommands/sum/SumCommand";
import {SubtractCommand} from "./commands/mathCommands/subtract/SubtractCommand";
import {MultiplyCommand} from "./commands/mathCommands/multiply/MultiplyCommand";
import {DivisionCommand} from "./commands/mathCommands/division/DivisionCommand";
import {PercentCommand} from "./commands/mathCommands/percent/PercentCommand";
import {InvolutionCommand} from "./commands/mathCommands/involution/InvolutionCommand";
import {EvolutionCommand} from "./commands/mathCommands/evolution/EvolutionCommand";

export class Calculator {
    constructor() {
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
        const previousBlock = Number(this.previousOperand)
        const currentBlock = Number(this.currentOperand)
        if (isNaN(previousBlock) || isNaN(currentBlock)) return
        if (this.currentOperand === '') return

        let command
        switch (this.operation) {
            case '+':
                command = new SumCommand(previousBlock, currentBlock)
                break
            case '-':
                command = new SubtractCommand(previousBlock, currentBlock)
                break
            case '*':
                command = new MultiplyCommand(previousBlock, currentBlock)
                break
            case '÷':
                command = new DivisionCommand(previousBlock, currentBlock)
                break
            case '%':
                command = new PercentCommand(previousBlock, currentBlock)
                break
            case 'xʸ':
                command = new InvolutionCommand(previousBlock, currentBlock)
                break
            case 'ʸ√x':
                command = new EvolutionCommand(previousBlock, currentBlock)
                break
            default:
                break
        }

        this.previousOperand = ''
        this.currentOperand = command.execute()
        this.operation = undefined
    }

    clearAll() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.memory = ''
        this.operation = ''
    }

    returnCalculateData() {
        return {
            previousOperand: this.previousOperand,
            operation: this.operation,
            currentOperand: this.currentOperand,
            memory: this.memory
        }
    }
}

