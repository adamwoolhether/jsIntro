function findLowRow() {
    let lowSum = 999; // Assuming the rows have sums less than 999.
    let lowRow = 0;
    let rowSum = 0;
    const NUM_ROWS = 4;
    const NUM_COLS = 5;

    let table = [
        [1,2,3,4,5],
        [6,7,7,8,10],
        [0,1,0,2,3],
        [2,4,6,8,10]
    ];

    // loop through the rows.
    rowLoop: for (let row = 0; row < NUM_ROWS; row++) {
        rowSum = 0;
        for (let col = 0; col < NUM_COLS; col++) {
            rowSum += table[row][col];

            // Exit the row if the sum is already too large.
            if (rowSum > lowSum) {
                continue rowLoop;
            }
        }
        // Is this the lowest sum so far?
        if (rowSum < lowSum) {
            lowSum = rowSum;
            lowRow = row;
        }
    }

    // Output the result.
    let result = "Row number:" + lowRow + "<br>Row sum:" + lowSum + "<br>";
    document.getElementById("textout").innerHTML = result;
}