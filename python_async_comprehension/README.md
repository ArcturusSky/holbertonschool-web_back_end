# Async Comprehension and generators

- [Async Comprehension and generators](#async-comprehension-and-generators)
  - [TL;DR](#tldr)
    - [Async Comprehensions and Asynchronous Generators](#async-comprehensions-and-asynchronous-generators)
  - [Async Comprehension](#async-comprehension)
    - [1. Reminder: Comprehensions in Python (Synchronous)](#1-reminder-comprehensions-in-python-synchronous)
    - [2. The Challenge with Asynchronous Code](#2-the-challenge-with-asynchronous-code)
    - [3. The Solution: Asynchronous Comprehensions](#3-the-solution-asynchronous-comprehensions)
    - [4. Support for `await` Expressions](#4-support-for-await-expressions)
    - [5. Advantages](#5-advantages)
    - [6. Combined Example:](#6-combined-example)
  - [Asynchronous Generators](#asynchronous-generators)
    - [Goals and Benefits of Asynchronous Generators](#goals-and-benefits-of-asynchronous-generators)
    - [Comparison: Traditional vs. Asynchronous Generator](#comparison-traditional-vs-asynchronous-generator)
    - [Specification](#specification)
    - [Usage Examples](#usage-examples)
      - [Basic Asynchronous Generator](#basic-asynchronous-generator)
      - [Why is `async for` needed?](#why-is-async-for-needed)
      - [Manually Iterating](#manually-iterating)
    - [Advanced Features](#advanced-features)
      - [Finalization](#finalization)
      - [Asynchronous Send and Throw](#asynchronous-send-and-throw)
    - [Integration with `asyncio`](#integration-with-asyncio)
      - [Automatic Finalization](#automatic-finalization)
      - [Shutting Down Generators](#shutting-down-generators)
    - [Type Hint in Asynchronous Generators](#type-hint-in-asynchronous-generators)
      - [Syntax:](#syntax)
      - [Explanation:](#explanation)
      - [Example with values received:](#example-with-values-received)
    - [Summary](#summary)

## TL;DR

**Garbage Collector**

In Python, the **garbage collector** is a mechanism that automatically frees memory used by objects that are no longer needed. For example:

- When a variable is no longer referenced in your code, the garbage collector reclaims the memory for reuse.
- This helps prevent memory leaks and optimizes performance.

Think of your program as a room filled with objects:
- When you’re done using an object, you toss it in a bin.
- Python has a "cleaner" (the garbage collector) that empties the bin when it gets full.

---

### Async Comprehensions and Asynchronous Generators

**Async comprehensions** and **asynchronous generators** are tools in Python for handling data or tasks asynchronously. Here’s a simple introduction:

---

**What is an asynchronous task?**

An asynchronous task runs in the background or in parallel, without blocking the rest of the program. Examples include:
- Downloading data while allowing the user to interact with the app.
- Handling multiple web requests independently (like in a web server).

In Python, this is done using the **async** and **await** keywords.

---

**Async Comprehensions**

Async comprehensions are a **concise way to create a list, set, or dictionary** from an asynchronous data source.

**Example:**

```python
# Create a list with asynchronously fetched data
data = [await fetch_data(url) async for url in urls]
```

- **async for**: Asynchronous loop to iterate over data.
- **await**: Waits for each operation to complete before proceeding.

---

**Asynchronous Generators**

Asynchronous generators produce **data over time**, pausing between each generated item.

**Example:**

```python
async def generate_numbers():
    for i in range(5):
        await asyncio.sleep(1)  # Wait 1 second between each number
        yield i
```

- **yield**: Returns one item at a time (like a standard generator).
- **await**: Waits for an asynchronous operation (e.g., a delay).

**Usage:**

```python
async for number in generate_numbers():
    print(number)
```

This loop prints each number after a 1-second pause.

---

**Sync vs. Async**

| **Synchronous**                | **Asynchronous**               |
|--------------------------------|---------------------------------|
| One task finishes before starting the next. | Multiple tasks can run simultaneously. |
| Slow for blocking tasks.       | Efficient for slow operations like network requests. |
| Easy to understand.            | More complex, but more performant. |

---

**Practical Summary:**

- **Async comprehensions** help collect data **quickly** and **cleanly** from asynchronous sources.
- **Asynchronous generators** produce data **progressively** while allowing other operations to run in parallel.

With these tools, your code can efficiently handle time-consuming tasks (e.g., downloads, network requests) without blocking the rest of the program.


## Async Comprehension

### 1. Reminder: Comprehensions in Python (Synchronous)
In Python, list, dictionary, and set comprehensions are commonly used for writing loops concisely. For example:  

```python
# List of squares of even numbers
squares = [x**2 for x in range(10) if x % 2 == 0]
print(squares)  # [0, 4, 16, 36, 64]
```

---

### 2. The Challenge with Asynchronous Code
When working with asynchronous tasks or iterators, you need to use `async for` and sometimes `await`. This often makes the code longer and harder to read.  

Example without asynchronous comprehensions:  

```python
result = []
async for i in aiter():  # Iterate over an asynchronous iterator
    if i % 2:           # Filter odd numbers
        result.append(i)  # Append to the list
```

While functional, this code can be verbose, especially in more complex scenarios.

---

### 3. The Solution: Asynchronous Comprehensions
With asynchronous comprehensions, Python lets you write the same logic in a single line, significantly improving readability:  

```python
result = [i async for i in aiter() if i % 2]
```

- **`async for`**: Indicates that the iteration is asynchronous.  
- **`if i % 2`**: Filters the values directly within the comprehension.  

This works similarly to synchronous comprehensions but explicitly supports asynchronous features like `async for` and `await`.

---

### 4. Support for `await` Expressions
Python also extends this syntax to allow `await` expressions directly within comprehensions. For example:  

```python
result = [await fun() for fun in funcs]
```

Here:  
- `funcs` is a list of asynchronous functions.  
- `await fun()` calls each function and waits for its result before adding it to the `result` list.  

This is particularly useful for gathering results from multiple asynchronous calls into a list, dictionary, or set.

---

### 5. Advantages
- **Readability**: Reduces syntactic complexity.  
- **Conciseness**: The code is shorter and easier to maintain.  
- **Power**: The same principles of synchronous comprehensions are extended to asynchronous contexts.

---

### 6. Combined Example:
Suppose you want to collect even results from asynchronous tasks:  

```python
result = [await task for task in tasks if await task % 2 == 0]
```

This combines:  
- An asynchronous loop,  
- Conditional filtering (`if`),  
- Asynchronous calls with `await`.

---

In summary, asynchronous comprehensions extend a powerful Python feature (comprehensions) to the asynchronous paradigm, making code cleaner and more intuitive. This is particularly useful for applications like stream processing or handling network calls.  

## Asynchronous Generators

**Introduction**
In Python 3.5, PEP 492 introduced the `async` and `await` syntax, enabling native coroutine support. Building upon this, Python now supports **asynchronous generators**, extending the power of asynchronous programming to enable efficient and elegant asynchronous data production.

Asynchronous generators combine the benefits of Python's generator functions (introduced in PEP 255) with asynchronous iteration protocols, offering a powerful tool for handling asynchronous tasks that produce sequences of data.

---

### Goals and Benefits of Asynchronous Generators

**Why Use Asynchronous Generators?**
1. **Simplified Asynchronous Data Production**: Writing asynchronous data producers previously required defining classes implementing `__aiter__` and `__anext__`. Asynchronous generators allow this functionality with much simpler syntax.
2. **Improved Performance**: Benchmarks show that asynchronous generators are approximately twice as fast as equivalent asynchronous iterators implemented manually.
3. **Cleaner and More Readable Code**: Asynchronous generators reduce boilerplate, making code easier to understand and maintain.

### Comparison: Traditional vs. Asynchronous Generator

Using a class to create an asynchronous iterator:

```python
class Ticker:
    """Yield numbers from 0 to `to` every `delay` seconds."""
    
    def __init__(self, delay, to):
        self.delay = delay
        self.i = 0
        self.to = to

    def __aiter__(self):
        return self

    async def __anext__(self):
        if self.i >= self.to:
            raise StopAsyncIteration
        value = self.i
        self.i += 1
        await asyncio.sleep(self.delay)
        return value
```

The same functionality with an asynchronous generator:

```python
async def ticker(delay, to):
    """Yield numbers from 0 to `to` every `delay` seconds."""
    for i in range(to):
        yield i
        await asyncio.sleep(delay)
```

---

### Specification

**Key Concepts**

1. **Asynchronous Generators**: Defined using `async def` and containing `yield` expressions. These functions return an **asynchronous generator object**.
2. **Asynchronous Iteration Protocol**: Asynchronous generators implement `__aiter__()` and `__anext__()`, allowing their use in `async for` loops.

**Syntax**

- Synchronous generators:
  ```python
  def sync_gen():
      yield 1
      yield 2
  ```

- Asynchronous generators:
  ```python
  async def async_gen():
      yield 1
      await asyncio.sleep(1)
      yield 2
  ```

**Important Restrictions**
- A `return` statement in an asynchronous generator cannot return a non-empty value.
- Using `yield` inside a `finally` block is prohibited and raises a `RuntimeError`.

---

### Usage Examples

#### Basic Asynchronous Generator

```python
async def simple_generator():
    yield 1
    await asyncio.sleep(1)
    yield 2

generator = simple_genenerator()

async for value in generator:
    print(value)

# Output: 1 2
```

**Breakdown:**

1. **Definition of the asynchronous generator**:
   - The `async def` keyword defines an asynchronous function.
   - Inside `simple_generator`, `yield` produces values one by one, making this function an asynchronous generator.
   - The `await asyncio.sleep(1)` suspends execution for 1 second asynchronously before the second `yield`.

2. **Using the asynchronous generator**:
   - `generator = simple_generator()` creates an asynchronous generator object.

3. **`async for` loop**:
   - The `async for` loop is used to iterate over the values produced by an asynchronous generator.
   - It handles the asynchronous nature of the generator, waiting for each yielded value if necessary.

4. **Execution flow**:
   - The first `yield 1` produces `1` immediately.
   - The `await asyncio.sleep(1)` pauses execution for 1 second.
   - The second `yield 2` produces `2` after the pause.

5. **Output**:
   - The `print(value)` statement inside the `async for` loop outputs:
     - `1` (immediately).
     - `2` (after a 1-second pause).

---

#### Why is `async for` needed?
- `async for` ensures that asynchronous code (like `await` in the generator) is handled properly.
- Without `async for`, you would need to manually call `.anext()` on the generator and handle the asynchronous behavior yourself.


#### Manually Iterating

```python
generator = simple_generator()
assert await generator.__anext__() == 1
assert await generator.__anext__() == 2

await generator.__anext__()  # Raises StopAsyncIteration
```

---

### Advanced Features

#### Finalization
Asynchronous generators support `try..finally` and `async with` blocks. To ensure proper cleanup, Python provides the `aclose()` method, which asynchronously closes the generator:

```python
async def gen_with_cleanup():
    try:
        yield 1
    finally:
        await asyncio.sleep(1)
        print("Cleanup complete")

generator = gen_with_cleanup()
await generator.__anext__()
await generator.aclose()
```

#### Asynchronous Send and Throw
1. **`asend`**: Sends a value into the generator:
   
   ```python
   async def generator():
       val = yield 42
       print(f"Received: {val}")

   gen = generator()
   await gen.asend(None)   # Outputs 42
   await gen.asend("hello")  # Prints "Received: hello"
   ```

2. **`athrow`**: Throws an exception into the generator:
   ```python
   async def generator():
       try:
           yield "Start"
       except Exception as e:
           yield f"Caught {e}"

   gen = generator()
   await gen.asend(None)  # Outputs "Start"
   await gen.athrow(ValueError("Oops"))  # Outputs "Caught Oops"
   ```

---

### Integration with `asyncio`

#### Automatic Finalization
Python provides hooks to manage asynchronous generator lifecycle:
- `sys.set_asyncgen_hooks()`
- `sys.get_asyncgen_hooks()`

Example with `asyncio`:

```python
import asyncio
import sys

class CustomLoop(asyncio.BaseEventLoop):
    def _finalize_asyncgen(self, generator):
        self.create_task(generator.aclose())

    def run_forever(self):
        sys.set_asyncgen_hooks(finalizer=self._finalize_asyncgen)
        super().run_forever()
```

#### Shutting Down Generators
**Asynchronous** event loops like `asyncio` can safely finalize generators before exiting:

```python
loop = asyncio.get_event_loop()

try:
    loop.run_forever()
finally:
    loop.run_until_complete(loop.shutdown_asyncgens())
    loop.close()
```

---

### Type Hint in Asynchronous Generators

**Type hinting** in an asynchronous generator specifies:
1. **The type of values produced** by the generator.
2. **The type of values received** using `await` or `yield`.
3. **The type of the final return value**, if applicable (introduced in Python 3.3+).

For asynchronous generators, the **`AsyncGenerator`** class from the `typing` module is used.

#### Syntax:
```python
from typing import AsyncGenerator

async def my_async_gen() -> AsyncGenerator[int, None]:
    for i in range(5):
        yield i
```

#### Explanation:
- **`AsyncGenerator[int, None]`**:
  - The first argument (`int`) specifies the type of values produced (`yield`).
  - The second argument (`None`) specifies the type of values sent to the generator (via `.asend()`).
  - Use `None` as the second argument if the generator does not receive any values.

---

#### Example with values received:
```python
from typing import AsyncGenerator

async def process_data() -> AsyncGenerator[str, int]:
    value = 0
    while value < 5:
        value = (yield f"Processing {value}")  # Receives an int via .asend()
```

- **`AsyncGenerator[str, int]`**:
  - Produces strings (`yield` returns a `str`).
  - Receives integers (`asend` expects an `int`).

---

**In summary**, type hinting for asynchronous generators helps clarify:
1. What the generator **produces** (`yield`).
2. What the generator **receives** (via `asend`).
3. Its **final return type**, if any.

---

### Summary

**Asynchronous generators** streamline the creation of asynchronous data producers by:
- **Merging** the benefits of generators and async syntax.
- Improving code readability and performance.
- Ensuring robust cleanup and lifecycle management.

By leveraging these tools, developers can write more elegant and efficient asynchronous code, extending Python's capabilities for modern applications.
