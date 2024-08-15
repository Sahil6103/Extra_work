// Write a JavaScript function that reverses a number.

let x = 32243; // number

// converting number into string then split each character of string then reverse them and after the reverse again join them into string
let str = String(x).split("").reverse().join("");

// print reverse number
let num = Number(str);
console.log(str);
