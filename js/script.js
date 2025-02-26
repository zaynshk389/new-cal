let display = document.getElementById('display');
let history = document.getElementById('history');
let currentInput = '0';
let lastCalculation = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    lastCalculation = '';
    updateDisplay();
    history.textContent = '';
}

function calculate() {
    try {
        lastCalculation = currentInput;
        currentInput = eval(currentInput.replace('×', '*').replace('−', '-')).toString();
        updateDisplay();
        history.textContent = lastCalculation + ' =';
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        history.textContent = '';
        setTimeout(clearDisplay, 1000); // Reset after 1 second if error
    }
}

function updateDisplay() {
    display.textContent = currentInput;
    display.classList.remove('pulse');
    void display.offsetWidth; // Trigger reflow
    display.classList.add('pulse'); // Reapply animation
}
