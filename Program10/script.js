res = document.getElementById("result")
function check(val) {
    let final = "";
    a = 0; b = 1; c = a + b;
    for (let i = 0; i < val; i++) {
        final += a + " ";
        c = a + b;
        a = b
        b = c
    }
    res.innerText = final
}