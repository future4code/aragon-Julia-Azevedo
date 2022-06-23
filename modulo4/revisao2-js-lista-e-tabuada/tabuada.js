function multiplicationTable(x) {
    if (typeof (x) === "number") {
        if (x <= 10 && x >= 1) {
            let multiplication = [
                (x + " x 0 = " + (x * 0)),
                (x + " x 1 = " + (x * 1)),
                (x + " x 2 = " + (x * 2)),
                (x + " x 3 = " + (x * 3)),
                (x + " x 4 = " + (x * 4)),
                (x + " x 5 = " + (x * 5)),
                (x + " x 6 = " + (x * 6)),
                (x + " x 7 = " + (x * 7)),
                (x + " x 8 = " + (x * 8)),
                (x + " x 9 = " + (x * 9)),
                (x + " x 10 = " + (x * 10))
            ]
            return multiplication
        }
        else return "Error. Invalid parameter. The number must be between 1 and 10."
    }
    else return "Error. Invalid parameter. Must be a number."
}

console.log(multiplicationTable(5))