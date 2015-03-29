/* 

Lab 1.4

Define a function add that takes in two numbers as parameters and a third
callback parameter. This function should call the callback function, passing
the result of addition to the callback function as an argument.

Call add, passing two numbers and a callback (defined in-line). The callback
should print “The sum is: __”

*/

function add(a, b, callback) {
    var total = a + b;
    callback(total);
}

add(2, 2, function(result) {
    console.log("The sum is: " + result);
});