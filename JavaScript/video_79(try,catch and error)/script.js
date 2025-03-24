let a = prompt("Enter a first number");
let b = prompt("Enter a second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed");
}
let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1;
    try {
        console.log("The sum is: ", sum * x);
        return true;

    } catch (error) {

        console.log("Error aa gaya bhai");
        return false
    }
    finally {
        console.log("Files are being closed and DB connection is being closed");
    }
}
let c = main();