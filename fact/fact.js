function factTable(formId) {
    let limit = formId.textin.value;

    if (limit >= 1) {
        let val = 1;
        let fact = 1;
        var result = "<pre>VALUE FACTORIAL\n";

        for(let count = 1; count <= limit; count++) {
            result += val + "    " + fact + "\n";
            fact = fact * ++val;
            if (fact > 999999999999999) {
                result += "value to large";
                break;
            }
        }
        result += "</pre>";
    } else {
        result = "Invalid limit!";
    }

    document.getElementById("textout").innerHTML = result;
}