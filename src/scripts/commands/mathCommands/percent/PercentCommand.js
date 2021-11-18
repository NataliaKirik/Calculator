import {BaseCommand} from '../BaseCommand'

export class PercentCommand extends BaseCommand {
    execute() {
        return this.currentOperand * (this.previousOperand / 100)
    }
}
