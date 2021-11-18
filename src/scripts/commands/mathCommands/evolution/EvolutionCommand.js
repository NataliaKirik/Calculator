import {BaseCommand} from '../BaseCommand'

export class EvolutionCommand extends BaseCommand {
    execute() {
        if (this.currentOperand === 0) return 0
        if (this.currentOperand < 0) return 'Error: please enter positive number'
        return this.previousOperand ** (1 / this.currentOperand)
    }
}
