// Question no 1
// Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.
// solution
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
const numbers = [10, 2, 33, 4, 5, 8, 14];
const result = sumEvenNumbers(numbers);
console.log(result); // output 38
console.log("------------");
// End

// Question no 2
//  Write a function that takes a string as input and returns the number of vowels in the string
//solution
function countVowels(str) {
  let vowels = "AEIOUaeiou ";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
      if (str[i] == vowels[k]) {
        count++;
      }
    }
  }
  return count;
}
let myString = "web developer";
let numberOfVowels = countVowels(myString);
console.log(`The number of vowels in "${myString}" is ${numberOfVowels}.`);
console.log("------------");
// End

//Question no 3
//Write a function that takes an array of strings as input and returns the length of the longest string in the array.
// solution
function findLongestStringLength(strings) {
  let maxLength = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxLength) {
      maxLength = strings[i].length;
    }
  }
  return maxLength;
}

let myStrings = ["apple", "banana", "cherry", "date", "umbrella"];
let longestStringLength = findLongestStringLength(myStrings);
console.log(
  `The length of the longest string in [${myStrings}] is ${longestStringLength}.`
);
console.log("------------");
// End

//Question no 4
// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
// solution
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let avg = average(myNumbers);
console.log("The average of this is :" + avg); // Output 6
console.log("------------");
// End

// Question no 5
// Write a function that takes an object as input and returns an array of all the keys in the object.
// solution
function getKeys(obj) {
  return Object.keys(obj);
}
let myObject = { applePrice: 250, sugarcanePrice: 100, wheatPrice: 45 };
let keys = getKeys(myObject);
console.log(keys); // ["apple", "cat", "bus"]
console.log("------------");
// End

// Question no 6
//  Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.
// solution
function getValuesForKey(objects, key) {
  let values = [];
  for (let i = 0; i < objects.length; i++) {
    if (key in objects[i]) {
      values.push(objects[i][key]);
    }
  }
  return values;
}
let myObjects = [{ a: 1, b: 2 }, { a: 3, c: 4 }, { b: 5 }];
let values = getValuesForKey(myObjects, "a");
console.log(values); // [1, 3]
console.log("------------");
// End

//Question no 7
//  Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.
// solution
function getUniqueStrings(strings) {
  let uniqueStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (!uniqueStrings.includes(strings[i])) {
      uniqueStrings.push(strings[i]);
    }
  }
  return uniqueStrings;
}
let strings = ["john", "carry", "john", "warner", "john", "gayle", "john"];
let uniqueStrings = getUniqueStrings(strings);
console.log(uniqueStrings); // ["john", "carry", "gayle","warner"]
console.log("------------");
// End

//Question no 8
// Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.
// solution
function product(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}
let Numbers = [11, 2.5, 2, 4];
let prod = product(Numbers);
console.log(prod); // 24
console.log("------------");
// End
