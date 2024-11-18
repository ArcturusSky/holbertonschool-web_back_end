## ES6 Classes and Metaprogramming

### Overview:  
This course introduces ES6 classes, their key concepts, and metaprogramming features such as Proxies, Reflect API, and Symbols. Each concept is explained with definitions, basic syntax, and simple, concrete examples.

---

## Basic Class Structure

### Definition:  
A class is a blueprint for creating objects. It encapsulates data (properties) and behavior (methods) that are shared by instances of the class.

### Basic Syntax:
```javascript
class ExampleClass {
    constructor(property1, property2) {
        this.property1 = property1; // Assigns property1 to the instance
        this.property2 = property2; // Assigns property2 to the instance
    }

    methodExample() {
        return `This is an example method accessing: ${this.property1}`;
    }
}

// Creating an instance of ExampleClass
const myInstance = new ExampleClass("Value1", "Value2");
```

**Breakdown of the syntax:**
- `class ExampleClass`: Declares a new class.
- `constructor`: A method to initialize the object’s properties.
- `this.property`: Refers to an instance's specific property.
- `methodExample`: A custom method that can be used by instances.

---

### Concrete and simple example:
```javascript
class Book {
    constructor(title, author) {
        this.title = title;       // The title of the book
        this.author = author;     // The author of the book
    }

    describe() {
        return `The book "${this.title}" is written by ${this.author}.`;
    }
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(myBook.describe());
// Output: The book "The Great Gatsby" is written by F. Scott Fitzgerald.
```

**Breakdown of the example:**
- `class Book`: Represents a book with specific properties.
- `describe()`: Combines the properties into a readable string.
- `myBook`: An instance of the `Book` class.

---

## Class Inheritance

### Definition:  
Inheritance allows a class to extend another class, sharing properties and methods with its child classes.

### Basic Syntax:
```javascript
class ParentClass {
    constructor(property) {
        this.property = property;
    }

    parentMethod() {
        return `This is a method in the parent class: ${this.property}`;
    }
}

class ChildClass extends ParentClass {
    childMethod() {
        return `This is a child class method.`;
    }
}

const child = new ChildClass("Parent Value");
```

**Breakdown of the syntax:**
- `extends`: Allows `ChildClass` to inherit from `ParentClass`.
- `super`: Calls the parent class’s constructor (if used in `constructor`).

---

### Concrete and simple example:
```javascript
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} is starting.`;
    }
}

class Car extends Vehicle {
    honk() {
        return `${this.brand} is honking.`;
    }
}

const myCar = new Car("Toyota");
console.log(myCar.start()); // Toyota is starting.
console.log(myCar.honk());  // Toyota is honking.
```

**Breakdown of the example:**
- `Vehicle`: The parent class.
- `Car`: The child class inherits from `Vehicle`.
- `start()` and `honk()`: Methods demonstrating inheritance.

---

## Static Methods

### Definition:  
Static methods belong to the class itself and can be called without creating an instance.

### Basic Syntax:
```javascript
class ExampleClass {
    static staticMethod() {
        return `This is a static method.`;
    }
}

console.log(ExampleClass.staticMethod());
```

**Breakdown of the syntax:**
- `static`: Declares a method as static.
- `ExampleClass.staticMethod()`: Calls the method directly.

---

### Concrete and simple example:
```javascript
class Utility {
    static calculateSum(a, b) {
        return a + b;
    }
}

console.log(Utility.calculateSum(10, 20)); // 30
```

**Breakdown of the example:**
- `Utility`: A utility class with no instance methods.
- `calculateSum`: A static method used for calculation.

---

## Import and Export

### Definition:  
Modules in JavaScript allow code to be organized and shared across files using `import` and `export`.

### Basic Syntax:
```javascript
// File: exampleModule.js
export function exampleFunction() {
    return "Exported function!";
}

// File: main.js
import { exampleFunction } from './exampleModule.js';
console.log(exampleFunction());
```

**Breakdown of the syntax:**
- `export`: Makes a function or variable available for import in other files.
- `import`: Allows access to the exported module.

---

### Concrete and simple example:
```javascript
// File: mathUtils.js
export function add(a, b) {
    return a + b;
}

// File: main.js
import { add } from './mathUtils.js';
console.log(add(3, 7)); // 10
```

**Breakdown of the example:**
- `add`: Exported from `mathUtils.js`.
- `import { add }`: Brings the `add` function into `main.js`.

---

## Getters and Setters

### Definition:  
Getters and setters allow controlled access to the properties of an object. A getter retrieves a property’s value, and a setter allows you to modify a property’s value.

### Basic Syntax:
```javascript
class ExampleClass {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;  // Getter method
    }

    set value(newValue) {
        this._value = newValue;  // Setter method
    }
}

const instance = new ExampleClass(10);
console.log(instance.value);  // Calls the getter, Output: 10
instance.value = 20;  // Calls the setter
console.log(instance.value);  // Calls the getter again, Output: 20
```

**Breakdown of the syntax:**
- `get`: Defines a getter method to access a property.
- `set`: Defines a setter method to modify a property.
- `_value`: The actual property being controlled by the getter/setter.

---

### Concrete and simple example:
```javascript
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    }

    get age() {
        return this._age;
    }
}

const person = new Person("John", 30);
console.log(person.name);  // John
person.age = 35;  // Valid age update
console.log(person.age);   // 35
person.age = -5;  // Invalid age, Error
```

**Breakdown of the example:**
- `name` and `age`: Properties controlled by getter and setter methods.
- `set age(newAge)`: Ensures that age cannot be set to a negative value.

---

## Abstraction in JavaScript

### Definition:
Abstraction is a way to hide the complex details and only expose the necessary parts of an object or class. It allows us to focus on **what** an object does, without worrying about **how** it does it. This is especially useful when dealing with complex systems.

In JavaScript, abstraction is typically achieved by creating **abstract classes** or **methods** that must be implemented by derived classes.

### Basic Syntax:

In JavaScript, we cannot directly create an abstract class like in some other programming languages. However, we can **simulate** abstraction using **classes** and **throwing errors** when abstract methods are not implemented in child classes.

Example syntax:

```javascript
class ClassExample {
  constructor(attribute) {
    this._attribute = attribute;  // Protected attribute
  }

  // Abstract method
  abstractMethod() {
    throw new Error("You must implement the abstractMethod in a subclass.");
  }
}
```

### Breakdown of the syntax:
- **`class ClassExample`**: Defines a class named `ClassExample`.
- **`constructor(attribute)`**: A constructor to initialize the object with an attribute (using `_attribute` to store it as a "protected" variable).
- **`abstractMethod()`**: This is an abstract method. It's meant to be implemented by any subclass. If not implemented, it throws an error when called.

### Concrete and Simple Example:

Let's create an abstract class called `Shape` with an abstract method `calculateArea`. We will then create two subclasses: `Circle` and `Rectangle` that will implement this method.

```javascript
class Shape {
  constructor(name) {
    this._name = name;  // Protected attribute for the name of the shape
  }

  // Abstract method
  calculateArea() {
    throw new Error("You must implement the calculateArea method in a subclass.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this._radius = radius;  // Protected attribute for the radius of the circle
  }

  // Implement the abstract method in Circle
  calculateArea() {
    return Math.PI * this._radius * this._radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this._width = width;  // Protected attribute for width
    this._height = height;  // Protected attribute for height
  }

  // Implement the abstract method in Rectangle
  calculateArea() {
    return this._width * this._height;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea());  // 78.53981633974483

const rectangle = new Rectangle(4, 6);
console.log(rectangle.calculateArea());  // 24
```

### Breakdown of the example:
- **`Shape` class**: This is the abstract base class. It has an abstract method `calculateArea` which needs to be implemented by any subclass.
- **`Circle` class**: This subclass implements the `calculateArea` method to calculate the area of a circle using the formula \( \pi \times r^2 \).
- **`Rectangle` class**: This subclass implements the `calculateArea` method to calculate the area of a rectangle using the formula \( \text{width} \times \text{height} \).
- **Error Handling**: If a subclass doesn't implement the `calculateArea` method, calling `calculateArea` will throw an error in the `Shape` class.

### Key Takeaways:
- **Abstraction** hides complexity by focusing only on essential details.
- In JavaScript, **abstract methods** can be simulated by throwing an error in the base class.
- Subclasses are responsible for implementing these abstract methods.

## Simulating abstract class can't be instanciated directly (advanced)

We can simulate when a the class is called and shouldn't be

### Basic Syntax:

```javascript
class AbstractClassExample {
  constructor(attribute) {
    if (new.target === AbstractClassExample) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
    this._attribute = attribute;
  }

  // Abstract method
  abstractMethod() {
    throw new Error("You must implement the abstractMethod in a subclass.");
  }
}
```

### Breakdown of the syntax:
- **`class AbstractClassExample`**:
  - Defines a class named `AbstractClassExample`.

**Note**: in JavaScript, there is no built-in "*abstract*" keyword; using "Abstract" in the name is purely for example.
- **`constructor(attribute)`**: 
  - A constructor to initialize the object with an attribute (using `this._attribute` to store it as a "protected" variable).

- **`new.target`**:
  - is a special meta-property in javascript that refers to the class being instantiated.
- **`=== AbstractClassExample`**:
  - Compares `new.target` to the class name `AbstractClassExample`. If they are equal, it means the class is being instantiated directly, which is prohibited for abstract classes. An error is thrown in this case.
- **`abstractMethod()`**:
  - This is a placeholder method meant to be overridden by subclasses. If a subclass doesn't override this method and it's called, it will throw an error, enforcing the requirement to implement it.

---

## Metaprogramming with Proxies

### Definition:  
A Proxy is a metaprogramming feature that allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment, function calls) on an object.

### Basic Syntax:
```javascript
const handler = {
    get: function(target, prop, receiver) {
        return prop in target ? target[prop] : `Property ${prop} does not exist.`;
    }
};

const target = {
    name: "John"
};

const proxy = new Proxy(target, handler);
console.log(proxy.name);  // John
console.log(proxy.age);   // Property age does not exist.
```

**Breakdown of the syntax:**
- `new Proxy(target, handler)`: Creates a new Proxy object with a target object and a handler.
- `handler`: An object with traps (methods like `get`, `set`) to define custom behavior.

---

### Concrete and simple example:
```javascript
const person = {
    name: "Alice"
};

const handler = {
    get(target, prop) {
        if (prop === "name") {
            return target[prop].toUpperCase();  // Return name in uppercase
        }
        return `Property ${prop} not found.`;
    }
};

const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.name);  // ALICE
console.log(proxyPerson.age);   // Property age not found.
```

**Breakdown of the example:**
- `Proxy`: Modifies behavior when accessing properties (e.g., transforming `name` to uppercase).
- `handler`: Custom behavior for the `get` operation.

---

## Reflect API

### Definition:  
The Reflect API provides methods for performing object operations, such as getting or setting properties, that are more explicit and easier to use in metaprogramming compared to traditional approaches.

### Basic Syntax:
```javascript
const obj = {
    name: "Bob"
};

Reflect.set(obj, 'name', 'Alice');  // Updates 'name' property
console.log(obj.name);  // Alice
```

**Breakdown of the syntax:**
- `Reflect.set(target, property, value)`: Sets the property `property` of `target` to the `value`.

---

### Concrete and simple example:
```javascript
const obj = { age: 25 };

Reflect.set(obj, "age", 30);
console.log(obj.age);  // 30
console.log(Reflect.has(obj, "age"));  // true
```

**Breakdown of the example:**
- `Reflect.set`: Updates the `age` property.
- `Reflect.has`: Checks if the `age` property exists in the object.

---

## Symbols

### Definition:  
Symbols are a unique and immutable primitive data type in JavaScript. They are primarily used to create unique property keys for objects, ensuring no collisions with other property names.

### Basic Syntax:
```javascript
const uniqueSymbol = Symbol('description');
const obj = {};
obj[uniqueSymbol] = 'Some value';

console.log(obj[uniqueSymbol]);  // Some value
```

**Breakdown of the syntax:**
- `Symbol('description')`: Creates a unique symbol.
- `obj[uniqueSymbol]`: Uses the symbol as a property key.

---

### Concrete and simple example:
```javascript
const idSymbol = Symbol('id');

const user = {
    name: "Eve",
    [idSymbol]: 12345
};

console.log(user[idSymbol]);  // 12345
console.log(user.idSymbol);   // undefined (Symbol is not enumerable)
```

**Breakdown of the example:**
- `Symbol('id')`: Creates a unique symbol for property `id`.
- The symbol ensures the property is not easily overwritten or accessed.

---

## Class Fields

### Definition:  
Class fields are used to define properties directly on instances or the class itself, without the need for a constructor.

### Basic Syntax:
```javascript
class ExampleClass {
    field = "default value";  // Instance field
}

const instance = new ExampleClass();
console.log(instance.field);  // default value
```

**Breakdown of the syntax:**
- `field = "default value"`: Declares an instance field with a default value.

---

### Concrete and simple example:
```javascript
class Person {
    name = "John";
    age = 30;
}

const personInstance = new Person();
console.log(personInstance.name);  // John
console.log(personInstance.age);   // 30
```

**Breakdown of the example:**
- `name` and `age`: Instance fields are initialized directly in the class definition.
- `personInstance`: Instance of the `Person` class, with pre-set fields.

---

## Conclusion

In this course, we explored the core concepts of ES6 classes, including their structure, inheritance, static methods, and how they are integrated with modern JavaScript features like getters, setters, proxies, Reflect API, Symbols, and class fields. By understanding these concepts, you can better utilize JavaScript's object-oriented programming capabilities and metaprogramming features to write cleaner, more efficient code.

---