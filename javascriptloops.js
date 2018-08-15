console.log('javascript loops');

/*
for(statement1;statement2;statement3;){
statement1 will execute 1st so initialization,2 will for condition 3 will run the llop
}
*/

for (var i = 0; i < 10; i++) {
    console.log('values 1 to 10 ' + (i + 1));
}

var cars = ['BMW', 'BENZ', 'TATA', 'TOYOTA'];

for (var i = 0, len = cars.length; i < len; i++) {
    console.log(cars[i]);
}

// for in loop

var person = {
    firstName: "guru",
    lastName: "datta",
    hobbies: "coding"
}

for (key in person) {
    console.log(key + " == " + person[key]);
}

/* 
while(conditions){
execute the code
}
*/

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// var i = 4;
// do {
//     console.log(i);
// } while (i < 10);

//break jumps out of the loop 

// for (i = o; i < 10; i++) {
//     if (i === 3) {
//         break;
    
//     }
//     console.log(i);
// }




// continue jumps over a loop

// for (i = o; i < 10; i++) {
//     if (i === 3) {
//         continue;
    
//     }
//     console.log(i);
// }

// data type in javascript:
// string , number, boolean ,object and function
// object, date , array
// null and undefined

console.log('Type of string ' + typeof "guru");
console.log('number ' + typeof 3.14);
console.log(' object ' + typeof {});
console.log(' Nan ' + typeof Nan);
console.log('undefined ' + typeof undefined);
console.log('boolean ' + typeof false);
console.log(' Array ' + typeof [1,2,3,4,5,6]);
console.log(' date ' + typeof new Date('07/07/2018'));
console.log('object ' + typeof {"name":"guru"});
console.log(' objhect ' + typeof function(){});
console.log('not declared variable  ' + typeof house);
console.log('type of null  ' + typeof null);

// type of is operator : which will return you a string

// cool property constructor:

console.log("guru".constructor);
console.log(3.14.constructor);
console.log([1,2,3,3].constructor);

// to string is a method which we can use in any data type
// it will convert to any data type to a string 

function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array") > -1
}

console.log(isArray(3.14));
console.log(isArray([1,2,3,4,5,6,7,8]));

// type casting can be done by function or any javascript way
var x=10;
console.log(String(x));
console.log(String(123));
console.log(String(120+3));

console.log((123).toString());
console.log(String(120+3).toString());

console.log(String(false));
console.log((false).toString());

console.log(String(new Date("1/1/2019")));
console.log((new Date("1/2/2019")).toString());

console.log(Number("123"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("123 1243")); // when it see a space then it treat it as string
console.log(typeof Number("123 1243"));

var y=15;
var x= + y;
console.log(x);

var y="guru";
var x= + y;
console.log(x);

console.log(Number(true));
console.log(Number(false));

console.log(Number(new Date("1/2/2019")));

// automatic type conversion

console.log(5 + null); // because null is converting to 0
console.log("5" + null);
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");

// regular expression is a stirng of charecter that form a search pattern
// used for text search or replace
// its a sequence of charecter that forms a search pattern
// it performs all type of text search or text replace pattern 

// syntax:

/* 
/pattern/modifier
*/

var str=" Hello There ";
var afterSearch=str.search(/there/);
console.log('After search' + afterSearch); // -1

var str=" Hello There ";
var afterSearch=str.search(/There/);
console.log('After search case sensitive ' + afterSearch); // 7

// i stands for case insensitive
// convert every thing to lower case and compare them
var str=" Hello There ";
var afterSearch=str.search(/there/i);
console.log('After search case sensitive 1 ' + afterSearch);

var replace=str.replace('There','India');
console.log(replace); //Hello india

var replace=str.replace(/there/i,'India');
console.log(replace);//Hello india

// different modifier and patterns with regualar expression
// below are the modifiers
// i--> case-incensitive
//  g--> global matches 
// m-->multiline match 

// patterns anything inside a braces is a patterns
// [abc]-->letters
// [0-9]-->numbers
// (x | y)

// test() :its a regular expression method which will search for a string for a patterns
// and returns true or false depending on the results

var pattern=/e/;
console.log(pattern.test(' best things are free in pattern '));
console.log(/e/.test(' best things are free in pattern '));

// exec() : instead of true/ false it will give you the charecter you are looking for.

console.log(/e/.exec(' best things are free in pattern '));
console.log(/best/.exec(' best things are free in pattern '));










