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
        const previousBlock = parseFloat(this.previousOperand)
        const currentBlock = parseFloat(this.currentOperand)
        if (isNaN(previousBlock) || isNaN(currentBlock)) return
        switch (this.operation) {
            case '+':
                result = previousBlock + currentBlock
                break
            case '-':
                result = previousBlock - currentBlock
                break
            case '*':
                result = previousBlock * currentBlock
                break
            case '÷':
                result = previousBlock / currentBlock
                break
            case '%':
                result = previousBlock % currentBlock
                break
            case 'xʸ':
                result = Math.pow(previousBlock, currentBlock)
                break
            case 'ʸ√x':
                result = Math.pow(currentBlock, 1 / previousBlock)
                break
            default:
                return
        }
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

    // executeCommandWithPreviousOperand(command, operation) {
    //     this.operation = operation
    //     this.previousOperand = command.execute(this.currentOperand, this.previousOperand)
    //     this.currentOperand = ''
    // }

}


// export class TwoOperandOperationsCommand {
//     constructor(operation) {
//         this.operation = operation
//     }
//
//     execute(currentOperand, previousOperand) {
//         if (currentOperand === '') {
//             throw Error('enter value')
//         }
//         switch (this.operation) {
//             case '+':
//                 return Number(previousOperand) + Number(currentOperand)
//             case '-':
//                 return previousOperand - currentOperand
//             case '*':
//                 return previousOperand * currentOperand
//             case '÷':
//                 return previousOperand / currentOperand
//             case '%':
//                 return previousOperand % currentOperand
//             case 'xʸ':
//                 return Math.pow(previousOperand, currentOperand)
//             case 'ʸ√x':
//                 return Math.pow(currentOperand, 1 / previousOperand)
//             default:
//                 return ''
//         }
//     }
// }
