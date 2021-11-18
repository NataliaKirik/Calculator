import {BaseCommand} from '../BaseCommand'

export class SubtractCommand extends BaseCommand {
    execute() {
        return this.currentOperand - this.previousOperand
    }
}
