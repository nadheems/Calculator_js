function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function appendDecimal() {
    var currentResult = document.getElementById('result').value;
    if (currentResult.indexOf('.') === -1) {
        document.getElementById('result').value += '.';
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}
