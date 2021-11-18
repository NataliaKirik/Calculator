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

        switch (this.operation) {
            case 'x²':
                return new InvolutionCommand(currentBlock, 2).execute()
            case 'x³':
                return new InvolutionCommand(currentBlock, 3).execute()
            case '1/x':
                return new DivisionCommand(1, currentBlock).execute()
            case '√x':
                return new EvolutionCommand(2, currentBlock).execute()
            case '∛x':
                return new EvolutionCommand(3, currentBlock).execute()
            case 'x!':
                return new FactorialCommand(currentBlock).execute()
            case 'log':
                return new LogCommand(currentBlock).execute()
            case 'log10':
                return new DecimalLogCommand(currentBlock).execute()
            default:
                return
        }
    }

}
