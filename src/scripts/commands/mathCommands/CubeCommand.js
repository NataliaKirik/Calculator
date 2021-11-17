import {BaseCommand} from './BaseCommand'

export class CubeCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        return this.currentOperand ** 3
    }
}
