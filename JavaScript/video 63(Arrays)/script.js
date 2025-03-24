let arr =[1, 2, 4, 7,10]

arr[0]=100;
arr.pop()
arr.push("Manoj")  //for end side
arr.shift()
arr.unshift("jack")  //for front side push
// console.log(arr.pop())
console.log(arr);
// console.log(arr[2])
// console.log(arr.length)
console.log(arr.toString( ))
console.log(arr.join(" and "))


let numbers=[1, 2, 3, 4, 5]
numbers.splice(1,3)
numbers.splice(1,3,255,344)
console.log(numbers)
