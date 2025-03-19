# Tasks

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```

# Answer:

The output will be:

```
"Not provided"
```

### **Why?**

The `??` operator in JavaScript is called the **nullish coalescing operator**. It returns the **right-hand operand** if the **left-hand operand is `null` or `undefined`**, otherwise it returns the left-hand operand.

In your code:

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```

- `user.age` is `undefined`
- Since `undefined` is a **nullish value**, the `??` operator returns the right-hand operand: `"Not provided"`

### 🔍 Contrast with `||`:

If you had used `||` instead of `??`:

```js
console.log(user.age || "Not provided");
```

It would still print `"Not provided"` in this case, **but** `||` treats more values as falsy — like `0`, `false`, `''`, `NaN`, **and** `undefined`/`null`.  
`??` only checks for `null` or `undefined`, making it safer in some situations.

=============================================

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

# Answer:

The output will be:

```
1
```

### **Why?**

In this code:

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

- `Object.freeze()` **makes an object immutable** — you cannot add, remove, or modify its properties.
- When you try `obj.a = 2`, **it silently fails in non-strict mode** (which your code is in by default).
- The assignment has **no effect**, so `obj.a` remains `1`.

### ✅ Key points:

- **No error is thrown** (unless you're in **strict mode**, in which case you'd get a `TypeError`).
- The object remains unchanged.
- `Object.freeze()` only applies **shallow immutability**, so if the object contains nested objects, those can still be modified unless you freeze them too.

### Bonus Example (Strict Mode):

```js
"use strict";
const obj = Object.freeze({ a: 1 });
obj.a = 2; // ❌ TypeError: Cannot assign to read only property 'a'
```

==================================================

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
```

# Answer:

use **nested object destructuring** to extract `name`, `company`, and `address.city` like this:

```js
const {
  name,
  company,
  company: {
    name: companyName,
    location: { city },
  },
} = person;

console.log(name); // "Tapas"
console.log(companyName); // "tapaScript"
console.log(city); // "Bangalore"
```

### 🔍 Explanation:

- `name` directly comes from the top level of `person`.
- `company.name` is renamed as `companyName` to avoid conflict with the top-level `name`.
- `location.city` is directly destructured as `city`.

=============================================

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

# Answer:

- Stores student details in an object.
- Has a method to calculate the **average grade**.

```js
// Student Management System
const student = {
  name: "Alice",
  age: 20,
  grades: [85, 90, 78, 92, 88],

  // Method to calculate average grade
  calculateAverage() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  },
};

// Display student info and average grade
console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("Grades:", student.grades.join(", "));
console.log("Average Grade:", student.calculateAverage().toFixed(2));
```

### 🔍 Sample Output:

```
Student Name: Alice
Age: 20
Grades: 85, 90, 78, 92, 88
Average Grade: 86.60
```

=========================================

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

# Answer:

Here’s a simple implementation of a **Book Store Inventory System** in JavaScript using an object to store books and functions to check availability and restock books:

```javascript
// Book Store Inventory System

// Inventory object: book title -> { quantity, price }
const inventory = {
  "The Great Gatsby": { quantity: 4, price: 10.99 },
  "To Kill a Mockingbird": { quantity: 2, price: 8.99 },
  1984: { quantity: 0, price: 9.99 },
};

// Function to check availability
function checkAvailability(title) {
  const book = inventory[title];
  if (book) {
    if (book.quantity > 0) {
      console.log(`"${title}" is available. Quantity: ${book.quantity}`);
    } else {
      console.log(`"${title}" is currently out of stock.`);
    }
  } else {
    console.log(`"${title}" is not found in inventory.`);
  }
}

// Function to restock a book
function restockBook(title, amount) {
  if (inventory[title]) {
    inventory[title].quantity += amount;
    console.log(
      `"${title}" restocked. New quantity: ${inventory[title].quantity}`
    );
  } else {
    console.log(`"${title}" is not in inventory. Adding it now.`);
    inventory[title] = { quantity: amount, price: 0 };
    console.log(`"${title}" added to inventory with quantity ${amount}.`);
  }
}

// Example Usage:
checkAvailability("1984");
restockBook("1984", 5);
checkAvailability("1984");

restockBook("New Book Title", 3);
checkAvailability("New Book Title");
```

### 📌 Features Covered:

- Store books in an object with quantity and price.
- Check availability with a simple lookup.
- Restock books or add new books if not present.

==========================================

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

# Answer:

### 🔑 `Object.keys()`

- Returns an **array of the keys (property names)** of an object.

### 🔢 `Object.entries()`

- Returns an **array of key-value pairs** (each pair is an array `[key, value]`).

---

### ✅ Example:

```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  price: 10.99,
};

console.log(Object.keys(book));
// ➝ ["title", "author", "price"]

console.log(Object.entries(book));
// ➝ [["title", "The Great Gatsby"], ["author", "F. Scott Fitzgerald"], ["price", 10.99]]
```

---

### ✨ When to use:

| Method             | Use When You Need...                                |
| ------------------ | --------------------------------------------------- |
| `Object.keys()`    | Just the list of property names (keys)              |
| `Object.entries()` | Both keys and values to loop or manipulate together |

---

### 🔁 Example Use Case – Looping through object:

#### With `Object.keys()`:

```javascript
Object.keys(book).forEach((key) => {
  console.log(`${key}: ${book[key]}`);
});
```

#### With `Object.entries()` (cleaner in many cases):

```javascript
Object.entries(book).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---

### Summary:

- `Object.keys(obj)` ➝ `["key1", "key2"]`
- `Object.entries(obj)` ➝ `[["key1", value1], ["key2", value2]]`

===========================================

## 7. How do you check if an object has a certain property?

# Answer:

### ✅ 1. `in` Operator (Most Common & Recommended)

```javascript
const book = { title: "1984", author: "George Orwell" };

console.log("title" in book); // true
console.log("price" in book); // false
```

- **Checks for both own properties and inherited ones.**
- Safe even if the property value is `undefined`.

---

### ✅ 2. `hasOwnProperty()` Method

```javascript
console.log(book.hasOwnProperty("title")); // true
console.log(book.hasOwnProperty("price")); // false
```

- **Checks only own properties**, not inherited ones from the prototype.
- Useful when you want to make sure the property truly belongs to the object.

---

### ✅ 3. Property Access Check (Not ideal for existence check)

```javascript
console.log(book.title !== undefined); // true
console.log(book.price !== undefined); // false
```

- ❗ **Not recommended** in all cases, because a property could exist but have a value of `undefined`.

```javascript
const book2 = { price: undefined };
console.log("price" in book2); // true ✅
console.log(book2.price !== undefined); // false ❌ (even though property exists)
```

---

### 🚀 Summary:

| Method                       | Checks own | Checks inherited | Handles `undefined` safely |
| ---------------------------- | ---------- | ---------------- | -------------------------- |
| `"prop" in obj`              | ✅         | ✅               | ✅                         |
| `obj.hasOwnProperty("prop")` | ✅         | ❌               | ✅                         |
| `obj.prop !== undefined`     | ✅         | ✅               | ❌                         |

==============================================

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

# Answer:

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

# Answer:

Let’s break down the **best ways** to deep copy a nested object with examples:

---

## ✅ 1. **Using `structuredClone()` (Modern & Recommended)**

```javascript
const original = {
  title: "Book",
  details: {
    author: "John Doe",
    year: 2020,
  },
};

const copy = structuredClone(original);

// Modify the copy
copy.details.year = 2025;

console.log(original.details.year); // 2020 ✔ (original unchanged)
```

### ✔ Pros:

- Simple and efficient
- Handles nested objects, arrays, dates, etc.
- Available in modern browsers and Node.js

### ❗ Cons:

- Not supported in very old environments
- Doesn’t work with functions, DOM elements, or class instances

---

## ✅ 2. **Using `JSON.parse(JSON.stringify(obj))` (Classic but Limited)**

```javascript
const original = {
  title: "Book",
  details: {
    author: "John Doe",
    year: 2020,
  },
};

const copy = JSON.parse(JSON.stringify(original));

copy.details.year = 2025;
console.log(original.details.year); // 2020 ✔
```

### ✔ Pros:

- Simple and works in most environments

### ❌ Cons:

- ❌ Loses special types: `Date`, `Map`, `Set`, `undefined`, functions
- ❌ Doesn’t handle circular references

```javascript
const obj = {
  date: new Date(),
  func: () => {},
  undef: undefined,
};

const copy = JSON.parse(JSON.stringify(obj));
console.log(copy); // { date: "2025-03-19T...", func: undefined ❌ gone, undef: undefined ❌ gone }
```

---

## ✅ 3. **Using Recursion (Manual Deep Clone)**

If you want **full control**, write a recursive deep clone function:

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Object
  const clone = {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

const original = {
  title: "Book",
  details: {
    author: "John Doe",
    tags: ["fiction", "mystery"],
  },
};

const copy = deepClone(original);
copy.details.tags.push("thriller");

console.log(original.details.tags); // ["fiction", "mystery"] ✔
```

### ✔ Pros:

- Full control
- Works in all environments

### ❌ Cons:

- More code
- Needs extra handling for special types (Date, Set, Map, etc.)

---

## 📌 Summary:

| Method                            | Best For                      | Handles Special Types | Handles Circular? |
| --------------------------------- | ----------------------------- | --------------------- | ----------------- |
| `structuredClone(obj)`            | Modern, simple deep copies    | ✅ Yes (mostly)       | ✅ Yes            |
| `JSON.parse(JSON.stringify(obj))` | Basic nested objects          | ❌ No                 | ❌ No             |
| Recursive function                | Full control, custom behavior | ✅ If implemented     | ❌ Unless added   |

===============================================

## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];
```

# Answer:

### ✅ Using `for...of` loop with destructuring:

```js
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (const { name, address, age } of users) {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}
```

### 💥 Output:

```
Name: Alex, Address: 15th Park Avenue, Age: 43
Name: Bob, Address: Canada, Age: 53
Name: Carl, Address: Bangalore, Age: 26
```

---

### ✅ Bonus: If you want to use `forEach()` instead:

```js
users.forEach(({ name, address, age }) => {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
});
```

Both approaches work the same — just a matter of style or preference.
