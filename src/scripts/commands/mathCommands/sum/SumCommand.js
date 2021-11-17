import {BaseCommand} from '../BaseCommand'

export class SumCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return this.currentOperand + this.previousOperand
    }
}
