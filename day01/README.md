# 40 Days JS with tapaScript

![40 Days JS](../images/hq720.jpg)

## 🏗 Day 01 Assignment Tracking

    ✅ Understood the Requirements
    ✅ Design Done
    ✅ Coding Done
    ✅ Wrote a Readme
    ✅ Pushed to GitHub
    ✅ Posted on Discord
    ✅ Socialized

## Task 3: Experiment with Different JavaScript Loading Methods

When including scripts in an HTML document, where you place them and whether you use `async` or `defer` affects how they load and execute. Here's a breakdown:

### **1. Adding Scripts in `<head>`**

```html
<head>
  <script src="script.js" async></script>
</head>
```

- If `async` is used, the script loads in parallel with the HTML parsing and executes as soon as it's ready.
- If `defer` is used instead, the script loads in parallel but waits until the document is fully parsed before execution.

### **2. Adding Scripts at the End of `<body>`**

```html
<body>
  <script src="script.js"></script>
</body>
```

- If no attributes (`async` or `defer`) are used, the script loads and executes **immediately** at this point, potentially blocking rendering of subsequent elements.

### **3. Understanding `async` vs. `defer`**

| Attribute    | When it Loads                 | When it Executes               | Execution Order                                     |
| ------------ | ----------------------------- | ------------------------------ | --------------------------------------------------- |
| `async`      | In parallel with HTML parsing | Immediately when loaded        | **Out of order** (whichever loads first runs first) |
| `defer`      | In parallel with HTML parsing | After HTML parsing is complete | **In order** (as they appear in the document)       |
| No attribute | At the point it appears       | Immediately                    | **Blocking behavior**                               |

### **Best Practices**

- Use **`defer`** for scripts that depend on the full DOM being loaded (e.g., scripts that modify the DOM).
- Use **`async`** for independent scripts like analytics or ads that don't depend on other scripts.
- Placing scripts at the **end of `<body>`** (without `async` or `defer`) ensures that the page loads faster before running scripts.

Would you like a practical example with multiple scripts to demonstrate the differences?
