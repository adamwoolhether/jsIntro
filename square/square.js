function findSquare(formid) {
    // Try to do the following, but watch for errors
    try{
        const inputNum = formId.textin.value;

        let result;
        if (inputNum >= 1 && inputNum <= 10) {
            result = inputNum*inputNum;
        } else {
            result = "Invalid number!"
        }
        // Display a message if an error was detected.
    } catch(err) {
        result = err.message;
    }/* } finally {
    * document.getElementById("textout").innerHTML = result;
    * }
    * */


    document.getElementById("textout").innerHTML = result;
}