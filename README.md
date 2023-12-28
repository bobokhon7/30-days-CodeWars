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

#### Q: Super Duper Easy

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

#### Q: Friend or Foe?

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

#### Q: A Needle in the Haystack

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

#### Q: Correct the mistakes of the character recognition software

> 8 kyu

###### Description:

> Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

```javascript
function correct(string) {
  //code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function correct(string) {
  let newArr = string.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "0") {
      newArr[i] = "O";
    } else if (newArr[i] === "5") {
      newArr[i] = "S";
    } else if (newArr[i] === "1") {
      newArr[i] = "I";
    }
  }
  return newArr.join("");
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
// Using template literals, simply return the string, with the injected 'indexOf'

function correct(string) {
  return string.replaceAll("0", "O").replaceAll("1", "I").replaceAll("5", "S");
}
```

</details>

</details>

---

</details>

</details>

<!-- Day 1 ----------------------------------- -->

<details><summary><b>Day 1</b></summary>

#### Q: Merge two sorted arrays into one

> 8 kyu

###### Description:

> You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)

```javascript
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
```

```javascript
function mergeArrays(arr1, arr2) {
  //code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function mergeArrays(arr1, arr2) {
  let newArr = arr1.concat(arr2).sort((a, b) => a - b);
  return newArr.filter((value, index) => newArr.indexOf(value) === index);
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
```

</details>

</details>

</details>
</details>

---

<!-- day 2 ------------------ -->
<details><summary><b>Day 2</b></summary>

#### Q: Count the smiley faces!

> 6 kyu

###### Description:

> Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example

```javascript
countSmileys([":)", ";(", ";}", ":-D"]); // should return 2;
countSmileys([";D", ":-(", ":-)", ";~)"]); // should return 3;
countSmileys([";]", ":[", ";*", ":$", ";-D"]); // should return 1;
```

> Note
> In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

```javascript
function countSmileys(arr) {
  //code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function countSmileys(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === ":)" ||
      arr[i] === ":-)" ||
      arr[i] === ":~)" ||
      arr[i] === ";)" ||
      arr[i] === ";-)" ||
      arr[i] === ";~)"
    ) {
      newArr.push(arr[i]);
    } else if (
      arr[i] === ":D" ||
      arr[i] === ";-D" ||
      arr[i] === ";~D" ||
      arr[i] === ":-D" ||
      arr[i] === ";D" ||
      arr[i] === ":~D"
    ) {
      newArr.push(arr[i]);
    }
  }

```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function countSmileys(arr) {
  var smileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D",
  ];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}
```

</details>

---

#### Q: Small enough? - Beginner

> 7 kyu

###### Description:

> You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.

```javascript
function smallEnough(a, limit) {
  //code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function smallEnough(a, limit) {
  let newArr = a.sort((a, b) => a - b).pop();
  return newArr <= limit ? true : false;
}
```

</details>

---

<details><summary><b>Best Answer</b></summary>

```javascript
function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}
```

</details>

</details>

</details>

</details>
</details>

---

<details><summary><b>Day 3</b></summary>

#### Q: Transportation on vacation

> 8 kyu

###### Description:

> After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

```javascript
function rentalCarCost(d) {
  // Your solution here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function rentalCarCost(d) {
  if (d >= 3 && d <= 6) {
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  } else {
    return d * 40;
  }
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}
```

</details>

</details>

</details>
</details>

---

<details><summary><b>Day 4</b></summary>

#### Q: Form The Minimum

> 7 kyu

###### Description:

> Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

> Notes:
> Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
> Input >> Output Examples

> example

```javascript
minValue([5, 7, 5, 9, 7])  ==> return (579)
```

```javascript
function minValue(values) {
  //code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function minValue(values) {
  let remVal = Array.from(new Set(values));
  let sortValues = remVal.sort((a, b) => a - b).join("");

  return Number(sortValues);
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function minValue(values) {
  return Number(Array.from(new Set(values)).sort().join(""));
}
```

</details>

</details>

</details>
</details>

---

<details><summary><b>Day 5</b></summary>

#### Q: Factorial

> 7 kyu

###### Description:

> In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.

```javascript
function factorial(n) {
  //CODE IS HERE
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function factorial(n) {
  if (n < 0 || n > 12) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    let arr = 1;
    for (let i = 1; i <= n; i++) {
      arr = arr * i;
    }
    return arr;
  }
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
/function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
```

</details>

</details>

</details>
</details>

---

<details><summary><b>Day 6</b></summary>

#### Q: Check the exam

> 7 kyu

###### Description:

> The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

> For example:

```javascript
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
```

```javascript
function checkExam(array1, array2) {
  //Code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function checkExam(array1, array2) {
  let newValue = 0;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        newValue += 4;
      } else if (array2[i] === "") {
        newValue += 0;
      } else {
        newValue -= 1;
      }
    }
  }

  return newValue < 0 ? 0 : newValue;
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function checkExam(array1, array2) {
  var marks = 0;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      marks += 4;
    } else if (array2[i] == "") {
      marks += 0;
    } else {
      marks -= 1;
    }
  }
  if (marks < 0) {
    return 0;
  } else {
    return marks;
  }
}
```

</details>

</details>

</details>
</details>

---

<details><summary><b>Day 7</b></summary>

#### Q: Fix string case

> 7 kyu

###### Description:

> In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

> For example:

```javascript
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
```

```javascript
function solve(s) {
  //Code is here
}
```

<details><summary><b>My Answer</b></summary>

```javascript
function solve(s) {
  let lowerLetter = [];
  let upperLetter = [];

  let val = s.split("");

  for (let i = 0; i < val.length; i++) {
    if (val[i] === val[i].toUpperCase()) {
      upperLetter.push(val[i]);
    } else {
      lowerLetter.push(val[i]);
    }
  }

  if (upperLetter.length > lowerLetter.length) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}
```

</details>

<details><summary><b>Best Answer</b></summary>

```javascript
function solve(s) {
  let lowerC = 0;
  let upperC = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      upperC++;
    } else {
      lowerC++;
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase();
}
```

</details>

</details>

</details>
</details>
