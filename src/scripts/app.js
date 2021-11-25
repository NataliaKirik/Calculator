import '../styles/style.css'
import {Calculator} from "./Calculator";
import {CalculatorDrawer} from "./drawCalculator";
import {AppendNumberCommand} from "./commands/AppendNumberCommand";
import {CurrentOperandCommand} from "./commands/CurrentOperandCommand";
import {DeleteCommand} from "./commands/DeleteCommand";
import {MemoryCommand} from "./commands/MemoryCommand";
import {ChangeOperandSignCommand} from "./commands/ChangeOperandSignCommand";

class CalculatorApp {
    constructor(drawer, calculator) {
        this.rootElement = document.getElementById('root');
        this.drawer = drawer;
        this.calculator = calculator;
    }

    start() {
        this.drawer.drawCalculator()
        this.rootElement.addEventListener('click', (event) => {
            if (event.target.dataset.value === 'number') {
                this.calculator.executeCommandWithCurrentOperand(new AppendNumberCommand(event.target.innerText))
            }

            if (event.target.dataset.value === 'operation') {
                this.calculator.executeCommandWithCurrentOperand(new CurrentOperandCommand(event.target.innerText))
            }

            if (event.target.dataset.value === 'delete') {
                this.calculator.executeCommandWithCurrentOperand(new DeleteCommand())
            }

            if (event.target.dataset.value === 'memory-operation') {
                if (event.target.innerText === 'MR') {
                    this.calculator.executeCommandWithCurrentOperand(new MemoryCommand(event.target.innerText))
                }
                this.calculator.executeCommandWithMemory(new MemoryCommand(event.target.innerText))
            }

            if (event.target.dataset.value === 'change-sign') {
                this.calculator.executeCommandWithCurrentOperand(new ChangeOperandSignCommand())
            }

            if (event.target.dataset.value === 'twoOperand-operation') {
                this.calculator.chooseOperation(event.target.innerText, new CurrentOperandCommand(event.target.innerText))
            }

            if (event.target.dataset.value === 'equal') {
                this.calculator.calculateOperations()
            }

            if (event.target.dataset.value === 'clear-all') {
                this.calculator.clearAll()
            }
            this.drawer.updateDisplay(this.calculator.returnCalculateData())

        })
    }
}

new CalculatorApp(new CalculatorDrawer("root"), new Calculator()).start();
