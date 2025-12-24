res = document.getElementById("result")
function check(val) {
    final = 1
    for (i = 1; i <= val; i++) {
        final *= i
    }
    res.innerText = "The factorial is " + final
}