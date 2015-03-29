/*

Lab 1.2 

Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including)
end.

Next, write a sum function that takes an array of numbers and returns the sum
of these numbers. Print sum(range(1,10)) and see whether it does indeed return
55.

*/

function range(start, end){
    var ar=[];
    for(var i=0; i<end-start+1; i++){
        ar[i]=start+i;
    }
    return ar;
}

function sum(ar){
    var sum=0;
    for(var i=0; i<ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

console.log(sum(range(1,10)));