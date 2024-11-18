## ES6 Classes and Metaprogramming

Classes in ES6 provide a clearer and more structured way to implement object-oriented programming in JavaScript.

- [ES6 Classes and Metaprogramming](#es6-classes-and-metaprogramming)
  - [Basic Class Structure](#basic-class-structure)
  - [Class Inheritance](#class-inheritance)
  - [Static Methods](#static-methods)
  - [Getters and Setters](#getters-and-setters)
  - [Metaprogramming with Proxies](#metaprogramming-with-proxies)
  - [Reflect API](#reflect-api)
  - [Symbol Type](#symbol-type)
  - [Class Fields (Modern JavaScript)](#class-fields-modern-javascript)
  - [Key Concepts to Remember:](#key-concepts-to-remember)
  - [Best Practices:](#best-practices)


### Basic Class Structure

A class is a blueprint for creating objects with shared properties and methods.

```javascript
class BankAccount {
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

const johnsAccount = new BankAccount("John Doe", 1000);
```

### Class Inheritance

Classes can inherit properties and methods from other classes using the `extends` keyword.

```javascript
class SavingsAccount extends BankAccount {
    constructor(accountHolder, initialBalance, interestRate) {
        super(accountHolder, initialBalance);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.balance * this.interestRate;
        this.deposit(interest);
        return interest;
    }
}

const marySavings = new SavingsAccount("Mary Smith", 2000, 0.05);
```

### Static Methods

Static methods belong to the class itself, not instances of the class.

```javascript
class MathOperations {
    static calculateAverage(...numbers) {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum / numbers.length;
    }
}

const average = MathOperations.calculateAverage(10, 20, 30);
```

### Getters and Setters

Getters and setters allow you to control access to class properties.

```javascript
class TemperatureConverter {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    }

    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
}

const tempConverter = new TemperatureConverter(25);
console.log(tempConverter.fahrenheit); // 77
```

### Metaprogramming with Proxies

Proxies allow you to customize operations performed on objects.

```javascript
const userHandler = {
    get: function(target, property) {
        return property in target ? 
            target[property] : 
            `Property "${property}" not found`;
    }
};

const user = new Proxy({
    firstName: "John",
    lastName: "Doe"
}, userHandler);

console.log(user.firstName);    // "John"
console.log(user.age);         // "Property "age" not found"
```

### Reflect API

The Reflect API provides methods for interceptable JavaScript operations.

```javascript
class PersonRecord {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = Reflect.construct(PersonRecord, ["John", "Doe"]);
console.log(Reflect.has(person, "firstName")); // true
```

### Symbol Type

Symbols are unique identifiers useful for adding unique property keys.

```javascript
const PRIVATE_PROPERTY = Symbol('privateProperty');

class SecureData {
    constructor(publicData, privateData) {
        this.publicData = publicData;
        this[PRIVATE_PROPERTY] = privateData;
    }

    getPrivateData() {
        return this[PRIVATE_PROPERTY];
    }
}

const data = new SecureData("Public", "Secret");
console.log(data.publicData);         // "Public"
console.log(data[PRIVATE_PROPERTY]);  // undefined
```

### Class Fields (Modern JavaScript)

Class fields allow you to declare properties directly in the class.

```javascript
class ProductInventory {
    tax = 0.2;  // Public field
    #internalCode = "XYZ";  // Private field

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    calculateTotalPrice() {
        return this.price * (1 + this.tax);
    }
}

const product = new ProductInventory("Laptop", 1000);
```

### Key Concepts to Remember:

1. Classes are templates for creating objects
2. `constructor` method initializes new instances
3. `extends` enables inheritance between classes
4. `static` methods belong to the class itself
5. Getters and setters control property access
6. Proxies enable custom behavior for basic operations
7. Symbols create unique property keys
8. Private fields start with # (modern JavaScript)

### Best Practices:

1. Use descriptive class and method names
2. Keep classes focused on a single responsibility
3. Use getters and setters to control property access
4. Implement proper error handling
5. Use private fields for internal state
6. Document class behavior and requirements