// 1.Ways to print in Javascript 
// alert("me");
// document.write("This is document write");

// 2.JavaScript Console API
console.log("Hello World");
console.warn("This is warning");
console.error("this is error");

// 3.JavaScript Variables
// what are the variables?? - Container to store data values.

var number1 = 65
var number2 = 35

console.log(number1 + number2);

// 4. Data types in JavaScript
// Number
var num1 = 466;
var num2 = 65.3;

//String

var str1 = "This is a string";
var str2 = 'This is also string';

//Objects

var marks = {
    akshay : 40,
    rohit : 80,
    piyu : 84 

}
console.log(marks);

//booleans

var a = true;
var b = false;
console.log(a);

var n = null;
console.log(n)


/* At a very high level, there are two data types in javascript

1.Primitive data types :undefined , null,number,string,symbol
2.Reference data types :array and objects

*/

/*var arr = [1,2,3,4,5,6,7]
console.log(arr)
for(var i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
*/

var array = new Array();
array[0] = "Hello";
array[1] = "goodbye";
array[2] = function (name) {
    console.log("Hello " +name);
};
array[3] = {course: "Goodbye Jsome"};
array[4] = {course: "Hello Somename"};

console.log(array);
array[2](array[1]);
console.log(array[3].course);
console.log(array[4].course);

