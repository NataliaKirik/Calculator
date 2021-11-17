import {BaseCommand} from './BaseCommand'

export class SquareCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        return this.currentOperand ** 2
    }
}
