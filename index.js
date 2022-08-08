const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.getElementsByTagName("color");
btn.addEventListener("click", changeColor);
function changeColor(){
    const random=funRandom()
    document.body.style.backgroundColor=colors[random];
    color.textContent=colors[random];
}
function funRandom(){
    return Math.floor(Math.random()*colors.length)
}