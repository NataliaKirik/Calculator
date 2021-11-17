import {BaseCommand} from './BaseCommand'

export class CubeRootCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        return Math.cbrt(  this.currentOperand)
    }
}