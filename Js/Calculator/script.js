let str = ''
const btns = document.querySelectorAll("button")
console.log(btns)

for (const btn of btns) {
    btn.addEventListener("click", (e) => handleEvent(e.target.innerText))
}

function handleEvent(e) {
    console.log(e)
    switch (e) {
        case "=":
            str = eval(str)
            break;

        case "del":
            str = str.slice(0, -1)
            break;

        case "c":
            str = ''
            break;

        default:
            str += e
            break;
    }
    display(str)
}

function display(val) {
    let elem = document.getElementById("screen")
    elem.innerText = val
}