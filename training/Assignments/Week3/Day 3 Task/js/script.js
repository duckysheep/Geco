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
    firstName: "2",
    id: 3,
    age: 12,
  },
];
let q1ArrName = q1Arr.map((ele) => ele.firstName);
let q1Ans = q1ArrName.every((ele) => {
  return ele === q1Arr[0].firstName;
});

newElement(
  `all the property values(firstName) in an array of object is same: ${q1Ans}`,
  1
);

// 2. get the value of the first element in an array that has value greater than 20
let q2Arr = [1, 2, 20, 30, 45];
let q2Ans = q2Arr.find((ele) => ele > 20);

newElement(
  `value of the first element in an array that has value greater than 20: ${q2Ans}`,
  2
);

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

newElement(`data with firstName "Jill": ${JSON.stringify(q3Ans)}`, 3);

//4. Round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]
let q4Arr = [9.8, 9.7, 4.5, 3.4];
let q4Round = q4Arr.map((ele) => Math.round(ele));
let q4Sum = q4Round.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

newElement(`sum of rounded array values: ${JSON.stringify(q4Sum)}`, 4);

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

newElement(`Persons eligible to vote: ${q5Names}`, 5);

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

newElement(`sum of all salaries: ${q6Ans}`, 6);

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
const car = new Car("spyder", "audi", "black", "china");
newElement(`Car class object: ${JSON.stringify(car)}`, 7);

// 8. Create a class Book: type_of_book()
// no. of pages, type of pages, author
class Book {
  constructor(noPages, pageType, author) {
    this.noPages = noPages;
    this.pageType = pageType;
    this.author = author;
  }

  type_of_book() {}
}

const book = new Book(300, "paper", "joe black");
newElement(`Book class object: ${JSON.stringify(book)}`, 8);

// 9. Create a class Animal: walk(), eat(), climb()
// gender, name, disease
class Animal {
  constructor(name, gender, disease) {
    this.gender = gender;
    this.name = name;
    this.disease = disease;
  }

  walk() {}
  eat() {}
  climb() {}
}

const animal = new Animal("cat", "f", "none");
newElement(`Animal class object: ${JSON.stringify(animal)}`, 9);

/*
10. Inheritance: parent class Electronics (methods: name, version, company name) 
child class -> (laptop, ipad, mobile, tablet): 
e.g.  
class Ipad { 
configuration() 
price() 
} 
*/
class Electronics {
  constructor(name, version, companyName) {
    this.name = name;
    this.version = version;
    this.companyName = companyName;
  }
}

class Laptop extends Electronics {
  constructor(name, version, companyName) {
    super(name, version, companyName);
  }
  configuration() {}
  price() {}
}

class Ipad extends Electronics {
  constructor(name, version, companyName) {
    super(name, version, companyName);
  }
  configuration() {}
  price() {}
}

class Mobile extends Electronics {
  constructor(name, version, companyName) {
    super(name, version, companyName);
  }
  configuration() {}
  price() {}
}

class Tablet extends Electronics {
  constructor(name, version, companyName) {
    super(name, version, companyName);
  }
  configuration() {}
  price() {}
}

const tablet = new Tablet("galaxy tab", "8", "samsung");
newElement(`Tablet class object: ${JSON.stringify(tablet)}`, 10);
