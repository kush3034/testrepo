function performOperation(operation) {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if input are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = calculate(num1, num2, operation);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function calculate(a, b, operation) {
    // Introduce a debugger statement to pause execution
    debugger;
    
    if (operation === "add") {
        return a + b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    } else {
        return "Invalid operation";
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}