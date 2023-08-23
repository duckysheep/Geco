var count = 2; //global scope

function sample(a) {
  //local scope variables
  var data = "sample data";
  return data + a + count;
}

var r = sample(20); //arguments
console.log(r);

//self-invoking / anonymous function
(function (x) {
  console.log(x);
})(Math.PI);

//parameterized
// (function (a, b, c) {

// })(10, 20, 30)

//user input
// js treats html element as objects and attributes as properties
function displayName() {
  console.log(typeof document.getElementById("name")); //object
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  //   if else for validation
  if (name.trim() === "") {
  }

  alert(name + " " + age);
  document.body.style.backgroundColor = "red";
}

//hoisting
lastName = "joe"; //initialized
console.log(lastName); //

var lastName; //declaration

//initialization is not hoisted
var firstName; //declare
console.log(firstName); //undefined

firstName = "hello"; //initilaizing

// console.log(t);
// var t = "hello";//ideal

//objects
//object literal
var person = {
  name: "alina",
  age: 20,
  designation: "intern",
  city: "pune",
  isMarried: true,
  contact_number: 999999999,
  details: function () {
    console.log(this); //person
  },
  contact: {
    fun: function () {
      console.log(this); //contact
    },
  },
};

// add new property
person.salary = 99999;
console.log(person);
person.details();

//update existing property
person.isMarried = false;
console.log(person);

//delete a property
delete person.contact_number;
console.log(person);

console.log(Object.keys(person)); //get the keys(property) in the form array

console.log(Object.values(person)); //get the values in the form array

//callback
function display(a, b, c) {
  console.log(a, b, c);
  var sum = a + b;
  c(sum); //calling the callback function
}

display(10, 20, function (s) {
  console.log(s);
}); //callback function

//alternate syntax
function result(r) {
  console.log(r);
}

function multiply(x, y, z) {
  console.log(z);
  var m = x * y;
  z(m); //calling result()
}
multiply(2, 3, result); //result -> callback

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// function one() {}
// function two() {}
// function third() {}

// one();
// third();
// two();

for (var i = 0; i < 10; i++) {
  console.log(i);
}

//
function getData() {
  var list = document.getElementsByClassName("item");
  console.log(list);

  var arr = [];
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].innerHTML);
    arr.push(list[i].innerHTML);
    // if (list[i].innerHTML === "HTML") {
    //   alert("found");
    //   break;
    // }
  }

  console.log(arr);

  //   Read about
  //   document.querySelector();
  //   document.querySelectorAll();
}

// css selector
window.document.querySelector("#get-data").addEventListener("click", getData);

//create Elements
var d = document.createElement("div"); //<div></div>
d.innerHTML = "hello"; //<div>hello</div>
d.style.backgroundColor = "red"; //<div style="background-color: red">hello</div>
document.body.appendChild(d);

// Read about
//setAttribute("src", "")
//getAttribute(src)
//add(), remove(), toggle()
//error handling (try, catch)

//BOM
console.log(window);

var dataSample = "hello";
console.log(window.dataSample);

console.log(window.navigator);
console.log(window.location);
console.log(window.screen);

//this keyword
function add() {
  console.log(this); //refers to the owner object of the function
}

add();
