export class ChangeOperandSignCommand {
    execute(currentOperand) {
        currentOperand = currentOperand.toString();
        if (currentOperand.includes('-')) {
            return currentOperand.slice(1);
        }
        return '-' + currentOperand;
    }
}
