function newElement(string, qNo) {
  let tag = document.createElement("p");
  let text = document.createTextNode(`Q${qNo}: ${string}`);
  tag.appendChild(text);
  let element = document.getElementById("answers");
  element.appendChild(tag);
}

// 1.	Given number is multiple of 3 or not e.g.10900
let num = 10900;
if (num % 3 === 0) {
  newElement(`${num} is a multiple of 3`, 1);
} else {
  newElement(`${num} is not a multiple of 3.`, 1);
}

// 2.	Check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
let string = "i am learning js";
let text = "js";
let position = string.search(text);
if (position >= 0) {
  newElement(`\"${text}\" exists in the string \"${string}\"`, 2);
} else {
  newElement(`\"${text}\" does not exist in the string \"${string}\"`, 2);
}

// 3.	Calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time
let principle = 100,
  rate = 0.05,
  time = 10;
let interest = ((principle / rate) * time) / 100;
newElement(
  `Complex interest of principle:${principle}, rate:${rate} and time: ${time} is ${interest}`,
  3
);

// 4.	Given year leap year or not (29 in feb)
let year = 2024;
if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  newElement(`${year} is a leap year`, 4);
} else {
  newElement(`${year} is not a leap year`, 4);
}

// 5.	0-6 display day week depending upon what user is entering (0-> sunday) : using switch
let input = 5;

switch (input) {
  case 0:
    newElement(`${input} -> Sunday`, 5);
    break;
  case 1:
    newElement(`${input} -> Monday`, 5);
    break;
  case 2:
    newElement(`${input} -> Tuesday`, 5);
    break;
  case 3:
    newElement(`${input} -> Wednesday`, 5);
    break;
  case 4:
    newElement(`${input} -> Thursday`, 5);
    break;
  case 5:
    newElement(`${input} -> Friday`, 5);
    break;
  case 6:
    newElement(`${input} -> Saturday`, 5);
    break;
}

// 6.	Create parametrized method/function to multiply 3 numbers
let result = 0,
  textString = "";

function multiply(x, y, z) {
  result = x * y * z;
  textString = `${arguments[0]} * ${arguments[1]} * ${arguments[2]} = `;
}
multiply(-2, 3, 10);
newElement(`${textString} ${result}`, 6);

// 7.	Create a method to add background color to div element
let btnDiv = document.createElement("div");
btnDiv.setAttribute("id", "q7div");
document.getElementById("answers").appendChild(btnDiv);

let btn = document.createElement("button");
btn.setAttribute("id", "q7Button");
btn.innerHTML = "Q7 go dark";
btn.addEventListener("click", toggleColor);
document.getElementById("q7div").appendChild(btn);

function toggleColor() {
  if (document.getElementById("q7Button").innerHTML === "Q7 go dark") {
    document.getElementById("q7div").style.backgroundColor = "black";
    document.getElementById("q7Button").innerHTML = "Q7 go light";
  } else {
    document.getElementById("q7div").style.backgroundColor = "white";
    document.getElementById("q7Button").innerHTML = "Q7 go dark";
  }
}

// 8.	Write a js method, when user click on button, display random integer below it. (Math.random())
btnDiv = document.createElement("div");
btnDiv.setAttribute("id", "q8div");
document.getElementById("answers").appendChild(btnDiv);

btn = document.createElement("button");
btn.setAttribute("id", "q8Button");
btn.innerHTML = "Q8 random number";
btn.addEventListener("click", randomNumber);
document.getElementById("q8div").appendChild(btn);

let resultP = document.createElement("p");
resultP.setAttribute("id", "randomNumber");
document.getElementById("q8div").append(resultP);

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 101);
  document.getElementById(
    "randomNumber"
  ).innerHTML = `random number from 0 to 100: ${randomNumber}`;
}

// 9.	Write function to convert negative number to positive number (Math.abs())
let result9 = 0;
let arg9 = 0;
function absNumber(num9) {
  result9 = Math.abs(num9);
  arg9 = arguments[0];
}
absNumber(-213);
newElement(`Absolute value of ${arg9} is ${result9}`, 9);

// 10.	sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus
let arg10 = 0;
let sum = 0;

function digitSum(num) {
  arg10 = arguments[0];
  num = Math.abs(num);
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
}
digitSum(1234);
newElement(`Sum of the digits of ${arg10} is ${sum}`, 10);

// 11.	palindrome string (aca: aca(reverse) is a palindrome, abc: cba is not a palindrome): use loops
let arg11 = "",
  isPalindrome = true;
function palindromeStr(str) {
  arg11 = arguments[0];
  let strSplit = str.trim().split("");
  let reverseStr = [];
  for (let i = strSplit.length - 1; i >= 0; i--) {
    reverseStr.push(strSplit[i]);
  }

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === reverseStr[i]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }
}
palindromeStr("cat");
if (isPalindrome === true) {
  newElement(`${arg11} is a palindrome`, 11);
} else {
  newElement(`${arg11} is not a palindrome`, 11);
}

// 12.	display even numbers upto n number
let arg12 = 0,
  i = 0,
  str12 = "";
function evenDisplay(num) {
  arg12 = arguments[0];
  while (i <= num) {
    str12 += `${i} `;
    i = i + 2;
  }
}
evenDisplay(53);
newElement(`even numbers in ${arg12}\: ${str12}`, 12);

// 13.	count of even and odd number from 1 to 999
function count(startNum, endNum) {
  let result = {
    arg1: startNum,
    arg2: endNum,
    even: 0,
    odd: 0,
  };
  let totalNumbers = endNum - startNum + 1;
  if (startNum % 2 === 0 && endNum % 2 === 0) {
    result.even = Math.ceil(totalNumbers / 2);
    result.odd = totalNumbers - result.even;
  } else if (startNum % 2 === 1 && endNum % 2 === 1) {
    result.odd = Math.ceil(totalNumbers / 2);
    result.even = totalNumbers - result.odd;
  } else {
    result.even = totalNumbers / 2;
    result.odd = totalNumbers - result.even;
  }
  return result;
}
let q13 = count(1, 999);
newElement(
  `from ${q13.arg1} to ${q13.arg2}: ${q13.even} even numbers, ${q13.odd} odd numbers`,
  13
);

// 14.	count occurrence of a particular character in a string (hello: count of l is 2): loops
let q14Str = "hello",
  strSearch = q14Str,
  charSearch = "l",
  charCount = 0;
for (let i = 0; i < q14Str.length; i++) {
  if (strSearch.indexOf(charSearch) != -1) {
    charCount++;
    strSearch = strSearch.slice(strSearch.indexOf(charSearch) + 1);
  } else {
    break;
  }
}
newElement(`there are ${charCount} \"${charSearch}\"s in ${q14Str}`, 14);

// 15.	sum and average of array elements [1, 9, 8];
let q15Sum = 0,
  q15Avg = 0,
  q15Arr = [1, 9, 8];

q15Arr.forEach((num) => {
  q15Sum += num;
});

q15Avg = q15Sum / q15Arr.length;
newElement(
  `for [${q15Arr}] - elements sum: ${q15Sum}, elements average: ${q15Avg}`,
  15
);

// 16.	largest number in an array (do with loops)
let q16Arr = [1, 9, 8];
let compareNum = q16Arr[0];

q16Arr.forEach((num) => {
  if (num > compareNum) {
    compareNum = num;
  }
});

newElement(`largest number in [${q16Arr}] is ${compareNum}`, 16);

/*
17.	From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or else print the number
e.g.
1
2
foo
4
bar
foo
*/
let q17Str = "";
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    q17Str += "hello, ";
    console.log("hello");
  } else if (i % 3 === 0) {
    q17Str += "foo, ";
    console.log("foo");
  } else if (i % 5 === 0) {
    q17Str += "bar, ";
    console.log("bar");
  } else {
    q17Str += `${i}, `;
    console.log(i);
  }
}

newElement(`${q17Str}`, 17);
