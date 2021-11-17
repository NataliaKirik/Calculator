import {BaseCommand} from './BaseCommand'

export class DivisionCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return this.currentOperand / this.previousOperand
    }
}
