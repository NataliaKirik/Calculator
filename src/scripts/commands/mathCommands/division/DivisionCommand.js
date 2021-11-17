import {BaseCommand} from '../BaseCommand'

export class DivisionCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        if (this.previousOperand === 0) return 'Error: You can\'t divide by zero'
        return this.currentOperand / this.previousOperand
    }
}
