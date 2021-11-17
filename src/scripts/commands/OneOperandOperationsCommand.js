import {SquareCommand} from "./mathCommands/involution/SquareCommand";
import {CubeCommand} from "./mathCommands/involution/CubeCommand";
import {OneDivideIntoCurrentOperandCommand} from "./mathCommands/division/OneDivideIntoCurrentOperandCommand";
import {SquareRootCommand} from "./mathCommands/evolution/SquareRootCommand";
import {CubeRootCommand} from "./mathCommands/evolution/CubeRootCommand";
import {DecimalLogCommand} from "./mathCommands/log/DecimalLogCommand";
import {LogCommand} from "./mathCommands/log/LogCommand";

export class OneOperandOperationsCommand {
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
                return new SquareCommand(currentBlock).execute()
            case 'x³':
                return new CubeCommand(currentBlock).execute()
            case '1/x':
                return new OneDivideIntoCurrentOperandCommand(currentBlock).execute()
            case '√x':
                return new SquareRootCommand(currentBlock).execute()
            case '∛x':
                return new CubeRootCommand(currentBlock).execute()
            case 'log':
                return new LogCommand(currentBlock).execute()
            case 'log10':
                return new DecimalLogCommand(currentBlock).execute()
            default:
                return
        }
    }

}
