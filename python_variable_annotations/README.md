# Python Typing Module Summary

- [Python Typing Module Summary](#python-typing-module-summary)
  - [TL;DR: Python Typing Module](#tldr-python-typing-module)
  - [Introduction](#introduction)
  - [Simple Annotations](#simple-annotations)
  - [Type Aliases](#type-aliases)
  - [`NewType`](#newtype)
  - [**`Callable` Annotation**](#callable-annotation)
  - [Generics](#generics)
  - [`Sequence` Annotation](#sequence-annotation)
    - [`Iterable` Annotation](#iterable-annotation)
    - [**Key Takeaways**](#key-takeaways)
  - [Tuple Annotation](#tuple-annotation)
  - [Class `Type`](#class-type)
  - [`Any`](#any)
  - [`Union`](#union)
  - [`Optional`](#optional)
  - [Final Summary](#final-summary)

## TL;DR: Python Typing Module

The `typing` module in Python provides tools to define types for better code clarity and type-checking. It doesn't affect runtime but improves readability and debugging.

- **Type Aliases**: Create descriptive names for complex types.  
  *Example: `IntegerList = List[int]` creates a type alias for a list of integers.*

- **NewType**: Create distinct types for logically different values that share the same base type.  
  *Example: `UserId = NewType('UserId', int)` creates a new type, `UserId`, which is based on `int` but treated as a separate type for type safety.*

- **Callable Annotation**: Define the type of callable objects (like functions or methods).  
  *Example: `Callable[[int, int], int]` specifies a function that takes two integers and returns an integer.*

- **Generics**: Define flexible types for functions or classes that can operate on any type.  
  *Example: `T = TypeVar('T')` allows the function `get_first_element` to accept a list of any type (example `List[int]` or `List[str]`) and return an element of that same type.*

- **Tuple Annotation**: Define fixed-length sequences with specific types for each element.  
  *Example: `Tuple[str, int]` defines a tuple with a string as the first element and an integer as the second.*

- **Class Types**: Annotate variables as class references (not instances).  
  *Example: `Type[MyClass]` indicates that the variable is a reference to the class `MyClass`, not an instance.*

- **Union**: Define a variable that can accept multiple possible types.  
  *Example: `Union[int, str]` allows a variable to be either an `int` or a `str`.*

- **Optional**: A shorthand for `Union[X, None]`, indicating that a value could be of type `X` or `None`.  
  *Example: `Optional[int]` means the value could be an `int` or `None`.*

## Introduction

**Short definition:**

The `typing` module in Python supports type hints, enhancing code clarity and enabling static type checking without affecting runtime behavior.  

**Keypoints:**  
- Improves code readability and debugging.  
- Provides tools for declaring types in functions, variables, and classes.  

**Basic syntax:**  

```python
from typing import Type  
# Example: Annotating a variable with a class type  
class ExampleClass:  
    pass  

variable_name: Type[ExampleClass]  
```

**Very simple example of how it works:**

```python
from typing import Type  

class Person:  
    def __init__(self, name: str):  
        self.name = name  

person_class: Type[Person]  
```

**Concrete example of its use with a purpose:**

This example demonstrates how `Type` ensures that a function accepts a class type (not an instance) as an argument, allowing dynamic object creation. It’s a practical use case for scenarios like factory functions, where objects are instantiated based on the provided class, ensuring flexibility and type safety.

```python
from typing import Type  

class Product:  
    def __init__(self, name: str, price: float):  
        self.name = name  
        self.price = price  

def create_item(item_class: Type[Product], name: str, price: float) -> Product:  
    return item_class(name, price)  

new_product = create_item(Product, "Laptop", 1200.0)  
print(new_product.name, new_product.price)  
```

## Simple Annotations

**When to use it:**  
Simple annotations are useful when you need to quickly specify the type of a variable, function, or class attribute without any complex logic. It's ideal for making the code more readable and ensuring that the data types are clearly defined.

**Short definition:**

Simple annotations allow you to explicitly declare the type of variables, function parameters, and return values in a straightforward manner. They are basic yet fundamental for type checking and enhancing code clarity.

**Keypoints:**  
- Used for basic data types like `int`, `str`, `float`, etc.  
- Improves code readability and enforces type safety.

**Basic syntax:**  

```python
# Example for annotating a variable
my_variable: int = 5

# Example for annotating a function
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

**Very simple example of how it works:**

```python
age: int = 30

def greet(name: str) -> str:
    return f"Hello, {name}!"
```

**Concrete example of its use with a purpose:**

This example uses simple annotations to ensure the function `greet` only accepts strings as the `name` argument, and it returns a string. Similarly, the `age` variable is annotated as an integer, which makes the code more predictable and easier to debug.

```python
age: int = 30

def greet(name: str) -> str:
    return f"Hello, {name}!"
```

## Type Aliases

**When to use it:**  
Type aliases are useful when you deal with complex types that appear multiple times in your code. Instead of repeating the full type declaration, you can define an alias, making the code more readable and maintainable.

**Short definition:**

Type aliases allow you to create descriptive names for complex types, improving code readability.

**Keypoints:**
- Useful for abstracting and reusing complex types.  
- Enhances clarity when dealing with intricate type definitions.  

**Basic syntax:**

```python
from typing import TypeAlias  

AliasName: TypeAlias = ExistingType  
```

**Very simple example of how it works:**

```python
from typing import List  

IntegerList = List[int]  
numbers: IntegerList = [1, 2, 3]  
```

**Concrete example of its use with a purpose:**

This example uses `List` and `Dict` to define custom types for representing vectors and coordinates. It demonstrates how to enforce type safety for collections, ensuring that operations like scaling a vector or plotting coordinates are performed with the correct data structures, making the code more readable and reliable.

```python
from typing import List, Dict  

Vector = List[float]  
Coordinate = Dict[str, float]  

def scale_vector(vector: Vector, multiplier: float) -> Vector:  
    return [value * multiplier for value in vector]  

def plot_coordinate(coord: Coordinate) -> None:  
    print(f"X: {coord['x']}, Y: {coord['y']}")  

vector_example = [1.0, 2.0, 3.0]  
coordinate_example = {'x': 1.0, 'y': 2.0}  

scaled_vector = scale_vector(vector_example, 2.5)  
plot_coordinate(coordinate_example)  
```

## `NewType`

**When to use it:**  
Use `NewType` when you need to differentiate logically similar values (that share the same base type) for type safety. It helps avoid logical errors where the wrong value might be passed around as if it's the same type.

**Short definition:**

`NewType` creates distinct types from existing ones to ensure type-checking correctness.

**Keypoints:**  
- Helps differentiate between logically different values of the same base type.  
- Improves safety in type checking.  

**Basic syntax:**

```python
from typing import NewType  

NewTypeName = NewType('NewTypeName', ExistingType)  
```

**Very simple example of how it works:**

```python
from typing import NewType  

StudentId = NewType('StudentId', int)  
student_id: StudentId = StudentId(101)  
```

**Concrete example of its use with a purpose:**

This example introduces `NewType` to create a distinct type, `UserId`, from an existing type (`int`). It ensures that `user_id` values are treated as a specific entity, adding type safety and preventing mix-ups with regular integers. This approach helps catch errors where an incorrect type is used in function calls.

```python
from typing import NewType  

UserId = NewType('UserId', int)  

def fetch_user_name(user_id: UserId) -> str:  
    # Simulating a lookup in a database  
    return f"User_{user_id}"  

# Correct usage  
valid_user_id = UserId(42)  
print(fetch_user_name(valid_user_id))  

# Type-checking error if uncommented  
# invalid_user_id = 42  
# print(fetch_user_name(invalid_user_id))  
```

## **`Callable` Annotation**

**When to Use It;**

Use the `Callable` annotation when:  
- You want to **specify a function as a parameter** to another function.  
- You want to **return a function** from another function.  

It helps define the **type signature** of a function or callable object, ensuring proper usage in your code.

---

**Short Definition:**

The `Callable` annotation describes:  
1. **The types of arguments** the function should accept.  
2. **The type of value** the function should return.  

---

**Key Points:**

- Improves **type safety**, ensuring functions passed or returned match the expected signature.  
- Makes your code **easier to read and maintain** by explicitly defining how a function can be used.  
- Helps with **static type checking**, reducing runtime bugs.  

---

**Basic Syntax:**

```python
from typing import Callable

Syntax: Callable[[ArgType1, ArgType2], ReturnType]
Callable[[int, float], str]  # A function taking an int and a float, returning a string
```

---

**Examples:**

- **Passing a Function:**
Here’s a simple example of passing a function to another function:

```python
from typing import Callable

def multiply_by_two(x: int) -> int:
    return x * 2

def apply_function(func: Callable[[int], int], value: int) -> int:
    return func(value)

result = apply_function(multiply_by_two, 5)
print(result)  # Outputs: 10
```

**Explanation:**

- **`multiply_by_two`**: A function that takes an integer and doubles it.  
- **`apply_function`**: Takes a function (`func`) and an integer (`value`), then applies `func` to `value`.  
- The result is `5 * 2 = 10`.  

---

**Returning a Function:**

Let’s look at how to create a function that returns another function:

```python
from typing import Callable

def make_multiplier(factor: float) -> Callable[[float], float]:
    def multiplier(value: float) -> float:
        return value * factor
    return multiplier

doubler = make_multiplier(2.0)
print(doubler(5.0))  # Outputs: 10.0
```

**Explanation:**

- **`make_multiplier`**: Takes a `factor` and returns a new function (`multiplier`).  
- The returned function multiplies any number by the `factor`.  
- `doubler` is a function that multiplies numbers by `2.0`.  

---

**Key Takeaways:**

- Use `Callable` to **clearly define function types**, whether you are passing or returning them.  
- It ensures **functions have the expected inputs and outputs**, reducing type-related bugs.  
- Works great for situations involving **dynamic function generation** or **passing utility functions**.  


## Generics

**When to use it:**  
Generics should be used when you need to create functions or classes that can work with any type but still enforce type safety. It's particularly useful for data structures like lists or dictionaries where the element type may vary but needs to be consistent throughout.

**Short definition:**

Generics allow you to define functions or classes that are flexible and work with any type, while maintaining type safety.

**Keypoints:**  
- Enables type-safe functions and classes that can operate on any data type.  
- Useful in libraries and frameworks where types are meant to be flexible.

**Basic syntax:**

```python
from typing import TypeVar  

T = TypeVar('T')  # Define a generic type  
```

**Very simple example of how it works:**

```python
from typing import TypeVar  

T = TypeVar('T')  

def get_first_element(items: list[T]) -> T:  
    return items[0]  

first_string = get_first_element(["apple", "banana", "cherry"])  
first_int = get_first_element([1, 2, 3])  
```

**Concrete example of its use with a purpose:**

This example uses generics to define the function `get_first_element`, which can work with lists of any type (strings, integers, etc.), ensuring the correct return type based on the input list.

```python
from typing import TypeVar  

T = TypeVar('T')  

def get_first_element(items: list[T]) -> T:  
    return items[0]  

first_string = get_first_element(["apple", "banana", "cherry"])  
first_int = get_first_element([1, 2, 3])  
```

## `Sequence` Annotation

**When to use it:**

Use the `Sequence` annotation when:  
- You need to represent a **fixed order collection** of elements (like lists or tuples).  
- You want to **guarantee that elements are indexed** and the order is preserved.  

---

**Short Definition:**

The `Sequence` annotation represents any collection that:  
1. **Has elements accessible by index** (like `my_sequence[0]`).  
2. **Maintains a fixed order** of its items.  
3. Can be iterated over.  

---

**Key Points:**
- Includes **ordered, immutable or mutable collections** like lists and tuples.  
- Provides support for common operations like indexing and slicing.  
- Helps make code more **flexible** by accepting any sequence type instead of specific ones like `list`.

---

**Basic syntax:**

```python
from typing import Sequence

# Syntax: Sequence[ElementType]
Sequence[int]  # A sequence containing integers
```

---

**Examples:**

**Working with a sequence:**

```python
from typing import Sequence

def total(sequence: Sequence[int]) -> int:
    return sum(sequence)

numbers = [1, 2, 3, 4]
print(total(numbers))  # Outputs: 10
```

**Explanation**:  
- The function `total` accepts any `Sequence` of integers (like a list or tuple).  
- `numbers` is a list, which is valid since it's a `Sequence`.  

---

**Indexing a Sequence**

```python
from typing import Sequence

def get_first_element(sequence: Sequence[str]) -> str:
    return sequence[0]

words = ("hello", "world")
print(get_first_element(words))  # Outputs: "hello"
```

**Explanation**:  
- The function `get_first_element` takes any `Sequence` of strings.  
- The tuple `words` works because tuples are also sequences.  

---

### `Iterable` Annotation

**When to use it:**

Use the `Iterable` annotation when:  
- You need to **process elements one by one** from a collection.  
- You want to accept **any object that can be iterated over** (not limited to lists or tuples).  

---

**Short definition:**

The `Iterable` annotation represents any collection that:  
1. **Can produce elements one by one** (like in a loop).  
2. Supports iteration using `for element in iterable`.  

---

**Key Points:**
- Broader than `Sequence`—includes types like `set`, `dict`, and even custom iterators.  
- Does not guarantee order or indexing.  
- Useful for creating **general-purpose functions** that accept any iterable type.  

---

**Basic syntax:**

```python
from typing import Iterable

# Syntax: Iterable[ElementType]
Iterable[float]  # An iterable containing floats
```

---

**Examples**

**Processing an Iterable**

```python
from typing import Iterable

def calculate_total(iterable: Iterable[float]) -> float:
    return sum(iterable)

values = {1.1, 2.2, 3.3}  # A set of floats
print(calculate_total(values))  # Outputs: 6.6
```

**Explanation**:  
- The function `calculate_total` works with any `Iterable` of floats.  
- Sets (`values`) are valid iterables.  

---

**Using an Iterable in a Loop**

```python
from typing import Iterable

def print_elements(iterable: Iterable[str]) -> None:
    for element in iterable:
        print(element)

names = ["Alice", "Bob", "Charlie"]
print_elements(names)
```

**Explanation**:  
- The function `print_elements` iterates over any `Iterable` of strings.  
- Lists, tuples, and sets are all valid inputs for this function.  

---

### **Key Takeaways**
- Use `Sequence` when **order and indexing are essential**.  
- Use `Iterable` when **any iterable object is acceptable**, regardless of order or indexing.  
- Both annotations improve code clarity and flexibility, accommodating a variety of input types.  


## Tuple Annotation

**When to use it:**  
Use `Tuple` when you need to define a fixed-length sequence with specific types for each element, such as representing points, coordinates, or pairs of data.

**Short definition:**

The `Tuple` annotation defines fixed-length sequences with specified types for each element.

**Keypoints:**  
- Useful for representing tuples, pairs, and fixed collections.  
- Ensures type consistency for the tuple's elements.  

**Basic syntax:**

```python
from typing import Tuple  

Tuple[ElementType1, ElementType2]  
```

**Very simple example of how it works:**

```python
from typing import Tuple  

coordinates: Tuple[float, float] = (12.5, 3.2)  
```

**Concrete example of its use with a purpose:**

In this example, we define a `Tuple` for coordinates, where the tuple must always contain two floats, representing the x and y values of a point. This ensures type consistency, and any misuse (e.g., a string in the tuple) would raise an error at type-checking.

```python
from typing import Tuple  

Point = Tuple[float, float]  

def calculate_distance(point1: Point, point2: Point) -> float:  
    return ((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2)**0.5  

distance = calculate_distance((1.0, 1.0), (4.0, 5.0))  
print(distance)  
```

## Class `Type`

**When to use it:**  
Use `Type` when you need to specify that a variable or parameter should reference a class, not an instance of the class.

**Short definition:**

The `Type` annotation specifies that a variable is a reference to a class (not an instance) of a certain type.

**Keypoints:**  
- Used for class references rather than instances.  
- Ideal for cases where you need to accept or return class objects in functions.

**Basic syntax:**

```python
from typing import Type  

Type[SomeClass]  
```

**Very simple example of how it works:**

```python
from typing import Type  

class Animal:  
    pass  

animal_class: Type[Animal] = Animal  
```

**Concrete example of its use with a purpose:**

This example demonstrates using `Type[Animal]` to refer to the class `Animal`, not an instance of the class. This is useful in factory functions or class-based logic where we need to work with the class itself, not its instances.

```python
from typing import Type  

class Animal:  
    pass  

def create_animal_class(animal_class: Type[Animal]) -> Animal:  
    return animal_class()  

created_animal = create_animal_class(Animal)  
print(created_animal)  
```

## `Any`

**When to use it:**  
`Any` should be used when you don't want to enforce any type constraints. It's helpful for dynamic code or when working with libraries that don't have strict type definitions.

**Short definition:**

`Any` allows a variable to be any type, effectively turning off type checking for that variable.

**Keypoints:**  
- Disables type checking for the variable it's applied to.  
- Used for dynamic or untyped data.

**Basic syntax:**

```python
from typing import Any  

Any  
```

**Very simple example of how it works:**

```python
from typing import Any  

dynamic_value: Any = "I can be anything!"  
dynamic_value = 42  
dynamic_value = [1, 2, 3]  
```

**Concrete example of its use with a purpose:**

`Any` is used in scenarios where we don't want to restrict the types of certain variables. For example, it allows for flexibility when processing data from different sources, like user input or external APIs, where the type is not known in advance.

```python
from typing import Any  

def process_value(value: Any) -> None:  
    print(value)  

process_value(100)  
process_value("Hello")  
process_value([1, 2, 3])  
```

## `Union`

**When to use it:**  
Use `Union` when a variable can accept multiple types. It's useful for functions that can operate on different types or when you need to handle multiple possible input types.

**Short definition:**

`Union` allows you to specify that a variable can be one of multiple types.

**Keypoints:**  
- Allows for multiple possible types.  
- Useful for functions that can accept more than one type.  

**Basic syntax:**

```python
from typing import Union  

Union[Type1, Type2]  
```

**Very simple example of how it works:**

```python
from typing import Union  

value: Union[int, str] = 42  
value = "Hello"  
```

**Concrete example of its use with a purpose:**

In this example, we define a function `get_length` that can accept either a string or a list. The use of `Union` allows for flexible input while ensuring the type of `value` is handled correctly.

```python
from typing import Union  

def get_length(value: Union[str, list]) -> int:  
    return len(value)  

length_of_string = get_length("Hello")  
length_of_list = get_length([1, 2, 3])  
print(length_of_string, length_of_list)  
```

## `Optional`

**When to use it:**  
Use `Optional` when a variable can either be of a specific type or `None`. It's often used to indicate that a value is optional, like a default argument in functions.

**Short definition:**

`Optional` is a shorthand for `Union[X, None]`, meaning the value could be of type `X` or `None`.

**Keypoints:**  
- Indicates that a value can be of a certain type or `None`.  
- Useful for optional function parameters or return values.

**Basic syntax:**

```python
from typing import Optional  

Optional[Type]  
```

**Very simple example of how it works:**

```python
from typing import Optional  

value: Optional[str] = None  
value = "Hello"  
```

**Concrete example of its use with a purpose:**

This example shows how `Optional` is used to represent a variable that can either be a string or `None`. This is useful in cases like function return values where `None` represents the absence of a value.

```python
from typing import Optional  

def greet(name: Optional[str] = None) -> str:  
    if name is None:  
        return "Hello, guest!"  
    return f"Hello, {name}!"  

print(greet())  
print(greet("John"))  
```

## Final Summary

This guide has provided an overview of various type annotations in Python, such as `Callable`, `Generics`, `Tuple`, `Type`, `Any`, `Union`, and `Optional`. These annotations help define and enforce type safety, making your code more readable and less error-prone. By using these annotations effectively, you can improve the maintainability of your code and reduce bugs.
