

let random = Math.random();

console.log(random)

let a = prompt("Enter a first number");
let b = prompt("Enter a operation");
let c = prompt("Enter a second number");

let obj = {
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*",
}

if (random < 0.5)
{
    b = obj[b];
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}


