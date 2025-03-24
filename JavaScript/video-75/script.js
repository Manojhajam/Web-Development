console.log("I am hacker")
console.log("I am hecker")

setTimeout(()=>{
console.log("I am set timeout");
}, 3000)

console.log("The end");





const fn = ()=>{
    console.log("Nothing");
    
}

const callback = (arg)=>{
    console.log(arg);
    fn()
}

const loadScript = (src, callback) =>{
    let sc = document.createElement("script")
    sc.onload = callback("Harry", fn)
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)