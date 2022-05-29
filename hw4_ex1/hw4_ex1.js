"use strict";
/*
Exercise 1:
Remember exercise 5 in homework assignment 1? The solution included implementing a list of
Student objects. Student class inherits from Person class. In this exercise we will work with
class-based inheritance in JavaScript. Create class Person, create class Student that inherits from
class Person. Implement any methods/getters necessary to complete this exercise.
Create an array of the following Student objects:
Mike Smith, 21 yo, 3.7 gpa, Senior status
Larry Mushroom, 19 yo, 2.1 gpa, Sophomore status
Marry Wolf, 22 yo, 3.2 gpa, Senior status
Tommy Tree, 20 yo, 3.5 gpa, Sophomore status
Laura Tall, 21 yo, 3.1 gpa, Junior status
Amy Paris, 18 yo, 3.9 gpa, Freshman status
Sort this array of students based on the student gpa, in descending order. Output this sorted list to
an html element in the page.
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
// 3, Define a function to sort with gpa
function insertionSortWithGpa(students) {
  for (let j = 1; j < students.length; j++) {
    let key = students[j];
    let i = j - 1;
    while (i >= 0 && key.gpa > students[i].gpa) {
      students[i + 1] = students[i];
      i = i - 1;
    }
    students[i + 1] = key;
  }
  for (let i = 0; i < students.length; i++) {
    //console.log(students[i].name, "(" + students[i].gpa + ")");
    document.writeln(students[i].name, "(" + students[i].gpa + ")");
  }
}

//4, The main portion: create a Student object array then to sort with gpa
const Mike_Smisth = new Student("Mike", "Smith", 21, 3.7, "Senior");
const Larry_Mushroom = new Student("Larry", "Mushroom", 19, 2.1, "Sophomore");
const Marry_Wolf = new Student("Marry", "Wolf", 22, 3.2, "Senior");
const Tommy_Tree = new Student("Tommy", "Tree", 20, 3.5, "Sophomore");
const Laura_Tall = new Student("Laura", "Tall", 21, 3.1, "Junior");
const Amy_Paris = new Student("Amy", "Paris", 18, 3.9, "Freshman");

const s = [
  Mike_Smisth,
  Larry_Mushroom,
  Marry_Wolf,
  Tommy_Tree,
  Laura_Tall,
  Amy_Paris,
];

insertionSortWithGpa(s);
