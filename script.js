document.getElementById("GetUpgrade").addEventListener("click", startTimer);
document.getElementById("GetCookies").addEventListener("click", addCookies)

var count = parseInt(document.getElementById("count").innerHTML)
var countperSecond = 1

// //start count cookies from 1, increase by 1 at every click, display result 
function startTimer() {
    count = count - 10
    countperSecond++
    setInterval(addCookies, 2000)
}

function addCookies() {
    count = count + countperSecond
    document.getElementById("count").innerHTML = count
    document.getElementById("countperSecond").innerHTML = countperSecond
    console.log(count)
}
console.log(NoOfCookies)
