document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll("button")
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetDisplay = false;

    function updateDisplay() {
        const paragraph = display.querySelector("p")
        paragraph.textContent = currentInput;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let value = button.value
            console.log(value)
            if (!isNaN(value) || value === ".") {
                if (currentInput === "0" || resetDisplay) {
                    currentInput = value
                    resetDisplay = false
                } else {
                    currentInput += value;
                }
                updateDisplay();

            } else if (["+", "-", "/", "*"].includes(value)) {
                if (operation !== null) operate()
                previousInput = currentInput
                operation = value
                resetDisplay = true
            } else if (value === "=") {
                if (operation !== null) {
                    operate()
                    operation = null;
                    resetDisplay = true;
                }
            } else if (value == "ac") {
                currentInput = '0';
                previousInput = '';
                operation = null;
                updateDisplay()

            } else if (value === "+/-") {
                currentInput = (parseFloat(currentInput)*-1).toString()
                updateDisplay() 

            } else if (value === "%") {
                currentInput = (parseFloat(currentInput)/100).toString()
                updateDisplay() 
            }
        })
    })

    function add(a, b) {
        return a + b
    }
    function subtract(a, b) {
        return a - b
    }
    function multiply(a, b) {
        return a * b
    }
    function divide(a, b) {
        return a / b
    }


    function operate() {
        console.log("entro")
        let firstNumber = parseFloat(previousInput)
        let secondNumber = parseFloat(currentInput)
        let result = 0;
        console.log(firstNumber)
        console.log(secondNumber)
        console.log(operation)
        if (isNaN(firstNumber)) return
        switch (operation) {
            case "+":
                result = add(firstNumber, secondNumber)
                break;
            case "-":
                result = subtract(firstNumber, secondNumber)
                break;
            case "*":
                result = multiply(firstNumber, secondNumber)
                break;
            case "/":
                result = divide(firstNumber, secondNumber)
                break;
            default:
                return;
        }
        currentInput = result.toString();
        updateDisplay()
    }
})








