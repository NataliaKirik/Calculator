import {BaseCommand} from './BaseCommand'

export class InvolutionCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return Math.pow(this.currentOperand, this.previousOperand)
    }
}
