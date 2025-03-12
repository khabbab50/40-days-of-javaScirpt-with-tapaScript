# 40 Days of javaScirpt in day 10 Tasks assignment

## 📝 Tasks 1. What will be the output of the following code and why?

```js
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();
```

# 🟢 answer:

### ❗ Key Concept: **Variable Shadowing and Hoisting**

Let's break it down:

#### Global Scope

```js
let user = "Alice";
```

This creates a global variable `user` with the value `"Alice"`.

#### Inside `outer()` function:

```js
function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}
```

Now inside `outer()`:

- `inner()` is a nested function that logs `user`.
- There's also a **new `let user` declared inside `outer()`**, which **shadows** the global `user`.

### ⚠️ What happens at runtime?

Before `inner()` is called, **JavaScript hoists variable declarations (but not initializations)**. So this is what JavaScript sees during the parsing phase inside `outer()`:

```js
function outer() {
  function inner() {
    console.log(user); // At this point, the local `user` exists but is not initialized yet
  }
  let user; // hoisted declaration (undefined at the top of `outer`)
  user = "Bob"; // initialization happens here
  inner();
}
```

### 🔍 What happens in `console.log(user)` inside `inner()`?

When `inner()` executes `console.log(user)`, it looks for `user` in its scope chain:

- First, it checks `inner()`'s scope → doesn't find `user`.
- Then it checks `outer()`'s scope → **there _is_ a `let user`, but at the time `inner()` is created (or executed), it’s still in the **temporal dead zone (TDZ)** before it’s initialized.**

So even though `user` exists in the `outer()` scope, **it’s not yet initialized at the time `inner()` tries to access it**, and **this causes a `ReferenceError`**.

### ✅ Final Answer:

> **`ReferenceError: Cannot access 'user' before initialization`**

### 🧠 Summary:

- `let` and `const` are hoisted but not initialized.
- Accessing them before initialization results in a **ReferenceError due to the temporal dead zone (TDZ)**.
- Even though there’s a global `user`, the local `user` in `outer()` **shadows** it, so `inner()` tries to access that uninitialized local `user`.

==================================================

## 📝 Tasks 2. What is the mistake in the code below?

```js
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

# 🟢 answer:

### ✅ What the code does:

- Defines a **global variable** `total`.
- The `add()` function modifies `total` by adding `num` to it.
- Calls `add(5)` and `add(10)`, so `total` becomes `15`.
- `console.log(total)` prints `15`.

### ❌ What's the **mistake / bad practice**?

- **Using a global variable (`total`) unnecessarily.**
  - Global variables can lead to bugs in larger codebases because:
    - Any part of the code can accidentally modify `total`.
    - It increases coupling and reduces modularity.
    - Makes the code harder to debug and maintain.

---

### 💡 Better Practice (Avoid Globals):

You can **encapsulate the state** inside a function or object:

#### Option 1: Return a result instead of using a global

```js
function add(total, num) {
  return total + num;
}

let total = 0;
total = add(total, 5);
total = add(total, 10);
console.log(total); // 15
```

#### Option 2: Use a class or object to manage state

```js
const calculator = {
  total: 0,
  add(num) {
    this.total += num;
  },
};

calculator.add(5);
calculator.add(10);
console.log(calculator.total); // 15
```

================================================

## 📝 Tasks 3. Create a function with a nested function and log a variable from the parent function.

# 🟢 answer:

```js
function outerFunction() {
  let message = "Hello from the outer function!";

  function innerFunction() {
    console.log(message);
  }

  innerFunction();
}

outerFunction();
```

```
**output:** Hello from the outer function!
```

==============================================

## 📝 Tasks 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

# 🟢 answer:

### ✅ Example using `let` inside a loop:

```js
function demoFunction() {
  for (let i = 0; i < 3; i++) {
    let message = `Loop iteration ${i}`;
    console.log(message); // Accessible here
  }

  // console.log(message); // ❌ ReferenceError: message is not defined
}

demoFunction();
```

### 🔍 Explanation:

- `message` is declared with `**let**` **inside the `for` loop block**, so it is **block-scoped**.
- That means it only exists **inside each iteration** of the loop.
- Trying to access `message` **outside the loop** will result in a **ReferenceError**.

### 💡 Key takeaway:

- Variables declared with `**let**` or `**const**` inside a loop or any block (`{}`) **cannot be accessed outside that block**.
- If you use `**var**` instead, it's function-scoped, not block-scoped:

### Example with `var`:

```js
function demoFunction() {
  for (var i = 0; i < 3; i++) {
    var message = `Loop iteration ${i}`;
    console.log(message); // Accessible here
  }

  console.log(message); // ✅ Accessible (but not recommended)
}

demoFunction();
```

=================================================

## 📝 Tasks 5. Write a function that tries to access a variable declared inside another function.

# 🟢 answer:

### ❌ Example: Trying to access a variable declared inside another function

```js
function outerFunction() {
  let secret = "This is a secret!";
}

function anotherFunction() {
  console.log(secret); // ❌ ReferenceError: secret is not defined
}

outerFunction();
anotherFunction();
```

### 🔍 Explanation:

- The variable `secret` is declared **inside `outerFunction()`**, so it’s **local to that function only**.
- `anotherFunction()` has **no access** to `secret` — it’s not in its scope.
- Trying to log `secret` in `anotherFunction()` will result in a **ReferenceError**.

### ✅ How to do it _correctly_ (via closure or parameter):

#### Option 1: Return the variable from `outerFunction`:

```js
function outerFunction() {
  let secret = "This is a secret!";
  return secret;
}

function anotherFunction(secretValue) {
  console.log(secretValue); // ✅ Accessing via parameter
}

let value = outerFunction();
anotherFunction(value);
```

#### Option 2: Use a closure to **expose access**:

```js
function outerFunction() {
  let secret = "This is a secret!";

  function revealSecret() {
    console.log(secret); // ✅ Accessing via closure
  }

  return revealSecret;
}

const getSecret = outerFunction();
getSecret(); // Logs: This is a secret!
```

===============================================

## 📝 Tasks 6. What will be the output and why?

```js
console.log(a);
let a = 10;
```

# 🟢 answer:

### ❌ Output:

```
ReferenceError: Cannot access 'a' before initialization
```

---

### 🤔 Why does this happen?

- **Variables declared with `let` (or `const`) are hoisted**, **but not initialized**.
- The variable `a` is **in a "Temporal Dead Zone" (TDZ)** from the start of the block (or script) **until the `let a = 10;` line is reached**.
- During that time, you **cannot access** the variable at all — not even to log it — hence the `ReferenceError`.

### 📚 Explanation:

- In memory, JavaScript knows `a` exists (because of hoisting), but it **hasn’t initialized it yet**.
- Trying to access it before initialization causes a **ReferenceError**, not `undefined`.

### 🔁 Compare with `var`:

```js
console.log(a);
var a = 10;
```

✅ This would log:

```
undefined
```

Because `var` is also hoisted **and initialized as `undefined`**.

---

### 🔑 Summary:

| Declaration   | Hoisted | Accessible before declaration | Value before declaration |
| ------------- | ------- | ----------------------------- | ------------------------ |
| `var`         | Yes     | Yes                           | `undefined`              |
| `let`/`const` | Yes     | ❌ No (TDZ error)             | ❌ ReferenceError        |

==================================================

## 📝 Tasks 7. Where is the `age` variable accessible?

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

Options:

- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

# 🟢 answer:

### ✅ Correct Answer: **C: It will cause an error**

### 🔍 Explanation:

- The variable `age` is declared **inside the function `showAge()` using `let`**, so it has **function (local) scope**.
- Outside the function (in the global scope), `age` **does not exist**.
- So when you run `console.log(age)` **outside** the function, it causes a:

```
ReferenceError: age is not defined
```

### Summary of Options:

- **A: In Global** → ❌ No, it’s only declared inside the function.
- **B: Only inside showAge** → ✅ Technically true, but **the question is about where `age` is accessible**, and the **code will throw an error** before even calling `showAge()`.
- **C: It will cause an error** → ✅ **Correct**, because the last line tries to access `age` outside its scope.
- **D: None of the above** → ❌ Incorrect, since **C is valid**.

===============================================

## 📝 Tasks 8. What will be the output and explain the output?

```js
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

# 🟢 answer:

### ✅ **Output:**

```
Hi
```

---

### 🔍 **Explanation:**

1. There's a **global variable** `message = "Hello"`.
2. Inside the `outer()` function, there's a new **local variable** also named `message = "Hi"` — this **shadows** the global `message`.
3. The `inner()` function is **defined inside `outer()`**, so it has access to variables declared in `outer()`’s scope (this is called **lexical scoping**).
4. When `inner()` is called, it **looks for `message`**:
   - First in its own scope (it has none),
   - Then in its parent scope (`outer()`), where it **finds `message = "Hi"`**,
   - So it logs `"Hi"` to the console.

> Even though there's also a global `message = "Hello"`, that one is **not used**, because the **closest scoped variable takes precedence**.

---

### 💡 Summary:

- **Lexical scoping** means functions remember the scope where they were **defined**, not where they are **called**.
- This is why `inner()` prints `"Hi"` and not `"Hello"`.

================================================

## 📝 Tasks 9. What will be the output and why?

```js
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();
```

# 🟢 answer:

### ✅ **Output:**

```
Inner
```

---

### 🔍 **Why? Explanation:**

Let's walk through the scopes:

1. `let x = "Global";` — Declares a **global** variable `x`.
2. `function outer()` declares its own local `let x = "Outer";` — **this shadows the global `x`** inside `outer`.
3. Inside `outer`, there's another function `inner()` that declares **yet another `let x = "Inner";`**, which **shadows `outer`'s `x`**.
4. When `console.log(x)` is called **inside `inner()`**, JavaScript looks for the variable `x` in the **nearest scope**, which is `"Inner"` — so that's what gets printed.

---

### 💡 Key concept: **Variable Shadowing**

- Each `x` exists in a different scope.
- The inner variable with the same name **hides or "shadows"** the outer one.

### 🔁 If we removed `let x = "Inner"` from `inner()`:

```js
function inner() {
  console.log(x);
}
```

Then it would print:

```
Outer
```

And if we also removed `let x = "Outer"` from `outer()`:

```js
function outer() {
  function inner() {
    console.log(x);
  }
  inner();
}
```

Then it would print:

```
Global
```

==================================================

## 📝 Tasks 10. What will be the output and why?

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
```

# 🟢 answer:

### ✅ **Output:**

```
-1
-2
```

---

### 🔍 **Why? Let's break it down:**

1. The `counter()` function is called, and it:

   - Creates a **local variable** `count = 0`.
   - Returns an **inner function** that **decrements** `count` and logs it.

2. `const reduce = counter();`

   - Stores the **returned inner function** in the variable `reduce`.
   - Here's the cool part: **the returned function keeps access to the `count` variable** inside `counter()` — this is called a **closure**.
   - Even though `counter()` has finished running, `count` is still **alive and remembered** by the returned function.

3. When you call `reduce()` the first time:

   - `count--` → `0 → -1`
   - Logs `-1`

4. Call `reduce()` again:
   - `count--` → `-1 → -2`
   - Logs `-2`

So the `count` variable **persists across function calls**, thanks to the closure.

---

### 💡 Closure in simple terms:

> A closure is when a function "remembers" the variables from the scope where it was created — even after that scope has exited.

---
