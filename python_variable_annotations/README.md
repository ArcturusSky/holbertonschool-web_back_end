# Python Typing Module Summary

- [Python Typing Module Summary](#python-typing-module-summary)
  - [TL;DR: Python Typing Module](#tldr-python-typing-module)
  - [Introduction](#introduction)
  - [Type Aliases](#type-aliases)
  - [`NewType`](#newtype)
  - [`Callable` Annotation](#callable-annotation)
  - [Generics](#generics)
  - [`Tuple` Annotation](#tuple-annotation)
  - [Class `Type`](#class-type)
  - [`Any`](#any)
  - [`Union`](#union)
  - [`Optional`](#optional)
  - [**Conclusion**](#conclusion)

## TL;DR: Python Typing Module

The `typing` module in Python provides tools to define types for better code clarity and type-checking. It doesn't affect runtime but improves readability and debugging.

- **Type Aliases**: Create descriptive names for complex types.  
  Example: `IntegerList = List[int]` creates a type alias for a list of integers.
  
- **NewType**: Create distinct types for logically different values that share the same base type.  
  Example: `UserId = NewType('UserId', int)` creates a new type, `UserId`, which is based on `int` but treated as a separate type for type safety.

- **Callable Annotation**: Define the type of callable objects (like functions or methods).  
  Example: `Callable[[int, int], int]` specifies a function that takes two integers and returns an integer.

- **Generics**: Define flexible types for functions or classes that can operate on any type.  
  Example: `T = TypeVar('T')` allows the function `get_first_element` to accept a list of any type (e.g., `List[int]` or `List[str]`) and return an element of that same type.

- **Tuple Annotation**: Define fixed-length sequences with specific types for each element.  
  Example: `Tuple[str, int]` defines a tuple with a string as the first element and an integer as the second.

- **Class Types**: Annotate variables as class references (not instances).  
  Example: `Type[MyClass]` indicates that the variable is a reference to the class `MyClass`, not an instance.

- **Union**: Define a variable that can accept multiple possible types.  
  Example: `Union[int, str]` allows a variable to be either an `int` or a `str`.

- **Optional**: A shorthand for `Union[X, None]`, indicating that a value could be of type `X` or `None`.  
  Example: `Optional[int]` means the value could be an `int` or `None`.


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
--  

## Type Aliases

**Short definition:**

Type aliases allows to create descriptive names for complex types, improving code readability.  

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
--  

## `NewType`

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

## `Callable` Annotation

**Short definition:**

`Callable` is used to annotate functions or any callable objects, specifying the types of arguments and return values.  

**Keypoints:**  
- Ensures functions adhere to a specific signature.  
- Improves clarity when passing functions as arguments.  

**Basic syntax:**

```python  
from typing import Callable  

FunctionType = Callable[[ArgType1, ArgType2], ReturnType]  
```  

**Very simple example of how it works:**

```python  
from typing import Callable  

Operation = Callable[[int, int], int]  

def perform_operation(x: int, y: int, op: Operation) -> int:  
    return op(x, y)  
```  

**Concrete example of its use with a purpose:**

This example demonstrates the use of `Callable` to specify that the `operation` parameter is a function that takes two `int` arguments and returns an `int`. It ensures type safety by explicitly defining the function signature expected in `perform_operation`, making it clear that only functions matching that signature can be passed

```python  
from typing import Callable  

def add_numbers(a: int, b: int) -> int:  
    return a + b  

def perform_operation(  
    first_number: int,  
    second_number: int,  
    operation: Callable[[int, int], int]  
) -> int:  
    return operation(first_number, second_number)  

result = perform_operation(5, 3, add_numbers)  
print(f"The result is: {result}")  
```  
--  

## Generics

**Short definition:**

Generics enable type parameterization in functions and classes, allowing code to handle multiple types flexibly.  

**Keypoints:**
- Provides type safety without duplicating code.  
- Facilitates working with collections of various types.  

**Basic syntax:**

```python  
from typing import TypeVar, List  

T = TypeVar('T')  

def function_name(arg: List[T]) -> T:  
    return arg[0]  
```  

**Very simple example of how it works:**

```python  
from typing import TypeVar, List  

T = TypeVar('T')  

def get_first_element(elements: List[T]) -> T:  
    return elements[0]  

print(get_first_element([1, 2, 3]))  # Output: 1  
print(get_first_element(["a", "b", "c"]))  # Output: "a"  
```  

**Concrete example of its use with a purpose:**

This example uses `TypeVar` to define a generic type `T`, allowing the `find_largest` function to work with any list of comparable elements, whether they are numbers or strings. The type variable `T` ensures that the function can handle multiple data types while maintaining type safety.

```python  
from typing import TypeVar, List  

T = TypeVar('T')  

def find_largest(elements: List[T]) -> T:  
    return max(elements)  

print(find_largest([3, 5, 2, 8]))  # Output: 8  
print(find_largest(["apple", "banana", "cherry"]))  # Output: "cherry"  
```  
--  

## `Tuple` Annotation

**Short definition:**

`Tuple` specifies fixed-length sequences with specific types for each element.  

**Keypoints:**
- Ensures tuples contain elements of expected types.  
- Useful for returning multiple values from functions.  

**Basic syntax:**

```python  
from typing import Tuple  

VariableName: Tuple[Type1, Type2, Type3]  
```  

**Very simple example of how it works:**

```python  
from typing import Tuple  

coordinates: Tuple[int, int] = (10, 20)  
```  

**Concrete example of its use with a purpose:**

This example uses `Tuple` to specify that the `get_user_profile` function returns a fixed-length collection with elements of different types (a string, an integer, and a boolean). It helps define the exact structure of the returned data for better clarity and type safety.

```python  
from typing import Tuple  

def get_user_profile() -> Tuple[str, int, bool]:  
    return "Alice", 30, True  

user_name, user_age, user_active = get_user_profile()  
print(f"Name: {user_name}, Age: {user_age}, Active: {user_active}")  
```  
--  

## Class `Type`

**Short definition:**

`Type` is used to annotate variables or parameters that hold class objects, enabling type safety for class-related operations.  

**Keypoints:**
- Useful for factories and class-based operations.  
- Ensures variables contain valid class references.  

**Basic syntax:**

```python  
from typing import Type  

ClassVariable: Type[ClassName]  
```  

**Very simple example of how it works:**

```python  
from typing import Type  

class ExampleClass:  
    pass  

example_variable: Type[ExampleClass]  
```  

**Concrete example of its use with a purpose:**

This example uses `Type` to specify that the `create_shape` function expects a class that is a subtype of `Shape`. It ensures that only valid `Shape`-derived classes can be passed to the function, providing type safety when dynamically creating objects.

```python  
from typing import Type  

class Shape:  
    def __init__(self, name: str):  
        self.name = name  

def create_shape(shape_class: Type[Shape], shape_name: str) -> Shape:  
    return shape_class(shape_name)  

circle = create_shape(Shape, "Circle")  
print(circle.name)  
```  
--  

## `Any`

**Short definition:**

`Any` represents any type, bypassing static type checking for flexibility.  

**Keypoints:**  
- Allows maximum flexibility in type annotation.  
- Should be used sparingly to maintain type safety.  

**Basic syntax:**
```python  
from typing import Any  

VariableName: Any  
```  

**Very simple example of how it works:**

```python  
from typing import Any  

variable: Any = 42  
variable = "Now a string"  
```  

**Concrete example of its use with a purpose:**

In this example, `Any` is used to allow the `print_any_value` function to accept values of any type. It provides maximum flexibility, enabling the function to handle integers, strings, lists, or any other data type without type restrictions.

```python  
from typing import Any  

def print_any_value(value: Any) -> None:  
    print(f"Value: {value}")  

print_any_value(100)  
print_any_value("A string")  
print_any_value([1, 2, 3])  
```  
--  

## `Union`

**Short definition:**

`Union` allows a variable to hold values of multiple specified types.  

**Keypoints:**
- Indicates a value can be one of several types.  
- Simplifies handling optional or polymorphic types.  

**Basic syntax:**
```python  
from typing import Union  

VariableName: Union[Type1, Type2]  
```  

**Very simple example of how it works:**

```python  
from typing import Union  

identifier: Union[int, str] = 123  
identifier = "ABC"  
```  

**Concrete example of its use with a purpose:**

In this example, `Union` is used to indicate that the `identifier` parameter can be either an `int` or a `str`. This allows the `print_identifier` function to accept and handle both types, providing flexibility while maintaining type safety.

```python  
from typing import Union  

def print_identifier(identifier: Union[int, str]) -> None:  
    print(f"Identifier: {identifier}")  

print_identifier(42)  
print_identifier("XYZ123")  
```  
--  

## `Optional`

**Short definition:**

`Optional` is shorthand for `Union[T, None]`, indicating a value can be of type `T` or `None`.  

**Keypoints:**
- Simplifies annotations for optional parameters.  
- Helps express nullable values clearly.  

**Basic syntax:**

```python  
from typing import Optional  

VariableName: Optional[Type]  
```  

**Very simple example of how it works:**

```python  
from typing import Optional  

optional_name: Optional[str] = None  
optional_name = "Alice"  
```  

**Concrete example of its use with a purpose:**

In this example, `Optional` is used to specify that the `user_name` parameter can either be a `str` or `None`. This allows the function to handle the case where no name is provided, defaulting to *"Hello, Guest!"* when the argument is `None`.

```python  
from typing import Optional

def greet_user(user_name: Optional[str] = None) -> str:  
    if user_name is None:  
        return "Hello, Guest!"  
    return f"Hello, {user_name}!"  

print(greet_user())  
print(greet_user("Alice"))  
```

## **Conclusion**

The `typing` module in Python enhances code readability and reliability by allowing to explicitl define the types of variables, function arguments, and return values. This improves collaboration, reduces errors, and facilitates better static analysis and debugging. 

- Use **type aliases** to simplify complex types.
- Leverage **NewType** for distinguishing logically different values with the same underlying type.
- Utilize **generics** to create flexible, reusable code that works with various types.
- Apply **Callable**, **Union**, and **Optional** to describe function signatures and variables that can accept multiple types.
- Annotations like **Tuple** and **Class types** help ensure that code handles data structures correctly.

By embracing these features, Python code becomes more robust, maintainable, and easier to understand for both humans and tools (like type checkers).
