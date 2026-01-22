res = document.getElementById("result")
function check() {
    elem = document.getElementById("mail").value
    let indexesOfdot = indexesOf(elem, ".")
    let indexesOfAtr = indexesOf(elem, "@")

    if (indexesOfAtr.length == 0 || indexesOfdot.length == 0) {
        res.innerText = "Either '.' or '@' is missing"
        return
    }
    let indexOfLastDot = indexesOfdot[indexesOfdot.length - 1], indexOfLastAtr = indexesOfAtr[indexesOfAtr.length - 1]
    if (indexOfLastDot < indexOfLastAtr) {
        res.innerText = "Invalid Mail"
        return
    }
    if (indexOfLastDot == elem.length - 1) {
        res.innerText = "Invalid Mail"
        return
    }
    if ((indexOfLastAtr + 1) == indexOfLastDot) {
        res.innerText = "Invalid Mail"
        return
    }
    res.innerText = "Valid Mail"
}

function indexesOf(arr, val) {
    let indexes = [], i = -1
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i)
    }
    return indexes
}
