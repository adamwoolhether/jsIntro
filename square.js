function findSquare(formId) {
    const inputNum = formId.textin.value;

    let result;
    if (inputNum >= 1 && inputNum <= 10) {
        result = inputNum*inputNum;
    } else {
        result = "Invalid number!"
    }

    document.getElementById("textout").innerHTML = result;
}