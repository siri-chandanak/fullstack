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

Arithmetic: +, *, /, %

Comparison: ==, ===, !=, !==, >, <

Logical: &&, ||, !

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

# 📌 17. Arrays

```js
const arr = [1, 2, 3];
```

Methods: push(), pop(), map(), filter(), reduce()

---

# 📌 18. Loops

```js
for (let i = 0; i < 5; i++) {}
```

```js
for (let item of arr) {}
```

---

# 📌 19. DOM (Browser Concept)

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
- JSON.parse() – Converts a JSON string into a JavaScript object.
- JSON.stringify() – Converts a JavaScript object into a JSON string.
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

# 📌 43. REST API in JS

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

# 📌 44. JavaScript Memory Model

- Stack: Stores primitive values (number, string, boolean, null, undefined) and function call data; it is fast and fixed in size.
- Heap: Stores objects, arrays, and functions; it is larger and used for dynamic memory allocation.

---

# 📌 45. Garbage Collection

JavaScript automatically frees memory by removing objects and variables that are no longer being used or referenced.

---

# 📌 46. Shallow vs Deep Copy

Shallow Copy: Creates a new object but copies references of nested objects, so changes in nested data affect both copies.

Deep Copy: Creates a completely independent copy, duplicating all values (including nested objects), so changes don’t affect the original.

---

# 📌 47. Destructuring
Destructuring: A shortcut to extract values from objects or arrays into variables.
```js
const user = { name: "Siri", age: 24 };

const { name } = user;

console.log(name); // Siri
```
{name} picks the name property from the user object and stores it in a variable called name.

---

# 📌 48. Spread Operator
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

# 📌 49. Rest Operator
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

# 📌 50. Template Literals
Use backticks to insert variables into strings.
```js
const name = "Siri";
const msg = `Hello ${name}`;

console.log(msg); // Hello Siri

```

---

# 📌 51. Map & Set

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

# 📌 52. WeakMap / WeakSet

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

# 📌 53. Functional Programming

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

# 📌 54. Debouncing & Throttling

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

# 📌 55. Security Topics
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

# 📌 56. Performance Optimization

* Avoid memory leaks: Don’t keep unused objects, timers, or event listeners.

`setInterval(() => console.log("running"), 1000);`
* Minimize DOM updates: DOM changes are slow. Update once instead of many times.
* Use lazy loading: Load content only when needed.

---

# 📌 57. JavaScript Frameworks
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

# 📌 58. TypeScript (Important Modern JS)

TypeScript is JavaScript with added types and safety checks before running.

Adds types:
```js
function add(a: number, b: number): number {
  return a + b;
}
```
Compile-time safety: Errors are caught before running the code.

---

# 📌 59. Browser Storage

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

# 📌 60. WebSockets

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

# 📌 61. Service Workers

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

# 📌 62. Testing Tools

Used to test code automatically.
- Jest: Popular for React and JS apps, Used for unit testing
- Mocha: Flexible testing framework, Often used with Chai
```js
test("adds numbers", () => {
  expect(2 + 2).toBe(4);
});
```

---

# 📌 63. Build Tools
Used to prepare JS apps for production.
- Webpack: Bundles many files into one
- Vite: Fast development server and bundler
- Babel: Converts modern JS into older JS so all browsers can run it

Example: ES6 code → Babel → compatible ES5 code

---

# 📌 64. JavaScript Mastery Definition

You master JavaScript when you understand:

* Closures: Functions remembering parent variables.
* Event loop: How JS handles async tasks and queues.
* Async programming: Promises, async/await, callbacks.
* Prototypes: How objects inherit from other objects.
* Memory model: Stack vs Heap, garbage collection, references.

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

Now this section contains the **remaining deep + expert-level JavaScript knowledge** — the things that:

* Senior frontend/backend JS engineers know
* V8 engine behavior depends on
* Performance teams optimize
* Interviewers test for deep understanding

---

# 📌 66. Execution Context (VERY IMPORTANT CORE CONCEPT)

Every JS code runs inside an `Execution Context`.

Types:

* Global Execution Context: Created when the JS file starts running. (Created once, Represents the whole program)
* Function Execution Context: Created every time a function is called.

Each context has:

* Variable environment (Stores variables & functions.)
* Scope chain (Where JS looks for variables.)
* "this" binding (Value of this keyword.)

---

# 📌 67. Call Stack (Engine Behavior)

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

# 📌 68. Memory Creation Phase vs Execution Phase

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

# 📌 69. Temporal Dead Zone (TDZ)

Only For let & const. 

Variable exists but cannot be accessed before declaration.

```js
console.log(a);
let a = 10; // Error
```
a exists in memory, but cannot be accessed yet.

This period is called: Temporal Dead Zone (From start of scope → until declaration line.)

---

# 📌 70. Hoisting Deep Reality

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

# 📌 71. Scope Chain (VERY IMPORTANT)

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

# 📌 72. Lexical Scope

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

# 📌 73. Closures Deep Internals

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

# 📌 74. Garbage Collection Internals

V8 uses: Mark-and-sweep algorithm, Removes Unreachable objects.

Mark: JS marks all objects that are still reachable.

Example: Global variables, Active function variables, Objects referenced by closures

Sweep: Removes objects that are NOT reachable.

---

# 📌 75. Memory Leaks in JavaScript

Memory that should be freed but isn’t. 

Common causes:

* Unremoved event listeners (If the button is removed but listener stays → memory leak.))
* Global variables  
* Closures holding references

---

# 📌 76. Event Loop Deep Internals

JS runtime has: Call Stack, Web APIs, Callback Queue(Task queue), Microtask Queue

Flow:
- Code goes to Call Stack
- Async tasks go to Web APIs
- When finished: Promises → Microtask Queue, setTimeout → Task Queue
- When stack is empty: Run Microtasks first, Then Tasks

---

# 📌 77. Microtask Priority Rule

Execution order:

1. Current stack
2. Promises (microtasks)
3. setTimeout (tasks)

---

# 📌 78. setTimeout Reality

```js
setTimeout(fn, 0)
```
Does NOT mean immediate. It means `Run when call stack becomes empty`.

---

# 📌 79. Promise Internals

Promise callbacks go to: Microtask queue.

That’s why they run before setTimeout.

---

# 📌 80. Async/Await Internals

```js
async function test() {
  return 5;
}
```
This actually returns:
```js
Promise {5}
```
await behavior
```js
async function test() {
  await Promise.resolve();
  console.log("Hello");
}
```
await:
- Pauses ONLY inside the async function
- Does NOT block whole program

---

# 📌 81. this Binding Rules (CRITICAL)

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

# 📌 82. call(), apply(), bind()

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

# 📌 83. Prototype Chain Deep Reality

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

# 📌 84. Object.create()

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

# 📌 85. Function is an Object

Functions have: Properties, Methods, Prototype
```js
function greet() {}

greet.language = "English";

console.log(greet.language); // English

```
Functions also have: greet.prototype, used for inheritance.

---

# 📌 86. Constructor Functions (Old Style)
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

# 📌 87. Class vs Prototype Reality

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

# 📌 88. Shallow vs Deep Clone Problems

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

# 📌 89. Object Freezing

```js
const obj = { name: "Siri" };

Object.freeze(obj);

obj.name = "John"; // ignored
console.log(obj.name); // Siri
```

Makes object immutable.
Cannot: Change, Add, Delete properties

---

# 📌 90. Object Sealing

```js
const obj = { name: "Siri" };

Object.seal(obj);

obj.name = "John"; // allowed
obj.age = 25;      // not allowed
delete obj.name;   // not allowed
```

Cannot add/remove properties. But can update values.

---

# 📌 91. Property Descriptors

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

# 📌 92. Strict Mode

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

# 📌 93. Debouncing vs Throttling (Performance)

Debounce: Run after delay. Run function after user stops triggering.

Throttle: Limit execution rate. Run function once every X time.

---

# 📌 94. Virtual DOM Concept

Used by: React

Process:
- Create virtual copy
- Compare old vs new
- Update only changed parts

Result:
- Faster performance
- Fewer real DOM updates

---

# 📌 95. JavaScript Engine Optimization

V8 optimizes:
* Hot functions (Functions called many times get optimized)
* Inline caching (Engine remembers: “Last time this object had this property”)
* Hidden classes (Internal structure used to speed property access)

---

# 📌 96. Hidden Classes (V8 Internal Concept)

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

# 📌 97. Inline Caching(V8 Optimization)

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

# 📌 98. Tail Call Optimization (Conceptual)

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

# 📌 99. Event Delegation

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

# 📌 100. Security Risks in JavaScript

- XSS
- CSRF
- Prototype pollution (Attacker modifies global object prototype.)

---

# 📌 101. Module Systems

CommonJS:
```js
const fs = require("fs");
module.exports = myFunction;
```
Used in Node.js

ES Modules:
```js
export function test() {}
import { test } from "./file.js";

```
used in Browsers, Modern Node

---

# 📌 102. Tree Shaking

Removes unused code during build.

---

# 📌 103. Transpilers

Babel converts: Modern JS → Older JS.
```js
const add = (a, b) => a + b;
//converted to below
var add = function(a, b) {
  return a + b;
};
```
So old browsers can run it.

---

# 📌 104. Polyfills
Adds missing features to old browsers.
Example: Old browser doesn’t support `Array.includes()`, Polyfill adds it manually.

---

# 📌 105. Web Workers

Run JS in background threads.

Used for: Heavy computation, Image processing, Data parsing

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

Node has multiple phases:
- Timers → setTimeout
- I/O callbacks → file/network
- Poll → wait for events
- Check → setImmediate

Node handles:
- Server requests
- File operations

---

# 📌 109. Streams in Node.js

Used for: Large file handling.

---

# 📌 110. Clustering in Node.js

Node is single-threaded.

Clustering allows:
- Using multiple CPU cores
- Running multiple Node processes

Result:
- Better performance
- More requests handled

---

# 📌 111. Worker Threads (Node)

True multithreading support.

Used for:
- CPU-heavy tasks
- Parallel processing

Example:
- Data analysis
- Image compression

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
