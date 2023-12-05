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

#### Super Duper Easy

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

---

#### Friend or Foe?

> 7 kyu

###### Description:

> Make a program that filters a list of strings and returns a list with only your friends name in it.
> If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

```javascript
friend[("Ryan", "Kieran", "Mark")]`shouldBe`[("Ryan", "Mark")];
```

```javascript
function friend(friends) {
  //code here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function friend(friends) {
  let myFriends = [];
  for (i = 0; i < friends.length; i++) {
    friends[i].trim().length === 4 ? myFriends.push(friends[i]) : "it works😅";
  }
  return myFriends;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
```

</details>

</details>

---

#### A Needle in the Haystack

> 8 kyu

###### Description:

> Can you find the needle in the haystack?

> Write a function findNeedle() that takes an array full of junk but containing one "needle"

> After your function finds the needle it should return a message (as a string) that says:

> "found the needle at position " plus the index it found the needle, so:

> Example(Input --> Output)

```javascript
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

```

```javascript
function findNeedle(haystack) {
  //code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function findNeedle(haystack) {
  let position = haystack.indexOf("needle");

  return position != -1
    ? `found the needle at position ${position}`
    : `Your function didn't return anything'`;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
// Using template literals, simply return the string, with the injected 'indexOf'

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
```

</details>

</details>

---
