export class BaseCommand {
    constructor(currentOperand, previousOperand) {
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return 'method does not implemented'
    }
}
