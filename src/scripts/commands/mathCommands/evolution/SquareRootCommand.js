import {BaseCommand} from '../BaseCommand'

export class SquareRootCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        return this.currentOperand ** (1 / 2)
    }
}
