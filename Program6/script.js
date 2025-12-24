res = document.getElementById("result")
function check(val) {
    val = val.toUpperCase()
    console.log(val)
    final = val.split('').reverse().join('')
    if (val == final) {
        res.innerText = "The String is palindrome"
    }
    else {
        res.innerText = "The String is not plaindrome"
    }
}