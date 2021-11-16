export class Calculator {
    constructor(previousOperationElement, currentOperandTextElement, memoryElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryElement = memoryElement
        this.memory = ''
        this.clearAll()
    }

    executeCommandWithCurrentOperand(command) {
        this.currentOperand = command.execute(this.currentOperand)
    }

    executeCommandWithMemory(command) {
        this.memory = command.execute(this.memory, this.currentOperand)
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
        this.operation = undefined
    }

    displayData() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if (this.operation) {
            this.previousOperationElement.innerText = `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperationElement.innerText = ''
        }
        this.memoryElement.innerText = this.memory
    }

    // displayCurrentOperand(currentOperand) {
    //     this.currentOperandTextElement.innerText = currentOperand
    // }
}



