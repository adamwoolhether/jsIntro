document.getElementById("today").innerHTML = new Date();
document.getElementById("run_button").addEventListener("click",() => factTable(inform));
function factTable(formId) {
    // Get limit value.
    var limit = formId.textin.value;

    // Validate the input number.
    var result;
    if (limit >= 1) {
        var val = 1;
        var fact = 1;
        var index = 0;
        var factTb = [];

        // Compute values, storing the in an array.
        for (var count = 1; count <= limit; count++) {
            factTb[index++] = fact;
            fact = fact * ++val;
            if (fact > 999999999999999) {
                break;
            }
        }

        // Build the output string.
        var result = "<pre>VALUE FACTORIAL\n";
        for (var i = 0; i < factTb.length; i++) {
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