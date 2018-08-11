// To string return all  the elements of an array as a string

var cars = ["Audi", "Mazda", "BMW", "Toyota",'tata','scoda'];
cars.toString();
console.log(cars);

//join method puts all the element of an array into a string list.
// the difference with toString() method is that you can specify a separator.

var carsjoin = ["Audi", "Mazda", "BMW", "Toyota"]; 
carsjoin.join(" - ");
console.log(carsjoin);

//pop method used to remove last elemet of an arry
//This method return the removed items value

var cars = ["Audi", "Mazda", "BMW", "Toyota"]; 
cars.pop();
console.log('pop'+cars);

//push method adds a new specified element to the end of an array.
//This method return a numeric value that is length of the new array.

var cars = ["Audi", "Mazda", "BMW", "Toyota"];
cars.push("new cars"); 
console.log('push end'+cars);

//shift removes the 1st element of an array
//t is called “shift” because after removing the first element, it “shifts” all the ofther
// elements to a lower index

var cars = ["Audi", "Mazda", "BMW", "Toyota"];  
cars.shift(); 
console.log('shift end : '+cars);

//unshift:The unshift() method adds a new element to an array (at the beginning), and “unshifts” older elements. 
// The unshift() method returns the new array length.
// The method adds a new array element at the beginning. 
// It “unshifts” all the other elements (increses their index by one).

var cars = ["Audi", "Mazda", "BMW", "Toyota"]; 
cars.unshift("add new car");
console.log('unshift end : '+cars);

//splice method: The “splice()” method can add and remove elments form an array.
// The first parameter specifies the index where a new element should be inserted.
// The second parametes specifies how many elements (counting from the specified start) 
// should be removed from the array.
// The rest of the parametes sets the values that will be added
//  (the method can add multiple elements).

var cars = ["Audi", "Mazda", "BMW", "Toyota"];
cars.splice(2, 0, "new", "newer"); 
console.log('splice end : '+cars);

//sort :This method alphabetically sorts an array. It only properly words with words.

var cars = ["Audi", "Mazda", "BMW", "Toyota"];
cars.sort();  
console.log('sort : '+cars);     

// reverse: The method reverses the order of the elements in an array.
// It can be used on a sorted array. This way the array will be sorted in descending order

var cars = ["Audi", "Mazda", "BMW", "Toyota"];   
cars.sort();  
console.log('sort : '+cars);             
cars.reverse();
console.log('Reverse descending : '+cars);  

// concate: The “concat()” method joins two arrays and makes a new one.
// It can take any number of arguments.

var cars = ["Audi", "Mazda", "BMW", "Toyota"]; 
var people = ["Joe", "Leona"];  
var joined = cars.concat(people);
console.log('concate method in array : '+joined);  

//slice method: The method cuts out a part of an array and makes a new one.
// it can take one or two arguments.
// The first argument specifies an index where to start “slicing”. 
// The second argument sets the end index of the “slice.
// If the second argument is not specified, it will slice to the end of the array

var cars = ["Audi", "Mazda", "BMW", "Toyota", "Suzuki"]; 
var myCars = cars.slice(1, 3); 
console.log('slicee method in array : '+myCars);  

// valueOf: this convert the value of an array to primitive values.
// The primitive value of an array is a string by default.
// So by default this method does exactly the same thing as “toString()” method.

var cars = ["Audi", "Mazda", "BMW", "Toyota"];
cars.valueOf(); 
console.log('value of operator : '+ cars);   

// changing elements:All array elements are accessed by their index number.
// You can change any array element by setting a new value to them

var cars = ["Audi", "Mazda", "BMW", "Toyota"]; 
cars[0] = "Opel";
console.log('value of operator : '+ cars);

// append element using lenth property.
// You can easily append new item to the end of an array by using its “length” property.

var cars = ["Audi", "Mazda", "BMW", "Toyota"]; 
cars[cars.length] = "Opel"; 
console.log('value of operator : '+ cars);

// Arrays start at 0. So if you need to access the first element of an array,
//  you must use “0” as an index.

// Numeric sort:
// The “sort()” function by default works only on strings.
// Sorting words this way is convenient (“Apple” comes before “Cactus”)
// However, it does not work properly when sorting numbers. (“36” is bigger than “101”
//  because  the first characher “3” is bigger than “1”).
// This can be fixed by specifying a compare function as a “sort()” methods argument

var numbers = [41, 102, 1, 8, 25, 10];  
numbers.sort(function(a, b){return a>b});
console.log(numbers);

var numbers = [41, 102, 1, 8, 25, 10];  
numbers.sort(function(a, b){return a<b});
console.log(numbers);




