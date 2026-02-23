# 🔷 TypeScript Master Notes

## (Basic → Intermediate → Advanced → Expert → Production → Architect Level)

TypeScript is one of the MOST IMPORTANT modern frontend/backend languages.

It is:

* A superset of JavaScript
* Developed by Microsoft
* Used heavily in:

  * React apps
  * Angular
  * Node.js backends
  * Large-scale enterprise systems

---

# 📌What is TypeScript?

TypeScript = JavaScript + Types

It adds:

* Static typing
* Compile-time checking
* Better tooling

---

# 📌 Why TypeScript?

JavaScript problems:

* Runtime errors
* Weak type safety
* Hard to maintain large apps

TypeScript solves:

* Type errors before runtime
* Better readability
* Safer refactoring

---

# 📌 How TypeScript Works

You write:

.ts files

Compiler converts:

TypeScript → JavaScript

---

# 📌 Compilation Process

.ts → tsc compiler → .js

Browser runs:

Only JavaScript.

---

# 📌 Basic Types

```ts
let name: string = "John";
let age: number = 25;
let isAdmin: boolean = false;
```

---

# 📌 Type Inference

TypeScript can guess type:

```ts
let x = 10; // number inferred
```

---

# 📌 Any Type (Avoid)

```ts
let data: any;
```

Disables type checking.

---

# 📌 Unknown Type (Safer than any)

```ts
let value: unknown;
```

Must check before use.

---

# 📌 Primitive Types

string

number

boolean

null

undefined

bigint

symbol

---

# 📌 Arrays

```ts
let arr: number[] = [1,2,3];
```

---

# 📌 Tuple

Fixed-size array:

```ts
let user: [string, number] = ["John", 25];
```

---

# 📌 Enum

```ts
enum Role {
  Admin,
  User
}
```

---

# 📌 Union Types

```ts
let id: string | number;
```
union types stay purely type-level (no runtime output).

---

# 📌 Literal Types

```ts
let status: "success" | "error";
```
Allow only specific values

---

# 📌 Type Aliases

```ts
type ID = string | number;
```

---

# 📌 Interfaces (VERY IMPORTANT)

Define object shape:

```ts
interface User {
  name: string;
  age: number;
}
```
Interface is best for object contracts, can be extended/merged.

Type is best for unions, intersections, advanced combos.

---

# 📌 Interface vs Type

Interface: Extendable, object-focused

Interface is best for object contracts, can be extended/merged.

Type: Flexible, unions, primitives


Type is best for unions, intersections, advanced combos.

---

# 📌 Optional Properties

```ts
interface User {
  name: string;
  age?: number;
}
```
age may be missing.

---

# 📌 Readonly Properties

```ts
readonly id: number;
```
You can’t reassign id.

---

# 📌 Function Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# 📌Optional Parameters

```ts
function greet(name?: string)
```

---

# 📌 Default Parameters

```ts
function greet(name = "Guest")
```

---

# 📌 Arrow Functions

```ts
const add = (a: number, b: number) => a + b;
```

---

# 📌 Object Types

```ts
let user: {name: string; age: number};
```

---

# 📌 Classes in TypeScript

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

---

# 📌 Access Modifiers

public: accessible everywhere

private: only inside class

protected: class + subclasses

---

# 📌 Parameter Properties

```ts
constructor(private name: string) {}
```

---

# 📌 Inheritance

```ts
class A {}
class B extends A {}
```

---

# 📌 Abstract Classes

```ts
abstract class Shape {
  abstract area(): number;
}
```

---

# 📌 Interfaces with Classes

```ts
class User implements Person {}
```

---

# 📌 Generics (VERY IMPORTANT)

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

# 📌 Generic Interfaces

“type is a parameter”.
```ts
interface Box<T> {
  value: T;
}
```

---

# 📌 Generic Constraints

```ts
function test<T extends number>(x: T)
```

---

# 📌 Utility Types (VERY IMPORTANT)

Partial<T>

Required<T>

Readonly<T>

Pick<T>

Omit<T>

---

# 📌 keyof Operator

Gets keys of object.

---

# 📌 typeof Operator

Gets type of variable.

---

# 📌 Mapped Types

Create new types from existing ones.

---

# 📌 Conditional Types

Type depends on condition.

---

# 📌 Intersection Types

```ts
type A = B & C;
```

---

# 📌 Declaration Files (.d.ts)

Used to define types for:

JavaScript libraries.

---

# 📌 TypeScript Modules

import/export support.

---

# 📌 Namespaces (Older Pattern)

Used before modules.

---

# 📌 Type Assertion

```ts
value as string
```

---

# 📌 Non-null Assertion

```ts
value!
```

---

# 📌 Type Narrowing

Using: 
- typeof
- instanceof
- in operator

---

# 📌 Type Guards

Custom functions to check type.

---

# 📌 Overloads

Multiple function signatures.

---

# 📌 Decorators (Advanced)

Used in: Angular, NestJS

---

# 📌 tsconfig.json (VERY IMPORTANT)

Controls:

* Compilation rules
* Target JS version
* Strict mode

---

# 📌 Strict Mode

Enable:

* Better type safety
* Error detection

---

# 📌 TypeScript + React

Used for:

* Typed components
* Props validation

---

# 📌 TypeScript + Node.js

Used for:

* Backend APIs
* Safer server code

---

# 📌 TypeScript Performance Benefits

* Fewer bugs
* Easier maintenance
* Better IDE support

---

# 📌 TypeScript Limitations

Types exist only at: Compile time.

Removed in JS output.

---


# 📌 Conclusion
 
TypeScript is: JavaScript for large-scale applications.

It turns: Dynamic JS → Safer engineering language.