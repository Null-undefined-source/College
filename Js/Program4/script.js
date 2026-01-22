inputs = document.getElementsByTagName("input")
res = document.getElementById("result")

const check = () => {
    num1 = inputs[0].value
    num2 = inputs[1].value
    num3 = inputs[2].value
    let lar
    if (num1 > num2 && num1 > num3) {
        lar = num1
    }
    else if (num2 > num1 && num2 > num3) {
        lar = num2
    }
    else {
        lar = num3
    }
    res.innerText = lar + " is the largest number"
}
