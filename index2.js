let count=0
const decrease = document.getElementsByClassName("decrease")[0];
const reset = document.getElementsByClassName("reset")[0];
const increase = document.getElementsByClassName("increase")[0];
const display = document.getElementById("value");

decrease.addEventListener("click", reduce);
increase.addEventListener("click", add);
reset.addEventListener("click", zero)

function reduce(){
    count=count-1
    display.innerText=count;
    if(count==0){
        display.style.color="black";
    }
    else if(count>0){
        display.style.color="green"
    }
    else{
        display.style.color="red"
    }
}

function add(){
    count=count+1
    display.innerText=count;
    if(count==0){
        display.style.color="black";
    }
    else if(count>0){
        display.style.color="green"
    }
    else{
        display.style.color="red"
    }
}
function zero(){
    count=0;
    display.innerText=count;
    display.style.color="black"
}