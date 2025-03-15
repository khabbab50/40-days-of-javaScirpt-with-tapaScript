# 40 Days of javaScritp in day 11

## 📝 Tasks 1. What will be the output of the following code and why?

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
```

# ✔️ Answer જ⁀➴

Let's walk through the JavaScript code step by step:

### 🔍 Explanation:

1. **`outer()` is called**:

   - A new variable `count` is initialized with `0`.
   - The `inner()` function is returned, and it **closes over** the `count` variable — meaning it **remembers the environment** in which it was created (this is a **closure** in JavaScript).

2. **`const counter = outer();`**:

   - Now `counter` holds a reference to the `inner` function.
   - The variable `count` is **still in memory and preserved** inside the closure.

3. **`counter();` is called the first time**:

   - `count++` increments `count` from `0` to `1`.
   - `console.log(count)` logs `1`.

4. **`counter();` is called the second time**:
   - `count++` increments `count` from `1` to `2`.
   - `console.log(count)` logs `2`.

### ✅ **Output:**

```
1
2
```

### 💡 Why?

Because of **closures** — the `inner` function retains access to the `count` variable from its lexical scope, even after `outer` has finished executing. So `count` persists between calls.

===============================================

## 📝 Tasks 2. What will be the output and why?

```js
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
```

# ✔️ Answer જ⁀➴

### 🔍 Step-by-step Explanation:

1. **Function `testClosure` is called**:

   - Inside `testClosure`, a variable `x` is declared and initialized to `10`.
   - Then it returns an **anonymous function** (a closure) that uses the variable `x`.

2. **`testClosure()()`**:

   - The first `()` calls `testClosure`, which returns the inner function: `function () { return x * x; }`.
   - The second `()` immediately invokes that returned function.

3. **Inside the returned function**:
   - It computes `x * x`, which is `10 * 10 = 100`.

### ✅ **Output:**

```
100
```

### 💡 Why?

Because of **closures** again — the returned function "remembers" the value of `x` from the scope where it was created (inside `testClosure`), even after `testClosure` has finished running.

==================================================

## 📝 Tasks 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

# ✔️ Answer જ⁀➴

### ✅ **Code Example:**

```js
function createButtonWithCounter() {
  let count = 0;
  const button = document.createElement("button");
  button.textContent = "Click me";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    count++;
    console.log(`Button clicked ${count} time(s).`);
  });
}
createButtonWithCounter();
```

### 💡 Explanation:

- `count` is declared **inside `createButtonWithCounter()`**, so it's private to that function.
- The event handler attached to the button **closes over `count`**, so it retains access to it across multiple clicks.
- Every time the button is clicked, `count++` increments and logs the updated count.

### 📌 Output on clicking the button:

```
Button clicked 1 time(s).
Button clicked 2 time(s).
Button clicked 3 time(s).
...
```

===========================================

## 📝 Tasks 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

# ✔️ Answer જ⁀➴

### ✅ **Code:**

```js
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
```

### 💡 How it works:

- `createMultiplier(multiplier)` returns a new function that takes a number and multiplies it by the `multiplier` value passed earlier.
- The inner function **closes over** the `multiplier` variable, keeping access to it even after `createMultiplier` has finished executing.

### ✨ Example Usage:

```js
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(double(10)); // 20
```

Each function (`double`, `triple`) has its own private `multiplier` value preserved by closure.

=============================================

## 📝 Tasks 5. What happens if a closure references an object?

- 1. The object is garbage collected immediately
- 2. The object remains in memory as long as the closure exists
- 3. The object is automatically cloned
- 4. None of the Above.

# ✔️ Answer જ⁀➴

```
✅ 2. The object remains in memory as long as the closure exists
```

=================================================

## 📝 Tasks 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

# ✔️ Answer જ⁀➴

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}
```

### ✅ Example Usage:

```javascript
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
console.log(counter.reset()); // 0
console.log(counter.getCount()); // 0
```

### 🔍 Why this works:

- The `count` variable is **private** and only accessible to the returned functions.
- The returned object functions have access to `count` via **closure**, so they can manipulate and return it even after `createCounter()` has finished executing.
