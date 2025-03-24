document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll("button")
    let currentInput = '';
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
            if (!isNaN(value) || value === ".") {
                if (currentInput === "0" || resetDisplay) {
                    currentInput = value
                    resetDisplay = false
                } else {
                    if (currentInput.split("").includes(".") && value === ".") {
                        return
                    } else if (currentInput.length < 16) {
                        currentInput += value;
                    }

                }
                updateDisplay();

            } else if (["+", "-", "/", "*"].includes(value)) {
                if (previousInput === "" && currentInput === "") return

                if (previousInput !== "" && currentInput !== "" && operation !== null && !resetDisplay) {
                    operate()
                }
                previousInput = currentInput
                operation = value
                resetDisplay = true


            } else if (value === "=") {
                if (operation !== null && !resetDisplay) {
                    operate()
                    operation = null;
                    resetDisplay = true;
                }
            } else if (value == "ac") {
                currentInput = '';
                previousInput = '';
                operation = null;
                updateDisplay()

            } else if (value === "+/-") {
                currentInput = (parseFloat(currentInput) * -1).toString()
                updateDisplay()

            } else if (value === "%") {
                currentInput = (parseFloat(currentInput) / 100).toString()
                updateDisplay()
            } else if (value === "del") {
                currentInput = currentInput.slice(0, -1);
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
        if (b === 0) {
            return "ERROR"
        }
        return a / b
    }


    function operate() {
        let firstNumber = parseFloat(previousInput)
        let secondNumber = parseFloat(currentInput)
        let result = 0;

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
        if(result == "ERROR"){
            currentInput = result
        }
        else if (Number.isInteger(result)) {
            currentInput = result.toString();
        } else {
            currentInput = parseFloat(result.toFixed(15)).toString();
        }
        updateDisplay()
    }
})








