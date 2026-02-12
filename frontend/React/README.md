# ⚛️ React Master Notes

## What is React?

React is a **JavaScript library** for building **UI components**.
You build small reusable components, React updates the UI efficiently using a **virtual DOM + reconciliation**.

**Key ideas**

* **Component-based** UI
* **Declarative** rendering (describe what UI should look like for a state)
* **State-driven** updates

## Setup & Tooling

### Create a React app (modern)

**Vite (recommended)**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

**CRA (older, still used in legacy)**

```bash
npx create-react-app my-app
cd my-app
npm start
```

### Project structure (typical)

```
src/main.jsx or src/index.js (entry)
src/App.jsx (root component)
src/components/ (reusable components)
src/pages/ (route screens)
src/hooks/ (custom hooks)
src/services/ (API calls)
src/utils/ (helpers)
```

---

## 2) JSX (React Syntax)

JSX looks like HTML but it’s JavaScript.

* Use `{}` to embed JS expressions.
* Attributes use camelCase (e.g., `className`, `onClick`).
* Must return one parent element (or `<>...</>` fragment).

**Example:**

```jsx
const name = "Siri";
return <h1>Hello, {name}</h1>;
```

---

## 3) Components

### Functional Components (standard)

```jsx
function Button() {
  return <button>Click</button>;
}
export default Button;
```

### Props (inputs to components)

Props are read-only.

```jsx
function UserCard({ name, role }) {
  return <div>{name} — {role}</div>;
}
<UserCard name="Alex" role="Admin" />
```

### Children prop

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
<Card><p>Hello</p></Card>
```

---

## 4) Rendering Lists & Keys

```jsx
const items = ["A", "B", "C"];
return (
  <ul>
    {items.map((x) => <li key={x}>{x}</li>)}
  </ul>
);
```

### Keys

* Must be stable & unique.
* Avoid using array index as key if list order can change.

---

## 5) Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

Short-circuit:

```jsx
{error && <p>{error}</p>}
```

---

## 6) State (useState)

State = data that changes UI.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

### Functional updates (important for async / batching)

```jsx
setCount((prev) => prev + 1);
```

### Objects/arrays in state (immutability)

✅ Do:

```jsx
setUser((u) => ({ ...u, name: "New" }));
setList((arr) => [...arr, "X"]);
```

❌ Don’t mutate:

```jsx
user.name = "New"; // wrong
list.push("X");    // wrong
```

---

## 7) Side Effects (useEffect)

Use `useEffect` for:

* API calls
* Subscriptions
* Timers
* Syncing with browser APIs

```jsx
import { useEffect, useState } from "react";

useEffect(() => {
  // runs after render
}, []);
```

### Dependency array rules

* `[]` → run once on mount
* `[x]` → run when x changes
* No array → runs every render (usually bad)

### Cleanup

```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(id);
}, []);
```

### Fetch pattern

```jsx
useEffect(() => {
  let alive = true;

  async function load() {
    const res = await fetch("/api/users");
    const data = await res.json();
    if (alive) setUsers(data);
  }
  load();

  return () => { alive = false; };
}, []);
```

---

## 8) Events & Forms

### Events

```jsx
<button onClick={handleClick}>Click</button>
```

### Controlled input

```jsx
const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Form submit

```jsx
function onSubmit(e) {
  e.preventDefault();
  // send data
}

<form onSubmit={onSubmit}>
  <button type="submit">Save</button>
</form>
```

---

## 9) Refs (useRef)

Use refs to:

* Access DOM elements
* Keep mutable value without rerender

```jsx
const inputRef = useRef(null);

<button onClick={() => inputRef.current.focus()}>Focus</button>
<input ref={inputRef} />
```

Mutable value:

```jsx
const renderCount = useRef(0);
renderCount.current += 1;
```

---

## 10) Memoization (Performance)

### React.memo (memoize component)

Prevents rerender if props didn’t change.

```jsx
const Row = React.memo(function Row({ item }) {
  return <div>{item.name}</div>;
});
```

### useMemo (memoize computed value)

```jsx
const filtered = useMemo(() => heavyFilter(list, q), [list, q]);
```

### useCallback (memoize function reference)

```jsx
const onSelect = useCallback((id) => setSelected(id), []);
```

> Tip: Don’t overuse. Use when rerenders are actually costly.

---

## 11) Context API (Global-ish state)

Good for:

* Theme
* Auth user
* Language

```jsx
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function Profile() {
  const { user } = useContext(AuthContext);
  return <div>{user?.name}</div>;
}
```

---

## 12) Routing (React Router)

Install:

```bash
npm i react-router-dom
```

Basic:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### Params

```jsx
<Route path="/users/:id" element={<User />} />
const { id } = useParams();
```

---

## 13) Data Fetching (Best Practices)

Common approaches:

* fetch / axios manually
* React Query / TanStack Query (recommended for real apps)
* SWR

### Axios quick example

```bash
npm i axios
```

```jsx
import axios from "axios";
const { data } = await axios.get("/api/posts");
```

### TanStack Query (highly recommended)

Handles caching, retries, loading states.

```bash
npm i @tanstack/react-query
```

---

## 14) State Management Options

* useState / useReducer (component/local)
* Context (app-wide simple)
* Redux Toolkit (large apps, strict patterns)
* Zustand (simple global store)
* MobX (reactive style)
* Recoil/Jotai (atom-based)

### useReducer (complex state)

```jsx
function reducer(state, action) {
  switch(action.type) {
    case "inc": return { ...state, count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

## 15) Component Patterns You Must Know

### Lifting state up

Move shared state to common parent and pass down as props.

### Controlled vs Uncontrolled

Controlled: React controls input via state (most common)
Uncontrolled: DOM keeps value, read using ref

### Composition

Prefer composition over “too many props”.
Use children, slots, wrapper components.

---

## 16) Hooks Rules (VERY IMPORTANT)

Rules:

* Only call hooks at top level (not inside loops/if).
* Only call hooks inside React components or custom hooks.

Common hooks:

* useState
* useEffect
* useRef
* useMemo
* useCallback
* useContext
* useReducer
* useLayoutEffect (rare)
* useId, useTransition, useDeferredValue (advanced)

---

## 17) Custom Hooks

Make reusable logic:

```jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
```

---

## 18) Error Boundaries

Catches render errors (class-based feature; many libs provide wrappers).
React doesn’t catch:

* async errors
* event handler errors

by default.

---

## 19) React Rendering & Virtual DOM (Interview)

* React builds a virtual tree of UI.
* On state/props change, React re-renders (recomputes UI).
* Then React compares old vs new tree (diffing) and updates real DOM minimally (reconciliation).

Re-render ≠ DOM repaint always.

---

## 20) Strict Mode (Dev behavior)

In React 18, StrictMode can run certain lifecycles/effects twice in development to find side-effect bugs. Production does not do this.

---

## 21) Styling Options

* CSS / SCSS
* CSS Modules
* Tailwind CSS
* Styled-components / Emotion
* Component libraries (MUI, Chakra, AntD)

### Tailwind example

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 22) Testing (React Testing Library)

Install:

```bash
npm i -D @testing-library/react @testing-library/jest-dom vitest jsdom
```

Example:

```jsx
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders count", () => {
  render(<Counter />);
  expect(screen.getByText("0")).toBeInTheDocument();
});
```

---

## 23) Security Basics

* Prevent XSS: don’t dangerously inject HTML.
* If you must use `dangerouslySetInnerHTML`, sanitize content.
* Use HTTPS, secure cookies, CSRF protections (backend).

---

## 24) Common  Q&A (Quick)

**Q: Props vs State?**
Props = inputs from parent. State = internal data that changes UI.

**Q: Why keys in lists?**
To help React identify items and update efficiently.

**Q: useEffect runs when?**
After render; dependencies decide when it re-runs.

**Q: Controlled components?**
Inputs where React state is the “single source of truth”.

**Q: What causes re-render?**
State change, props change, context change, parent rerender.

**Q: How to optimize rerenders?**
Memoize heavy components (memo), memoize expensive computations (useMemo), stable callbacks (useCallback), split components, avoid unnecessary state.

---

## 25) Mini Cheat Sheet (1 page)

* useState: local state
* useEffect(fn, []): run once + cleanup
* useEffect(fn, [x]): when x changes
* useRef: DOM / mutable value w/o rerender
* useMemo: memoize value
* useCallback: memoize function
* memo: memoize component render
* Context: global-ish state
* Immutable updates: `{...obj}`, `[...arr]`
* List key: stable unique id


## (Basic → Intermediate → Advanced → Expert → Production → System Design → Architect Level)

React is the most widely used frontend library for building modern web applications.

Created by: Facebook (Meta)

Used for:

* SPAs (Single Page Applications)
* Dashboards
* Admin panels
* E-commerce
* Enterprise UIs
* Mobile apps (React Native)

This guide covers EVERYTHING from:
**Beginner → Advanced → Performance → Architecture → Industry level**

---

# 📌 1. What is React?

React is a JavaScript library for building UI using:

Component-based architecture.

---

# 📌 2. Why React?

Problems before React:

* Manual DOM manipulation
* Hard-to-maintain UI code
* Performance issues

React solves:

* Reusable components
* Fast UI updates
* Clean structure

---

# 📌 3. Core Idea of React

UI = Function(State)

Change state → UI updates automatically.

---

# 📌 4. Virtual DOM (VERY IMPORTANT)

React does NOT update real DOM directly.

Process:

1. Create virtual DOM
2. Compare changes (diffing)
3. Update only changed parts

Result:

* Faster rendering
* Better performance

---

# 📌 5. Components

React apps are made of components.

Types:

* Functional components (modern)
* Class components (older)

---

# 📌 6. Functional Component

```jsx
function Hello() {
  return <h1>Hello</h1>;
}
```

---

# 📌 7. JSX (JavaScript XML)

Allows writing HTML inside JS.

```jsx
const el = <h1>Hello</h1>;
```

---

# 📌 8. Props

Props = Data passed to component.

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

---

# 📌 9. State

State = Data inside component.

```jsx
const [count, setCount] = useState(0);
```

---

# 📌 10. Hooks (MOST IMPORTANT PART)

Hooks allow functional components to use features like state.

Main hooks:

* useState
* useEffect
* useContext
* useMemo
* useCallback
* useRef

---

# 📌 11. useState

Stores state.

```jsx
const [count, setCount] = useState(0);
```

---

# 📌 12. useEffect

Runs side effects.

Examples:

* API calls
* Event listeners

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

---

# 📌 13. Lifecycle in Functional Components

Mount
Update
Unmount

Handled using:

useEffect

---

# 📌 14. Event Handling

```jsx
<button onClick={handleClick}>
```

---

# 📌 15. Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

# 📌 16. Lists Rendering

```jsx
users.map(u => <p key={u.id}>{u.name}</p>)
```

---

# 📌 17. Keys (IMPORTANT)

Help React identify elements.

Must be:

* Unique
* Stable

---

# 📌 18. Forms in React

Controlled components:

```jsx
<input value={name} onChange={...} />
```

---

# 📌 19. Lifting State Up

Share state between components.

Move state to parent.

---

# 📌 20. useContext

Global state without prop drilling.

---

# 📌 21. Prop Drilling Problem

Passing props through many layers.

Solved using:

* Context
* Redux

---

# 📌 22. Routing

Navigate between pages.

Library:

react-router-dom

---

# 📌 23. Nested Routes

Route inside route.

---

# 📌 24. Dynamic Routes

Example:

/user/:id

---

# 📌 25. API Calls

```jsx
useEffect(() => {
  fetch("/api/users")
}, []);
```

---

# 📌 26. Axios

Better alternative to fetch.

---

# 📌 27. Performance Optimization

Important in large apps.

---

# 📌 28. React.memo

Prevents unnecessary re-renders.

---

# 📌 29. useMemo

Memoizes values.

---

# 📌 30. useCallback

Memoizes functions.

---

# 📌 31. useRef

Stores values without re-render.

---

# 📌 32. Lazy Loading

Load components when needed.

```jsx
const Page = React.lazy(...)
```

---

# 📌 33. Code Splitting

Split bundles into smaller chunks.

---

# 📌 34. Error Boundaries

Catch UI errors.

---

# 📌 35. Higher Order Components (HOC)

Component that wraps another component.

---

# 📌 36. Render Props Pattern

Share logic between components.

---

# 📌 37. Custom Hooks

Create reusable logic.

---

# 📌 38. State Management Libraries

Redux
Zustand
MobX
Recoil

---

# 📌 39. Redux Core Concepts

Store
Actions
Reducers

---

# 📌 40. Redux Toolkit (Modern Way)

Simpler Redux setup.

---

# 📌 41. Styling in React

CSS
SCSS
Tailwind
Styled-components

---

# 📌 42. CSS Modules

Scoped styles.

---

# 📌 43. Forms Libraries

Formik
React Hook Form

---

# 📌 44. Authentication Flow

Login → Store token → Protect routes

---

# 📌 45. Protected Routes

Restrict access if not logged in.

---

# 📌 46. LocalStorage in React

Store tokens/settings.

---

# 📌 47. SSR vs CSR

CSR:
React SPA

SSR:
Next.js

---

# 📌 48. Next.js (VERY IMPORTANT)

Production React framework.

Features:

* SSR
* SEO
* Routing
* Performance

---

# 📌 49. Static Site Generation

Pre-build pages.

---

# 📌 50. Hydration

Attach JS to server-rendered HTML.

---

# 📌 51. Micro-Frontend Architecture

Split frontend into multiple apps.

---

# 📌 52. Testing React

Jest
React Testing Library

---

# 📌 53. Performance Metrics

TTI
LCP
CLS

---

# 📌 54. Accessibility in React

ARIA labels
Keyboard navigation

---

# 📌 55. Internationalization

Multi-language support.

---

# 📌 56. Deployment

Netlify
Vercel
AWS

---

# 📌 57. Build Tools

Webpack
Vite

---

# 📌 58. React DevTools

Inspect components/state.

---

# 📌 59. Common React Mistakes

* Missing keys
* Too many re-renders
* Mutating state

---

# 📌 60. Large App Folder Structure

```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── services/
 ├── store/
 ├── utils/
```

---

# 📌 61. Real Production Architecture

* API layer
* State layer
* UI layer
* Routing layer

---

# 📌 62. React System Design Thinking

Think in:

* Components
* State flow
* Data flow

---

# 📌 63. Performance Killers

* Large state objects
* Unnecessary renders
* Heavy DOM trees

---

# 📌 64. React Security

XSS prevention
Token safety

---

# 📌 65. React Mastery Definition

You master React when you understand:

* Component design
* State architecture
* Performance optimization
* Hooks deeply
* Routing
* Data fetching

---

# 📌 66. Final Truth

React is not just a UI library.

It is:

* A UI architecture system
* A performance engine
* A large-scale frontend platform
