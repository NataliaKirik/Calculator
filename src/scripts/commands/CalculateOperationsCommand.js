export class CalculateOperations {
    constructor(operation) {
        this.operation = operation
    }

    execute(currentOperand) {
        if (currentOperand === '') {
            throw Error('enter value')
        }
        let result = currentOperand
        const currentBlock = parseFloat(currentOperand)
        if (isNaN(currentOperand)) return
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
        return result
    }
}
