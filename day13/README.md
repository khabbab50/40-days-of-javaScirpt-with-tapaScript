# 40 Days of javaScript Tasks in day 13

## 📋 Task 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Satandalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios.

# ☑️ Answer

Here's a detailed table showing the value of `this` in different JavaScript situations, along with examples:

| **Situation**                                          | **Value of `this`** & Example                                                                                                                                                                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **At the Global**                                      | `this` refers to the global object (in browsers, `window`) <br><br>`js<br>console.log(this); // window (in browser)<br>`                                                                                                             |
| **Inside an Object Method**                            | `this` refers to the object the method belongs to <br><br>`js<br>const obj = {<br>  name: 'Object',<br>  show() {<br>    console.log(this.name); // "Object"<br>  }<br>};<br>obj.show();<br>`                                        |
| **Inside a Standalone Non-Arrow Function**             | `this` is `undefined` in strict mode, or `window` in non-strict mode (global object) <br><br>`js<br>"use strict";<br>function show() {<br>  console.log(this); // undefined<br>}<br>show();<br>`                                     |
| **Inside an Arrow Function (standalone)**              | `this` is inherited from the lexical scope (does **not** bind its own `this`) <br><br>`js<br>const show = () => {<br>  console.log(this); // global or lexical scope<br>};<br>show();<br>`                                           |
| **Inside an Arrow Function (as object method)**        | `this` is inherited from the outer context (not the object) <br><br>`js<br>const obj = {<br>  name: 'Arrow',<br>  show: () => {<br>    console.log(this.name); // undefined (or window.name if set)<br>  }<br>};<br>obj.show();<br>` |
| **Inside an Object Created with Constructor Function** | `this` refers to the new instance created by the constructor <br><br>`js<br>function Person(name) {<br>  this.name = name;<br>}<br>const p = new Person("Alice");<br>console.log(p.name); // "Alice"<br>`                            |

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘

## 📋 Task 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

# ☑️ Answer

### Problem:

The issue lies in how `this` is used inside the `greet` method.

```js
greet: () => {
  console.log(`Hello, ${this.name}!`);
},
```

You're using an **arrow function**, and arrow functions do **not have their own `this`**. Instead, they **inherit `this` from their lexical scope**, which, in this case, is the outer context — not the `user` object. So `this.name` ends up being `undefined`.

---

### Fix:

Change the arrow function to a **regular function** so that `this` correctly refers to the `user` object:

```js
const user = {
  name: "tapaScript",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); // Hello, tapaScript!
```

---

### Explanation:

- Regular functions (`function` keyword or method shorthand) get their `this` value from **how they're called**.
- When you call `user.greet()`, `this` refers to the `user` object.
- Arrow functions don’t work like this. They're useful when you want to preserve the outer `this`, but not when defining object methods that rely on dynamic `this` binding.

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘

## 📋 Task 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
```

# ☑️ Answer

### Problem:

The issue here is with how `this` is **lost** when the method `obj.greet` is **assigned to a variable**:

```js
const greetFn = obj.greet;
greetFn(); // this.name is undefined
```

Even though `greet` is defined as a regular function (which uses dynamic `this` binding), when you **extract** it like this, it **loses its context** (`obj`). Now, when `greetFn()` is called, `this` refers to the global object (`window` in browsers, or `undefined` in strict mode), **not** `obj`.

---

### Fix:

You can explicitly **bind** the correct context using `.bind()`:

```js
const greetFn = obj.greet.bind(obj);
greetFn(); // Hello, Tom!
```

---

### Explanation:

- In JavaScript, **functions lose their original `this` context** when passed around unless you preserve it.
- `.bind(obj)` returns a **new function** where `this` is permanently set to `obj`.

Alternatively, you can call the method directly without detaching it:

```js
obj.greet(); // Hello, Tom!
```

Or use an arrow function wrapper to preserve context:

```js
const greetFn = () => obj.greet();
greetFn(); // Hello, Tom!
```

But `.bind()` is the cleanest when you want to detach the method but retain its original context.

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘

## 📋 Task 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
```

# ☑️ Answer

### Problem:

The problem is that `this` inside the `inner` function does **not** refer to the `user` object, which is why `this.name` is `undefined`.

Here's what's happening:

```js
function inner() {
  console.log(`Hello, ${this.name}!`);
}
```

- `inner` is a **regular function**, and it's called without a context (`inner()`), so `this` inside it:
  - refers to the **global object** in non-strict mode,
  - or is `undefined` in strict mode.

Either way, `this.name` doesn’t point to `"Alex"`, which is why you get `undefined`.

---

### Fix:

You have a few options to fix this depending on how you want to write the code.

#### ✅ Option 1: Use an arrow function (inherits `this` from `greet`)

```js
const user = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user.greet(); // Hello, Alex!
```

Arrow functions don’t have their own `this` — they **inherit** it from their outer function (`greet`), which is called as a method of `user`.

---

#### ✅ Option 2: Store `this` in a variable

```js
const user = {
  name: "Alex",
  greet: function () {
    const self = this;
    function inner() {
      console.log(`Hello, ${self.name}!`);
    }
    inner();
  },
};

user.greet(); // Hello, Alex!
```

This is the classic approach before arrow functions were introduced.

---

#### ✅ Option 3: Bind `this` to the inner function

```js
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner.call(this); // or inner.bind(this)()
  },
};

user.greet(); // Hello, Alex!
```

---

### Summary:

- The problem is due to **loss of `this` context** in the inner function.
- Fix it by either:
  - using an arrow function (best modern approach),
  - saving `this` in a variable,
  - or explicitly binding `this`.

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘

## 📋 Task 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

# ☑️ Answer

Sure! Here's how you can create a `Sports` constructor function, use `this` to assign properties, and then create and log two instances:

```js
// Constructor function
function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
}

// Create two instances
const soccer = new Sports("Soccer", 11);
const basketball = new Sports("Basketball", 5);

// Log their details
console.log(`Sport: ${soccer.name}, Players: ${soccer.numberOfPlayers}`);
// Sport: Soccer, Players: 11

console.log(
  `Sport: ${basketball.name}, Players: ${basketball.numberOfPlayers}`
);
// Sport: Basketball, Players: 5
```

### Explanation:

- `this.name` and `this.numberOfPlayers` refer to the **new object** being created when you call `new Sports(...)`.
- `new` creates a blank object, sets `this` to that object, and returns it automatically unless something else is returned.

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘

## 📋 Task 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```js
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
```

# ☑️ Answer

Absolutely! There are multiple ways to attach `car1`’s `describe()` method to `car2`. Below are **all the main solutions**, each with an explanation:

---

### ✅ **1. Direct assignment**

Assign the method from `car1` to `car2`:

```js
car2.describe = car1.describe;
car2.describe(); // This car is a BMW X1.
```

---

### ✅ **2. Using `call()`**

Invoke `car1.describe` with `car2` as the context:

```js
car1.describe.call(car2); // This car is a BMW X1.
```

> `call()` calls the function immediately with a specified `this`.

---

### ✅ **3. Using `apply()`**

Same as `call()`, but arguments are passed as an array:

```js
car1.describe.apply(car2); // This car is a BMW X1.
```

---

### ✅ **4. Using `bind()`**

Create a new function with `car2` bound as `this`:

```js
const boundDescribe = car1.describe.bind(car2);
boundDescribe(); // This car is a BMW X1.
```

> `bind()` returns a new function — it **does not** invoke it immediately.

---

### ✅ **5. Copy method using object spread (if you want to clone the method)**

```js
car2 = {
  ...car2,
  describe: car1.describe,
};
car2.describe(); // This car is a BMW X1.
```

---

### ✅ **6. Set the prototype (not recommended unless you're building inheritance)**

You can share behavior via prototypes:

```js
Object.setPrototypeOf(car2, car1);
car2.describe(); // This car is a BMW X1.
```

---

### Summary:

| Method                          | Description                      | Invokes Immediately                |
| ------------------------------- | -------------------------------- | ---------------------------------- |
| `car2.describe = car1.describe` | Attaches the method directly     | ❌                                 |
| `car1.describe.call(car2)`      | Calls with `car2` as `this`      | ✅                                 |
| `car1.describe.apply(car2)`     | Same as `call`, args as array    | ✅                                 |
| `car1.describe.bind(car2)`      | Binds a new function to `car2`   | ❌ (need to call it)               |
| `Object.setPrototypeOf()`       | Sets prototype to inherit method | ❌ (but method becomes accessible) |

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘

## 📋 Task 7. What will be the output of the following code and why?

```js
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```

Options are:

- A: "Charlie" and "Charlie"
- B: "Charlie" and undefined
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"

# ☑️ Answer

The correct answer is: **🅱️ B: `"Charlie"` and `undefined`**

---

### Here's why:

```js
const person = {
  name: "Charlie",

  // Regular function
  sayHello: function () {
    console.log(this.name);
  },

  // Arrow function
  sayHelloArrow: () => {
    console.log(this.name);
  },
};
```

#### `person.sayHello();`

- This is a **regular function**, and it's called as a **method of `person`**.
- So `this` refers to the `person` object.
- Therefore, `this.name` → `"Charlie"`

✅ Output: `"Charlie"`

---

#### `person.sayHelloArrow();`

- This is an **arrow function**.
- Arrow functions **do not have their own `this`**, they **lexically inherit** it from the outer scope.
- Here, the outer scope is **not `person`**, but whatever the surrounding context is — likely the **global scope** (or module/global object), where `this.name` is probably `undefined`.

✅ Output: `undefined`

---

### Final Output:

```
Charlie
undefined
```

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
