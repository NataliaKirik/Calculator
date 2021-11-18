import {BaseCommand} from '../BaseCommand'

export class MultiplyCommand extends BaseCommand {
    execute() {
        return this.currentOperand * this.previousOperand
    }
}
