res = document.getElementById("result")
elem = document.getElementById("inp")
function check() {
    let val = elem.value
    val = val.toLowerCase();
    let c = 0
    for (let letter of val) {
        switch (letter) {
            case "a":
                c++
                break
            case "e":
                c++
                break
            case "i":
                c++
                break
            case "o":
                c++
                break
            case "u":
                c++
                break
        }
    }
    res.innerText = "Number of vowels is " + c
}