# Javascript Fundamentals
The following labs were part of a Javascript workshop held at Nanyang Technological University, Singapore on 27th March 2015.

The slides are available here: [http://www.slideshare.net/deepankvora/javascript-fundamentals-46413203](http://www.slideshare.net/deepankvora/javascript-fundamentals-46413203)

Solutions can be found in .js files contained in this repository.

## Lab 1.1
Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 3 and 5, print "FizzBuzz".

## Lab 1.2
Write a range function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Print `sum(range(1,10))` and see whether it does indeed return 55.

## Lab 1.3
Write a constructor `Vector` that represents a vector in two-dimensional space. It takes `x` and `y` parameters (numbers), which it should save to properties of the same name.

Give `Vector` two methods, `plus` and `minus`, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

Add a method `length` which computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

## Lab 1.4
Define a function `add` that takes in two numbers as parameters and a third `callback` parameter. This function should call the callback function, passing the result of addition to the callback function as an argument.

Call `add`, passing two numbers and a callback (defined in-line). The callback should print “The sum is: __”
