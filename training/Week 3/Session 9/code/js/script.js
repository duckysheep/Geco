// let
//is used to declare variable within block scope(within if else, for loops)
var x = 20;
{
  var x = 30;
  console.log(x); //30
}
console.log(x); //30

// using let
{
  let x = 90;
  x = 200;
  console.log(x); //90
}

console.log(x); //30

// can't reclare a variable with same name
// let x = 100;
// console.log(x);

//hoisting (temporal dead zone)
// t = 10;
// console.log(t);
// let t;

// const
// is used to declare a variable within block scope with constant reference
var z = 100;
{
  const z = 20;
  // z = 60;//can't re-assign a value
  console.log(z); //20
}

console.log(z); //100

//
const arr = [90, 38, 48, 27];
arr[0] = 100;
// arr = [90, 37, 47,6];//give error
console.log(arr);

//can't re-declare
// let z = 200;
// console.log(z);

//hoisting (temporal dead zone)
// t = 10;
// console.log(t);
// const t;

//arrow function / fat arrow: use shorter function syntax
// 1. syntax
function display() {
  return this; //window
}

console.log(display());

//using arrow
// displayName = () => {
//   return this; //window
// };

// is similar to
displayName = () => this; //window

console.log(displayName());

// 2. return keyword syntax

// 3. this keyword
let obj = {
  details: function () {
    console.log(this); //obj
  },
  detail: () => {
    console.log(this); //window
  },
};

obj.details();
obj.detail();

//array helper function: map, filter, some, every, reduce, forEach, find
let num = [10, 90, 38, 4, 27, 40, 9, 100];

// map: is used to iterate over array. return an array

let resultMap = num.map(function (e, i, arr) {
  console.log(e, i, arr);
  return e * 2;
});

console.log(resultMap);

// alternate syntax
// let resultMap = num.map((e) => e * 2);

//filter: is used to filter the data based on condition
//return an array filled with all the array elememts that pass the test
let filterArray = num.filter((ele) => ele >= 18);
console.log(filterArray);

//forEach: is used to iterate over array. return nothing
num.forEach((e) => {
  console.log(e * 2);
});

//find: return an first element that pass the test/condition
let findResult = num.find((e) => {
  return e >= 20;
});

console.log("result:", findResult);

//some
//return boolean value
//it return true, if anyone element pass the test, otherwise false
let someResult = num.some((e) => {
  return e >= 100;
});
console.log(someResult);

//every
//return boolean value
//it return true, if all the element pass the test, otherwise false
let everyResult = num.every((e) => {
  return e >= 100;
});
console.log(everyResult);

//reduce: is used to reduce array to a single value
// considering  [10, 90, 38, 4, 27, 40, 9, 100]

let reduceResult = num.reduce((total, val) => {
  console.log("Total: " + total); // 0 10 100 138 142  169  209 218  318
  console.log(val); //10 90 38  4 27 40 9 100

  return total + val;
}, 0);

console.log(reduceResult);

//class
// OOPS: object oriented programming language

//are like template for js object

class University {
  // is used to initialize values
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.dept = department;
  }

  details() {}
}

//creating an instance/object
const studentOne = new University("alina", 20, "cse", "hello");
console.log(studentOne);

const studentTwo = new University("alex", 30, "mangement");
console.log(studentTwo);

//inheritance
// parent/base class
class Shape {
  constructor(id) {
    this.id = id;
  }
}

// child/derived/inherited  class
class Circle extends Shape {
  constructor(id, radius) {
    super(id); //call the parent class constructor
    this.radius = radius;
  }

  circumference() {
    console.log(Math.round(2 * Math.PI * this.radius));
  }
}

const c = new Circle(2, 4); //id, radius
console.log(c);
c.circumference();

//restructuring of object
let firstName = "alina";
let lastName = "joe";
let age = 90;

//combine them into object
// key(property): variable
const person = { firstName, age, lastName };

// property shorthand
console.log(person);

// destructuring of object
const user = {
  id: 2,
  is_verfied: true,
};

const { id, is_verfied } = user;
console.log(id);

//spread operator(...)
//for objects
const objOne = {
  A: 10,
  B: 20,
};

//shallow copy
// const objTwo = objOne;
// objTwo.A = 100;
// console.log(objOne, objTwo);

//using spread operator(deep copy)
const objTwo = { ...objOne, Z: 40, A: 100 };
console.log(objOne, objTwo);

//for arrays
let one = [90, 38, 28];
let two = [100, 30, 50];
let three = [...one, ...two, 200];
console.log(three);

//template strings
let str = `Hello world`;
console.log(str.length);

console.log("Hi, my name is " + firstName + " " + lastName + ".");

//variable & expression substitution
console.log(`Hi, my name is ${firstName} ${lastName}.`);

//for...in
// iterate over objects
// for(key/property in objectname) {

// }

let userVal = {
  first: "alina",
  last: "joe",
  age: 90,
};

for (x in userVal) {
  console.log(x);
  console.log(userVal[x]); //
}

//for...of
//array & strings
for (let x of num) {
  console.log(x);
}

for (let y of str) {
  console.log(y);
}
