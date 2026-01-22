function calculateSI(){
    p = document.getElementById("principal").value
    t = document.getElementById("time").value
    r = document.getElementById("rate").value
    si = (p*t*r)/100
    document.getElementById("result").innerText = "The SI is " + si
}