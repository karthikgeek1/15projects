let object = [
    {
        color:"green",
        text:"karthik is a good boy, he is really an enthusiastic person, he works really hard everyday"
    },
    {
        color:"gold",
        text:"varun is a fantastic guy, he is very kindhearted person, he also works very well similar to karthik"
    },
    {
        color:"pink",
        text:"chaitanya is an eptiome of excellence, he is very fond of education, he studies all the day."
    },
    {
        color:"red",
        text:"vitanksha is a good girl, she has a beautiful eyes and a cute smile."
    }
]
let index = 0;
let color = document.getElementById("color")
let para = document.getElementsByClassName("para")[0]
let next = document.getElementById("next")
let surprise = document.getElementById("surprise")
let previous = document.getElementById("previous")

window.addEventListener("DOMContentLoaded", function(){
    let item = object[index]
    color.style.backgroundColor=item.color
    para.textContent=item.text
})
function display(person){
    let item = object[person]
    color.style.backgroundColor=item.color
    para.textContent=item.text
}

next.addEventListener("click", ()=>{
    index++
    if(index>object.length-1){
        index=0
    }
    display(index)
})

previous.addEventListener("click", ()=>{
    index--
    if(index<0){
        index=object.length-1
    }
    display(index)
})
surprise.addEventListener("click", ()=>{
    index= Math.floor(Math.random()*object.length)
    display(index)
})