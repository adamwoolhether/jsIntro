// Get input num
const inputNum = prompt("Type a number between 1 and 10");

// If valid, display its square.
if (inputNum >= 1 && inputNum <= 10) {
   document.write("The square of " + inputNum + " is " + inputNum*inputNum);
} else {
    document.write("Invalid number");
}