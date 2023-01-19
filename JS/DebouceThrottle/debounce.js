let input1  = document.getElementById("input")
let debounce = document.getElementById("debounce")

let timmer;
input1.addEventListener("input",(e)=>{
     updateText(e.target.value)
})

const handleDebunce  = (fn,delay)=>{
    let timmer ; 
    return (...args)=>{
        clearInterval(timmer);
        timmer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}

const updateText = handleDebunce((text)=>{
    debounce.textContent = text ; 
},1000)
