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
function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber)
            break;
        case "-":
            subtract(firstNumber, secondNumber)
            break;
        case "*":
            multiply(firstNumber, secondNumber)
            break;
        case "/":
            divide(firstNumber, secondNumber)
            break;

        default:
            break;
    }
}
function displayValues(value) {
    const paragraph = document.querySelector(".display > p")
    paragraph.innerText = `${value}`
}

function getClickedValues() {

}

const buttons = document.querySelectorAll(".calculator > div > button")
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonValue = e.target.value
        displayValues(buttonValue)
        console.log(buttonValue)
    })
})



let firstNumber = 0;
let secondNumber = 0;
let operator = ""

