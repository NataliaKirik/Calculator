export class ChangeOperandSignCommand {
    execute(currentOperand) {
        if (currentOperand === '') return ''
        currentOperand = currentOperand.toString();
        if (currentOperand.includes('-')) {
            return currentOperand.slice(1);
        }
        return '-' + currentOperand;
    }
}
