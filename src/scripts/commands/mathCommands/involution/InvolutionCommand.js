import {BaseCommand} from '../BaseCommand'

export class InvolutionCommand extends BaseCommand {
    execute() {
        return (this.currentOperand) ** this.previousOperand
    }
}
