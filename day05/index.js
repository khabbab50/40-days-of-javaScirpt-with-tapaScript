console.log("Day 05");

// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
console.log("Generate a Pyramid Pattern");
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let row = 1; row <= i; row++) {
    star += "*";
  }
  console.log(star);
}

// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:
console.log("Craete Multiplication Table");
for (let n = 1; n <= 10; n++) {
  let namota = "";
  for (let j = 1; j <= 10; j++) {
    if (n === 3) {
      namota = n * j;
      console.log(n, "*", j, "=", namota);
    }
  }
}

// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
console.log("summation of all odd numbers");
let sum = 0;
for (let n = 1; n <= 500; n++) {
  if (n % 2 === 1) {
    sum += n;
  }
}
console.log(sum);

// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.
console.log("Skipping Multiples of 3");
for (let n = 1; n <= 20; n++) {
  if (n === 3) {
    continue;
  }
  console.log(n);
}
