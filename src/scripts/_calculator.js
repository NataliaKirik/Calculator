export class Calculator {
    constructor(previousOperationElement, currentOperandTextElement, memoryElement) {
        this.previousOperationElement = previousOperationElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryElement = memoryElement
        this.currentOperand = ''

    }

    executeCommand(command) {
        this.currentOperand = command.execute(this.currentOperand)

        // this.currentOperandTextElement.innerText = this.currentOperand
    }
}

// export class DisplayDataDependingOnOperation {
//     constructor(currentOperandTextElement) {
//         this.currentOperandTextElement = currentOperandTextElement
//     }
//
//     execute(operation) {
//         this.currentOperandTextElement = operation.execute(this.currentOperandTextElement)
//
//     }
// }
//
// export class DisplayPreviousOperation {
//     constructor(previousOperationElement, previousOperand, operation) {
//         this.previousOperationElement = previousOperationElement
//         this.previousOperand = previousOperand
//         this.operation = operation
//     }
//
//     execute(operation) {
//         if (operation) {
//             this.previousOperationElement = `${this.previousOperand} ${this.operation}`
//         } else {
//             this.previousOperationElement = ''
//         }
//     }
// }


