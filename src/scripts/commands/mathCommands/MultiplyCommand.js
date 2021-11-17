import {BaseCommand} from './BaseCommand'

export class MultiplyCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return this.currentOperand * this.previousOperand
    }
}
