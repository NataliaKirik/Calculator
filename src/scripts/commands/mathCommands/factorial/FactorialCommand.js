import {BaseCommand} from '../BaseCommand'

export class FactorialCommand extends BaseCommand {
    constructor(currentOperand) {
        super();
        this.currentOperand = currentOperand;
    }

    execute() {
        if (this.currentOperand === 0) return 1
        if (this.currentOperand < 1) return 'Error: enter positive integer'
        let result = 1;
        while (this.currentOperand) {
            result *= this.currentOperand--;
        }
        return result;
    }
}
