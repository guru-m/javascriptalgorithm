// This object allows mathematical tasks to be performed on numbers.
// The JavaScript Math object includes several methods you can apply
// This object has no constructor and cannot be created first.

// Math.max and Math.min
// You can use Math.max() to find the highest and Math.min() to find the lowest value

console.log(Math.min(65, 951, 84, 20, -98, -235));
console.log();
console.log(Math.max(65, 951, 84, 20, -98, -235));

// Math.random()
// When used, Math.random()will return a numeric value between 0 (inclusive),  
// and 1 (exclusive), but will always return a value lower than 1:

console.log(Math.random());

// Math.round() is used to round a number to the nearest integer:

console.log(Math.round(5.8));            // returns 6
console.log(Math.round(3.2)); 

// Math.ceil() is used to round a number up to the nearest integer

console.log(Math.round(5.8));            // returns 6 
console.log(Math.round(3.2));

// Math.floor() is used to round a number down to the nearest integer:

console.log(Math.floor(5.8));            // returns 5
console.log(Math.floor(3.2));

// If used together, Math.random()
//  and Math.floor() will return a random number ranging from 0 to 10:

console.log(Math.floor(Math.random() * 10));   
// will return a random number ranging from 0 to 10
