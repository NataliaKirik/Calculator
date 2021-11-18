import {BaseCommand} from '../BaseCommand'

export class DivisionCommand extends BaseCommand {
    execute() {
        if (this.previousOperand === 0) return 'Error: You can\'t divide by zero'
        return this.currentOperand / this.previousOperand
    }
}
