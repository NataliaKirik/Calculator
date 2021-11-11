export class Calculator {
    constructor(previousOperationElement, currentOperandTextElement, memoryElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryElement = memoryElement
        this.clearAll()
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number
        if (this.currentOperand.startsWith('0') &&
            this.currentOperand.length > 1 &&
            !this.currentOperand.includes('.')
        ) {
            this.currentOperand = this.currentOperand.slice(1)
        }
    }

    chooseOperation(operation, isSingleOperation) {
        if (this.currentOperand === '') return
        if (!isSingleOperation) {
            if (this.previousOperand !== '') {
                this.calculateOperations()
            }
            //add current operand to second display's block
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
        }
        this.operation = operation
        this.isSingleOperation = isSingleOperation
    }

    chooseMemoryOperation(memoryOperation) {
        if (memoryOperation) {
            if (this.memory) {
                this.memoryOperations()
            } else {
                this.memory = this.currentOperand
            }
        }
        this.memoryOperation = memoryOperation
    }

    calculateOperations() {
        let result = this.currentOperand
        const previousBlock = parseFloat(this.previousOperand)
        const currentBlock = parseFloat(this.currentOperand)
        if (!this.isSingleOperation) {
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
                default:
                    return
            }
            this.previousOperand = ''
        }
        if (this.isSingleOperation && this.operation) {
            if (isNaN(currentBlock)) return
            switch (this.operation) {
                case 'x²':
                    result = currentBlock ** 2
                    break
                case 'x³':
                    result = currentBlock ** 3
                    break
                case '1/x':
                    result = 1 / currentBlock
                    break
                case '√x':
                    result = Math.sqrt(currentBlock)
                    break
                case '∛x':
                    result = Math.cbrt(currentBlock)
                    break
                case 'log':
                    result = Math.log(currentBlock)
                    break
                case 'log10':
                    result = Math.log10(currentBlock)
                    break
                default:
                    break
            }
        }
        this.currentOperand = result
        this.operation = undefined
    }

    memoryOperations() {
        let memoryResult = this.memory
        let memoryBlock = parseFloat(this.memory)
        const currentBlock = parseFloat(this.currentOperand)
        if (isNaN(memoryBlock) || isNaN(currentBlock)) return
        switch (this.memoryOperation) {
            case 'M+':
                memoryResult = memoryBlock + currentBlock
                break
            case 'M-':

                break
            case 'MR':

                break
            case 'MC':

                break
            default:
                return
        }
        this.memory = memoryResult
    }

    clearAll() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.memory = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
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
