export class DeleteCommand {
    execute(currentOperand) {
        return currentOperand.toString().slice(0, -1)
    }
}
