let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
    display.value = eval(display.value);
}
