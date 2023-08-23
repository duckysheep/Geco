// alert('hi');
// document.write("Today, we are learning js.");//testing purpose
// console.log('hello');//debugging purpose

// variables
var x; //declaration
x = 90; //initialization or assign a value

//ideal way
var a = "sugar"; //string

// alert(a);
console.log(a);
// document.getElementById("display").innerHTML = a;

//
var tx = 10;
90900 + tx;
20000 + tx;
30000 + tx;

// var _addToCart

// var var = 90;

var x = 90,
  b = 10;

//task
// create a variable for a person in a single line(name, designation, age, salary, city)
// and display in console and UI

// Strings "" or ''
var firstName = "alina";
var lastName = "joe";

//index / position starts from 0
var str =
  "  front-end developement: html, css, js are the basic tech stack of front-end   ";
console.log(str.length); //return  the length of the string

// if word doesn't exist, output is -1
console.log(str.search("end")); //return the index value of first occurence  of specified word
console.log(str.indexOf("end", 10)); //start searching for specified word after 10th index
console.log(str.lastIndexOf("end"));

// extract a string
console.log(str.slice(2, 8)); //return a string from 2nd index till 7th index
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("front", "FRONT"));
console.log(str.replaceAll("end", "END"));
console.log(str.trim()); //
console.log(str.charAt(9)); //return character at 9th index
console.log(str.charCodeAt(8));

// var email = "admin@gmail.com";
// var em = "ADMIN@gmail.com    ";
// (email.toLowerCase().trim() == em.toLowerCase().trim())

// to check the datatype of variables
console.log(typeof str);

//Number
var num = 90;
var numTwo = 90.87;

console.log(typeof num);
console.log(typeof numTwo);

//type conversion (explicit)
//number to string
console.log(num.toString()); //return "90"

//string to num
console.log(Number("100")); //return 100
console.log(Number("abcd")); //NaN
console.log(Number("")); //return 0
console.log(Number("90.78")); //return 90.78

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//boolean (T or F)
console.log(typeof (20 > 10)); //boolean

//convert boolean to number
console.log(Number(true)); //1
console.log(Number(false)); //0

//undefined (absent value)
var sample; //declaration
console.log(sample); //undefined
console.log(typeof sample); //undefined

//null (no value or empty value)
var test = null;
console.log(test); //null
console.log(typeof test); //object

//objects
//key/value pair
//property/value pair
var person = {
  firstName: "alex",
  lastName: "joe",
  age: 20,
  isMarried: false,
  city: "Pune",
  designation: "developer",
  contact: {
    contact_number: 99999999999,
    email_address: "admin@gmail.com",
  },
};

//to access object properties
console.log(person.firstName); //alex
console.log(person.age);
console.log(person.contact.email_address);

console.log(typeof person); //object

//car
var car = {
  model: "",
  brand: "",
  mileage: 90,
  color: "red",
  price: 90900,
  fuel_type: "disesal",
  transition_type: "",
};

//employee, student

//arrays
//index starts from 0
//array elements
var arr = [90, 78, 56, 45];
var color = ["pink", "red", "blue", "green"];
var mix = [null, undefined, "90", 100, "hello"];

console.log(arr.length); //4

//datatype of array is also object
console.log(typeof arr, typeof color, typeof mix); //

//verification of array
console.log(Array.isArray(arr)); //return true, if it is an array otherwise false

//push & pop
arr.push(100, 200); //is used to add element in the end of an array
console.log(arr);

arr.pop(); //is used to remove last element from an array
console.log(arr);

//shift & unshift
arr.unshift(400); //is used to insert element at the beginning of an array
console.log(arr);

arr.shift(); //is used to remove first element from an array
console.log(arr);

//reverse of an array
color.reverse();
console.log(color);

//array to string
var arrNum = [90, 38, 27, 37];
console.log(arrNum.join()); //"90, 38, 27, 37"
console.log(arrNum.join("")); //"90382737"
console.log(arrNum.join("+")); //

//string to array
var strTwo = "hello world";
var result = strTwo.split(""); //pass seperator
console.log(result); //array

var strThree = "hi, we are learning js";
console.log(strThree.split(" ")); //array

//concat (merge the arrays)
var newArr = arr.concat(color, mix);
console.log(newArr);

//extraction of an array
console.log(arr.slice(1, 3)); //array elments from 1st till 2nd index

//includes
console.log(arr.includes(100));

//Read about
//splice (array method), indexOf, lastIndexOf
//array of objects
//operators in js
//conditional statements
