# Javasacript - More about ES6

## Summary
- [Javasacript - More about ES6](#javasacript---more-about-es6)
  - [Summary](#summary)
  - [Glossary](#glossary)
  - [Introduction to JavaScript and ES6](#introduction-to-javascript-and-es6)
    - [Learning Objectives](#learning-objectives)
    - [Basic Syntax](#basic-syntax)
    - [New Features Introduced in ES6](#new-features-introduced-in-es6)
      - [1. Variable Declarations: let and const](#1-variable-declarations-let-and-const)
      - [2. Arrow Functions](#2-arrow-functions)
      - [3. Rest and Spread Parameters](#3-rest-and-spread-parameters)
      - [4. String Templating](#4-string-templating)
      - [5. Object Creation and Shorthand Properties](#5-object-creation-and-shorthand-properties)
      - [6. Iterators and for-of Loops](#6-iterators-and-for-of-loops)
  - [Dynamic Object Key Notation in JavaScript](#dynamic-object-key-notation-in-javascript)
    - [Basic Syntax](#basic-syntax-1)
    - [Dynamic Notation](#dynamic-notation)
      - [Example with an Expression](#example-with-an-expression)
    - [Practical Use Case: Creating an Object with Dynamic Keys](#practical-use-case-creating-an-object-with-dynamic-keys)
      - [Explanation:](#explanation)
    - [Conclusion](#conclusion)
    - [Conclusion](#conclusion-1)

## Glossary

**A**
- **Arrow Function:** A concise syntax for writing function expressions that allows for implicit return and lexical scoping of `this`.

**B**
- **Block Scope:** A scope that restricts the visibility of variables defined with `let` and `const` to the block in which they are declared.

**C**
- **Constant:** A variable declared with `const`, whose value cannot be reassigned after its initial definition.

**D**
- **Default Parameter:** A parameter in a function that has a predefined value if no argument is passed.

**E**
- **ECMAScript:** A scripting language specification that standardizes JavaScript. ES6 is the sixth edition of this specification.

**F**
- **Function Expression:** A way to define a function within an expression, often used with variables or as parameters to other functions.

**G**
- **Group of Statements:** A collection of statements that can be executed together, typically wrapped in curly braces `{}`.

**I**
- **Iterable:** An object that can be iterated over, such as arrays, strings, or collections, using constructs like `for-of`.

**J**
- **JSON (JavaScript Object Notation):** A lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

**L**
- **Literal:** A fixed value directly written in the code, such as numbers, strings, or arrays.

**M**
- **Method:** A function that is a property of an object.

**N**
- **Null:** A primitive value that represents the intentional absence of any value or object.

**O**
- **Object:** A collection of properties, defined as key-value pairs, that can store multiple values.

**P**
- **Parameter:** A variable in a function definition that represents the values passed to the function when it is called.

**R**
- **Rest Parameter:** A syntax that allows a function to accept an indefinite number of arguments as an array.

**S**
- **Spread Operator:** A syntax (`...`) that allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.

**T**
- **Template Literal:** A string literal that allows embedded expressions and multi-line strings, enclosed by backticks (`` ` ``).

**V**
- **Variable:** A named container for storing data values. Variables can be declared using `var`, `let`, or `const`.

**W**
- **Window Object:** The global object in a browser environment that represents the window containing the DOM document.

## Introduction to JavaScript and ES6

JavaScript is a versatile, high-level programming language used for creating interactive and dynamic content on websites. ES6 (ECMAScript 2015) is the 6th edition of JavaScript, introducing significant new features that made the language more developer-friendly and powerful.

### Learning Objectives

- **What ES6 is**:
  - ES6 is a major update to JavaScript that introduced new features such as arrow functions, `template literals`, `let`/`const`, and more.
- **New features introduced in ES6**:
  - These include `let` and `const`, arrow functions, default and `rest parameters`, `template literals`, and more.
- **The difference between a constant and a variable**:
  - `let` and `const` are **block-scoped**, `const` being constant (**cannot be reassigned**), while `let` **allows reassignment**.
- **Block-scoped variables**:
  - Variables declared with `let` and `const` are **block-scoped**, meaning they are **only accessible within the `{}` block in which they are declared**.
- **Arrow functions**:
  - A shorter syntax for writing functions, and can capture the context of `this` from their surrounding scope.
- **Rest and spread function parameters**:
  - The rest operator (`...`) allows a function to accept an indefinite number of arguments as an array, while the `spread operator` allows arrays to be expanded into individual elements.
- **String templating in ES6**:
  - `Template literals` use backticks (`` ` ``) and can embed expressions directly in strings via `${}`.
- **Object creation and properties in ES6**:
  - New shorthand for defining object properties, and new methods like `Object.assign()`.
- **Iterators and for-of loops**:
  - A new way to iterate over arrays, strings, and other iterable collections using the `for-of` loop.

### Basic Syntax

Here’s a simple example demonstrating how to declare variables using `let` and `const`, and using an arrow function:

```javascript
let greeting = "Hello";
const name = "World";

const sayHello = () => `${greeting}, ${name}!`;
console.log(sayHello()); // Outputs: Hello, World!
```

### New Features Introduced in ES6

#### 1. Variable Declarations: let and const

- **`let`**: Block-scoped, can be reassigned.
- **`const`**: Block-scoped, cannot be reassigned.

```javascript
let counter = 1;  // Can be reassigned
const MAX_LIMIT = 100;  // Cannot be reassigned
```

#### 2. Arrow Functions

Arrow functions provide a shorter syntax for writing functions and automatically bind the `this` value.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs: 5
```

#### 3. Rest and Spread Parameters

- **Rest** allows functions to accept an indefinite number of arguments as an array.
- **Spread** allows arrays or objects to be expanded.

```javascript
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3)); // Outputs: 6

const arr = [1, 2, 3];
console.log(...arr); // Outputs: 1 2 3
```

#### 4. String Templating

Template literals allow embedded expressions in strings using backticks (`` ` ``):

```javascript
const greetingMessage = `${greeting}, ${name}!`;
console.log(greetingMessage); // Outputs: Hello, World!
```

#### 5. Object Creation and Shorthand Properties

You can now use shorthand syntax for objects if the key and value names are the same.

```javascript
const name = 'John';
const age = 25;

// Old way:
const person1 = { name: name, age: age };

// ES6 way (shorthand):
const person2 = { name, age };
console.log(person2);  // Outputs: { name: 'John', age: 25 }
```

#### 6. Iterators and for-of Loops

The `for-of` loop allows iteration over iterable collections like arrays and strings.

```javascript
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num); // Outputs: 1, 2, 3, 4, 5
}
```

## Dynamic Object Key Notation in JavaScript

In JavaScript, it is possible to define objects with **dynamic keys**. This allows you to create objects where the keys are not just fixed strings, but **values that can be evaluated** from variables or expressions.

### Basic Syntax

Typically, to define a key in an object, you use **colon notation**:

```javascript
const obj = {
  key: 'value'
}
```

However, this method doesn't allow you to use **variables** or **expressions** as keys. To achieve this, we use **dynamic notation** with square brackets `[ ]`.

### Dynamic Notation

Dynamic key notation is done by wrapping the expression or variable in **square brackets**. Here's how it works:

```javascript
const key = 'name';
const obj = {
  [key]: 'John Doe'
};
console.log(obj); // { name: 'John Doe' }
```

In the above example, the value of the variable `key` is used as the key name in the object.

#### Example with an Expression

You can also use **expressions** inside the square brackets, not just variables.

```javascript
const age = 25;
const obj = {
  [`person-${age}`]: 'John Doe'
};
console.log(obj); // { person-25: 'John Doe' }
```

Here, the object's key evaluates to `person-25` because the expression `${age}` is substituted with the value of the `age` variable.

### Practical Use Case: Creating an Object with Dynamic Keys

Imagine you want to create an object with a dynamic key based on a department name and a value that is a list of employees. Here's how you could do it:

```javascript
export default function createEmployeesObject(departmentName, employees) {
  const obj = { [departmentName]: employees }; // Dynamic Key
  return obj;
}
```

#### Explanation:
- **[departmentName]**: Here, `departmentName` is a **variable** and becomes the dynamic key of the object. This allows you to create a key based on the value contained in `departmentName`.
- **employees**: This is the value associated with that key.

### Conclusion

Dynamic object key notation is very useful when you want to create objects whose keys are not known in advance but depend on variable values or expressions. It allows your code to be more flexible and dynamic.

---

You can use this notation in many practical cases, such as managing configurations, filters, or dynamic objects where keys change based on conditions.


### Conclusion

ES6 introduced more concise and powerful features that make JavaScript development easier, improving both readability and maintainability. Understanding these core concepts will help you develop more modern, efficient JavaScript applications.