# 40 Days of javaScript in day 14 Tasks

## 1. What will be the output of the following code?

```js
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
```

- ReferenceError
- SyntaxError
- TypeError
- No error, it prints 10

# Ansswer

The output will be:

```
An error occurred: ReferenceError
```

---

### Here's why:

```js
let r = p + 50;
```

- The variable `p` is **not declared** anywhere.
- Trying to use an undeclared variable like this throws a **`ReferenceError`**.

Since it's wrapped in a `try...catch` block, the error is caught, and the `catch` block runs:

```js
console.log("An error occurred:", error.name);
```

- `error.name` is `"ReferenceError"`.

---

### Final Output:

```
An error occurred: ReferenceError
```

=================================================

## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

# Ansswer

- Amount must be **positive**
- Amount must **not exceed the balance**

If either condition fails, it throws a meaningful error.

```js
function processPayment(amount) {
  const balance = 1000; // Example balance

  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Invalid amount: must be a number.");
  }

  if (amount <= 0) {
    throw new Error("Payment amount must be greater than zero.");
  }

  if (amount > balance) {
    throw new Error("Insufficient balance for this payment.");
  }

  console.log(`Payment of $${amount} processed successfully.`);
}
```

---

### Example usage:

```js
try {
  processPayment(500); // ✅ success
  processPayment(-100); // ❌ throws error
  processPayment(1500); // ❌ throws error
} catch (error) {
  console.log("Error:", error.message);
}
```

---

### Output:

```
Payment of $500 processed successfully.
Error: Payment amount must be greater than zero.
```

================================================

## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError

# Ansswer

Sure! Here's a complete and clean **custom error handling system** for an **e-commerce website**, with categorized error classes for:

- `UserError`
- `PaymentError`
- `ServerError`
- `EmailError`

---

## ✅ Step 1: Define Custom Error Classes

Each custom error class will extend the built-in `Error` class and include a custom name and optional status code for HTTP response use.

```js
class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserError";
    this.statusCode = 400;
  }
}

class PaymentError extends Error {
  constructor(message) {
    super(message);
    this.name = "PaymentError";
    this.statusCode = 402;
  }
}

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "ServerError";
    this.statusCode = 500;
  }
}

class EmailError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailError";
    this.statusCode = 422;
  }
}
```

---

## ✅ Step 2: Sample Usage

Functions that simulate operations in an e-commerce system and throw the appropriate custom error:

```js
function registerUser(username) {
  if (!username || username.length < 3) {
    throw new UserError("Username must be at least 3 characters long.");
  }
}

function processPayment(amount, balance) {
  if (amount > balance) {
    throw new PaymentError("Payment failed: insufficient funds.");
  }
}

function sendConfirmationEmail(email) {
  if (!email.includes("@")) {
    throw new EmailError("Invalid email address.");
  }
}

function fetchProductData() {
  const serverIsDown = true;
  if (serverIsDown) {
    throw new ServerError("Unable to retrieve product data.");
  }
}
```

---

## ✅ Step 3: Global Error Handler

This central error handler handles different types of errors and logs them appropriately.

```js
function handleError(error) {
  if (error instanceof UserError) {
    console.error(`User Error [${error.statusCode}]: ${error.message}`);
  } else if (error instanceof PaymentError) {
    console.error(`Payment Error [${error.statusCode}]: ${error.message}`);
  } else if (error instanceof EmailError) {
    console.error(`Email Error [${error.statusCode}]: ${error.message}`);
  } else if (error instanceof ServerError) {
    console.error(`Server Error [${error.statusCode}]: ${error.message}`);
  } else {
    console.error(`Unknown Error: ${error.message}`);
  }
}
```

---

## ✅ Step 4: Example Execution

```js
try {
  registerUser("Jo");
  processPayment(200, 100);
  sendConfirmationEmail("invalid-email");
  fetchProductData();
} catch (err) {
  handleError(err);
}
```

---

## 🧪 Sample Output

```
User Error [400]: Username must be at least 3 characters long.
```

Only the first error will be shown because the rest are not executed once the first `throw` is hit — but you can run them in isolation to test each.

=================================================

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

# Ansswer

### Step-by-step Implementation:

1. **Define the `fetchData(url)` function**: This will check if the URL starts with `"https"`. If it doesn't, it will throw an `Invalid URL` error.
2. **Use `try...catch` to handle the error**: The `catch` block will handle the error and display the error message.

### Code:

```js
function fetchData(url) {
  if (!url.startsWith("https")) {
    throw new Error("Invalid URL: URL must start with 'https'.");
  }

  // Simulating an API call
  console.log(`Fetching data from ${url}...`);
}

try {
  fetchData("http://example.com"); // Will throw error
} catch (error) {
  console.error(error.message); // "Invalid URL: URL must start with 'https'."
}

try {
  fetchData("https://secure-website.com"); // Valid URL
} catch (error) {
  console.error(error.message); // This won't run
}
```

### Explanation:

1. **`fetchData(url)`**:
   - It checks if the provided URL starts with `"https"`. If not, it throws an error with the message `"Invalid URL: URL must start with 'https'."`.
2. **`try...catch`**:
   - The `try` block calls `fetchData(url)`. If the URL is invalid, an error is thrown and caught by the `catch` block.
   - In the `catch` block, we log the error message.

### Output:

```
Invalid URL: URL must start with 'https'.
Fetching data from https://secure-website.com...
```

---

### Key Points:

- This is a simple validation check for the URL.
- The `Error` object is used to throw an error with a custom message.
- The `catch` block handles any errors thrown inside the `try` block.

================================================

## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

Example:

```js
const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
```

# Ansswer

1. **Create the `ValidationError` constructor function** for custom error handling.
2. **Implement the `validateUser` function** to check the user input and throw `ValidationError` for each failed validation.
3. **Handle errors** and print them in the desired format.

---

### Full Implementation:

#### 1. **Custom `ValidationError` Constructor Function**

```js
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message || "Invalid input";
  this.stack = new Error().stack;
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
```

- `ValidationError` inherits from the native `Error` class.
- It takes a custom message, which will describe the validation issue.
- We also store the stack trace to assist with debugging.

---

#### 2. **`validateUser` Function**

This function will check the `userInput` object for validation errors:

```js
function validateUser(userInput) {
  const errors = [];

  // Check if username is empty
  if (!userInput.username || userInput.username.trim() === "") {
    errors.push(new ValidationError("Username cannot be empty"));
  }

  // Check if age is a positive number
  if (userInput.age <= 0) {
    errors.push(new ValidationError("Age must be a positive number"));
  }

  // Throw an array of errors if there are any validation issues
  if (errors.length > 0) {
    throw errors; // Throw an array of errors so they can be caught and displayed
  }
}
```

- The `validateUser` function checks for the following:
  - If `username` is empty or just spaces.
  - If `age` is less than or equal to 0.
- If there are validation issues, it pushes each `ValidationError` to the `errors` array and throws them together.

---

#### 3. **Calling `validateUser` and Handling Errors**

You will call the `validateUser` function and catch any thrown errors in a `try...catch` block:

```js
const userInput = { username: "", age: -2 };

try {
  validateUser(userInput); // This will throw validation errors
} catch (errors) {
  errors.forEach((error) => {
    console.log(`${error.name}: ${error.message}`); // Output each error message
  });
}
```

- **`validateUser(userInput)`** will throw errors since both conditions fail (`username` is empty and `age` is negative).
- Each error will be logged with its name (`ValidationError`) and message.

---

### Example Output:

```
ValidationError: Username cannot be empty
ValidationError: Age must be a positive number
```

---

### Explanation:

1. **Custom `ValidationError`**: By creating the `ValidationError` constructor function, you are able to throw and catch custom validation errors.
2. **Error Collection**: `validateUser` collects all validation errors and throws them at once, allowing multiple validation errors to be reported at the same time.
3. **Error Handling**: In the `try...catch` block, each validation error is caught and logged, ensuring clear error reporting.

=================================================

## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

# Ansswer

1. Throwing a `"File not found"` error if the file doesn't exist (simulated using a condition).
2. Handling the error using `try...catch`.
3. Simulating the release of IO resources with a `finally` block to ensure it always executes, regardless of whether an error was thrown.

### Full Implementation:

```js
function readFile(filePath) {
  // Simulate file existence check
  const fileExists = false; // Simulate that the file does not exist (set to false)

  console.log(`Attempting to read the file at: ${filePath}`);

  // Simulate the file reading process
  if (!fileExists) {
    throw new Error("File not found"); // Simulating file not found error
  }

  // Simulating reading the file (if it existed)
  console.log(`Reading file: ${filePath}`);
}

function readFileWrapper(filePath) {
  try {
    readFile(filePath); // Attempt to read the file
  } catch (error) {
    console.log(error.name + ": " + error.message); // Handle the error (File not found)
  } finally {
    console.log("Releasing IO resources..."); // Simulate releasing IO resources
  }
}

// Example usage:
const filePath = "/path/to/file.txt";
readFileWrapper(filePath);
```

### Explanation:

1. **Simulating File Check**:

   - `const fileExists = false;` is used to simulate a condition where the file does not exist. In a real application, this condition would be replaced by actual file system checks.
   - If the file doesn't exist (`fileExists` is `false`), we throw a `"File not found"` error using `throw new Error("File not found")`.

2. **Reading File**:

   - If the file exists, we log that we are reading the file using `console.log`.

3. **`try...catch`**:

   - The `try` block attempts to call `readFile(filePath)`. If the file doesn't exist, the error is thrown and caught in the `catch` block.
   - The `catch` block logs the error message.

4. **`finally` Block**:
   - The `finally` block ensures that **IO resources are always released** regardless of whether the file read was successful or an error was thrown. It simulates this with `console.log("Releasing IO resources...")`.

---

### Example Output:

If the file does not exist (as simulated by `fileExists = false`):

```
Attempting to read the file at: /path/to/file.txt
File not found: File not found
Releasing IO resources...
```

---

### Notes:

- In a real application, you would likely use actual file system methods (e.g., `fs.readFile` in Node.js) to check if the file exists and to read its contents.
- The `finally` block is important for cleanup, ensuring that resources (e.g., file handles, network connections) are released after the operation completes, whether successfully or with an error.

==============================================

## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

# Ansswer40

### Implementation:

```js
function parseJson(str) {
  try {
    const parsedObject = JSON.parse(str); // Attempt to parse the JSON string
    return parsedObject; // Return the parsed object if successful
  } catch (error) {
    return "Invalid JSON"; // Return "Invalid JSON" if parsing fails
  }
}

// Example Usage:

const validJson = '{"name": "Alice", "age": 30}';
const invalidJson = '{"name": "Alice", age: 30}'; // Missing quotes around "age" key

console.log(parseJson(validJson)); // Output: { name: 'Alice', age: 30 }
console.log(parseJson(invalidJson)); // Output: Invalid JSON
```

### Explanation:

1. **`JSON.parse(str)`**:
   - The function attempts to parse the input `str` using `JSON.parse()`. If `str` is valid JSON, it will successfully return the corresponding JavaScript object.
2. **Error Handling**:

   - If the input string is not valid JSON (e.g., syntax issues like missing quotes or extra commas), `JSON.parse()` will throw an error.
   - The `catch` block catches this error and returns the string `"Invalid JSON"`.

3. **Return Value**:
   - If parsing is successful, the parsed object is returned.
   - If an error occurs during parsing, the string `"Invalid JSON"` is returned.

---

### Example Output:

For the valid JSON input:

```
{ name: 'Alice', age: 30 }
```

For the invalid JSON input:

```
Invalid JSON
```

=================================================

Certainly! Here's how you can implement the `parseJson(str)` function that attempts to parse a JSON string using `JSON.parse()`. If the parsing fails (i.e., if the input string is not valid JSON), it will catch the error and return `"Invalid JSON"`.

### Implementation:

```js
function parseJson(str) {
  try {
    const parsedObject = JSON.parse(str); // Attempt to parse the JSON string
    return parsedObject; // Return the parsed object if successful
  } catch (error) {
    return "Invalid JSON"; // Return "Invalid JSON" if parsing fails
  }
}

// Example Usage:

const validJson = '{"name": "Alice", "age": 30}';
const invalidJson = '{"name": "Alice", age: 30}'; // Missing quotes around "age" key

console.log(parseJson(validJson)); // Output: { name: 'Alice', age: 30 }
console.log(parseJson(invalidJson)); // Output: Invalid JSON
```

### Explanation:

1. **`JSON.parse(str)`**:
   - The function attempts to parse the input `str` using `JSON.parse()`. If `str` is valid JSON, it will successfully return the corresponding JavaScript object.
2. **Error Handling**:

   - If the input string is not valid JSON (e.g., syntax issues like missing quotes or extra commas), `JSON.parse()` will throw an error.
   - The `catch` block catches this error and returns the string `"Invalid JSON"`.

3. **Return Value**:
   - If parsing is successful, the parsed object is returned.
   - If an error occurs during parsing, the string `"Invalid JSON"` is returned.

---

### Example Output:

For the valid JSON input:

```
{ name: 'Alice', age: 30 }
```

For the invalid JSON input:

```
Invalid JSON
```

==============================================

## 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- It creates a new error manually
- It prints an error message

# Ansswer

The correct answer is:

- **It creates a new error manually**

### Explanation:

In JavaScript, the `throw` statement is used to manually **create and throw an error**. When `throw` is used, the current execution of the program is halted, and the control is passed to the nearest `catch` block (if present). Here's a breakdown of each option:

- **It catches an error**: This is incorrect. The `throw` statement is not for catching errors; `throw` is for creating and throwing an error. Errors are caught using `try...catch`.

- **It stops the execution of a program**: This is partially correct. `throw` does stop the execution of the current function or block of code and hands control to the nearest `catch` block, but it's more accurate to say that it creates and throws an error.

- **It creates a new error manually**: This is correct. You can create and throw a custom error with `throw`. For example:

  ```js
  throw new Error("Something went wrong");
  ```

- **It prints an error message**: This is incorrect. While `throw` may be used with an error message (like `new Error("Message")`), it does not directly print the error message. It throws the error object, and how the message is handled (e.g., printed) depends on how the error is caught and logged.

### Example:

```js
function checkNumber(num) {
  if (num < 0) {
    throw new Error("Negative numbers are not allowed!");
  }
  return num;
}

try {
  console.log(checkNumber(-5)); // This will throw an error
} catch (error) {
  console.log(error.message); // Output: Negative numbers are not allowed!
}
```

=================================================

## 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- Runs regardless of whether an error occurs or not
- Stops the execution of the script

# Ansswer

The correct answer is:

- **Runs regardless of whether an error occurs or not**

### Explanation:

The `finally` block in a `try...catch` statement is always executed **no matter what**, whether an error occurs or not. It is typically used for **cleanup operations**, such as closing files, releasing resources, or resetting states, since it will run after the `try` block (whether the `try` block finishes successfully or an error is thrown).

### Key Points:

- The `finally` block will execute even if there is no error, and even if an error is caught in the `catch` block.
- If an error is thrown inside the `try` block, and that error is caught in the `catch` block, the `finally` block will still execute after the `catch` block.
- It will also execute if the error is not caught, but is propagated out of the `try...catch` structure.

### Example:

```js
try {
  console.log("Try block: No error here");
} catch (error) {
  console.log("Catch block: This won't run");
} finally {
  console.log("Finally block: This always runs");
}
```

**Output:**

```
Try block: No error here
Finally block: This always runs
```

In case an error is thrown:

```js
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Catch block: " + error.message);
} finally {
  console.log("Finally block: This always runs");
}
```

**Output:**

```
Catch block: Something went wrong
Finally block: This always runs
```

### Why other options are incorrect:

- **Runs only if an error occurs**: This is incorrect because the `finally` block runs **whether or not an error occurs**.
- **Runs only if no error occurs**: This is also incorrect because the `finally` block runs **whether or not an error occurs**.
- **Stops the execution of the script**: This is incorrect. The `finally` block does not stop execution. It just runs after the `try` and `catch` blocks are executed.

=============================================

## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

# Ansswer

Here is a table explaining the usage of **`try`**, **`catch`**, **`throw`**, **`rethrow`**, and the **error object** in JavaScript:

| **Concept**      | **Usage**                                                            | **Description**                                                                                                                                                  | **Example**                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **`try`**        | Wraps code that may throw an error.                                  | The `try` block is used to wrap code that might generate an error. If an error occurs, control is transferred to the associated `catch` block.                   | `js<br>try {<br>  // Code that may throw an error<br>  let result = someFunction();<br>}<br>`                                                  |
| **`catch`**      | Catches and handles errors thrown in the `try` block.                | The `catch` block is executed if an error is thrown in the `try` block. It allows you to handle errors gracefully and prevent the program from crashing.         | `js<br>try {<br>  let result = someFunction();<br>}<br>catch (error) {<br>  console.log(error.message);<br>}<br>`                              |
| **`throw`**      | Manually creates and throws an error.                                | The `throw` statement is used to manually create and throw an error. It allows you to throw custom error messages or objects.                                    | `js<br>throw new Error("Something went wrong!");<br>`                                                                                          |
| **`rethrow`**    | Re-throws a caught error.                                            | The `rethrow` pattern is used when you want to handle an error (e.g., logging) but then propagate the error further by throwing it again.                        | `js<br>try {<br>  let result = someFunction();<br>}<br>catch (error) {<br>  console.log("Logging error:", error);<br>  throw error; <br>}<br>` |
| **Error Object** | Represents an error and its properties (e.g., name, message, stack). | The `Error` object contains information about the error, such as the error message, name, and stack trace. It can be customized or extended for specific errors. | `js<br>const error = new Error("Something went wrong");<br>console.log(error.message); // "Something went wrong"<br>`                          |

---

### Summary:

- **`try`**: Used to wrap potentially error-generating code.
- **`catch`**: Catches the error if one occurs in the `try` block.
- **`throw`**: Used to create and throw a custom error (e.g., `throw new Error("Custom error")`).
- **`rethrow`**: Used when you want to handle the error, then throw it again (i.e., propagate the error).
- **Error Object**: A built-in object in JavaScript that represents an error with properties like `message`, `name`, and `stack`.

================================================
