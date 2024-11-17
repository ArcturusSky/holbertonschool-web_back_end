# JavaScript - Basics and ES6 Features

## Summary
- [JavaScript - Basics and ES6 Features](#javascript---basics-and-es6-features)
  - [Summary](#summary)
  - [Glossary](#glossary)
  - [Introduction to JavaScript](#introduction-to-javascript)
    - [Learning Objectives](#learning-objectives)
    - [Variables and Data Types](#variables-and-data-types)
      - [Data Types](#data-types)
    - [Operators](#operators)
    - [Conditional Statements](#conditional-statements)
    - [Loops](#loops)
    - [Functions](#functions)
    - [Objects and Arrays](#objects-and-arrays)
      - [Objects](#objects)
      - [Arrays](#arrays)
    - [ES6 Features](#es6-features)
      - [Constants and Block-Scoped Variables](#constants-and-block-scoped-variables)
      - [Arrow Functions](#arrow-functions)
      - [Default Parameters](#default-parameters)
      - [Rest and Spread Parameters](#rest-and-spread-parameters)
      - [String Templating](#string-templating)
      - [Enhanced Object Properties](#enhanced-object-properties)
      - [Iterators and `for-of` Loops](#iterators-and-for-of-loops)
  - [Comparing JavaScript Syntax with Python Syntax](#comparing-javascript-syntax-with-python-syntax)
    - [Variables](#variables)
    - [Functions](#functions-1)
    - [Conditional Statements](#conditional-statements-1)
    - [Loops](#loops-1)
    - [Objects/Dictionaries](#objectsdictionaries)
    - [Key Differences](#key-differences)
  - [Comparing JavaScript Syntax with C Syntax](#comparing-javascript-syntax-with-c-syntax)
    - [Variables](#variables-1)
    - [Functions](#functions-2)
    - [Conditional Statements](#conditional-statements-2)
    - [Loops](#loops-2)
    - [Objects/Structs](#objectsstructs)
    - [Key Differences](#key-differences-1)
  - [Conclusion](#conclusion)

## Glossary
- **JavaScript**: A versatile programming language used for web development.
- **Variable**: A container to store data values.
- **Data Types**: Different kinds of data like numbers, strings, and booleans.
- **Function**: A block of reusable code.
- **Object**: A collection of key-value pairs.
- **Array**: A list-like object to store multiple values.
- **ES6**: A modern version of JavaScript, also known as ECMAScript 2015, which introduced new syntax and features for cleaner and more efficient coding.

---

## Introduction to JavaScript

JavaScript is a lightweight, interpreted, or just-in-time compiled programming language that allows developers to build interactive web pages. It works alongside HTML and CSS to add functionality to websites.

### Learning Objectives
By the end of this project, you will be able to:
- Explain what ES6 is.
- Identify and use the new features introduced in ES6.
- Understand the difference between constants and variables.
- Use block-scoped variables.
- Define and use arrow functions, including their default parameters.
- Use rest and spread function parameters.
- Implement string templating in ES6.
- Create objects and understand their properties in ES6.
- Work with iterators and `for-of` loops.
- Understand the basics of JavaScript, including:
  - Declaring variables and working with basic data types.
  - Using operators, conditional statements, and loops.
  - Writing simple functions.
  - Working with objects and arrays.

---

### Variables and Data Types

Variables are used to store data in JavaScript. In modern JavaScript, you can declare variables using `var`, `let`, or `const`.

- **`var`**: Function-scoped.
- **`let`**: Block-scoped, reassignable.
- **`const`**: Block-scoped, not reassignable.

```javascript
let name = "Alice"; // String
const age = 30;     // Number
var isAdmin = true; // Boolean
```

#### Data Types
JavaScript has several data types:
- **String**: Text data (`"Hello"`, `'World'`).
- **Number**: Numeric values (`42`, `3.14`).
- **Boolean**: Logical values (`true`, `false`).
- **Undefined**: A variable declared but not assigned a value.
- **Null**: Represents the absence of a value.

---

### Operators

JavaScript supports various operators for calculations, comparisons, and logic.

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
  ```javascript
  const sum = 5 + 3; // 8
  const product = 4 * 2; // 8
  ```

- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  ```javascript
  console.log(5 == "5"); // true (loose equality)
  console.log(5 === "5"); // false (strict equality)
  ```

- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)
  ```javascript
  const result = true && false; // false
  ```

---

### Conditional Statements

Conditional statements execute code based on specific conditions.

- **if-else**
  ```javascript
  if (age > 18) {
      console.log("You are an adult.");
  } else {
      console.log("You are a minor.");
  }
  ```

- **switch**
  ```javascript
  switch (day) {
      case "Monday":
          console.log("Start of the week!");
          break;
      case "Friday":
          console.log("Almost weekend!");
          break;
      default:
          console.log("Just another day.");
  }
  ```

---

### Loops

Loops are used to repeat a block of code.

- **for**
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i); // Outputs: 0, 1, 2, 3, 4
  }
  ```

- **while**
  ```javascript
  let count = 0;
  while (count < 5) {
      console.log(count);
      count++;
  }
  ```

---

### Functions

Functions are reusable blocks of code. They are defined using the `function` keyword or as arrow functions.

- **Function Declaration**
  ```javascript
  function greet(name) {
      return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // Outputs: Hello, Alice!
  ```

- **Arrow Function**
  ```javascript
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // Outputs: 5
  ```

---

### Objects and Arrays

#### Objects
Objects store data as key-value pairs.

```
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(person.greet()); // Outputs: Hello, my name is Alice.
```

#### Arrays
Arrays are ordered lists of values.

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Outputs: Banana
```

---

### ES6 Features

#### Constants and Block-Scoped Variables
Use `const` for values that should not change and `let` for reassignable variables.

#### Arrow Functions
Compact function syntax:
```javascript
const square = (x) => x * x;
console.log(square(4)); // Outputs: 16
```

#### Default Parameters
```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Outputs: Hello, Guest!
```

#### Rest and Spread Parameters
```javascript
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3)); // Outputs: 6
```

#### String Templating
```javascript
const greeting = `Hello, ${name}! Welcome to JavaScript.`;
```

#### Enhanced Object Properties
```javascript
const age = 25;
const user = { name, age };
```

#### Iterators and `for-of` Loops
```javascript
const fruits = ["Apple", "Banana"];
for (const fruit of fruits) {
    console.log(fruit);
}
```

---

## Comparing JavaScript Syntax with Python Syntax

While JavaScript and Python are both high-level, versatile programming languages, their syntax differs significantly. Here are some common comparisons:

### Variables

**JavaScript**
```javascript
let x = 10; // Variables declared with 'let'
const y = 20; // Constants declared with 'const'
```

**Python**
```python
x = 10  # No keyword for variable declaration
y = 20  # Python uses simple assignment
```

### Functions
**JavaScript**
```javascript
function add(a, b) {
    return a + b;
}

const subtract = (a, b) => a - b; // Arrow function
```

**Python**
```python
def add(a, b):
    return a + b

subtract = lambda a, b: a - b  # Lambda function
```

### Conditional Statements
**JavaScript**
```javascript
if (x > 10) {
    console.log("Greater");
} else {
    console.log("Smaller or equal");
}
```

**Python**
```python
if x > 10:
    print("Greater")
else:
    print("Smaller or equal")
```

### Loops
**JavaScript**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**Python**
```python
for i in range(5):
    print(i)
```

### Objects/Dictionaries
**JavaScript**
```javascript
const person = { name: "Alice", age: 25 };
console.log(person.name); // Access value
```

**Python**
```python
person = { "name": "Alice", "age": 25 }
print(person["name"])  # Access value
```

### Key Differences
1. **Syntax**:
   - JavaScript uses curly braces `{}` for blocks; Python uses indentation.
   - JavaScript ends statements with `;` (optional); Python does not.
2. **Variable Declaration**:
   - JavaScript uses `let`, `const`, or `var`; Python simply assigns variables.
3. **Function Syntax**:
   - JavaScript allows arrow functions; Python uses `lambda`.

These examples highlight the syntactic differences between JavaScript and Python, making it easier to transition between the two languages.

## Comparing JavaScript Syntax with C Syntax

JavaScript and C share similarities as they are both rooted in procedural programming. However, they differ significantly in syntax and application. Below is a comparison of common constructs:

### Variables

**JavaScript**
```javascript
let x = 10; // Variables declared with 'let'
const y = 20; // Constants declared with 'const'
```

**C**
```python
int x = 10; // Declare and initialize an integer
const int y = 20; // Declare a constant integer
```

### Functions
**JavaScript**
```javascript
function add(a, b) {
    return a + b;
}

const subtract = (a, b) => a - b; // Arrow function
```

**C**
```c
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}
```

### Conditional Statements
**JavaScript**
```javascript
if (x > 10) {
    console.log("Greater");
} else {
    console.log("Smaller or equal");
}
```

**C**
```c
if (x > 10) {
    printf("Greater");
} else {
    printf("Smaller or equal");
}
```

### Loops
**JavaScript**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**C**
```c
for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

### Objects/Structs
**JavaScript**
```javascript
const person = { name: "Alice", age: 25 };
console.log(person.name); // Access value
```

**C**
```c
struct Person {
    char name[20];
    int age;
};

struct Person person = {"Alice", 25};
printf("%s\n", person.name); // Access value
```

### Key Differences
1. **Syntax**:
   - JavaScript uses dynamic typing; C uses static typing.
   - JavaScript doesn't require type declarations; C requires explicit type declarations.
2. **Variable Declaration**:
   - JavaScript uses `let`, `const`, or `var`; C uses type keywords like `int`, `float`, etc.
3. **Objects**:
   - JavaScript uses objects directly; C uses structs for structured data.
4. **Memory Management**:
   - JavaScript handles memory automatically; C requires manual memory management (e.g., using `malloc`/`free`).

This comparison showcases how JavaScript is more flexible and higher-level, while C emphasizes precision and performance.


## Conclusion

JavaScript and ES6 features provide powerful tools for modern web development. Mastering these basics and ES6 enhancements will prepare you for building efficient and maintainable applications.
