# ⚛️ React Master Notes

React is just this: “Show UI based on data. When data changes → UI updates automatically.”

React has only 3 main things:
1. Components → Small UI blocks
2. Props → Data coming from parent
3. State → Data inside component that changes

### JSX
- It looks like HTML, but not HTML
- You can you javascript inside {}

Inside {} you can use: variables, calculations, functions
```js
<h1>{5 + 5}</h1>
```
- Only ONE parent element allowed
```js
return (
  <h1>Hello</h1>
  <p>Welcome</p>
); //error
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```
- class becomes className
```html
<div class="box"> //html
<div className="box"> //jsx
```
- Events use camelCase
```html
<button onclick="clickMe()"> //html
<button onClick={clickMe}> //jsx
```

### Component
- A component is just a function that returns JSX. 
- Reusable UI block.
- Component names must start with CAPITAL letter.
- A component MUST return only ONE parent element.

Example in real life: Button, Navbar, Profile card, Login form

```jsx
function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Button />
    </div>
  );
}

```

### Props
- Makes component dynamic
- props are like function parameters.
- Props = Data sent from a parent component to a child component.

```jsx
function User(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <User name="Siri" />;
}

```
- Destructuring
```jsx
function User({ name }) { //More readable, Destructuring
  return <h1>Hello {name}</h1>;
}
<User name="Siri" />
<User name="Alex" />
<User name="John" />
```
- Props can send anything
```jsx
function User({ name, age, isValid }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Valid User: {isValid ? "Yes" : "No"}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <User name="Siri" age={25} isValid={true} />
      <User name="Alex" age={30} isValid={false} />
    </div>
  );
}
```
- Props are READ-ONLY. You should NEVER change props inside a component.
- Data always moves: Parent → Child. Not the opposite.

### State (useState)
- State = Data inside a component that can change.
- When state changes: 👉 React automatically updates the UI.
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}
```
- `const [count, setCount] = useState(0);` => count → current value, setCount → function to update value, 0 → starting value
- State is used for: Counters, Form inputs, Login status, Show/Hide password, Like buttons, Toggle dark mode
- Almost every dynamic feature uses state.
- State can store anything
```jsx
import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Siri",          // string
    age: 25,               // number
    isLoggedIn: true,      // boolean
    address: { city: "NY" }, // object
    skills: ["React", "JS"]  // array
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Status: {user.isLoggedIn ? "Online" : "Offline"}</p>
      <p>City: {user.address.city}</p>
      <p>Skill: {user.skills[0]}</p>
    </div>
  );
}
```

### useEffect (Side Effects)
- A side effect = something that happens after the UI renders
- Examples: Calling an API, Setting a timer, Reading from localStorage, Adding event listeners
- These things are NOT part of rendering UI. They happen in the background. That’s why React gives us useEffect.
```jsx
useEffect(() => {
  // code runs here
}, []);
//Runs only one time

//With Dependency
useEffect(() => {
  console.log("Count changed");
}, [count]);
// runs whenever count changes

//No array
useEffect(() => {
  console.log("Runs every render");
});
//This runs: Every time the component updates (not recommended)
```
- Think of it like: “Run this code after the component appears on screen.”
```jsx
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

### Events & Forms
- In HTML `<button onclick="doSomething()">`, In react => `<button onClick={doSomething}>`
- Events - Button Clicks
```jsx
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
//With State
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```
- Input Fields(Typing): In React, inputs are usually controlled by state.
```jsx
function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```
- Display what user types
```jsx
function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello {name}</h1>
    </div>
  );
}
```
- Form submit: login form
```jsx
function App() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();  //This stops the page from reloading.
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
- CheckBox 
```jsx
function App() {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
```
- Controlled (most common): React controls the value using state
- Uncontrolled: DOM controls it, You read value using useRef
```jsx
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
```

### Routing
- Routing = Showing different components based on the URL.
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
```
- Navigation: moving between pages
```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/login">Login</Link>
```
Example
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
```
- Route Parameters(Dynamic URLs): Used when URL contains values.
```jsx
<Route path="/user/:id" element={<User />} />


import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

```
- Protected Routes (for logged in users only type)
```jsx
function Protected({ children }) {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Login />;
}

<Route
  path="/dashboard"
  element={
    <Protected>
      <Dashboard />
    </Protected>
  }
/>

```

### APIs using Axios
- An API is how your frontend talks to backend.
- fetch: Basic, Smaller projects, simple APIs (built-in)
- Axios: Comfortable, Large project, many API calls (npm install axios)
- Axios provides: Cleaner syntax, Auto JSON conversion, Better error handling
```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
```
- POST method
```jsx
axios.post("https://example.com/login", {
  email: email,
  password: password
});
```
- Real Login Example
```jsx
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios.post("https://example.com/login", {
      email,
      password
    })
    .then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
```
- Error Handling
```jsx
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
}, []);
```
- async/await
```jsx
useEffect(() => {
  async function fetchUsers() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  fetchUsers();
}, []);
```

### useContext (Global State)
- Prop Drilling = Passing props through many layers just to reach one component.
- So, instead use Context, lets you share data globally. So ANY component can access it directly. No prop passing needed.
- Context is commonly used for: Logged-in user info, Theme (dark/light), Language, Auth token
```jsx
//Create Context
import { createContext } from "react";

export const UserContext = createContext();

//Provide Data
import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState("Siri");

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

//Use Data anywhere
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserInfo() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

```

## What is React?

React is a **JavaScript library** for building **UI components**.
You build small reusable components, React updates the UI efficiently using a **virtual DOM + reconciliation**.

**Key ideas**

* **Component-based** UI
* **Declarative** rendering (describe what UI should look like for a state)
* **State-driven** updates

Created by: Facebook (Meta)

Used for:

* SPAs (Single Page Applications)
* Dashboards
* Admin panels
* E-commerce
* Enterprise UIs
* Mobile apps (React Native)


## Difference Between JavaScript and React

| Feature | JavaScript | React |
|---|---|---|
| Definition | A programming language used to build logic for web pages | A JavaScript library used to build user interfaces |
| Type | Core language | Library built on top of JavaScript |
| Purpose | Handles logic, DOM manipulation, events, calculations, API calls | Builds UI using reusable components |
| Usage | Used in frontend, backend (Node.js), mobile, and desktop apps | Mainly used for building frontend UI |
| Learning Order | Learn this first | Learn after understanding JavaScript |
| DOM Handling | Direct DOM manipulation using `document.getElementById()` etc. | Uses Virtual DOM for faster updates |
| Code Style | Imperative (tell step by step what to do) | Declarative (describe what UI should look like) |
| Reusability | Functions can be reused | Components are reusable UI blocks |
| Performance | Slower UI updates if DOM is updated frequently | Faster due to Virtual DOM diffing |
| File Structure | No fixed structure | Component-based folder structure |
| State Management | Manual handling using variables | Built-in state using hooks (`useState`) |
| Event Handling | Direct JS event listeners | React synthetic events (`onClick`, `onChange`) |
| Data Flow | Flexible, no strict pattern | One-way data flow (Parent → Child via props) |
| Syntax | Plain JS syntax | JSX (HTML inside JavaScript) |
| Example | `document.getElementById("title").innerText = "Hi"` | `<h1>{title}</h1>` |
| Dependency | Runs in browser directly | Needs JavaScript to work |
| Ecosystem | Very large (Node, Express, etc.) | Part of frontend ecosystem (Redux, Router, Hooks) |

## Simple Summary

- **JavaScript** = Language  
- **React** = Library built using JavaScript  

JavaScript controls:
- Logic  
- API calls  
- DOM  

React controls:
- UI  
- Components  
- State-driven rendering  

## Setup & Tooling

### Create a React app (modern)
Before you can build a React app, you need a starter environment that already has:
- React installed
- Development server
- Folder structure
- Build tools (so the app runs in the browser)

Instead of creating all this manually, we use tools like Vite or Create React App (CRA).

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

Inside your project, you’ll see a folder called src. This is where all your actual React code lives.
```
src/main.jsx or src/index.js (entry point, It connects: React → HTML page)


src/App.jsx (root component, The main screen of your app, Everything starts here)
src/components/ (reusable components, This folder stores small reusable UI parts. Examples: Button.jsx, Navbar.jsx, Card.jsx, UserProfile.jsx)

src/pages/ (route screens, These represent full pages. Examples: Home.jsx, Login.jsx, Dashboard.jsx, Profile.jsx)

src/hooks/ (custom hooks) - This folder stores reusable logic using React hooks. Example: useAuth.js, useFetch.js, useForm.js
Purpose: Instead of repeating logic everywhere, you create a custom hook and reuse it.

src/services/ (API calls) - This folder keeps backend communication code. Examples: userService.js, authService.js, postService.js
Here you: Call APIs, Send data to server, Get data from server

src/utils/ (helpers) - This folder contains small utility functions. Examples: formatDate.js, calculateAge.js, validateEmail.js
These are pure JavaScript helpers used anywhere.
```

## JSX (React Syntax)

JSX looks like HTML but it’s JavaScript.

* Use `{}` to embed JS expressions.
* Attributes use camelCase (e.g., `className`, `onClick`).
* Must return one parent element (or `<>...</>` fragment).

**Example:**

```jsx
const name = "Siri";
return <h1>Hello, {name}</h1>;
```

## Components
In React, components are reusable pieces of UI written as functions. 
### Functional Components (standard)
A functional component simply returns JSX, like a Button that returns <button>Click</button>.
```jsx
function Button() {
  return <button>Click</button>;
}
export default Button;
```

### Props (inputs to components)
Props are inputs passed from a parent component to a child component, and they are read-only. For example, UserCard receives name and role and displays them. 
```jsx
function UserCard({ name, role }) {
  return <div>{name} — {role}</div>;
}
<UserCard name="Alex" role="Admin" />
```

### Children prop
children lets you pass content inside a component’s tags. The Card component wraps whatever is placed inside it, like <Card><p>Hello</p></Card>, and displays that content inside its layout.
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
<Card><p>Hello</p></Card>
```

## Rendering Lists & Keys
When you have an array of data and want to show it in UI, you use .map().
```jsx
const items = ["A", "B", "C"];
return (
  <ul>
    {items.map((x) => <li key={x}>{x}</li>)}
  </ul>
);
```

### Keys
key helps React identify which item changed, added, or removed.
* Must be stable & unique.
* Avoid using array index as key if list order can change.
```jsx
//Bad
<li key={index}>  
```
```jsx
//Good
<li key={item.id}>
```

## Conditional Rendering
This means: show different UI based on a condition.
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

Short-circuit:

```jsx
{error && <p>{error}</p>}
```
If error exists → show message

If no error → show nothing

## State (useState)

State = data that can change and update the UI.

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
Better way to update state:
```jsx
setCount((prev) => prev + 1);
```
Use this when: updating based on previous value

### Objects/arrays in state (immutability)
Never change state directly.
✅ Do:

```jsx
setUser((u) => ({ ...u, name: "New" }));
setList((arr) => [...arr, "X"]);
```
What happens:
- Creates a new object/array
- React sees change
- Re-renders UI

❌ Don’t mutate:

```jsx
user.name = "New"; // wrong
list.push("X");    // wrong
```
React may not detect the change.
---

## Side Effects (useEffect)

Use `useEffect` for:

* API calls
* Subscriptions
* Timers
* Syncing with browser APIs
* Local storage
* DOM updates

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
This prevents: Memory leaks, Duplicate timers

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
This avoids setting state if component unmounts.

## Events & Forms
React handles events like JavaScript but with JSX.
### Events

```jsx
<button onClick={handleClick}>Click</button>
```

### Controlled input
React controls the input value:
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

## Refs (useRef)

Use refs to:

* Access DOM elements directly
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

## Memoization (Performance)
Used to prevent unnecessary re-renders.
### React.memo (memoize component)

Prevents rerender if props didn’t change.

```jsx
const Row = React.memo(function Row({ item }) {
  return <div>{item.name}</div>;
});
```

### useMemo (memoize computed value)
Stores computed values.

Runs only when: list changes, q changes
```jsx
const filtered = useMemo(() => heavyFilter(list, q), [list, q]);
```

### useCallback (memoize function reference)
Stores function reference
```jsx
const onSelect = useCallback((id) => setSelected(id), []);
```

> Tip: Don’t overuse. Use when rerenders are actually costly.

## Context API (Global-ish state)
Context API is used to share data across many components without passing props manually at every level.

Good for:
- Logged-in user info (auth)
- Theme (dark/light)
- Language settings

How it works:
- You create a Context
- Wrap your app with a Provider
- Any child component can access the data using useContext

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
- AuthProvider stores the user in state
- It shares { user, setUser } with all children
- Profile reads the user using useContext(AuthContext)

So instead of passing user → parent → child → child → child, Context lets any component directly access it.

---

## Routing (React Router)
Routing allows you to move between pages without reloading the website

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
Example pages: 
- / → Home
- /about → About page

Key parts:
- BrowserRouter → enables routing
- Routes → holds all routes
- Route → defines each path
- Link → used to navigate

Example:
- Clicking <Link to="/about"> takes you to About page.

### Params

```jsx
<Route path="/users/:id" element={<User />} />
const { id } = useParams();
```
You can read the ID from the URL.

Used for:
- Profile pages
- Product details
- Post pages

## Data Fetching (Best Practices)

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

## State Management Options
State = data that controls UI.

Local state  (Used inside one component.)
- useState 
- useReducer

App-wide state
- Context (simple apps)
- Redux Toolkit (large apps)
- Zustand (easy global store)
- MobX / Recoil (other styles)

### useReducer (complex state)
Works like Redux but local.
```jsx
function reducer(state, action) {
  switch(action.type) {
    case "inc": return { ...state, count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```
Used when:
- Many state changes
- Complex updates

## Component Patterns You Must Know

### Lifting state up

If two components need the same data:
- Move state to their parent
- Pass it down as props

This keeps data in one place.

### Controlled vs Uncontrolled

Controlled: React controls input via state (most common)

Uncontrolled: DOM keeps value, read using ref

### Composition

Prefer composition over “too many props”.
Use children, slots, wrapper components.

---

## Hooks Rules (VERY IMPORTANT)

Rules:

* Only call hooks at top level (not inside loops/if).
* Only call hooks inside React components or custom hooks.

Common hooks:
- useState → state
- useEffect → side effects
- useRef → DOM access
- useMemo → cache value
- useCallback → cache function
- useContext → read global data
- useReducer → complex state

Advanced:
- useLayoutEffect
- useTransition
- useDeferredValue

## Custom Hooks

Make reusable logic:

```jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
```
Now any component can use:

const [isOn, toggle] = useToggle();

This keeps logic clean and reusable.

## Error Boundaries

Error boundaries catch UI errors and prevent the whole app from crashing.

By default, React doesn’t catch: async errors, API errors, event handler errors

## React Rendering & Virtual DOM (Interview)

* React builds a virtual tree of UI.
* On state/props change, React re-renders (recomputes UI).
* Then React compares old vs new tree (diffing) and updates real DOM minimally (reconciliation).

Re-render ≠ full page reload
Re-render ≠ full DOM update

## Strict Mode (Dev behavior)

In React 18, StrictMode can run certain lifecycles/effects twice in development to find side-effect bugs. Production does not do this.

## Styling Options
React doesn’t force one styling method. You can choose how to style your UI.
* CSS / SCSS

This is the normal way: Write styles in .css or .scss files. Import them into components
```js
import "./App.css";
```
SCSS is just advanced CSS with variables, nesting, etc.

Good for: Simple projects, Traditional styling

* CSS Modules : CSS Modules avoid style conflicts.
```js
//Button.module.css

import styles from "./Button.module.css";

<button className={styles.btn}>Click</button>

```
Benefit: Styles are scoped only to that component, No global conflicts

* Tailwind CSS: Instead of writing CSS files, you use utility classes directly in JSX.
```js
<button className="bg-blue-500 text-white p-2 rounded">
  Click
</button>
```
```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Why people love Tailwind: Fast styling, No CSS file needed, Consistent design, Used in modern companies

* Styled-components / Emotion: Write CSS inside JavaScript.
```js
const Button = styled.button`
  background: blue;
  color: white;
`;
```
Benefits: Component-level styling, Dynamic styles using props

* Component libraries (MUI, Chakra, AntD) - Pre-built UI components you can use directly.

Popular ones: MUI (Material UI), Chakra UI, Ant Design

They provide: Buttons, Forms, Modals, Tables, Layouts

Good for: Faster development, Professional UI quickly

## Testing (React Testing Library)
Testing checks if your UI behaves correctly.

You test things like: Button click, Text showing, Form submission
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
What this does:
- Renders the Counter component
- Checks if "0" is visible on screen

## Security Basics

* Prevent XSS: don’t dangerously inject HTML.
* If you must use `dangerouslySetInnerHTML`, sanitize content.
* Use HTTPS, secure cookies, CSRF protections (backend).

# Higher Order Components (HOC)

Component that wraps another component.


# Forms Libraries

- Formik
- React Hook Form

# SSR vs CSR

CSR:
React SPA

SSR:
Next.js

# Next.js (VERY IMPORTANT)

Production React framework.

Features:

* SSR
* SEO
* Routing
* Performance

# Micro-Frontend Architecture

Split frontend into multiple apps.

# Testing React

- Jest
- React Testing Library

# Performance Metrics
- TTI
- LCP
- CLS

# Accessibility in React

- ARIA labels
- Keyboard navigation

# Deployment

- Netlify
- Vercel
- AWS

# Build Tools

- Webpack
- Vite

# React DevTools

Inspect components/state.

# Common React Mistakes

* Missing keys
* Too many re-renders
* Mutating state

# Real Production Architecture

* API layer
* State layer
* UI layer
* Routing layer

# React System Design Thinking

Think in:

* Components
* State flow
* Data flow


## Common  Q&A (Quick)

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
