/*

Lab 1.3

Write a constructor Vector that represents a vector in two-dimensional space.
It takes x and y parameters (numbers), which it should save to properties of
the same name.

Give Vector two methods, plus and minus, that take another vector as a
parameter and return a new vector that has the sum or difference of the two
vectors’ (the one in this and the parameter) x and y values.

Add a method length which computes the length of the vector—that is, the
distance of the point (x, y) from the origin (0, 0). 

*/

function Vector(x, y){
    this.x = x;
    this.y = y;
    this.plus = function(other){
        return new Vector(this.x+other.x, this.y+other.y);
    }
    this.minus = function(other){
        return new Vector(this.x-other.x, this.y-other.y)
    }
    this.length = function(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

var u = new Vector(1,1);
var v = new Vector(2,2);
var w = u.plus(v);
console.log(w.length());