export class MemoryCommand {
    constructor(operation) {
        this.operation = operation
    }

    execute(currentOperand, memory) {
        switch (this.operation) {
            case 'M+':
                return Number(memory) + Number(currentOperand)
            case 'M-':
                return memory - currentOperand
            case 'MR':
                return memory
            case 'MC':
                return ''
            default:
                return ''
        }
    }
}
