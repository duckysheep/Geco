// arithmetic operators
var num = 20;
var numTwo = 2;

// operands- num, numTwo
console.log(num + numTwo); //addition
console.log(num - numTwo); //subtract
console.log(num * numTwo); //multiply
console.log(num / numTwo); //division (quotient)
console.log(num % numTwo); //modulus (remainder)

// increment & decrement
num++; //num = num + 1
numTwo--; //numTwo = numTwo - 1

console.log(num, numTwo);

//assignment operator (=)
var x = 90; //assigning 90 to variable x

//operator precedence (Prioriry order of operator)
// brackets
// multiply division
// addition & subtraction
// L -> R

var result = 10 + ((90 + 80) / 2) * 9 + 20 - 30;
console.log(result);

//String (+) concatenate the strings
var str = "hello";
var strTwo = "world";

// implicit type conversion (automatic type conversion)
console.log(str + strTwo); //helloworld
console.log(10 + str + strTwo); //10helloworld
console.log(str + strTwo + 20); //helloworld20
console.log(20 + 20 + str); //40hello
console.log(str + 20 + 20); //hello2020
console.log("20" + "20"); //2020

console.log(str / strTwo); //NaN
console.log("20" / "10"); //2
console.log(str + "90" / 10 - 20); //NaN
console.log(20 + ""); //'20'

//strings
// alpha string: 'ikjikjkjl'
// numeric string: '898090'
// non-numeric: 'ijd98090$$^^'

//Rules
//check the operator precedence
//type of operands
//type strings
//get the result

//comparison
var a = 9;
var b = "9";

console.log(a == b); //compare only values
console.log(a === b); //strict checking ( compare values and datatype )
console.log(a != 9); //compare only values
console.log(b !== 9); //strict checking ( compare values and datatype )
console.log(a >= 90);
console.log(b <= 9);

//logical operator (&&, ||, !)
console.log(a == b && a === b); //it will return true if all the individual statement are true, otherwise false
console.log(a == b || a === b); //it will return true if any of the individual statement are true, otherwise false
console.log(!(a == b)); //reverse the condition

// conditional statements
// if(condition) {

// }

var firstName = "alina";

if (firstName == "alina") {
  console.log("Name is: " + firstName);
}

//if() {} else {}
if (firstName == "alex") {
  console.log(firstName);
} else {
  console.log("wrong input");
}

//even or odd
var numVal = 91;

if (numVal !== 0) {
  if (numVal % 2 == 0) {
    console.log(numVal + " is an even number");
  } else {
    console.log(numVal + " is an odd number");
  }
}

//else if
var lastName = "joe";
if (firstName == "alina" && lastName == "alex") {
  console.log(firstName + " " + lastName);
} else if (firstName == "alina") {
  console.log(firstName);
} else if (lastName == "joe") {
  console.log(lastName);
}

//greatest of 3 numbers
var x = 90;
var y = 100;
var z = 120;

var max = 0;

if (x > y) {
  max = x;
} else {
  max = y;
}

if (z > max) {
  console.log("Greatest is: " + z);
} else {
  console.log("Greatest is: " + max);
}

//switch
var age = 18;

//age is compared with case number with strict checking (===)
switch (age) {
  case 1:
    console.log("not eligible");
    break;
  case 2:
    console.log("not eligible");
    break;
  case 18:
    console.log("eligible");
    break;
  default:
    console.log("default");
}

// Implicit coercion:
// practice questions on implicit coercion
// console.log('A' - 1);//
// console.log('A' + 1);//A1
// console.log(2 + '2' + '2');//
// console.log('hello' + 'world' + 89);//
// console.log('hello' - 'world' + 89);//
// console.log('hello' + 78);//
// console.log('78' - 90 + '2');//-12 + '2'
// console.log(2 - '2' + 90);//
// console.log(89 - '90' / 2);//
// console.log(2 + '2' + null);//22null
// (true == false) > 2;//
// (89  + 'hello' + 90 / 9);//

// loops
// 1 loop -> 1 iteration
// syntax
// for(statement 1; statement 2; statement 3) {
//block of code
// }

// statament 1 -> initialization
// statement 2 -> condition
// statament 3 -> inc or dec

// steps of execution
// st1 -> st2 -> boc -> st3 -> st2 -> boc and so on...

for (var i = 0; i <= 20; i++) {
  console.log(i); //0 1 2 ... 19 20
}

console.log("break");

for (var j = 10; j >= 0; j = j - 2) {
  console.log(j); //10 9 ... 1
}

//for arrays
//iterate over arrays
var num = [90, 31, 48, 25, 100, 101];
var arr = [];

console.log("display array elements");

for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
  if (num[i] % 2 == 0) {
    arr.push(num[i]);
  }
}

console.log(arr); //getting all the even numbers

// iterate over strings
var strVal = "hello world";

for (var i = 0; i < strVal.length; i++) {
  console.log(strVal[i]);
}

//while
// syntax
// while(condition) {
//boc
// }

var z = 0;
while (z <= 20) {
  console.log(z);
  z++;
}

//avoid infinite loops

//do while
// do {
//     boc
// }while(condition);

var j = 20;
do {
  console.log("value " + j); //20
} while (j > 21); //

//break will terminate the loop
var numArr = [90, 38, 2, 20, 100, 67];

for (var i = 0; i < numArr.length; i++) {
  if (numArr[i] === 100) {
    console.log("Found " + numArr[i]); //100
    break;
  }
}

//function declaration
function add() {
  var a = 90;
  var b = 100;
  console.log(a + b);
}

//function calling
add();
add();

//paramterized function
// parameters -> a, b
function subtract(a, b) {
  var sub = a - b;
  console.log(sub); //
}

subtract(100, 80); //arguments

subtract(200, 10); //arguments

subtract(100, 70);

//return a value from function
function multiply(x, y) {
  var m = x * y;
  return m;
}

// console.log(m);//give error

var r = multiply(2, 3);
console.log("multiply " + r);

var y = multiply(5, 6);
console.log(y);

//see html file
function displayName() {
  alert("Hello");

  //   manipulating styles using js
  document.getElementById("display").style.color = "pink";

  document.getElementById("display").style.backgroundColor = "yellow";

  //   document.getElementById("display").style.display = "none";
}
