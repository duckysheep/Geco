// 1.	Extract first five letters from a string (' gfuh ieiuei ')
let string1 = " gfuh ieiuei ";
let result1 = string1.replaceAll(" ", "").substring(0, 5);

// 2.	Get the length of a string and make it uppercase ('hduej dij')
let string2 = "hduej dij";
let result2Len = string2.length;
let result2Upper = string2.toLocaleUpperCase();

// 3.	Take a string, make it lowercase and trim it ('   biji jdo   ')
let string3 = "   biji jdo   ";
let result3Lower = string3.toLocaleLowerCase();
let result3Trim = result3Lower.trim();

// 4.	Replace specified word in a string ('', '')
let string4 = " qwerqwer asdfasdf ";
let result4Replace = string4.replaceAll(" ", "");

// 5.	Create an object for animal, car.
let animal = {
  class: "Mammalia",
  Order: "Carnivora",
  suborder: "Feliformia",
  family: "Felidae",
  subfamily: "Felinae",
  genus: "Felis",
  species: "F. catus",
};

let car = {
  brand: "Audi",
  model: "RS 5 Coupé",
  color: "black",
  output: "331 kW",
  acceleration: "3.9 s",
  torqueMax: "600 Nm",
};

// 6.	Reverse a string (use array method)
let string6 = "1234qwr";
let arr6 = string6.split("");
let arrReversed = arr6.reverse();

// 7.	Find the highest and lowest value in array
let arr7 = [-4, 30, 12093, -40];
let arrMin = Math.min(...arr7);
let arrMax = Math.max(...arr7);

// 8.	Display first 3 elements in an array in UI
let arr8 = [1, 2, 3, 4, 5];
let arr8First3 = arr8.slice(0, 3);
// link as script to html file (<script src="yourFileHere.js"></script>)
// have a tag with id="sampleid"
// document.getElementById("sampleid").innerHTML = arr8First3

// 9.	Remove 4th (index) element and add 2 element there (splice method)
let arr9 = [0, 1, 2, 3, "x", 6, 7, 8, 9];
arr9.splice(4, 1);
arr9.splice(4, 0, 4, 5);
