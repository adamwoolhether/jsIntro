function factTable(formId) {
    // Get limit value.
    let limit = formId.textin.value;

    // Validate the input number.
    let result;
    if (limit >= 1) {
        let val = 1;
        let fact = 1;
        let index = 0;
        let factTb = [];

        // Compute values, storing the in an array.
        for (let count = 1; count <= limit; count++) {
            factTb[index++] = fact;
            fact = fact * ++val;
            if (fact > 999999999999999) {
                break;
            }
        }

        // Build the output string.
        let result = "<pre>VALUE FACTORIAL\n";
        for (let i = 0; i < factTb.length; i++) {
            val = i + 1;
            fact = factTb[i];
            result += val + "      " + fact + "\n";
        }
        result += "</pre>";
    } else {
        result = "Invalid limit!";
    }

    // output the table to UI.
    document.getElementById("textout").innerHTML = result;
}