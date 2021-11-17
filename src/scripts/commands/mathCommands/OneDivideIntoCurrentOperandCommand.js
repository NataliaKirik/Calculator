import {BaseCommand} from './BaseCommand'

export class OneDivideIntoCurrentOperandCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        if (this.currentOperand === 0) return 'Error: You can\'t divide by zero'
        return 1 / this.currentOperand
    }
}
