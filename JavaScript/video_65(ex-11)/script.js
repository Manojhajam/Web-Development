let n=6;
// prompt(`Enter a number ${n}`);
console.log(`Factorial of ${n} is:` +fact(n));

function fact (n)
{
    if (n== 0 || n == 1){
        return n;
    }
    else 
    {
        return (n * fact(n-1));
    }
}