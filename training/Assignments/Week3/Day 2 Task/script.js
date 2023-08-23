function newElement(string, qNo) {
  let tag = document.createElement("p");
  let text = document.createTextNode(`Q${qNo}: ${string}`);
  tag.appendChild(text);
  let element = document.body;
  element.appendChild(tag);
}

// 1.	found an element in array [10, 78, 90] return 90 otherwise exit from an array// take user input
let q1Arr = [10, 78, 90];

function arrSearch() {
  let userInput = parseInt(document.getElementById("number").value);
  for (let i = 0; i < q1Arr.length; i++) {
    if (q1Arr[i] == userInput) {
      console.log("input is in array");
      return userInput;
    }
  }
  console.log("input is not in array");
}

// 2.	smallest number in an array
let q2Arr = [1, 9, 8];
let compareNum2 = q2Arr[0];

q2Arr.forEach((num) => {
  if (num < compareNum2) {
    compareNum2 = num;
  }
});
newElement(`smallest number in [${q2Arr}] is ${compareNum2}`, 2);

// 3.	biggest of even number in an array ([10, 12, 90, 93, 707]): biggest even number is 90
let q3Arr = [10, 12, 90, 93, 707];
let compareNum3 = q3Arr[0];

for (let i = 0; i < q3Arr.length; i++) {
  if (q3Arr[i] % 2 === 0) {
    compareNum3 = q3Arr[i];
    break;
  } else {
    compareNum3 = "no even numbers in array";
  }
}

q3Arr.forEach((num) => {
  if (num > compareNum3 && num % 2 === 0) {
    compareNum3 = num;
  }
});

newElement(`biggest even number in [${q3Arr}]: ${compareNum3}`, 3);

// 4.	add two array [10,20,30] + [1,2,3]: [11, 22, 33]
let q4Arr1 = [10, 20, 30],
  q4Arr2 = [1, 2, 3],
  q4Result = [];

q4Arr1.forEach((element) => {
  sum = element + q4Arr2[q4Arr1.indexOf(element)];
  q4Result.push(sum);
});
newElement(`sum of [${q4Arr1}] and [${q4Arr2}] : [${q4Result}]`, 4);

// 5.	reverse an array(with loops) [10, 78, 0]: [0, 78, 10]
let q5Arr = [10, 78, 0],
  q5Result = [];

for (let i = q5Arr.length - 1; i >= 0; i--) {
  q5Result.push(q5Arr[i]);
}
newElement(`reverse of [${q5Arr}] : [${q5Result}]`, 5);

// 6.	reverse a string using loops
let q6Str = "this is a test string",
  q6Result = "";
for (let i = q6Str.length - 1; i >= 0; i--) {
  q6Result += q6Str[i];
}
newElement(`reverse of "${q6Str}" : "${q6Result}"`, 6);

// 7.	Display date in UI hh:mm:ss -> read date object
let q7Date = new Date().toTimeString().slice(0, 8);
newElement(`hh:mm:ss time : ${q7Date}`, 7);

// 8.	Create createDiv() function, pass width, height, background color, color through js and append in body. Hint-> createElement()
function createDiv() {
  let tag = document.createElement("div");
  document.body.appendChild(tag);
  tag.innerHTML = "test";

  let styleChange = {
    width: "800px",
    height: "300px",
    backgroundColor: "purple",
    color: "white",
  };
  Object.assign(tag.style, styleChange);
}
createDiv();
// 9.	Revise callback, DOM methods, error handling
