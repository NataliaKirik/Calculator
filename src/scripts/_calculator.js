export class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clearAll()
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number
        if (this.currentOperand.toString().length > 1 && this.currentOperand.toString().startsWith('0')) {
            this.currentOperand = this.currentOperand.toString().slice(1)
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
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

    displayData() {
        this.currentOperandTextElement.innerText =
            this.currentOperand
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }

    clearAll() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
}
