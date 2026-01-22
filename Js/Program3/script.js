function check(val) {
    res = document.getElementById("result")
    if(val % 2 == 0){
        res.innerText = "The number is even"
    }
    else{
        res.innerText = "The number is odd"
    }
}