import {BaseCommand} from './BaseCommand'

export class EvolutionCommand extends BaseCommand {
    constructor(currentOperand, previousOperand) {
        super();
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    execute() {
        return Math.pow(this.currentOperand, 1 / this.previousOperand)
    }
}
