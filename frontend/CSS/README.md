# CSS 

> CSS = Cascading Style Sheets  
> CSS is used to style and layout HTML elements.

---

# What is CSS?

CSS controls:
- Colors
- Fonts
- Spacing
- Layout
- Animations
- Responsive design

HTML = Structure  
CSS = Style  
JavaScript = Behavior  

---

# Ways to Add CSS

## Inline CSS

```html
<p style="color: red;">Hello</p>
```

## Internal CSS
```css
<style>
p {
  color: red;
}
</style>
```
## External CSS (Best Practice)
```css
<link rel="stylesheet" href="styles.css">
```

# CSS Syntax
```css
selector {
  property: value;
}
```
Example:
```css
p {
  color: blue;
  font-size: 16px;
}
```
# CSS Selectors
Basic Selectors
```css
/* Element selector */
p { }

/* Class selector */
.box { }

/* ID selector */
#header { }

/* Universal selector */
* { }
```
Group Selector
```css
h1, h2, p {
  color: red;
}
```
Descendant Selector
```css
div p {
  color: green;
}
```
Child Selector
```css
div > p {
  color: blue;
}
```
Attribute Selector
```csss
input[type="text"] {
  border: 1px solid black;
}
```

# CSS Colors
```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: hsl(0, 100%, 50%);
```
# CSS Units
Absolute Units
- px
- cm
- mm
- in

Relative Units
- %
- em
- rem
- vw
- vh

Example:
```css
font-size: 16px;
width: 50%;
height: 100vh;
```
# Box Model (Very Important)

Every element is a box.
```
Content
Padding
Border
Margin
```
```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```
box-sizing
```css
box-sizing: border-box;
```

# Background Properties
```css
background-color: yellow;
background-image: url("image.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
```
# Text & Font Styling
```css
color: blue;
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 2px;
line-height: 1.5;
```
Font
```css
font-family: Arial, sans-serif;
font-size: 18px;
font-weight: bold;
```

# Display Property
```css
display: block;
display: inline;
display: inline-block;
display: none;
```
# Positioning
Static (default)
```css
position: static;
```
Relative
```css
position: relative;
top: 10px;
```
Absolute
```css
position: absolute;
top: 0;
left: 0;
```
Fixed
```css
position: fixed;
```
Sticky
```css
position: sticky;
top: 0;
```
# Flexbox (Very Important)

Used for layout.
```css
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
```
Common Properties
- justify-content
- align-items
- align-content
- flex-direction
- flex-wrap

# CSS Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
```

# Overflow
```css
overflow: hidden;
overflow: scroll;
overflow: auto;
```

# Border & Outline
```css
border: 2px solid black;
border-radius: 10px;
outline: 1px solid red;
```

# Shadows
```css
box-shadow: 5px 5px 10px gray;
text-shadow: 2px 2px 5px black;
```

# Transitions
```css
transition: all 0.3s ease;
```
Example:
```css
button:hover {
  background: blue;
}
```

# Animations
```css
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

div {
  animation: slide 2s infinite;
}
```
# Media Queries (Responsive Design)
```css
@media (max-width: 768px) {
  body {
    background: lightblue;
  }
}
```
# Pseudo-Classes
```css
a:hover { }
a:active { }
input:focus { }
li:first-child { }
```
# Pseudo-Elements
```css
p::before { }
p::after { }
p::first-letter { }
p::first-line { }
```

# Z-Index
```css
z-index: 10;
```
Used with positioned elements.

# CSS Variables
```css
:root {
  --primary-color: blue;
}

p {
  color: var(--primary-color);
}
```
# Important Keyword
```css
color: red !important;
```
Avoid overusing it.

# Specificity

Priority order:

Inline > ID > Class > Element

Example:
```css
#id { }
.class { }
p { }
```
# Best Practices
- Use external CSS
- Use semantic class names
- Avoid !important
- Use Flexbox/Grid for layout
- Keep CSS organized

#### Interview Quick Questions

Q: What is CSS?
Language used to style HTML.

Q: What is box model?
Content + Padding + Border + Margin.

Q: Difference between Flexbox and Grid?
Flexbox = 1D layout
Grid = 2D layout

Q: What is specificity?
Rule priority in CSS.

Final Summary

- Controls design
- Makes websites responsive
- Works with HTML
- Essential for frontend development