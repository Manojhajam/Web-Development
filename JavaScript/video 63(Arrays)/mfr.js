let array=[1, 3, 5, 7, 10]
// let newArr=[]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element**2)
// }

let newArr = array.map((e)=>{
    return e**2
})
console.log(newArr)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    else return false
}
console.log(newArr.filter(greaterThanSeven))
console.log(array.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]
const red = (a,b)=>{
    // return a*b
    return a+b
}
console.log(arr2.reduce(red))

console.log(Array.from("Manoj"))
