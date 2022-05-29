"use strict";
/*
Exercise 4:
Implement a recursive solution for computing the length of a string in JavaScript. Name your
function strLen(text), where text is the string for which the length is computed. Output the result
of this function for the following string to an html element in the page:
The length of this string is

The expected output is: 
The length of this string is: 28
*/

function strLen(text) {
  if (text === "") {
    return 0;
  } else {
    return strLen(text.substring(1)) + 1;
  }
}

// console.log(
//   "The length of this string is: " + strLen("The length of this string is")
// );
document.writeln(
  "The length of this string is: " + strLen("The length of this string is")
);
