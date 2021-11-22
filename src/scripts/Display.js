export class Display {
    constructor(previousOperationElement, currentOperandTextElement, memoryElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryElement = memoryElement
    }

    showData(previousOperand, operation, currentOperand, memory) {
        this.previousOperationElement.innerText = `${previousOperand} ${operation}`
        this.currentOperandTextElement.innerText = currentOperand
        this.memoryElement.innerText = memory

        if (operation) {
            this.previousOperationElement.innerText = `${previousOperand} ${operation}`
        } else {
            this.previousOperationElement.innerText = ''
        }
    }
}
