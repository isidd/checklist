let input  = document.getElementById("input")
let defaultB = document.getElementById("default")


input.addEventListener("input",(e)=>{
    console.log(e.target.value)
    defaultB.textContent = e.target.value
})