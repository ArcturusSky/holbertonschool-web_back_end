## JavaScript Arrays

- [JavaScript Arrays](#javascript-arrays)
- [Common Methods for Arrays](#common-methods-for-arrays)
  - [Array.prototype.push()](#arrayprototypepush)
  - [Array.prototype.pop()](#arrayprototypepop)
  - [Array.prototype.shift()](#arrayprototypeshift)
  - [Array.prototype.unshift()](#arrayprototypeunshift)
- [Additional JavaScript Array Methods](#additional-javascript-array-methods)
  - [Array.prototype.slice()](#arrayprototypeslice)
  - [Array.prototype.splice()](#arrayprototypesplice)
  - [Array.prototype.map()](#arrayprototypemap)
  - [Array.prototype.filter()](#arrayprototypefilter)
  - [Array.prototype.reduce()](#arrayprototypereduce)
  - [Array.prototype.find()](#arrayprototypefind)
- [Typed Arrays in JavaScript](#typed-arrays-in-javascript)
  - [Key Components of Typed Arrays:](#key-components-of-typed-arrays)
    - [ArrayBuffer](#arraybuffer)
    - [DataView](#dataview)
    - [Typed Array Views](#typed-array-views)
  - [Commonly Used Typed Arrays](#commonly-used-typed-arrays)
  - [Real-World Example: Image Data Manipulation](#real-world-example-image-data-manipulation)
  - [Benefits of Typed Arrays:](#benefits-of-typed-arrays)
- [Set, Map, and WeakMap in JavaScript](#set-map-and-weakmap-in-javascript)
  - [Set](#set)
  - [Map](#map)
  - [WeakMap](#weakmap)
  - [Key Differences](#key-differences)


**Definition:**
An **array** in JavaScript is an ordered collection of elements that can hold any type of data. Arrays are resizable, zero-indexed, and allow efficient iteration and manipulation of their elements.

**Basic Syntatx:**
```javascript
const exampleArray = [1, 2, 3, 4];
console.log(exampleArray); // Output: [1, 2, 3, 4]
```

**Breakdown of the syntax:**
- `const`: Declares a constant variable to store the array.
- `[1, 2, 3, 4]`: Defines the elements of the array enclosed in square brackets.
- `console.log(exampleArray)`: Prints the array to the console.

**Concrete and Simple Example:**
```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Adding an element
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// Removing the last element
fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']
```

**Breakdown of the example:**
- `fruits[0]`: Accesses the first element (`Apple`) using its index.
- `push('Date')`: Adds `'Date'` to the end of the array.
- `pop()`: Removes the last element from the array (`'Date'`).

**Notes:**
- Arrays are dynamic, meaning you can add or remove elements without needing to declare the size.
- Arrays are iterable, making them easy to traverse with loops or methods like `forEach`.
- They support mixed data types: `[1, 'two', true]`.

## Common Methods for Arrays

### Array.prototype.push()

**Definition:**
The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

**Basic Syntatx:**
```javascript
const newLength = arrayName.push(element1, element2, ...);
```

**Breakdown of the syntax:**
- `arrayName`: The array to modify.
- `element1, element2, ...`: The elements to add.
- `newLength`: The updated length of the array.

**Concrete and Simple Example:**
```javascript
const numbers = [1, 2, 3];
const newLength = numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
```

**Breakdown of the example:**
- `[1, 2, 3]`: The initial array.
- `push(4, 5)`: Adds `4` and `5` to the end of the array.
- The array becomes `[1, 2, 3, 4, 5]`, and its length is updated to `5`.

---

### Array.prototype.pop()

**Definition:**
The `pop()` method removes the last element of an array and returns it.

**Basic Syntatx:**
```javascript
const removedElement = arrayName.pop();
```

**Breakdown of the syntax:**
- `arrayName`: The array to modify.
- `removedElement`: The element removed from the end of the array.

**Concrete and Simple Example:**
```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];
const lastFruit = fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana']
console.log(lastFruit); // Output: 'Cherry'
```

**Breakdown of the example:**
- `['Apple', 'Banana', 'Cherry']`: The initial array.
- `pop()`: Removes `'Cherry'` from the end.
- The array becomes `['Apple', 'Banana']`, and `'Cherry'` is stored in `lastFruit`.

---

### Array.prototype.shift()

**Definition:**
The `shift()` method removes the first element of an array and returns it. This shifts the remaining elements to a lower index.

**Basic Syntatx:**
```javascript
const removedElement = arrayName.shift();
```

**Breakdown of the syntax:**
- `arrayName`: The array to modify.
- `removedElement`: The element removed from the start of the array.

**Concrete and Simple Example:**
```javascript
const colors = ['Red', 'Green', 'Blue'];
const firstColor = colors.shift();
console.log(colors); // Output: ['Green', 'Blue']
console.log(firstColor); // Output: 'Red'
```

**Breakdown of the example:**
- `['Red', 'Green', 'Blue']`: The initial array.
- `shift()`: Removes `'Red'` from the beginning.
- The array becomes `['Green', 'Blue']`, and `'Red'` is stored in `firstColor`.

---

### Array.prototype.unshift()

**Definition:**
The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

**Basic Syntatx:**
```javascript
const newLength = arrayName.unshift(element1, element2, ...);
```

**Breakdown of the syntax:**
- `arrayName`: The array to modify.
- `element1, element2, ...`: The elements to add.
- `newLength`: The updated length of the array.

**Concrete and Simple Example:**
```javascript
const animals = ['Cat', 'Dog'];
const newLength = animals.unshift('Elephant', 'Fox');
console.log(animals); // Output: ['Elephant', 'Fox', 'Cat', 'Dog']
console.log(newLength); // Output: 4
```

**Breakdown of the example:**
- `['Cat', 'Dog']`: The initial array.
- `unshift('Elephant', 'Fox')`: Adds `'Elephant'` and `'Fox'` to the beginning.
- The array becomes `['Elephant', 'Fox', 'Cat', 'Dog']`, and its length is updated to `4`.

---

## Additional JavaScript Array Methods

---

### Array.prototype.slice()

**Definition:**
The `slice()` method returns a shallow copy of a portion of an array into a new array, without modifying the original array.

**Basic Syntatx:**
```javascript
const newArray = arrayName.slice(startIndex, endIndex);
```

**Breakdown of the syntax:**
- `startIndex`: The index at which to begin extraction (inclusive).
- `endIndex`: The index before which to end extraction (exclusive). If omitted, extracts to the end of the array.

**Concrete and Simple Example:**
```javascript
const letters = ['a', 'b', 'c', 'd', 'e'];
const subArray = letters.slice(1, 4);
console.log(subArray); // Output: ['b', 'c', 'd']
console.log(letters);  // Output: ['a', 'b', 'c', 'd', 'e'] (unchanged)
```

**Breakdown of the example:**
- `slice(1, 4)` extracts elements at indexes `1` to `3`.
- Original array remains unchanged.

---

### Array.prototype.splice()

**Definition:**
The `splice()` method changes an array by adding, removing, or replacing elements at specific indexes.

**Basic Syntatx:**
```javascript
const removedElements = arrayName.splice(startIndex, deleteCount, item1, item2, ...);
```

**Breakdown of the syntax:**
- `startIndex`: Index where changes begin.
- `deleteCount`: Number of elements to remove.
- `item1, item2, ...`: Elements to add (optional).

**Concrete and Simple Example:**
```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];
const removed = fruits.splice(1, 1, 'Orange', 'Grape');
console.log(fruits); // Output: ['Apple', 'Orange', 'Grape', 'Cherry']
console.log(removed); // Output: ['Banana']
```

**Breakdown of the example:**
- `splice(1, 1, 'Orange', 'Grape')`: Removes 1 element at index `1` (`'Banana'`) and adds `'Orange'` and `'Grape'`.
- Modifies the original array.

---

### Array.prototype.map()

**Definition:**
The `map()` method creates a new array populated with the results of calling a provided function on every element in the original array.

**Basic Syntatx:**
```javascript
const newArray = arrayName.map(callbackFunction);
```

**Breakdown of the syntax:**
- `callbackFunction`: Function applied to each array element.

**Concrete and Simple Example:**
```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9]
```

**Breakdown of the example:**
- `map(num => num ** 2)`: Squares each element in the array.
- Creates a new array `[1, 4, 9]`.

---

### Array.prototype.filter()

**Definition:**
The `filter()` method creates a new array with elements that pass a test implemented by the provided function.

**Basic Syntatx:**
```javascript
const filteredArray = arrayName.filter(callbackFunction);
```

**Breakdown of the syntax:**
- `callbackFunction`: Function returning `true` for elements to keep.

**Concrete and Simple Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

**Breakdown of the example:**
- `filter(num => num % 2 === 0)`: Filters for even numbers.
- Returns `[2, 4]` in a new array.

---

### Array.prototype.reduce()

**Definition:**
The `reduce()` method executes a reducer function on each element of an array, resulting in a single output value.

**Basic Syntatx:**
```javascript
const result = arrayName.reduce(reducerFunction, initialValue);
```

**Breakdown of the syntax:**
- `reducerFunction`: Function processing each element and an accumulator.
- `initialValue`: Starting value for the accumulator.

**Concrete and Simple Example:**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10
```

**Breakdown of the example:**
- `reduce((total, num) => total + num, 0)`: Adds all numbers together, starting at `0`.
- Outputs `10`.

---

### Array.prototype.find()

**Definition:**
The `find()` method returns the first element in the array that satisfies a provided test function.

**Basic Syntatx:**
```javascript
const foundElement = arrayName.find(callbackFunction);
```

**Breakdown of the syntax:**
- `callbackFunction`: Function returning `true` for the desired element.

**Concrete and Simple Example:**
```javascript
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2
```

**Breakdown of the example:**
- `find(num => num % 2 === 0)`: Finds the first even number.
- Returns `2`.

---

## Typed Arrays in JavaScript

---

**Definition:**
Typed Arrays in JavaScript provide a way to handle raw binary data efficiently. They allow you to work with arrays of fixed data types such as integers, floats, or bytes, enabling optimized memory use and interactions with low-level data formats like WebGL or file I/O.

---

### Key Components of Typed Arrays:

#### ArrayBuffer
**Definition:**
An `ArrayBuffer` is a generic, fixed-length chunk of memory. It acts as a container for binary data, which can be accessed using specific views.

**Basic Syntatx:**
```javascript
const buffer = new ArrayBuffer(byteLength);
```

**Breakdown of the syntax:**
- `byteLength`: Specifies the size of the buffer in bytes.

**Concrete and Simple Example:**
```javascript
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // Output: 8
```

**Breakdown of the example:**
- `new ArrayBuffer(8)` creates a buffer of 8 bytes.
- Use this memory container for raw binary operations.

---

#### DataView
**Definition:**
`DataView` provides a flexible way to read and write different data types (e.g., Int32, Float64) within an `ArrayBuffer`.

**Basic Syntatx:**
```javascript
const view = new DataView(buffer);
```

**Breakdown of the syntax:**
- `buffer`: An `ArrayBuffer` to wrap with a view for access to its data.

**Concrete and Simple Example:**
```javascript
const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
view.setInt8(0, 127); // Set first byte
console.log(view.getInt8(0)); // Output: 127
```

**Breakdown of the example:**
- `setInt8(0, 127)` writes the value `127` at byte index `0`.
- `getInt8(0)` retrieves the value from byte index `0`.

---

#### Typed Array Views
**Definition:**
Typed Arrays like `Int8Array`, `Uint8Array`, and `Float32Array` provide a fixed-type view over an `ArrayBuffer`. These views are designed for specific data types.

**Basic Syntatx:**
```javascript
const typedArray = new TypedArray(buffer, byteOffset, length);
```

**Breakdown of the syntax:**
- `buffer`: The `ArrayBuffer` to be accessed.
- `byteOffset`: The byte position to start accessing.
- `length`: Number of elements to include.

**Concrete and Simple Example:**
```javascript
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // Output: 42
```

**Breakdown of the example:**
- `Int32Array` divides the buffer into 32-bit integers.
- Assign and retrieve a value from the first element.

---

### Commonly Used Typed Arrays

1. **Int8Array**: 8-bit signed integers.
2. **Uint8Array**: 8-bit unsigned integers.
3. **Int16Array**: 16-bit signed integers.
4. **Uint16Array**: 16-bit unsigned integers.
5. **Int32Array**: 32-bit signed integers.
6. **Uint32Array**: 32-bit unsigned integers.
7. **Float32Array**: 32-bit floating-point numbers.
8. **Float64Array**: 64-bit floating-point numbers.

---

### Real-World Example: Image Data Manipulation

**Concrete and Simple Example:**
```javascript
const buffer = new ArrayBuffer(16);
const uint8View = new Uint8Array(buffer);
for (let i = 0; i < uint8View.length; i++) {
    uint8View[i] = i * 10; // Assign values
}
console.log(uint8View); // Output: Uint8Array(16) [0, 10, 20, ..., 150]
```

**Breakdown of the example:**
- `Uint8Array` interprets the buffer as 8-bit unsigned integers.
- Loops populate the buffer with multiples of 10.

---

### Benefits of Typed Arrays:
1. Efficient binary data handling.
2. Fixed memory allocation reduces overhead.
3. Interoperability with Web APIs like WebGL.
4. Support for multiple data formats and sizes.

Typed Arrays are powerful tools in JavaScript for working with raw data and optimizing memory-critical operations.

## Set, Map, and WeakMap in JavaScript

---

### Set

**Definition:**
A `Set` is a collection of unique values. It ensures no duplicates and can store values of any type.

**Basic Syntatx:**
```javascript
const mySet = new Set([value1, value2, ...]);
```

**Breakdown of the syntax:**
- Creates a `Set` and optionally initializes it with unique values.

**Concrete and Simple Example:**
```javascript
const uniqueNumbers = new Set([1, 2, 3, 3]);
console.log(uniqueNumbers); // Output: Set(3) { 1, 2, 3 }
uniqueNumbers.add(4);
console.log(uniqueNumbers.has(2)); // Output: true
```

**Breakdown of the example:**
- Initializes with unique values.
- Adds values and checks for existence using `.add()` and `.has()`.

---

### Map

**Definition:**
A `Map` is a collection of key-value pairs. Unlike objects, `Map` keys can be of any type.

**Basic Syntatx:**
```javascript
const myMap = new Map([[key1, value1], [key2, value2]]);
```

**Breakdown of the syntax:**
- Creates a `Map` and optionally initializes it with key-value pairs.

**Concrete and Simple Example:**
```javascript
const userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'Editor');
console.log(userRoles.get('Alice')); // Output: Admin
console.log(userRoles.size); // Output: 2
```

**Breakdown of the example:**
- Uses `.set()` to add key-value pairs.
- `.get()` retrieves a value, and `.size` shows the number of entries.

---

### WeakMap

**Definition:**
A `WeakMap` is similar to `Map` but only allows objects as keys. Keys are weakly referenced, meaning they can be garbage-collected.

**Basic Syntatx:**
```javascript
const myWeakMap = new WeakMap([[keyObj, value]]);
```

**Breakdown of the syntax:**
- Creates a `WeakMap` with object keys and corresponding values.

**Concrete and Simple Example:**
```javascript
const keyObj = {};
const myWeakMap = new WeakMap();
myWeakMap.set(keyObj, 'metadata');
console.log(myWeakMap.get(keyObj)); // Output: metadata
```

**Breakdown of the example:**
- Weakly references the `keyObj` so it can be garbage-collected when no longer needed.

---

### Key Differences

1. **Set vs. Map**: `Set` stores unique values, while `Map` stores key-value pairs.
2. **WeakMap**: Focuses on object keys and provides weak references for memory efficiency.

These collections provide versatile tools for managing structured data in JavaScript.
