# 40 Days of javaScirpt in day 09

## **Task 1 :** Expian Temopral Dead Zone by creating 3 variables in side a block.

# Answer:

The Temporal Dead Zone (TDZ) is the period between when a let of const variable is hoisted and when it is initialized. Accessing the bariable during this time results in a ReferenceError.

Here's an example demostrating the TDZ with three variables inside a block:

```js
console.log(a);

console.log(b);

console.log(c);

let a = 10;
const b = 20;
let c = 30;

console.log(a);
console.log(b);
console.log(c);
```

## Explanation:

- a,b and c are hoisted but remin in the TDZ until they are initialized.
- Trying to access them before initialization results in a ReferenceError.
- Once they are initialized, they can be accessed normally.

==================================================

## **Task 2 :** Explain Variable and Function Hoisting wigth Example.

# Answer:

### Variable and Function Hoisting in JavaScript

Hoistin is JavaScript's default behavior of moving declaritions to the top of their scope before code execution. However, how variables and function are hoisted depends on how they are declared.

### 1. Function Hoisting

Function declarations are fully hoisted, meaning you can call them before they are defiend.

```js
greet();

functin greet(){
    console.log("Hello tapaScript")
}
```

here, the function greet is hoisted, son calling it before its declaration works fine.

### 2. variable Hoisting

#### (a) var Hoisting

Variables declared with var are hoisted without their assigned values.

```js
console.log(a);
var a = 10;
console.log(a);
```

Behind the scenes, JavaScript treats it like this:

```js
var;
console.log(a);
a = 10;
console.log(a);
```

#### (b) let and const Hoisting

variables declared with let and const are also hoisted but not initialized. Accessing them before declaration results in a RererenceError due to the temporal dead zone (TDZ).

```js
console.log(b);
let b = 20;
console.log(b);
```

```js
console.log(c);
const c = 30;
console.log(c);
```
