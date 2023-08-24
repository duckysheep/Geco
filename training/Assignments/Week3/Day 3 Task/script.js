function newElement(string, qNo) {
  let tag = document.createElement("p");
  let text = document.createTextNode(`Q${qNo}: ${string}`);
  tag.appendChild(text);
  let element = document.body;
  element.appendChild(tag);
}

// 1. Check if all the property values(firstName) in an array of object is same or not
let q1Arr = [
  {
    firstName: "",
    id: 1,
    age: 12,
  },
  {
    firstName: "",
    id: 2,
    age: 12,
  },
  {
    firstName: "",
    id: 3,
    age: 12,
  },
];

// 2. get the value of the first element in an array that has value greater than 20
let q2Arr = [1, 2, 20, 30, 45];
let q2Ans = q2Arr.find((ele) => ele > 20);
console.log(q2Ans);

// 3. Filter data based on a id(property) in an array of objects: pick any random id value
let q3Arr = [
  { firstName: "Jack" },
  { firstName: "Jill" },
  { firstName: "Mary" },
  { firstName: "Jill" },
];

let q3Ans = q3Arr.filter((ele) => {
  return ele.firstName === "Jill";
});

console.log(q3Ans);

//4. Round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]
let q4Arr = [9.8, 9.7, 4.5, 3.4];
let q4Round = q4Arr.map((ele) => Math.round(ele));
let q4Sum = q4Round.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(q4Sum);

//5. Get all the person name based on age greater than and equal to 18, eligible to vote
let q5Arr = [
  {
    firstName: "joe",
    age: 24,
  },
  {
    firstName: "alina",
    age: 12,
  },

  {
    firstName: "alex",
    age: 20,
  },
];

let q5Ans = q5Arr.filter((ele) => {
  return ele.age >= 18;
});
let q5Names = q5Ans.map((ele) => ele.firstName);
console.log(q5Names);

// 6. sum of all the salaries and display final sum value
let q6Arr = [
  {
    salary: 56000,
  },
  {
    salary: 90000,
  },
];

let q6Ans = q6Arr.reduce((total, val) => {
  return total + val.salary;
}, 0);
console.log(q6Ans);

// 7.Create a class Car: city(),specialFeature()
// name, brand, color, manufacture
class Car {
  constructor(name, brand, color, manufacture) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.manufacture = manufacture;
  }

  city() {}
  specialFeature() {}
}
