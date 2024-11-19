# JavaScript Data Structures

VERY CONCISE course

- [JavaScript Data Structures](#javascript-data-structures)
  - [Array](#array)
    - [Definition: A resizable list-like object for storing multiple values in a single variable.](#definition-a-resizable-list-like-object-for-storing-multiple-values-in-a-single-variable)
    - [Basic syntax:](#basic-syntax)
    - [Concrete and simple example](#concrete-and-simple-example)
  - [Typed Array](#typed-array)
    - [Definition: Array-like objects for handling binary data, providing a mechanism for accessing raw binary data.](#definition-array-like-objects-for-handling-binary-data-providing-a-mechanism-for-accessing-raw-binary-data)
    - [Basic syntax:](#basic-syntax-1)
    - [Concrete and simple example](#concrete-and-simple-example-1)
  - [Set](#set)
    - [Definition: A collection of unique values, where each value can occur only once.](#definition-a-collection-of-unique-values-where-each-value-can-occur-only-once)
    - [Basic syntax:](#basic-syntax-2)
    - [Concrete and simple example](#concrete-and-simple-example-2)
  - [Map](#map)
    - [Definition: A collection of key-value pairs where both keys and values can be of any type.](#definition-a-collection-of-key-value-pairs-where-both-keys-and-values-can-be-of-any-type)
    - [Basic syntax:](#basic-syntax-3)
    - [Concrete and simple example](#concrete-and-simple-example-3)
  - [WeakMap](#weakmap)
    - [Definition: A collection of key-value pairs where keys must be objects and are held weakly.](#definition-a-collection-of-key-value-pairs-where-keys-must-be-objects-and-are-held-weakly)
    - [Basic syntax:](#basic-syntax-4)
    - [Concrete and simple example](#concrete-and-simple-example-4)


## Array

### Definition: A resizable list-like object for storing multiple values in a single variable.

### Basic syntax:

```javascript
const array = [element1, element2, ...];
```

**Breakdown of the syntax:**
- `const`: Declares a constant variable
- `array`: Name of the array
- `[]`: Array literal notation
- `element1, element2, ...`: Elements of the array

### Concrete and simple example

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]); // Output: 'banana'
fruits.push('grape');
console.log(fruits.length); // Output: 4
```

**Breakdown of the example:**
- Creates an array of fruits
- Accesses the second element (index 1)
- Adds a new element to the end of the array
- Checks the length of the array

## Typed Array

### Definition: Array-like objects for handling binary data, providing a mechanism for accessing raw binary data.

### Basic syntax:
```javascript
const typedArray = new TypedArray(length);
```

**Breakdown of the syntax:**
- `const`: Declares a constant variable
- `typedArray`: Name of the typed array
- `TypedArray`: Specific type (e.g., Int8Array, Uint8Array, Float32Array)
- `length`: Number of elements in the array

### Concrete and simple example

```javascript
const int8Array = new Int8Array(4);
int8Array[0] = 42;
console.log(int8Array); // Output: Int8Array(4) [42, 0, 0, 0]
```

**Breakdown of the example:**
- Creates an Int8Array with 4 elements
- Sets the first element to 42
- Logs the entire array

## Set

### Definition: A collection of unique values, where each value can occur only once.

### Basic syntax:
```javascript
const set = new Set([iterable]);
```

**Breakdown of the syntax:**
- `const`: Declares a constant variable
- `set`: Name of the Set
- `new Set()`: Creates a new Set object
- `[iterable]`: Optional iterable object to populate the Set

### Concrete and simple example

```javascript
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
console.log(uniqueNumbers.size); // Output: 4
uniqueNumbers.add(5);
console.log(uniqueNumbers.has(2)); // Output: true
```

**Breakdown of the example:**
- Creates a Set with unique numbers
- Checks the size of the Set
- Adds a new number to the Set
- Checks if a number exists in the Set

## Map

### Definition: A collection of key-value pairs where both keys and values can be of any type.

### Basic syntax:
```javascript
const map = new Map([iterable]);
```

**Breakdown of the syntax:**
- `const`: Declares a constant variable
- `map`: Name of the Map
- `new Map()`: Creates a new Map object
- `[iterable]`: Optional iterable of key-value pairs

### Concrete and simple example

```javascript
const userMap = new Map();
userMap.set('name', 'John');
userMap.set('age', 30);
console.log(userMap.get('name')); // Output: 'John'
console.log(userMap.size); // Output: 2
```

**Breakdown of the example:**
- Creates an empty Map
- Adds key-value pairs to the Map
- Retrieves a value using its key
- Checks the size of the Map

## WeakMap

### Definition: A collection of key-value pairs where keys must be objects and are held weakly.

### Basic syntax:
```javascript
const weakMap = new WeakMap([iterable]);
```

**Breakdown of the syntax:**
- `const`: Declares a constant variable
- `weakMap`: Name of the WeakMap
- `new WeakMap()`: Creates a new WeakMap object
- `[iterable]`: Optional iterable of key-value pairs

### Concrete and simple example

```javascript
const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'associated data');
console.log(weakMap.get(obj)); // Output: 'associated data'
obj = null; // The entry in weakMap will be removed automatically
```

**Breakdown of the example:**
- Creates a WeakMap
- Sets an object as a key with associated data
- Retrieves the data using the object key
- When the object is set to null, it becomes eligible for garbage collection, and the WeakMap entry is automatically removed