/*let n=5,s=1;
//prompt=("Enter a number:")
console.log("Factorial of a number: " +fact(n))
function fact(a){
    for (let index = 1; index <= n; index++) {
        s=s*index;
        return s;
        
    }
}
*/


let a = 6;
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
     let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
     })
console.log(c);
    }
factorial(a);
