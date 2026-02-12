# 🌐 JavaScript Master Notes

## (Basic → Intermediate → Advanced → Expert → Browser → Node → Performance → Architect Level)

JavaScript is one of the MOST important programming languages in the world.

Used in:

* Web development (Frontend)
* Backend (Node.js)
* Mobile apps
* Desktop apps
* Game development
* Full-stack systems

This guide covers everything from:
**Absolute Beginner → Deep Internals → Production → Architect-Level**

---

# 📌 1. What is JavaScript?

JavaScript is a:

* High-level: Easy for humans to read and write because it handles memory and system details automatically.
* Interpreted: Runs line-by-line through an engine without needing a separate compilation step.
* Dynamically typed: You don’t need to declare data types; variables can change type at runtime.
* Single-threaded: Executes one task at a time using a single main call stack.
* Event-driven language: Code runs in response to events like clicks, requests, or timers.

Runs in:

* Browsers
* Servers (Node.js): Runs on the server using Node.js to build backend services and APIs.

---

# 📌 2. JavaScript vs ECMAScript

ECMAScript: A standardized specification that defines the rules, syntax, and features a scripting language should follow. (European Computer Manufacturers Association; now called Ecma International)

JavaScript:
Implementation of ECMAScript.

---

# 📌 3. Where JavaScript Runs

Browser:

* Chrome
* Firefox
* Edge

Server:

* Node.js

---

# 📌 4. JavaScript Execution Engine

Examples:

* V8 (Chrome, Node.js): A JavaScript engine by Google that converts JS code into fast machine code and runs it.
* SpiderMonkey (Firefox): Mozilla’s JavaScript engine that reads, compiles, and executes JavaScript in Firefox.

Engine responsibilities:

* Parse code: Reads the JavaScript and checks syntax to understand its structure.
* Compile: Converts the parsed code into optimized machine-level instructions.
* Execute: Runs the compiled code to perform the actual tasks.

---

# 📌 5. Basic Syntax

```
console.log("Hello World");
```

---

# 📌 6. Variables

```
var a = 10;
let b = 20;
const c = 30;
```

### Difference

var:

* Function scoped
* Can redeclare

let:

* Block scoped
* Can update

const:

* Block scoped
* Cannot reassign

Block scope: A variable exists only inside the { } where it is created (like inside an if, for, or any code block).

Function scope: A variable exists anywhere inside the entire function where it is declared, even outside inner { } blocks.

---

# 📌 7. Data Types

### Primitive Types

* string
* number
* boolean
* null
* undefined
* symbol
* bigint

### Reference Types

* object
* array
* function

---

# 📌 8. Dynamic Typing

```
let x = 10;
x = "hello";
```

Type can change anytime.

---

# 📌 9. Type Conversion

```
Number("10")
String(10)
Boolean(1)
```

---

# 📌 10. Operators

Arithmetic:

+, *, /, %

Comparison:
== === != !== > <

Logical:
&& || !

---

# 📌 11. == vs ===

== → loose comparison (Compares values after automatically converting their types if needed.)

=== → strict comparison (recommended, Compares both value and type without any type conversion.)

---

# 📌 12. Control Statements

if / else, switch, for, while, do-while

---

# 📌 13. Functions

```
function add(a, b) {
  return a + b;
}
```

---

# 📌 14. Function Types

- Function declaration
- Function expression
- Arrow function

```
const add = (a, b) => a + b;
```
## Function Declaration
```js
function greet() {
  console.log("Hello");
}
greet();
```
## Function Expression
```js
const greet = function() {
  console.log("Hello");
};
greet();
```
## Arrow Function
```js
const greet = () => {
  console.log("Hello");
};
greet();
```
## Anonymous Function (used as callback)
```js
setTimeout(function() {
  console.log("Hi");
}, 1000);
```
## IIFE (Immediately Invoked Function Expression)
```js
(function() {
  console.log("Runs immediately");
})();
```
## Callback Function
```js
function processUser(name, callback) {
  callback(name);
}

processUser("John", function(n) {
  console.log("Hello " + n);
});
```
## Constructor Function
```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("John");
console.log(p1.name);
```
---

# 📌 15. Arrow Function Features

* Short syntax
* No own "this"

---

# 📌 16. Objects

```
const user = {
  name: "John",
  age: 25
};
```

Access:

```
user.name
user["name"]
```

---

# 📌 17. Arrays

```
const arr = [1, 2, 3];
```

Methods: push(), pop(), map(), filter(), reduce()

---

# 📌 18. Loops

```
for (let i = 0; i < 5; i++) {}
```

```
for (let item of arr) {}
```

---

# 📌 19. DOM (Browser Concept)

DOM = Document Object Model(A tree-like representation of a web page that JavaScript can access and modify.)

Allows JS to:

* Change HTML
* Handle events

---

# 📌 20. Event Handling

```
button.addEventListener("click", () => {});
```

---

# 📌 21. Scope

- Global scope
- Function scope
- Block scope

---

# 📌 22. Hoisting

Variables & functions moved to top. JavaScript moves variable and function declarations to the top of their scope before execution.

```
console.log(x);
var x = 5;
```

---

# 📌 23. Closures (VERY IMPORTANT)

Function remembers parent scope.

```
function outer() {
  let x = 10;
  return function() {
    console.log(x);
  };
}
```

---

# 📌 24. this Keyword

Refers to:

Current object context.

Changes based on call type.

---

# 📌 25. Prototypes

JavaScript uses: Prototype-based inheritance.

- Prototypes: JavaScript objects can inherit properties and methods from other objects using a prototype chain.
- Prototype-based inheritance: Instead of class-only inheritance (like Java), JavaScript links objects to other objects; if a property/method isn’t found on one object, it looks up in its prototype.
```js
// Parent object
const person = {
  greet: function () {
    console.log("Hello!");
  }
};

// Create a new object that uses person as its prototype
const student = Object.create(person);

student.name = "Siri";

// student doesn't have greet(), so JS looks in its prototype (person)
student.greet();  // Hello!
```

---

# 📌 26. Classes (ES6)

```
class Car {
  constructor(name) {
    this.name = name;
  }
}
```

---

# 📌 27. Inheritance

```
class A {}
class B extends A {}
```

---

# 📌 28. Modules

Export:

```
export default function() {}
```

Import:

```
import fn from "./file.js";
```

---

# 📌 29. Asynchronous JavaScript (CRITICAL)

Asynchronous JavaScript: Lets JavaScript handle time-taking tasks (API calls, timers, file reads) without stopping the main thread.

Single-threaded: JavaScript runs one task at a time on a single call stack.

Uses: Event loop, , Callbacks, Promises, Async/await
---

# 📌 30. Callback

Function passed as argument. Functions passed into other functions to run later when a task finishes.

```js
setTimeout(() => console.log("Done"), 1000);
```

---

# 📌 31. Promise

Represents future result.

States:

* pending
* resolved
* rejected

```js
fetch(url).then(res => console.log(res));
```

---

# 📌 32. Async/Await

Cleaner async code.Cleaner way to write promise-based code that looks synchronous.

```js
async function load() {
  const res = await fetch(url);
  console.log(res);
}
```

---

# 📌 33. Event Loop (VERY IMPORTANT)

 Manages execution by moving completed async tasks from the queue to the call stack when it’s free.
Handles:

* Async tasks
* Callbacks

Queues:

* Call stack
* Microtask queue
* Task queue

---

# 📌 34. Microtask vs Task Queue

Microtask Queue (higher priority): Used for Promise callbacks (.then, catch, finally) and runs immediately after the current code finishes, before moving to the task queue.

Task Queue (lower priority): Used for setTimeout, setInterval, DOM events, etc., and runs only after all microtasks are completed.

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```
## Output
```js
Start
End
Promise   // Microtask runs first
Timeout   // Task runs after
```

---

# 📌 35. Error Handling

```js
try {
  let x = 10 / 0;
  console.log(y); // y is not defined → error
} catch (e) {
  console.log("Error occurred:", e.message);
} finally {
  console.log("This always runs");
}

```

---

# 📌 36. JSON Handling

Used to convert between JSON strings and JavaScript objects.
JSON.parse() – Converts a JSON string into a JavaScript object.
JSON.stringify() – Converts a JavaScript object into a JSON string.
```js
const str = '{"name":"Siri","age":24}';
const obj = JSON.parse(str);
console.log(obj.name); // Siri

const obj = { name: "Siri", age: 24 };
const str = JSON.stringify(obj);
console.log(str); // {"name":"Siri","age":24}

```

---

# 📌 37. Browser APIs

Browser APIs: Built-in features provided by the browser that JavaScript can use to interact with web data and storage.
- Fetch API: Used to send HTTP requests and get data from servers (like calling an API).
- LocalStorage: Stores data in the browser with no expiry; remains even after closing the tab/browser.
- SessionStorage: Stores data only for the current tab/session; cleared when the tab is closed.

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));

localStorage.setItem("name", "Siri");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("user", "John");
console.log(sessionStorage.getItem("user"));
```

---

# 📌 38. Fetch API

```
fetch(url)
  .then(res => res.json())
```
fetch(url) → Sends an HTTP request to the given URL.

.then(res => res.json()) → Converts the response into JSON format.

.then(data => ...) → Uses the actual data returned from the server.

---

# 📌 39. Node.js Basics

Node.js Basics: Node.js lets JavaScript run outside the browser, mainly to build backend/server applications.

---

# 📌 40. Node Core Modules

Node Core Modules: Built-in modules in Node.js that help perform common system and server tasks without installing anything extra.
- fs (File System): Used to read, write, update, and delete files.
- http: Used to create web servers and handle HTTP requests/responses.
- path: Helps work with file and folder paths (join, resolve, get file names).
- os: Provides information about the operating system (CPU, memory, platform).

```js
const fs = require("fs");

fs.writeFileSync("test.txt", "Hello Node");
const data = fs.readFileSync("test.txt", "utf8");
console.log(data);

const http = require("http");

http.createServer((req, res) => {
  res.write("Hello from server");
  res.end();
}).listen(3000);

const path = require("path");

const fullPath = path.join(__dirname, "test.txt");
console.log(fullPath);

const os = require("os");

console.log(os.platform());
console.log(os.totalmem());
```

---

# 📌 41. NPM

NPM (Node Package Manager): A tool that comes with Node.js to install and manage external libraries (packages) for your project.

Install a library:
```
npm install express
```

---

# 📌 42. Express.js

Backend framework.

Used for:

* APIs
* Servers

---

# 📌 43. REST API in JS

Used with:

* Express
* Fetch

---

# 📌 44. JavaScript Memory Model

Stack:
Primitive values

Heap:
Objects

---

# 📌 45. Garbage Collection

Automatic memory cleanup.

---

# 📌 46. Shallow vs Deep Copy

Shallow:
Copies reference

Deep:
Copies values

---

# 📌 47. Destructuring

```
const {name} = user;
```

---

# 📌 48. Spread Operator

```
const newArr = [...arr];
```

---

# 📌 49. Rest Operator

```
function sum(...nums) {}
```

---

# 📌 50. Template Literals

```
`Hello ${name}`
```

---

# 📌 51. Map & Set

Map:
Key-value store

Set:
Unique values

---

# 📌 52. WeakMap / WeakSet

Memory-efficient structures.

---

# 📌 53. Functional Programming

map()
filter()
reduce()

---

# 📌 54. Debouncing & Throttling

Optimize:

Frequent events.

---

# 📌 55. Security Topics

XSS
CSRF
Injection attacks

---

# 📌 56. Performance Optimization

* Avoid memory leaks
* Minimize DOM updates
* Use lazy loading

---

# 📌 57. JavaScript Frameworks

React
Angular
Vue

---

# 📌 58. TypeScript (Important Modern JS)

Adds:

* Types
* Compile-time safety

---

# 📌 59. Browser Storage

LocalStorage
SessionStorage
Cookies

---

# 📌 60. WebSockets

Real-time communication.

---

# 📌 61. Service Workers

Enable:

Offline apps.

---

# 📌 62. Testing Tools

Jest
Mocha

---

# 📌 63. Build Tools

Webpack
Vite
Babel

---

# 📌 64. JavaScript Mastery Definition

You master JavaScript when you understand:

* Closures
* Event loop
* Async programming
* Prototypes
* Memory model

---

# 📌 65. Final Truth

JavaScript is:

* The language of the web
* Full-stack capable
* Extremely powerful
* Deeply asynchronous

It powers most modern applications on the internet.

# 🌐 JavaScript — Final Deep Layer

## (Hidden Internals, Engine Behavior, Edge Cases, Performance, Production, Architect-Level)

You already covered:

* Syntax
* Functions
* Closures
* Async/await
* Promises
* DOM
* Node.js basics
* Memory model
* Prototypes
* Classes
* Modules

Now this section contains the **remaining deep + expert-level JavaScript knowledge** — the things that:

* Senior frontend/backend JS engineers know
* V8 engine behavior depends on
* Performance teams optimize
* Interviewers test for deep understanding

This completes JavaScript from:
**Basic → Advanced → Engine → Performance → Architect level**

---

# 📌 66. Execution Context (VERY IMPORTANT CORE CONCEPT)

Every JS code runs inside:

Execution Context.

Types:

* Global Execution Context
* Function Execution Context

Each context has:

* Variable environment
* Scope chain
* "this" binding

---

# 📌 67. Call Stack (Engine Behavior)

JavaScript is:

Single-threaded.

Uses a call stack:

```
main()
  -> func1()
     -> func2()
```

LIFO execution.

---

# 📌 68. Memory Creation Phase vs Execution Phase

When JS runs:

Phase 1:
Memory allocated.

Phase 2:
Code executed.

Example:

```
console.log(a);
var a = 10;
```

Due to hoisting:

a exists but is undefined.

---

# 📌 69. Temporal Dead Zone (TDZ)

For let & const:

Variable exists but cannot be accessed before declaration.

```
console.log(a);
let a = 10; // Error
```

---

# 📌 70. Hoisting Deep Reality

var:
Hoisted with undefined.

let/const:
Hoisted but in TDZ.

functions:
Fully hoisted.

---

# 📌 71. Scope Chain (VERY IMPORTANT)

If variable not found:

JS searches:

Current scope → Parent → Global

---

# 📌 72. Lexical Scope

Scope defined by:

Where function is written.

Not where it is called.

---

# 📌 73. Closures Deep Internals

Closure stores:

Reference to outer variables.

Not value.

---

# 📌 74. Garbage Collection Internals

V8 uses:

Mark-and-sweep algorithm.

Removes:

Unreachable objects.

---

# 📌 75. Memory Leaks in JavaScript

Common causes:

* Unremoved event listeners
* Global variables
* Closures holding references

---

# 📌 76. Event Loop Deep Internals

JS runtime has:

Call Stack
Web APIs
Callback Queue
Microtask Queue

Flow:

Stack empty → Execute microtasks → Execute tasks.

---

# 📌 77. Microtask Priority Rule

Execution order:

1. Current stack
2. Promises (microtasks)
3. setTimeout (tasks)

---

# 📌 78. setTimeout Reality

```
setTimeout(fn, 0)
```

Does NOT mean immediate.

It waits until:

Call stack is empty.

---

# 📌 79. Promise Internals

Promise callbacks go to:

Microtask queue.

That’s why they run before setTimeout.

---

# 📌 80. Async/Await Internals

async function returns:

A Promise automatically.

await pauses:

Inside function only.

---

# 📌 81. this Binding Rules (CRITICAL)

Depends on call site.

Cases:

* Global → window
* Method call → object
* Arrow function → lexical this
* call/apply/bind → manual control

---

# 📌 82. call(), apply(), bind()

Used to control:

this value.

```
fn.call(obj)
fn.apply(obj)
const newFn = fn.bind(obj)
```

---

# 📌 83. Prototype Chain Deep Reality

When property not found:

JS checks:

Object → prototype → parent prototype → Object.prototype

---

# 📌 84. Object.create()

Creates object with custom prototype.

---

# 📌 85. Function is an Object

Functions have:

Properties
Methods
Prototype

---

# 📌 86. Constructor Functions (Old Style)

```
function Car(name) {
  this.name = name;
}
```

---

# 📌 87. Class vs Prototype Reality

Class syntax:

Just syntactic sugar over prototypes.

---

# 📌 88. Shallow vs Deep Clone Problems

Shallow clone:

Copies reference.

Deep clone:

Copies nested objects.

---

# 📌 89. Object Freezing

```
Object.freeze(obj)
```

Makes object immutable.

---

# 📌 90. Object Sealing

```
Object.seal(obj)
```

Cannot add/remove properties.

---

# 📌 91. Descriptors

Control property behavior:

Writable
Enumerable
Configurable

---

# 📌 92. Strict Mode

```
"use strict";
```

Prevents:

* Undeclared variables
* Silent errors

---

# 📌 93. Debouncing vs Throttling (Performance)

Debounce:
Run after delay.

Throttle:
Limit execution rate.

---

# 📌 94. Virtual DOM Concept

Used by:

React.

Improves performance by:

Minimizing real DOM updates.

---

# 📌 95. JavaScript Engine Optimization

V8 optimizes:

* Hot functions
* Inline caching
* Hidden classes

---

# 📌 96. Hidden Classes (V8 Internal Concept)

Objects with same shape:

Optimized by engine.

Changing structure often:
Slows performance.

---

# 📌 97. Inline Caching

Speeds up:

Repeated property access.

---

# 📌 98. Tail Call Optimization (Conceptual)

Prevents stack overflow in recursion.

Not widely supported yet.

---

# 📌 99. Event Delegation

Attach one listener to parent:

Handle children events.

Improves performance.

---

# 📌 100. Security Risks in JavaScript

XSS
CSRF
Prototype pollution

---

# 📌 101. Module Systems

CommonJS:
Node.js

ES Modules:
Modern JS

---

# 📌 102. Tree Shaking

Removes unused code during build.

---

# 📌 103. Transpilers

Babel converts:

Modern JS → Older JS.

---

# 📌 104. Polyfills

Add support for:

Old browsers.

---

# 📌 105. Web Workers

Run JS in background threads.

Used for:

Heavy computation.

---

# 📌 106. Service Worker Deep Use

Enables:

* Offline apps
* Push notifications
* Caching

---

# 📌 107. JavaScript Performance Killers

* Memory leaks
* Too many DOM updates
* Blocking loops
* Unoptimized async code

---

# 📌 108. Node.js Event Loop Differences

Node loop has phases:

Timers
I/O callbacks
Poll
Check

---

# 📌 109. Streams in Node.js

Used for:

Large file handling.

---

# 📌 110. Clustering in Node.js

Use multiple CPU cores.

---

# 📌 111. Worker Threads (Node)

True multithreading support.

---

# 📌 112. JavaScript Mastery Definition

You master JavaScript when you deeply understand:

* Closures
* Event loop
* Prototype chain
* Async execution
* Memory model
* Engine optimizations

---

# 📌 113. Final Final Truth

JavaScript is not just a scripting language.

It is:

* An event-driven runtime
* A concurrent execution model
* A full-stack ecosystem
* A language with deep engine-level behavior
