export class AppendNumberCommand {
    constructor(number) {
        this.valueToAppend = number
    }

    execute(currentOperand) {
        if (this.valueToAppend === '.' && currentOperand.includes('.')) return
        if (currentOperand.startsWith('0') &&
            currentOperand.length >= 1 &&
            !this.valueToAppend.includes('.') &&
            !currentOperand.includes('.')
        ) {
            return currentOperand.slice(1) + this.valueToAppend
        }
        return currentOperand + this.valueToAppend
    }
}
