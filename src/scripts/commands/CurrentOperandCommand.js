import {DecimalLogCommand} from "./mathCommands/log/DecimalLogCommand";
import {LogCommand} from "./mathCommands/log/LogCommand";
import {InvolutionCommand} from "./mathCommands/involution/InvolutionCommand";
import {DivisionCommand} from "./mathCommands/division/DivisionCommand";
import {EvolutionCommand} from "./mathCommands/evolution/EvolutionCommand";
import {FactorialCommand} from "./mathCommands/factorial/FactorialCommand";

export class CurrentOperandCommand {
    constructor(operation) {
        this.operation = operation
    }

    execute(currentOperand) {
        if (currentOperand === '') return 'Error: enter value'
        if (currentOperand > 99999999) return 'Error: calculator can work with numbers smaller then 99 999 999'

        const currentBlock = Number(currentOperand)

        if (isNaN(currentOperand)) return

        let command
        switch (this.operation) {
            case 'x²':
                command = new InvolutionCommand(currentBlock, 2)
                break
            case 'x³':
                command = new InvolutionCommand(currentBlock, 3)
                break
            case '1/x':
                command = new DivisionCommand(1, currentBlock)
                break
            case '√x':
                command = new EvolutionCommand(2, currentBlock)
                break
            case '∛x':
                command = new EvolutionCommand(3, currentBlock)
                break
            case 'x!':
                command = new FactorialCommand(currentBlock)
                break
            case 'log':
                command = new LogCommand(currentBlock)
                break
            case 'log10':
                command = new DecimalLogCommand(currentBlock)
                break
            default:
                break
        }
        return command.execute()
    }
}
