function toCel(val) {
    let cel = (val -32) * 5/9
    document.getElementById("celcius-input").value = cel
}

function toFar(val) {
    let far = (val * 9/5) + 32
    document.getElementById("farenheit-input").value = far
}