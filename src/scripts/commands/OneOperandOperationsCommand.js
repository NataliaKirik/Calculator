import {SquareCommand} from "./mathCommands/SquareCommand";
import {CubeCommand} from "./mathCommands/CubeCommand";
import {OneDivideIntoCurrentOperandCommand} from "./mathCommands/OneDivideIntoCurrentOperandCommand";
import {SquareRootCommand} from "./mathCommands/SquareRootCommand";
import {CubeRootCommand} from "./mathCommands/CubeRootCommand";
import {LogCommand} from "./mathCommands/LogCommand";
import {DecimalLogCommand} from "./mathCommands/DecimalLogCommand";

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
