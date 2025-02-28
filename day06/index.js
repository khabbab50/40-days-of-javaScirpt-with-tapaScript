console.log("Day 06");
// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
console.log("=============Celsius to Fahrenheit==============");
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(32));

// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
console.log("===========Maximum of Two Numbers===========");
function findMax(num1, num2) {
  return num1 < num2 ? num2 : num1;
}
console.log(findMax(70, 60));

// 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
console.log("===========String is a Palindrome===========");
function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    console.log("is Palindrome");
  } else {
    console.log("is not Palindrom");
  }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("tapas"));

// 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
console.log("===========Find Factorial of a Number===========");
function factorial(n) {
  let fac = 1;
  for (n; n >= 1; n--) {
    fac = fac * n;
  }
  return fac;
}
console.log(factorial(4));

// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
console.log("===========Count Vowels in a String===========");
function countVowels(str) {
  return str.length;
}
console.log(countVowels("tapaScript"));

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
console.log(
  "===========Capitalize the First Letter of Each Word in a Sentence==========="
);
function capitalizeWords(sentence) {
  return sentence.toUpperCase();
}
console.log("bangladesh=> ", capitalizeWords("bangladesh"));

// 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.
console.log("===========Use an IIFE to Print===========");
(function () {
  console.log("Hello, JavaScript!");
})();

// 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.
console.log("===========Simple Callback Function===========");
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function teacher() {
  console.log("tapaScript");
}

greet("tapas", teacher);

// function f1() {}
// function f2() {
//   f1();
// }
// f2();
