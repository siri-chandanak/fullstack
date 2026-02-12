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

This guide covers everything from:
**Beginner → Advanced → Internals → Performance → Architect level**

---

# 📌 1. What is TypeScript?

TypeScript = JavaScript + Types

It adds:

* Static typing
* Compile-time checking
* Better tooling

---

# 📌 2. Why TypeScript?

JavaScript problems:

* Runtime errors
* Weak type safety
* Hard to maintain large apps

TypeScript solves:

* Type errors before runtime
* Better readability
* Safer refactoring

---

# 📌 3. How TypeScript Works

You write:

.ts files

Compiler converts:

TypeScript → JavaScript

---

# 📌 4. Compilation Process

.ts → tsc compiler → .js

Browser runs:

Only JavaScript.

---

# 📌 5. Basic Types

```ts
let name: string = "John";
let age: number = 25;
let isAdmin: boolean = false;
```

---

# 📌 6. Type Inference

TypeScript can guess type:

```ts
let x = 10; // number inferred
```

---

# 📌 7. Any Type (Avoid)

```ts
let data: any;
```

Disables type checking.

---

# 📌 8. Unknown Type (Safer than any)

```ts
let value: unknown;
```

Must check before use.

---

# 📌 9. Primitive Types

string

number

boolean

null

undefined

bigint

symbol

---

# 📌 10. Arrays

```ts
let arr: number[] = [1,2,3];
```

---

# 📌 11. Tuple

Fixed-size array:

```ts
let user: [string, number] = ["John", 25];
```

---

# 📌 12. Enum

```ts
enum Role {
  Admin,
  User
}
```

---

# 📌 13. Union Types

```ts
let id: string | number;
```

---

# 📌 14. Literal Types

```ts
let status: "success" | "error";
```

---

# 📌 15. Type Aliases

```ts
type ID = string | number;
```

---

# 📌 16. Interfaces (VERY IMPORTANT)

Define object shape:

```ts
interface User {
  name: string;
  age: number;
}
```

---

# 📌 17. Interface vs Type

Interface:
Extendable, object-focused

Type:
Flexible, unions, primitives

---

# 📌 18. Optional Properties

```ts
interface User {
  name: string;
  age?: number;
}
```

---

# 📌 19. Readonly Properties

```ts
readonly id: number;
```

---

# 📌 20. Function Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

# 📌 21. Optional Parameters

```ts
function greet(name?: string)
```

---

# 📌 22. Default Parameters

```ts
function greet(name = "Guest")
```

---

# 📌 23. Arrow Functions

```ts
const add = (a: number, b: number) => a + b;
```

---

# 📌 24. Object Types

```ts
let user: {name: string; age: number};
```

---

# 📌 25. Classes in TypeScript

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

---

# 📌 26. Access Modifiers

public

private

protected

---

# 📌 27. Parameter Properties

```ts
constructor(private name: string) {}
```

---

# 📌 28. Inheritance

```ts
class A {}
class B extends A {}
```

---

# 📌 29. Abstract Classes

```ts
abstract class Shape {
  abstract area(): number;
}
```

---

# 📌 30. Interfaces with Classes

```ts
class User implements Person {}
```

---

# 📌 31. Generics (VERY IMPORTANT)

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

# 📌 32. Generic Interfaces

```ts
interface Box<T> {
  value: T;
}
```

---

# 📌 33. Generic Constraints

```ts
function test<T extends number>(x: T)
```

---

# 📌 34. Utility Types (VERY IMPORTANT)

Partial<T>

Required<T>

Readonly<T>

Pick<T>

Omit<T>

---

# 📌 35. keyof Operator

Gets keys of object.

---

# 📌 36. typeof Operator

Gets type of variable.

---

# 📌 37. Mapped Types

Create new types from existing ones.

---

# 📌 38. Conditional Types

Type depends on condition.

---

# 📌 39. Intersection Types

```ts
type A = B & C;
```

---

# 📌 40. Declaration Files (.d.ts)

Used to define types for:

JavaScript libraries.

---

# 📌 41. TypeScript Modules

import/export support.

---

# 📌 42. Namespaces (Older Pattern)

Used before modules.

---

# 📌 43. Type Assertion

```ts
value as string
```

---

# 📌 44. Non-null Assertion

```ts
value!
```

---

# 📌 45. Type Narrowing

Using: 
- typeof
- instanceof
- in operator

---

# 📌 46. Type Guards

Custom functions to check type.

---

# 📌 47. Overloads

Multiple function signatures.

---

# 📌 48. Decorators (Advanced)

Used in: Angular, NestJS

---

# 📌 49. tsconfig.json (VERY IMPORTANT)

Controls:

* Compilation rules
* Target JS version
* Strict mode

---

# 📌 50. Strict Mode

Enable:

* Better type safety
* Error detection

---

# 📌 51. TypeScript + React

Used for:

* Typed components
* Props validation

---

# 📌 52. TypeScript + Node.js

Used for:

* Backend APIs
* Safer server code

---

# 📌 53. TypeScript Performance Benefits

* Fewer bugs
* Easier maintenance
* Better IDE support

---

# 📌 54. TypeScript Limitations

Types exist only at: Compile time.

Removed in JS output.

---

# 📌 55. TypeScript Mastery Definition

You master TypeScript when you understand:

* Generics
* Utility types
* Advanced type system
* Strict configurations

---

# 📌 56. Final Truth
 
TypeScript is: JavaScript for large-scale applications.

It turns: Dynamic JS → Safer engineering language.