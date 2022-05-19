let string = "MasaiSchool";

//Inbuilt
function reverse(string)
{
    string = string.split("").reverse().join("")
    console.log("Inbuilt",string)
}
reverse(string)

//Iterative
function iteratively(string)
{
    let rev = "";

    for(let i=string.length-1; i>=0; i--)
    {
        rev = rev+string[i]
    }
    console.log("Iterative",rev)
}
iteratively(string)

//recursion
function recursion(string,n)
{
    if(n < 1)
    {
        return "";
    }

    return string[n-1]+recursion(string,n-1)
}
let n = string.length;

console.log("Recursion", recursion(string,n))
