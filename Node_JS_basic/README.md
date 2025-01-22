# Introduction to Node.js

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine.

### Key Features

#### 1. Asynchronous and Event-Driven
- Uses non-blocking, asynchronous architecture
- Handles multiple concurrent connections efficiently
- Employs an event-driven programming model

#### 2. Single-Threaded but Highly Scalable
- Runs in a single process without creating new threads for each request
- Utilizes asynchronous I/O primitives to prevent code blocking
- Can handle thousands of concurrent connections on a single server

#### 3. Performance
- Built on Chrome's V8 JavaScript engine, known for high performance
- Compiles JavaScript directly to machine code for fast execution

#### 4. Rich Ecosystem
- Extensive library of modules available through npm (Node Package Manager)
- Provides solutions for various development needs

#### 5. Cross-Platform Compatibility
- Runs on various platforms (Windows, macOS, Linux)

#### 6. JavaScript Everywhere
- Allows frontend developers to write server-side code using JavaScript
- Enables full-stack development with a single language

#### 7. ECMAScript Compatibility
- Supports latest ECMAScript standards
- Allows developers to use cutting-edge JavaScript features

### Example: Simple Web Server

```js
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

This example demonstrates Node.js's ability to create a simple web server with just a few lines of code, showcasing its efficiency in handling HTTP requests and responses.


## Node.js Process Object

The `process` object in Node.js is a global object that provides information about, and control over, the current Node.js process. It's an instance of EventEmitter and can be accessed from anywhere in a Node.js application.

### Key Features

#### 1. Exit Codes
Node.js uses exit codes to indicate the status of process termination. Some important codes include:
- 0: Successful termination
- 1: Uncaught Fatal Exception
- 9: Invalid Argument

#### 2. Events
The `process` object emits several events:

##### 'exit'
Emitted when the process is about to exit. Example:
```js
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
```

##### 'uncaughtException'
Emitted when an exception bubbles up to the event loop. Example:
```js
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});
```

#### 3. Standard I/O Streams
- `process.stdout`: Writable stream to stdout
- `process.stderr`: Writable stream to stderr
- `process.stdin`: Readable stream for stdin

#### 4. Process Information
- `process.argv`: Array containing command-line arguments
- `process.env`: Object containing the user environment
- `process.version`: Node.js version
- `process.versions`: Versions of Node.js and its dependencies

#### 5. Process Control
- `process.exit([code])`: Ends the process with the specified code
- `process.abort()`: Causes Node.js to emit an abort and generate a core file

#### 6. Directory Operations
- `process.chdir(directory)`: Changes the current working directory
- `process.cwd()`: Returns the current working directory

### Platform-Specific Features (POSIX only)
- `process.getgid()`, `process.setgid(id)`: Get/set group identity
- `process.getuid()`, `process.setuid(id)`: Get/set user identity
- `process.getgroups()`, `process.setgroups(groups)`: Get/set supplementary group IDs

Remember that some features are platform-specific and may not be available on all systems where Node.js runs[1].

## Node.js Child Process Module

The `child_process` module provides functionality to spawn subprocesses, allowing execution of system commands and scripts from within a Node.js application.

### Key Features

#### 1. Asynchronous Process Creation
- `spawn()`: Launches a command in a new process
- `exec()`: Runs a command in a shell and buffers the output
- `execFile()`: Similar to `exec()`, but doesn't use a shell by default
- `fork()`: Spawns a new Node.js process

#### 2. Synchronous Alternatives
- `spawnSync()`
- `execSync()`
- `execFileSync()`

#### 3. ChildProcess Objects
- Returned by asynchronous methods
- Implement Node.js `EventEmitter` API
- Allow parent process to register event listeners

#### 4. Platform-Specific Considerations
- On Windows, special handling is required for `.bat` and `.cmd` files

#### 5. Security Warning
- Never pass unsanitized user input to these functions to prevent arbitrary command execution

#### 6. Options for Process Control
- Working directory
- Environment variables
- Input/output encoding
- Timeout
- Maximum buffer size

#### 7. Error Handling
- Callback function receives `(error, stdout, stderr)` arguments
- Non-zero exit codes typically indicate errors

#### 8. Promise-Based Usage
- Available through `util.promisify()`

### Example: Using exec()

```js
const { exec } = require('node:child_process');
exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

This module is crucial for tasks involving system interaction or running external programs within Node.js applications.
