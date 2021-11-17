import {BaseCommand} from '../BaseCommand'

export class LogCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        if (this.currentOperand < 0) return 'Error: enter positive number'
        if (this.currentOperand === 0) return 'Error: decimal log(0) is not defined'
        return Math.log(this.currentOperand)
    }
}
