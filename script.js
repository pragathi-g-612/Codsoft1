let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if (display.value !== "" && !"+-*/".includes(lastChar)) {
        display.value += operator;
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(num) {
    document.getElementById("display").value += num;
}

function appendOperator(op) {
    document.getElementById("display").value += op;
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(num) {
    document.getElementById("display").value += num;
}

function appendOperator(op) {
    document.getElementById("display").value += op;
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function squareNumber() {
    let display = document.getElementById("display");
    display.value = Math.pow(Number(display.value), 2);
}

function squareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(Number(display.value));
}
