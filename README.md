<div align="center">
  <img height="60" src="./assets/codewars_button_icon.png">
  <h1>30 Days Codewars</h1>

---

<span>Hello World! I love solving coding problems, especially on <a href="https://www.codewars.com/">codewars</a>. So, I decided to share my 30-days-of-solving-codewars-problems journey here. Have a look 👇</span>

<span>Everyday I will solve one question from codewars and share below. It will include the question, my answer and one or two best answers from codewars community.</span>

Btw, feel free to reach out to me! 🌐 <br />
<a href="https://twitter.com/Bobokhon7">Twitter</a> || <a href="https://www.linkedin.com/in/bobokhon/">LinkedIn</a> || <a href="https://dev.to/bobokhon7">Blog</a>

</div>

---

<details><summary><b>Day 0</b></summary>

#### Get the Middle Character?

> 8 kyu

###### Description:

> Make a function that returns the value multiplied by 50 and increased by 6.If the value entered is a string it should return "Error"

```javascript
function problem(x) {
  //code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function problem(x) {
  if (typeof x === "number") {
    return x * 50 + 6;
  } else {
    return "Error";
  }
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}
```

</details>

</details>

---
