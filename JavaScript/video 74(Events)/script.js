let button = document.getElementById("btn")

//list of all mouse events
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    // alert("I was clicked.")
    document.querySelector(".box").innerHTML= "<b>Yayy you are clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don`t right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb (${val1}, ${val2}, ${val3})`
}