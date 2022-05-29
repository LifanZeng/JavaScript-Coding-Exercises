"use strict";
/*
Exercise 3:
In this exercise we will work with prototypes and prototype inheritance. Please review all the
prototype related examples in the JavaScript lecture module prior to completing this exercise.
Create a function called Person(). This function should set the following properties:
firstname
lastname
age
fullname
Property fullname should be defined by a function that concatenates firstname and lastname
properties.
Define a function named initialize to the Person.prototype:
Person.prototype.initialize = function(firstname, lastname, age){
your code goes here
}
This function will initialize the values of the Person properties.
Create a variable called Student, which is an empty function. Set prototype of Student to Person.
Add a function named learn to the Student prototype. This function will return the full name
followed by “ just learned “, followed by the name of the subject, which should be the input
parameter into this function.
Create variable for a new student. Initialize the student’s properties to Mike Smith, 21 years old.
Output the result of learn() function to an html element in the page. Pass “CS152” for the
subject.
*/

function Person() {
  this.fullname = {
    firstname: "",
    lastname: "",
  };
  this.age = 0;
}

Person.prototype.initialize = function (firstname, lastname, age) {
  this.fullname = {
    firstname: firstname,
    lastname: lastname,
  };
  this.age = age;
};

Person.prototype.learn = function (subject) {
  // console.log(
  //   Student.fullname.firstname,
  //   Student.fullname.lastname + " just learned " + subject
  // );
  document.writeln(
    Student.fullname.firstname,
    Student.fullname.lastname + " just learned " + subject
  );
};

const Student = new Person();
Student.initialize("Mike", "Smith", 21);
Student.learn("CS152");
