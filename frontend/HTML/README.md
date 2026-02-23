# HTML

> HTML = HyperText Markup Language  
> It is the standard language used to create webpages.

---

# What is HTML?

HTML is a markup language that structures web content using elements (tags).

It defines:
- Headings
- Paragraphs
- Links
- Images
- Forms
- Tables
- Layout structure

HTML does NOT:
- Style the page → CSS does that
- Add logic → JavaScript does that

---

# Basic Structure of an HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

## Explanation

- `<!DOCTYPE html>` → Defines HTML5
- `<html>` → Root element
- `<head>` → Metadata (not visible)
- `<body>` → Visible content

---

## HTML Elements

### Syntax

```html
<tagname>Content</tagname>
```

### Example:
```html
<p>This is a paragraph</p>
```
### Void Elements (No closing tag)
```html
<br>
<hr>
<img>
<input>
<meta>
```
## Headings
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

`<h1>` is most important

`<h6>` is least important

## Paragraph & Text Formatting
```html
<p>Paragraph</p>
<b>Bold</b>
<strong>Important</strong>
<i>Italic</i>
<em>Emphasis</em>
<mark>Highlight</mark>
<small>Small text</small>
<del>Deleted</del>
<ins>Inserted</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
```
## Links
```html
<a href="https://google.com">Go to Google</a>
```
Open in new tab:
```html
<a href="https://google.com" target="_blank">Open</a>
```
## Images
```html
<img src="image.jpg" alt="Description">
```
### Attributes:
- src → image path
- alt → accessibility text
- width
- height

## Lists
Unordered List
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
Ordered List
```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```
Description List
```html
<dl>
  <dt>HTML</dt>
  <dd>Markup Language</dd>
</dl>
```
## Tables
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
```
Tags:
- `<table>`
- `<tr>` → row
- `<th>` → header
- `<td>` → data

## Forms
```html
<form>
  <label>Name:</label>
  <input type="text">
  
  <label>Password:</label>
  <input type="password">
  
  <input type="submit">
</form>
```
Input Types
- text
- password
- email
- number
- date
- radio
- checkbox
- file
- submit
- button

## Semantic HTML (Important)

Semantic elements describe meaning.
```html
<header>
<nav>
<section>
<article>
<aside>
<footer>
<main>
```
Why important?
- SEO
- Accessibility
- Clean structure

## Div vs Span
```html
<div>Block element</div>
<span>Inline element</span>
```
- div → block container
- span → inline container

## HTML Attributes
```html
<tag attribute="value">
```
Common attributes:
- id
- class
- style
- title
- href
- src
- alt

Example:
```html
<p id="intro" class="text">Hello</p>
```

## Meta Tags
```html
<meta charset="UTF-8">
<meta name="description" content="My website">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## Audio & Video
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```
## Iframes
```html
<iframe src="https://example.com"></iframe>
```
## HTML Entities
```
&lt;   <
&gt;   >
&amp;  &
&nbsp; space
```
## HTML5 APIs
- Geolocation
- Drag & Drop
- Web Storage (localStorage, sessionStorage)
- Canvas
- WebSockets

## Global Attributes

Available on all elements:
- id
- class
- style
- title
- hidden
- data-*

Example:
```html
<div data-user="123"></div>
```

## Accessibility (A11Y)
- Use `alt` on images
- Use proper headings
- Use semantic elements
- Use `aria-*` attributes

Example:
```html
<button aria-label="Close menu">X</button>
```

## SEO Best Practices
- One `<h1>` per page
- Use semantic HTML
- Proper meta description
- Descriptive alt text
- Clean URL structure

## Block vs Inline Elements

### Block
- div
- p
- h1–h6
- section
- article

### Inline
- span
- a
- img
- strong
- em

## HTML4 vs HTML5

HTML5 introduced:
- Semantic tags
- Audio & video
- Canvas
- Local storage
- New form input types

## DOM (Document Object Model)

HTML creates a tree structure.

Example:
```
html
 ├── head
 └── body
      ├── h1
      └── p
```
JavaScript interacts with this DOM.

## Best Practices
- Use lowercase tags
- Close all elements
- Use semantic structure
- Separate HTML, CSS, JS
- Validate HTML

### Interview Quick Questions

Q: What is HTML?
Markup language for structuring web content.

Q: What is semantic HTML?
Tags that describe meaning of content.

Q: Difference between div and span?
Div = block, Span = inline.

Q: What is the purpose of DOCTYPE?
Tells browser to use HTML5.

### Final Summary

HTML is:
- The structure of the web
- Easy to learn
- Foundation of frontend development
- Used together with CSS & JavaScript