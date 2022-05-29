"use strict";
/*
Exercise 2:
Let’s modify exercise 1 to count how many students of different status there are in the array of
students. This is similar to part 2 of exercise 5 in homework 1. Submit this exercise separately
from exercise 1 of this homework assignment.
Iterate over the list of student objects and store counts of each student status in a map. Sort this
map by counts in ascending order. Output this sorted map to an html element in the page.
*/

// 1, Define a class Person
class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  get name() {
    return this.first + " " + this.last;
  }
}
// 2, Define a class Student
class Student extends Person {
  constructor(first, last, age, gpa, status) {
    super(first, last, age);
    this.gpa = gpa;
    this.status = status;
  }
}

//3, The main portion: create a Student object array, then to count with status
const Mike_Smisth = new Student("Mike", "Smith", 21, 3.7, "Senior");
const Larry_Mushroom = new Student("Larry", "Mushroom", 19, 2.1, "Sophomore");
const Marry_Wolf = new Student("Marry", "Wolf", 22, 3.2, "Senior");
const Tommy_Tree = new Student("Tommy", "Tree", 20, 3.5, "Sophomore");
const Laura_Tall = new Student("Laura", "Tall", 21, 3.1, "Junior");
const Amy_Paris = new Student("Amy", "Paris", 18, 3.9, "Freshman");

const students = [
  Mike_Smisth,
  Larry_Mushroom,
  Marry_Wolf,
  Tommy_Tree,
  Laura_Tall,
  Amy_Paris,
];

const statuses = new Map([
  ["Freshman", 0],
  ["Sophomore", 0],
  ["Junior", 0],
  ["Senior", 0],
]);

for (let i = 0; i < students.length; i++) {
  switch (students[i].status) {
    case "Freshman":
      statuses.set("Freshman", statuses.get("Freshman") + 1);
      break;
    case "Sophomore":
      statuses.set("Sophomore", statuses.get("Sophomore") + 1);
      break;
    case "Junior":
      statuses.set("Junior", statuses.get("Junior") + 1);
      break;
    case "Senior":
      statuses.set("Senior", statuses.get("Senior") + 1);
      break;
    default:
      alert("Status errors!");
  }
}

// Sort the map by counts in ascending order
const statusArray = [
  ["Freshman", statuses.get("Freshman")],
  ["Sophomore", statuses.get("Sophomore")],
  ["Junior", statuses.get("Junior")],
  ["Senior", statuses.get("Senior")],
];

for (let j = 1; j < statusArray.length; j++) {
  let key = statusArray[j];
  let i = j - 1;
  while (i >= 0 && key[1] < statusArray[i][1]) {
    statusArray[i + 1] = statusArray[i];
    i = i - 1;
  }
  statusArray[i + 1] = key;
}
for (let i = 0; i < statusArray.length; i++) {
  //console.log(statusArray[i][0], ": " + statusArray[i][1]);
  document.writeln(statusArray[i][0], ": " + statusArray[i][1]);
}
