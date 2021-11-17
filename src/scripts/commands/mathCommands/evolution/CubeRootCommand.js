import {BaseCommand} from '../BaseCommand'

export class CubeRootCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        return this.currentOperand ** (1 / 3)
    }
}
