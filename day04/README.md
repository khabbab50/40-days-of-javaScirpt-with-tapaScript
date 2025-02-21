# 40 Days of javaScript in day 04

## 1. What will be the output of this code snippet and why?

```js
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
```

JavaScript is a case sensitive language. If the condition matched the variable, the first block would be printed. Since the condition is false here, the next block is printed.

## 2. Build an ATM Cash Withdrawal System

Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

```js
let allowAmount = 100;

switch (allowAmount) {
  case 100:
    console.log("Withdrawal successful");
    break;
  default:
    console.log("Invalid amount");
}
```

## 3. Build a Calculator with switch-case

Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

```js
let operator = "*";

let a = 10;
let b = 20;

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;
  default:
    console.log("invalid Oparetor");
}
```

## 4. Pay for your movie ticket

Imagine, the INOX charges ticket prices based on age:

- Children (<10 years): $3
- Adults (12 - 60 years): $10
- Seniors (60+ years): $8  
  Write a program that prints the ticket price based on the person’s age.

  ```js
  let age = 90;
  if (age < 10) {
    console.log("Children ticket prices $3");
  } else if (age >= 12 && age <= 60) {
    console.log("Adults ticket price $10");
  } else if (age > 60) {
    console.log("Seniors ticket price $8");
  }
  ```

## 5. Horoscope Sign Checker

Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

```js
let month = "march";

switch (month) {
  case "march":
    console.log("Aries");
    break;
  case "april":
    console.log("Aries");
    break;
  case "may":
    console.log("Taurus");
    break;
  case "jun":
    console.log("Taurus");
    break;
  case "july":
    console.log("Gemini");
    break;
  case "agust":
    console.log("Gemini");
    break;
  default:
    console.log("Invalid month name");
}
```

## 6. Which Triangle?

A triangle has 3 sides. A Triangle type is determined by its sides:

- All sides equal is called, Equilateral Triangle.
- Two sides equal is called, Isosceles Triangle.
- All sides different is called, Scalene Triangle.  
  Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly
