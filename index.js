// Function to append characters to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    // Prevent appending multiple operators consecutively
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return;
    }

    display.value += value; // Append value to the display
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = ""; // Set display to empty string
}

// Function to perform the calculation
function calculate() {
    const display = document.getElementById("display");

    try {
        // Evaluate the expression and show the result
        display.value = eval(display.value);
    } catch (error) {
        // If there is an error, like malformed input, show "Error"
        display.value = "Error";
    }
}
