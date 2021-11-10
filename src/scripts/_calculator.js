export class Calculator {
    constructor(previousOperationElement, currentOperandTextElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
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

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.calculateSimpleOperations()
        }
        this.operation = operation
        //add current operand to memory
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    calculateSimpleOperations() {
        let result
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                result = prev + current
                break
            case '-':
                result = prev - current
                break
            case '*':
                result = prev * current
                break
            case '÷':
                result = prev / current
                break
            case '%':
                result = prev % current
                break
            default:
                return
        }
        this.currentOperand = result
        this.operation = undefined
        this.previousOperand = ''
    }

    calculateOperations(operation) {
        let result
        this.operation = operation
        const current = parseFloat(this.currentOperand)
        if (isNaN(current)) return
        switch (operation) {
            case 'x²':
                result = current ** 2
                break
            case 'x³':
                result = current ** 3
                break
            case '1/x':
                result = 1 / current
                break
            case '√x':
                result = Math.sqrt(current)
                break
            case '∛x':
                result = Math.cbrt(current)
                break
            case 'log':
                result = Math.log(current)
                break
            case 'log10':
                result = Math.log10(current)
                break
            default:
                break
        }
        this.currentOperand = result
        this.operation = undefined
    }

    clearAll() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    displayData() {
        console.log(this.operation)
        this.currentOperandTextElement.innerText =
            this.currentOperand
        if (this.operation) {
            this.previousOperationElement.innerText =
                `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperationElement.innerText = ''
        }
    }
}
