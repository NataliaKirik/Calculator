import {BaseCommand} from '../BaseCommand'

export class SubtractCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return this.currentOperand - this.previousOperand
    }
}
