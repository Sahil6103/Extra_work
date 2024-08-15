// Write a JavaScript program to display the current day and time in the following format.

// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// days array to get day name
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// date function
var d = new Date();
var day = d.getDay();
var dayName = days[day];

// getting hours, minutes and seconds
let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

// adding AM / PM according time
let ampm = hr >= 12 ? "PM" : "AM";

// clock format in 12 hour
hr = hr % 12;
hr = hr ? hr : 12;

console.log(`Today is : ${dayName}`);
console.log(`Current time is : ${hr} ${ampm} : ${min} : ${sec}`);
