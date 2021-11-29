import {buttonsList} from "../data/buttonsList";

export class CalculatorDrawer {
    constructor(rootElementId) {
        this.rootElement = document.getElementById(rootElementId);
        if (!this.rootElement) {
            throw new Error("Element with given ID not found");
        }
        this.rootElement.className = 'app-wrapper '
    }

    drawCalculator() {
        this.calculator = document.createElement('div');
        this.rootElement.appendChild(this.calculator);
        this.calculator.className = 'calculator';

        //display
        this.display = document.createElement('div');
        this.calculator.appendChild(this.display);
        this.display.className = 'display';

        this.memoryDispay = document.createElement('div');
        this.display.appendChild(this.memoryDispay);
        this.memoryDispay.className = 'memory';

        this.previousOperandDisplay = document.createElement('div');
        this.display.appendChild(this.previousOperandDisplay);
        this.previousOperandDisplay.className = 'previous-operation';

        this.currentOperandDisplay = document.createElement('div');
        this.display.appendChild(this.currentOperandDisplay);
        this.currentOperandDisplay.className = 'current-operand';

        //buttons
        buttonsList.forEach((button) => {
            this.buttonElement = document.createElement('button');

            this.buttonElement.innerHTML = button.title;
            this.buttonElement.className = button.class;
            this.buttonElement.dataset.value = button.data;

            this.calculator.appendChild(this.buttonElement);
        });
    }

    updateDisplay(dataToShow) {

        this.memoryDispay.innerText = dataToShow.memory

        this.previousOperandDisplay.innerHTML = `${dataToShow.previousOperand} ${dataToShow.operation}`

        this.currentOperandDisplay.innerHTML = dataToShow.currentOperand

        if (dataToShow.operation) {
            this.previousOperandDisplay.innerText = `${dataToShow.previousOperand} ${dataToShow.operation}`
        } else {
            this.previousOperandDisplay.innerText = ''
        }

        //errorHandler
        if (this.currentOperandDisplay.innerHTML.startsWith('Error') || this.previousOperandDisplay.innerHTML.startsWith('Error') || this.currentOperandDisplay.innerHTML === 'Infinity') {
            this.lockButtons()
        } else {
            this.unlockButtons()
        }
    }

    lockButtons() {
        buttonsList.forEach((button) => {
            const buttonElementsList = document.body.querySelectorAll(`[data-value=${button.data}]`)
            buttonElementsList.forEach((buttonElement) => {
                buttonElement.setAttribute("disabled", "disabled")
                if (buttonElement.dataset.value === 'clear-all') {
                    buttonElement.removeAttribute("disabled")
                }
            })
        })
    }

    unlockButtons() {
        buttonsList.forEach((button) => {
            const buttonElementsList = document.body.querySelectorAll(`[data-value=${button.data}]`)
            buttonElementsList.forEach((buttonElement) => {
                buttonElement.removeAttribute("disabled")
            })
        })
    }

}
