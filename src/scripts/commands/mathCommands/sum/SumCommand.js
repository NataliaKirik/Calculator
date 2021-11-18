import {BaseCommand} from '../BaseCommand'

export class SumCommand extends BaseCommand {
    execute() {
        return this.currentOperand + this.previousOperand
    }
}
