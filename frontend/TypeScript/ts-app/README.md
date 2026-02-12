# 🧩 Project: User Manager (Pure TypeScript + HTML)

A simple real-world mini project using:

* Form input
* Button click
* Type-safe object
* Class usage
* DOM update
* TypeScript compilation

---

# 📁 Folder Structure

```
project/
 ├── index.html
 ├── app.ts
 ├── app.js   (generated)
 └── tsconfig.json
```

---

# 🪜 Step 1 — Install TypeScript

Install globally:

```bash
npm install -g typescript
```

Check installation:

```bash
tsc -v
```

---

# 🪜 Step 2 — Create tsconfig

Initialize TypeScript configuration:

```bash
tsc --init
```

This creates:

```
tsconfig.json
```

---

# 🪜 Step 3 — HTML Page

## `index.html`

# 🪜 Step 4 — TypeScript Code

## `app.ts`

# 🪜 Step 5 — Compile TypeScript

Run:

```bash
tsc app.ts
```

This generates:

```
app.js
```

---

# 🪜 Step 6 — Run the Project

Open:

```
index.html
```

Now:

1. Enter name
2. Enter age
3. Click **Add User**
4. User appears in the list

---

# 🧠 Concepts Covered

This single project demonstrates:

* Interfaces
* Classes
* Arrays
* Encapsulation
* Type safety
* DOM manipulation
* Event handling
* Type assertions

---

# 📌 Optional: Add API Simulation

Append to `app.ts`:

```ts
type ApiUser = {
  name: string;
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then((data: ApiUser[]) => {
    console.log(data);
  });
```

---

# 💡 Why This Project Is Useful

This is a strong foundation for:

* Learning TypeScript without frameworks
* Understanding DOM + types
* Building small tools
* Preparing for larger TS apps

---

# 🚀 Next Practice Ideas (Pure TypeScript)

* Todo app
* Form validator
* Counter app
* Mini dashboard
* LocalStorage-based app
