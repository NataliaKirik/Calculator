import {BaseCommand} from '../BaseCommand'

export class EvolutionCommand extends BaseCommand {
    execute() {
        return  this.previousOperand ** (1 / this.currentOperand)
    }
}
