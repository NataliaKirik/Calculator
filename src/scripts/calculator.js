export class Calculator {
    constructor(previousOperationElement, currentOperandTextElement, memoryElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryElement = memoryElement
        this.clearAll()
    }

    executeCommandWithOneOperand(command) {
        this.currentOperand = command.execute(this.currentOperand)
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

    chooseMemoryOperation(memoryOperation) {
        if (this.currentOperand === '') return
        if (this.memory !== '' || memoryOperation === 'MC' || memoryOperation === 'MR') {
            this.memoryOperation = memoryOperation
            this.memoryOperations()
        } else {
            this.memory = this.currentOperand
        }

        this.memoryOperation = memoryOperation
    }

    memoryOperations() {
        let memoryResult = this.memory
        let memoryBlock = parseFloat(this.memory)
        const currentBlock = parseFloat(this.currentOperand)
        if (isNaN(currentBlock)) return
        switch (this.memoryOperation) {
            case 'M+':
                memoryResult = memoryBlock + currentBlock
                break
            case 'M-':
                memoryResult = memoryBlock - currentBlock
                break
            case 'MR':
                if (this.memory === '' || isNaN(this.memory)) {
                    memoryResult = ''
                } else {
                    this.currentOperand = memoryResult
                }
                break
            case 'MC':
                memoryResult = ''
                break
            default:
                return
        }
        this.memory = memoryResult
        this.memoryOperation = undefined
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
        if (this.memoryOperation) {
            this.memoryElement.innerText = this.memory
        } else {
            this.memoryElement.innerText = ''
        }
    }
}


