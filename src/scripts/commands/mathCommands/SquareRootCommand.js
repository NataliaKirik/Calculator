import {BaseCommand} from './BaseCommand'

export class SquareRootCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        return Math.sqrt(  this.currentOperand)
    }
}
