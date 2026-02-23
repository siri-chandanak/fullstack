# 🌐 JavaScript Master Notes

JavaScript is a high-level, dynamic, prototype-based, event-driven language used across browsers, servers, and modern applications.


Used in:

* Web development (Frontend)
* Backend (Node.js)
* Mobile apps
* Desktop apps
* Game development
* Full-stack systems

---

# 📌 What is JavaScript?

JavaScript is a:

* High-level: Easy for humans to read and write because it handles memory and system details automatically.
* Interpreted: Runs line-by-line through an engine without needing a separate compilation step.
* Dynamically typed: You don’t need to declare data types; variables can change type at runtime.
* Single-threaded: Executes one task at a time using a single main call stack.
* Event-driven language: Code runs in response to events like clicks, requests, or timers.

Runs in:

* Browsers
* Servers (Node.js): Runs on the server using Node.js to build backend services and APIs.
* Deno: JavaScript & TypeScript runtime created by Ryan Dahl (the same person who created Node.js), Modern, improved version of Node.js
* Edge runtimes: Modern, improved version of Node.js, 'User → Nearby Edge Location → Response'

---

# 📌 JavaScript vs ECMAScript

ECMAScript: A standardized specification that defines the rules, syntax, and features a scripting language should follow. (European Computer Manufacturers Association; now called Ecma International)

JavaScript:
Implementation of ECMAScript.

---

# 📌 Where JavaScript Runs

Browser:

* Chrome
* Firefox
* Edge

Server:

* Node.js

---

# 📌 JavaScript Execution Engine

Every JS code runs inside an **Execution Context**.

Types:
- Global Execution Context
- Function Execution Context
- Eval Execution Context

Each context contains:
- Variable Environment
- Scope Chain
- `this` binding

JS runs in two phases:

1. Memory Allocation Phase
2. Execution Phase

This explains hoisting (JavaScript moves declarations to the top of their scope before execution) behavior.

Examples:

* V8 (Chrome, Node.js): A JavaScript engine by Google that converts JS code into fast machine code and runs it.
* SpiderMonkey (Firefox): Mozilla’s JavaScript engine that reads, compiles, and executes JavaScript in Firefox.

Engine responsibilities:

* Parse code: Reads the JavaScript and checks syntax to understand its structure.
* Compile: Converts the parsed code into optimized machine-level instructions.
* Execute: Runs the compiled code to perform the actual tasks.

JavaScript uses a **LIFO call stack** to manage execution.

Single-threaded = One stack.

## JavaScript Hoisting Summary

| Type | Hoisted? | Can Use Before Declaration? |
|------|----------|----------------------------|
| `var` | Yes | Yes (`undefined`) |
| `let` | Yes | ❌ No (Temporal Dead Zone error) |
| `const` | Yes | ❌ No (Temporal Dead Zone error) |
| Function Declaration | Yes | ✅ Yes |
| Function Expression | No (only `var` part is hoisted) | ❌ No |

---

### Notes

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized.
- Function declarations are fully hoisted (name + body).
- Function expressions behave like variables; only the variable declaration is hoisted, not the function assignment.

## Closures (Core Concept)

A closure is:

> A function that remembers variables from its lexical parent scope even after parent finishes execution.

Closures store references, not values.

Used in:
- Data privacy
- State management
- Memoization
- Event handlers
```js
function createUser() {
  let password = "secret123";

  return {
    checkPassword(input) {
      return input === password;
    }
  };
}

const user = createUser();

console.log(user.checkPassword("secret123")); // true
console.log(user.password); // undefined
```


---

# Basic Syntax

```
console.log("Hello World");
```

---

# Variables

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

# Data Types

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
- Map / Set
- WeakMap / WeakSet

## Stack vs Heap

- Stack → primitives, function calls
- Heap → objects, arrays, functions


---

# 📌 Dynamic Typing

```
let x = 10;
x = "hello";
```

Type can change anytime.

---

# 📌 Type Conversion

```
Number("10")
String(10)
Boolean(1)
```

---

# 📌 Operators

Arithmetic: +, *, /, %

Comparison: ==, ===, !=, !==, >, <

Logical: &&, ||, !

---

# 📌 == vs ===

== → loose comparison (Compares values after automatically converting their types if needed.)

=== → strict comparison (recommended, Compares both value and type without any type conversion.)

---

# 📌 Control Statements

if / else, switch, for, while, do-while

---

# 📌Functions

```
function add(a, b) {
  return a + b;
}
```

---

# 📌 Function Types

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

# 📌 Arrow Function Features

* Short syntax
* No own "this"

---

# 📌 Objects

```js
const user = {
  name: "John",
  age: 25
};
```

Access:

```js
user.name
user["name"]
```

---

# 📌 Arrays

```js
const arr = [1, 2, 3];
```

Methods: push(), pop(), map(), filter(), reduce()

---

# 📌 Loops

```js
for (let i = 0; i < 5; i++) {}
```

```js
for (let item of arr) {}
```

---

# 📌 DOM (Browser Concept)

DOM = Document Object Model(A tree-like representation of a web page that JavaScript can access and modify.)

Allows JS to:

* Change HTML
* Handle events
```js
<!DOCTYPE html>
<html>
<body>

<h2 id="title">Hello</h2>
<button onclick="changeText()">Click Me</button>

<script>
  function changeText() {
    // Change HTML content using DOM
    document.getElementById("title").innerHTML = "Hello Siri!";
  }
</script>

</body>
</html>
```

---

# 📌 Event Handling

```
button.addEventListener("click", () => {});
```

---

# 📌 Scope

- Global scope
- Function scope
- Block scope

---

# 📌 Hoisting

Variables & functions moved to top. JavaScript moves variable and function declarations to the top of their scope before execution.

```
console.log(x);
var x = 5;
```

---

# 📌 Closures (VERY IMPORTANT)

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

# 📌 this Keyword

Refers to:

Current object context.

Changes based on call type.

---

# 📌 Prototypes

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

# 📌 Classes (ES6)

```
class Car {
  constructor(name) {
    this.name = name;
  }
}
```

---

# 📌 Inheritance

```
class A {}
class B extends A {}
```

---

# 📌 Modules

Export:

```
export default function fn() {}
```

Import:

```
import fn from "./file.js";
```

---

# 📌 Asynchronous JavaScript (CRITICAL)

Asynchronous JavaScript: Lets JavaScript handle time-taking tasks (API calls, timers, file reads) without stopping the main thread.

Single-threaded: JavaScript runs one task at a time on a single call stack.

Uses: Event loop, , Callbacks, Promises, Async/await
---

# 📌 Callback

Function passed as argument. Functions passed into other functions to run later when a task finishes.

```js
setTimeout(() => console.log("Done"), 1000);
```

---

# 📌 Promise

Represents future result.

States:

* pending
* resolved
* rejected

```js
fetch(url).then(res => console.log(res));
```

---

# 📌 Async/Await

Cleaner async code.Cleaner way to write promise-based code that looks synchronous.

```js
async function load() {
  const res = await fetch(url);
  console.log(res);
}
```

## 🌟 Promise vs Async/Await — Difference Table

| Feature | Promise (.then / .catch) | async / await |
|----------|---------------------------|----------------|
| Type | Core JavaScript feature | Built on top of Promises (syntactic sugar) |
| Syntax Style | Chain-based | Looks synchronous |
| Readability | Can become hard to read with chaining | Cleaner and easier to understand |
| Error Handling | `.catch()` method | `try / catch` block |
| Return Value | Returns a Promise | Always returns a Promise |
| Internal Mechanism | Uses Microtask Queue | Uses Promises + Microtask Queue |
| Flow Control | Uses chaining | Straight-line, step-by-step flow |
| Sequential Execution | Requires chaining | Simple with `await` |
| Parallel Execution | `Promise.all()` | `Promise.all()` still required |
| Debugging | Slightly harder | Easier to debug |
| Nesting Risk | Can lead to "Promise chaining complexity" | Avoids nesting, cleaner structure |
| Performance | Same performance as async/await | Same performance as Promise |
| Best Use Case | Complex chaining & functional patterns | Sequential async logic & readable code |
| Learning Curve | Slightly lower-level understanding needed | Easier for beginners to read |

---

## 📌 Key Takeaway

- `async/await` does NOT replace Promises.
- It is just cleaner syntax over Promises.
- Both rely on the same event loop and microtask queue.
- Performance difference = none.

---

# 📌 Event Loop (VERY IMPORTANT)

 Manages execution by moving completed async tasks from the queue to the call stack when it’s free.

Handles:
* Async tasks
* Callbacks

Queues:
* Call stack
* Microtask queue
* Task queue
---

# 📌  Microtask vs Task Queue

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

# 📌 Error Handling

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

# 📌 JSON Handling

Used to convert between JSON strings and JavaScript objects.
- JSON.parse() – Converts a JSON string into a JavaScript object.
- JSON.stringify() – Converts a JavaScript object into a JSON string.
```js
const str = `{"name":"Siri","age":24}`;
const obj = JSON.parse(str);
console.log(obj.name); // Siri

const obj = { name: "Siri", age: 24 };
const str = JSON.stringify(obj);
console.log(str); // {"name":"Siri","age":24}

```

---

# 📌 Browser APIs

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

# 📌 Fetch API

```js
fetch(url)
  .then(res => res.json())
```
fetch(url) → Sends an HTTP request to the given URL.

.then(res => res.json()) → Converts the response into JSON format.

.then(data => ...) → Uses the actual data returned from the server.

---

# 📌 39. Node.js Basics

Node.js lets JavaScript run outside the browser, mainly to build backend/server applications.

---

# 📌 40. Node Core Modules

Built-in modules in Node.js that help perform common system and server tasks without installing anything extra.
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

Express.js: A fast, minimal backend framework for Node.js used to build web servers and APIs easily.

Used for:
- APIs: Create REST endpoints to send/receive data.
- Servers: Handle HTTP requests, routing, and responses.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

```

---

# 📌 REST API in JS

REST API in JS: A way to send and receive data between frontend and backend using HTTP methods (GET, POST, PUT, DELETE).

Built using Express (backend):
```js
const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.json([{ name: "Siri" }, { name: "John" }]);
});

app.listen(3000);
```
Consumed using Fetch (frontend):
```js
fetch("http://localhost:3000/api/users")
  .then(res => res.json())
  .then(data => console.log(data));

```
---

# 📌 JavaScript Memory Model

- Stack: Stores primitive values (number, string, boolean, null, undefined) and function call data; it is fast and fixed in size.
- Heap: Stores objects, arrays, and functions; it is larger and used for dynamic memory allocation.

---

# 📌 Garbage Collection

JavaScript automatically frees memory by removing objects and variables that are no longer being used or referenced.

---

# 📌 Shallow vs Deep Copy

Shallow Copy: Creates a new object but copies references of nested objects, so changes in nested data affect both copies.

Deep Copy: Creates a completely independent copy, duplicating all values (including nested objects), so changes don’t affect the original.

---

# 📌 Destructuring
Destructuring: A shortcut to extract values from objects or arrays into variables.
```js
const user = { name: "Siri", age: 24 };

const { name } = user;

console.log(name); // Siri
```
{name} picks the name property from the user object and stores it in a variable called name.

---

# 📌 Spread Operator
Expands elements of an array or object to copy or merge them.
```js
const arr = [1, 2, 3];
const newArr = [...arr];

console.log(newArr); // [1, 2, 3]
```
[...arr] creates a shallow copy of arr by spreading all its elements into a new array.
```js
const user = { name: "Siri", age: 24 };

const updatedUser = { ...user, city: "Tampa" };

console.log(updatedUser);
// { name: "Siri", age: 24, city: "Tampa" }
```

---

# 📌 Rest Operator
Collects multiple arguments into a single array.
```js
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

```
Meaning: All passed values are gathered into nums as an array: [1,2,3,4].
...nums → rest operator. It collects all arguments passed into the function into one array called nums.

reduce() is an array method used to combine all values into a single result.

`array.reduce((accumulator, currentValue) => result, initialValue)`
- total → accumulator (stores running sum)
- n → current number from array
- 0 → starting value

---

# 📌 Template Literals
Use backticks to insert variables into strings.
```js
const name = "Siri";
const msg = `Hello ${name}`;

console.log(msg); // Hello Siri

```

---

# 📌 Map & Set

Map: Key-value store, Stores data as key–value pairs; keys can be any type.

Set: Unique values, Stores values without duplicates.

```js
const map = new Map();
map.set("name", "Siri");
map.set(1, "ID");

console.log(map.get("name")); // Siri

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}

```

---

# 📌 WeakMap / WeakSet

WeakMap (Memory-efficient key–value): Keys must be objects; removed automatically if the object is no longer used.

WeakSet (Memory-efficient unique objects): Stores only objects; removed when objects are no longer referenced.

```js
const weakMap = new WeakMap();
let user = { name: "Siri" };

weakMap.set(user, "active");
console.log(weakMap.get(user)); // active

user = null; // object can be garbage collected

const weakSet = new WeakSet();
let obj = { id: 1 };

weakSet.add(obj);
console.log(weakSet.has(obj)); // true

obj = null; // eligible for garbage collection
```
---

# 📌 Functional Programming

map(), filter(), reduce() - These are array methods used to process data in a clean, reusable way.
- map() → transform each item
Creates a new array by changing every element.
```js
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

- filter() → select items
Returns only items that match a condition.
```js
const nums = [1, 2, 3, 4];

const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```
- reduce() → combine into one value
Used for sum, count, grouping, etc.
```js
const nums = [1, 2, 3, 4];

const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 10
```

---

# 📌 Debouncing & Throttling

Used to control how often a function runs when events fire too many times (scroll, typing, resize).

- Debouncing → runs after user stops
Example: search bar
```js
let timer;
function search() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Searching...");
  }, 500);
}
```
If the user keeps typing, the function waits. It runs only after they stop.

- Throttling → runs every X time
Example: scroll event
```js
let lastRun = 0;
function throttle() {
  const now = Date.now();
  if (now - lastRun > 1000) {
    console.log("Running...");
    lastRun = now;
  }
}
```
Runs at most once per second.

---

# 📌 Security Topics
- XSS (Cross-Site Scripting):
Attacker injects malicious script into your website.
Example:
```html
<input value="<script>alert('hack')</script>">
```
Fix: sanitize user input.

- CSRF (Cross-Site Request Forgery):
Attacker tricks a logged-in user into making unwanted requests.
Example:

`User is logged in → attacker sends hidden request to transfer money.`

Fix: use CSRF tokens.

- Injection attacks (SQL Injection):
Attacker inserts harmful code into inputs.

Example:
```sql
username: admin' OR '1'='1
```
Fix: Use parameterized queries, Validate input

---

# 📌 Performance Optimization

* Avoid memory leaks: Don’t keep unused objects, timers, or event listeners.

`setInterval(() => console.log("running"), 1000);`
* Minimize DOM updates: DOM changes are slow. Update once instead of many times.
* Use lazy loading: Load content only when needed.

---

# 📌 JavaScript Frameworks
These help build large frontend apps faster.

## React
- Most popular
- Component-based UI
- Used by Facebook, Netflix

## Angular
- Full framework by Google
- Built-in routing, forms, structure
## Vue
- Easy to learn
- Lightweight
- Clean syntax

HTML → structure

JS → logic

Frameworks → organized way to build big apps

---

# 📌 TypeScript (Important Modern JS)

TypeScript is JavaScript with added types and safety checks before running.

Adds types:
```js
function add(a: number, b: number): number {
  return a + b;
}
```
Compile-time safety: Errors are caught before running the code.

---

# 📌 Browser Storage

Used to store data in the user's browser.

- LocalStorage(permanent): Data stays even after closing the browser
- SessionStorage(temporary): Data is removed when the tab is closed.
- Cookies: Small data stored and sent to server with every request.

```js
localStorage.setItem("name", "Siri");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("user", "John");

document.cookie = "theme=dark";
```

---

# 📌 WebSockets

Used for real-time communication between client and server.
Examples: Chat apps, Live notifications, Stock price updates
```js
const socket = new WebSocket("ws://example.com");

socket.onmessage = (event) => {
  console.log(event.data);
};
```
Connection stays open and data flows continuously.

---

# 📌 Service Workers

Background scripts that run in the browser to enable advanced features.

Used for:
- Offline apps
- Caching pages
- Push notifications

Example idea:
- User opens app once
- Service worker saves files
- App works even without internet

---

# 📌 Testing Tools

Used to test code automatically.
- Jest: Popular for React and JS apps, Used for unit testing
- Mocha: Flexible testing framework, Often used with Chai
```js
test("adds numbers", () => {
  expect(2 + 2).toBe(4);
});
```

---

# 📌 Build Tools
Used to prepare JS apps for production.
- Webpack: Bundles many files into one
- Vite: Fast development server and bundler
- Babel: Converts modern JS into older JS so all browsers can run it

Example: ES6 code → Babel → compatible ES5 code

---


# 📌 Execution Context 

Every JS code runs inside an `Execution Context`.

Types:

* Global Execution Context: Created when the JS file starts running. (Created once, Represents the whole program)
* Function Execution Context: Created every time a function is called.

Each context has:

* Variable environment (Stores variables & functions.)
* Scope chain (Where JS looks for variables.)
* "this" binding (Value of this keyword.)

---

# 📌 Call Stack (Engine Behavior)

JavaScript is `Single-threaded`.

Uses a call stack to track function calls.

```js
function func2() {
  console.log("func2");
}

function func1() {
  func2();
}

func1();

```
Stack flow
```scss
Global()
  -> func1()
       -> func2()
```

Execurion Order: LIFO 
```sql
func2 runs
func1 finishes
Global finishes
```

---

# 📌 Memory Creation Phase vs Execution Phase

When JS runs:

Phase 1: Memory allocated. --> JS scans the code and allocates memory.

Phase 2: Code executed. --> Now code runs line by line.

Example:

```js
console.log(a);
var a = 10;
```

Due to hoisting: a exists but is undefined.

---

# 📌 Temporal Dead Zone (TDZ)

Only For let & const. 

Variable exists but cannot be accessed before declaration.

```js
console.log(a);
let a = 10; // Error
```
a exists in memory, but cannot be accessed yet.

This period is called: Temporal Dead Zone (From start of scope → until declaration line.)

---

# 📌 Hoisting Deep Reality

var: Hoisted, Initialized as undefined.

let/const: Hoisted but in TDZ. Cannot use before declaration

functions: Fully hoisted.

```js
console.log(a);
var a = 5; //Undefined

console.log(a);
let a = 5; //error

sayHi();  // Hi

function sayHi() {
  console.log("Hi");
}
```

---

# 📌 Scope Chain (VERY IMPORTANT)

If variable not found:

JS searches like: Current scope → Parent → Global
```js
let a = 10;

function outer() {
  function inner() {
    console.log(a);
  }
  inner();
}

outer();
```
- Inside inner() → not found
- Inside outer() → not found
- Global → found a = 10

---

# 📌 Lexical Scope

Scope defined by: Where function is written, Not where it is called.
```js
let a = 10;

function outer() {
  let a = 20;

  function inner() {
    console.log(a);
  }

  return inner;
}

const fn = outer();
fn(); //20
```

---

# 📌 Closures Deep Internals

Closure stores: Reference to outer variables, Not value.
```js
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn(); // 10
```
Even after outer() finishes, x still exists because: inner() holds a reference to it. So memory is not cleared
```js
function outer() {
  let x = 10;

  return function inner() {
    x++;
    console.log(x);
  };
}

const fn = outer();
fn(); // 11
fn(); // 12
```

---

# V8

V8 is Google’s JavaScript engine (the “brain” that runs JavaScript code).

Where it runs:
- Chrome browser
- Node.js (so JS can run on servers)

What V8 does (simple):
- Parses your JS code (reads it)
- Compiles it (JIT: “Just-In-Time” compilation into machine code)
- Executes it fast
- Manages memory (garbage collection)
- So without an engine like V8, JavaScript code can’t run.

---

# 📌 Garbage Collection Internals

V8 uses: Mark-and-sweep algorithm, Removes Unreachable objects.

Mark: JS marks all objects that are still reachable.

Example: Global variables, Active function variables, Objects referenced by closures

Sweep: Removes objects that are NOT reachable.

---

# 📌 Memory Leaks in JavaScript

Memory that should be freed but isn’t. 

Common causes:

* Unremoved event listeners (If the button is removed but listener stays → memory leak.))
* Global variables  
* Closures holding references

---

# 📌  Event Loop Deep Internals

JS runtime has: Call Stack, Web APIs, Callback Queue(Task queue), Microtask Queue

Flow:
- Code goes to Call Stack
- Async tasks go to Web APIs
- When finished: Promises → Microtask Queue, setTimeout → Task Queue
- When stack is empty: Run Microtasks first, Then Tasks

---


# 📌  this Binding Rules (CRITICAL)

Depends on call site.

Cases:

* Global → window
* Method call → object
* Arrow function → lexical this
* call/apply/bind → manual control
```js
//Global
console.log(this);
//In browser → window

//Method call
const obj = {
  name: "Siri",
  show() {
    console.log(this.name);
  }
};

obj.show();
//this = obj

//Arrow function: Arrow functions don’t have their own this. They use parent this.
const obj = {
  name: "Siri",
  show: () => {
    console.log(this.name);
  }
};
//Here this = global, not obj.

//call / apply / bind: Used to manually set this.
```

---

# 📌 call(), apply(), bind()

Used to control: this value.

```js
function greet() {
  console.log(this.name);
}

const user = { name: "Siri" };

greet.call(user);
```
this = user

Difference:
- call(obj, a, b)
- apply(obj, [a, b])
- bind(obj) → returns new function

---

# 📌 Prototype Chain Deep Reality

When property not found, JS checks:

Object → prototype → parent prototype → Object.prototype → null
```js
const person = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(person);

student.greet();

```
JS checks:
- student → not found
- person → found

---

# 📌 Object.create()

Creates object with custom prototype.
```js
const person = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(person);

student.name = "Siri";

student.greet(); // Hello
```
student inherits from person.

---

# 📌 Function is an Object

Functions have: Properties, Methods, Prototype
```js
function greet() {}

greet.language = "English";

console.log(greet.language); // English

```
Functions also have: greet.prototype, used for inheritance.

---

# 📌 Constructor Functions (Old Style)
Before ES6 classes, objects were created using constructor functions.
```js
function Car(name) {
  this.name = name;
}

const c1 = new Car("BMW");
console.log(c1.name); // BMW
```
new creates a new object

this refers to that new object

---

# 📌 Class vs Prototype Reality

```js
class Car {
  constructor(name) {
    this.name = name;
  }
}
//similar to
function Car(name) {
  this.name = name;
}
```
Classes are just: A cleaner syntax over prototypes

JavaScript still uses prototype-based inheritance behind the scenes.

---

# 📌 Shallow vs Deep Clone Problems

Shallow clone: Copies only the top layer. Nested objects still share reference.

Deep clone: Copies nested objects.
```js
const a = { x: 1, y: { z: 2 } };
const b = { ...a };

b.y.z = 99;

console.log(a.y.z); // 99 (changed!)

const a = { x: 1, y: { z: 2 } };
const b = JSON.parse(JSON.stringify(a));

b.y.z = 99;

console.log(a.y.z); // 2 (safe)

```

---

# 📌 Object Freezing

```js
const obj = { name: "Siri" };

Object.freeze(obj);

obj.name = "John"; // ignored
console.log(obj.name); // Siri
```

Makes object immutable.
Cannot: Change, Add, Delete properties

---

# 📌 Object Sealing

```js
const obj = { name: "Siri" };

Object.seal(obj);

obj.name = "John"; // allowed
obj.age = 25;      // not allowed
delete obj.name;   // not allowed
```

Cannot add/remove properties. But can update values.

---

# 📌 Property Descriptors

Control property behavior: 
- writable → can change value?
- enumerable → appears in loops?
- configurable → can delete/modify?
```js
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Siri",
  writable: false
});

obj.name = "John";
console.log(obj.name); // Siri
```

---

# 📌 Strict Mode

```js
"use strict";
```
Makes JavaScript stricter and safer. Prevents:

* Undeclared variables
* Silent errors (Turns them into real errors.)
```js
"use strict";
x = 10; // Error
```

---


# 📌 Virtual DOM Concept

Used by: React

Process:
- Create virtual copy
- Compare old vs new
- Update only changed parts

Result:
- Faster performance
- Fewer real DOM updates

---

# 📌 JavaScript Engine Optimization

V8 optimizes:
* Hot functions (Functions called many times get optimized)
* Inline caching (Engine remembers: “Last time this object had this property”)
* Hidden classes (Internal structure used to speed property access)

---

# 📌 Hidden Classes (V8 Internal Concept)

If objects have same structure:
```js
const a = { x: 1, y: 2 };
const b = { x: 3, y: 4 };
```
- V8 creates one hidden class for both. 
- Fast access.

But if structure keeps changing:
```js
const obj = {};
obj.x = 1;
obj.y = 2;
obj.z = 3;
```
- Engine keeps creating new hidden classes.
- Result: Slower performance
- Best practice: Create objects with same structure.

---

# 📌 Inline Caching(V8 Optimization)

Speeds up: Repeated property access.
```js
const user = { name: "Siri" };

console.log(user.name);
console.log(user.name);
console.log(user.name);
```
What V8 does internally:
- First time → finds where name is stored
- Remembers that location
- Next times → jumps directly to it
- This makes repeated property access very fast.

---

# 📌 Tail Call Optimization (Conceptual)

Prevents stack overflow in deep recursion.
```js
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
//Each call adds a new stack frame → can overflow
//Tail
function sum(n, acc = 0) {
  if (n === 0) return acc;
  return sum(n - 1, acc + n);
}
```
The last operation is the recursive call.

In theory: Engine can reuse same stack frame. Prevents memory growth

But not widely supported yet.

---

# 📌 Event Delegation

Attach one event listener to parent instead of many children
```js
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => console.log("clicked"));
}); //bad

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Item clicked");
  }
}); //better
```
Benefits: Better performance, Works for dynamically added elements

---

# 📌Polyfills
Adds missing features to old browsers.
Example: Old browser doesn’t support `Array.includes()`, Polyfill adds it manually.

---

# 📌 Web Workers

Run JS in background threads.

Used for: Heavy computation, Image processing, Data parsing

---

# 📌 JavaScript Performance Killers

* Memory leaks
* Too many DOM updates
* Blocking loops
* Unoptimized async code

---

# 📌 Node.js Event Loop Differences

Node has multiple phases:
- Timers → setTimeout
- I/O callbacks → file/network
- Poll → wait for events
- Check → setImmediate

Node handles:
- Server requests
- File operations

---

# 📌 Clustering in Node.js

Node is single-threaded.

Clustering allows:
- Using multiple CPU cores
- Running multiple Node processes

Result:
- Better performance
- More requests handled

---

# 📌 Worker Threads (Node)

True multithreading support.

Used for:
- CPU-heavy tasks
- Parallel processing

Example:
- Data analysis
- Image compression
