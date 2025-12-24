res = document.getElementById("result")
function check(val) {
    console.log(val)
    final = val.split('').reverse().join('')
    res.innerText = "Reverse String is " + final
}