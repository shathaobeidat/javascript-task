//Exercise-1 
/*
console.log(name);//undefind 
var name = "Jone"; 
function test() { 
var x = 10;
if (true) { 
var y = 20; 
} 
console.log(y); //20 var is function block 
} 
test(); 
// console.log(x);

//2 var is global variable defined as a function scpoe not a block scope
//3  Function scope restricts variable access strictly within the enclosing function, while block scope restricts access to any enclosing pair of curly braces `{}` 
//4
let name = "Jone"; 
console.log(name);
function test() { 
var x = 10;
if (true) { 
let y = 20; 
console.log(y); //let is block scope
} 
} 
test(); 
*/
//Exercise 2
function Person (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
};

function Employee (name, age, empid, position) {
  Person.call(this, name, age);
  this.empid = empid;
  this.position = position;
}


Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
  return "Hello, I'm " + this.name + ", working as a " + this.position + " (ID: " + this.empid + ").";
};

var emp1 = new Employee("Alice", 28, "EMP101", "Software Engineer");
var emp2 = new Employee("Bob", 34, "EMP102", "Project Manager");
var emp3 = new Employee("Charlie", 22, "EMP103", "UI/UX Designer");

console.log(emp1.greet());
console.log(emp2.greet());
console.log(emp3.greet());

 ////////////////Arrays & JSON
//Exercise 3

var groupA = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Mallory", "Niaj", "Olivia", "Peggy", "Rupert", "Sybil", "Trent", "Victor", "Walter", "Xavier", "Yvonne", "Zelda", "Arthur", "Beatrice", "Cora"];
var groupB = ["Daniel", "Eleanor", "Felix", "Gemma", "Henry", "Isabel", "Jack", "Kira", "Liam", "Maya", "Noah", "Ophelia", "Penelope", "Quinn", "Riley", "Sophia", "Thomas", "Ulysses", "Violet", "William", "Xander", "Yara", "Zachary", "Sami", "Layla"];
//1
var allStudents = groupA.concat(groupB);
//2
allStudents.sort();
//3
allStudents.reverse();
//4
console.log("Is Alice in list?:", allStudents.includes("Alice"));
// 5.
allStudents.forEach(function (student, index) {
  console.log(index + 1 + ". " + student);
});

//Exercise 4


var studentsList = [];
for (var i = 1; i <= 50; i++) {
  studentsList.push({
    id: 1000 + i,
    name: "Student_" + i,
    grade: Math.floor(Math.random() * 41) + 60
  });
}

// 1. 
studentsList.splice(2, 1); //remove
studentsList.splice(2, 0, { id: 9999, name: "New_Student", grade: 95 }); // Add
studentsList.splice(5, 1, { id: 8888, name: "Replaced_Student", grade: 88 }); // Replace

// 2. slice() 
var topPortion = studentsList.slice(0, 10);

// 3. Sort 
studentsList.sort(function (a, b) {
  return b.grade - a.grade;
});

// 4. Print using forEach()
studentsList.forEach(function (student, index) {
  console.log("#" + (index + 1) + " ID: " + student.id + " | Name: " + student.name + " | Grade: " + student.grade);
});
//Exercise 5
let product ={
   id :4,
   name :"Keyboard",
   price: 100,
   category : "Electronic",
   available:true}
   //jsvar=JSON.stringify(product);
   var jsvar = JSON.stringify(product, null,1);
   console.log("JSON String:",jsvar);
   try {
  var parsedProduct = JSON.parse(jsvar);
  console.log("Parsed Object:", parsedProduct);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

//exercise 6
var inventory = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", quantity: 10 },
  { id: 2, name: "Phone", price: 800, category: "Electronics", quantity: 25 },
  { id: 3, name: "Desk Chair", price: 150, category: "Furniture", quantity: 12 },
  { id: 4, name: "Monitor", price: 300, category: "Electronics", quantity: 18 },
  { id: 5, name: "Headphones", price: 100, category: "Audio", quantity: 40 },
  { id: 6, name: "Keyboard", price: 80, category: "Electronics", quantity: 30 },
  { id: 7, name: "Mouse", price: 40, category: "Electronics", quantity: 50 },
  { id: 8, name: "Coffee Table", price: 200, category: "Furniture", quantity: 8 },
  { id: 9, name: "Microphone", price: 120, category: "Audio", quantity: 15 },
  { id: 10, name: "Desk Lamp", price: 35, category: "Furniture", quantity: 22 }
];

var newItems = [
  { id: 11, name: "Webcam", price: 70, category: "Electronics", quantity: 14 },
  { id: 12, name: "Speakers", price: 110, category: "Audio", quantity: 9 }
];

// Sort by price
inventory.sort(function (a, b) { return a.price - b.price; });

// includes()
var categories = inventory.map(function (item) { return item.category; });
console.log("Has Audio?:", categories.includes("Audio"));

// splice()
inventory.splice(0, 1);

// slice()
var top5 = inventory.slice(0, 5);

// concat()
var fullInventory = inventory.concat(newItems);



// Exercise 7 - Arrow Function Transformation


const square = num => num * num;
const isEven = num => num % 2 === 0;
const calculateTotal = products => products.reduce((total, p) => total + p.price, 0);

const sampleNums = [1, 2, 3, 4, 5];
const sampleProds = [{ price: 10 }, { price: 20 }];

console.log("Map Squared:", sampleNums.map(num => square(num)));
console.log("Filter Even:", sampleNums.filter(num => isEven(num)));
console.log("Total Price:", calculateTotal(sampleProds));
// ==========================================
// Exercise 8 - Destructuring & Default Parameters
// ==========================================

const userProfile = {
  name: "Sarah Connor",
  email: "sarah@example.com",
  age: 29,
  address: "123 Tech St",
  skills: ["JavaScript", "React", "Node.js"]
};

// Object Destructuring 
const { name: fullName, email: userEmail, age: userAge } = userProfile;

// Array Destructuring
const [primarySkill, secondarySkill] = userProfile.skills;

// Function with Default Parameters
function createUser(username, role = "User", status = "Active") {
  return { username, role, status };
}

console.log(createUser("john_doe")); // Uses default values for role and status



// Exercise 9 - Spread, Rest, Map & Set Challenge


const class1 = ["S101", "S102"];
const class2 = ["S102", "S103"];

// Spread
const combinedStudents = [...class1, ...class2];

// Rest parameter
const calcAverage = (...grades) => grades.reduce((a, b) => a + b, 0) / grades.length;

// Set to remove duplicates
const uniqueIDs = new Set(combinedStudents);

// Map
const gradesMap = new Map();
gradesMap.set("S101", 90);
gradesMap.set("S102", 85);
gradesMap.set("S101", 95); 
gradesMap.delete("S102"); 

const finalDataArray = Array.from(gradesMap, ([id, grade]) => ({ id, grade }));


// Exercise 10 - Dynamic Student Report

const reportStudents = [
  { id: "ST1", name: "Alice", grade: 88 },
  { id: "ST2", name: "Bob", grade: 52 }
];

reportStudents.forEach(st => {
  const isPassed = st.grade >= 60;
  const report = `
=== Student Report ===
Name: ${st.name}
ID: ${st.id}
Grade: ${st.grade}%
Status: ${isPassed ? "PASSED" : "FAILED"}
======================`;
  console.log(report);
});

// Exercise 11 - Classes & Inheritance

class PersonClass {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class StudentClass extends PersonClass {
  constructor(name, email, studentId) {
    super(name, email);
    this.studentId = studentId;
  }
  getInfo() {
    return `${super.getInfo()}, Student ID: ${this.studentId}`;
  }
}

class InstructorClass extends PersonClass {
  constructor(name, email, employeeId) {
    super(name, email);
    this.employeeId = employeeId;
  }
  getInfo() {
    return `${super.getInfo()}, Employee ID: ${this.employeeId}`;
  }
}

const stInst = new StudentClass("Alex", "alex@mail.com", "ST-101");
console.log(stInst.getInfo());



// Exercise 12 - JavaScript Modules


/*
// File: students.js
export const students = [{ id: 1, name: "Sam" }];
export default function getStudents() { return students; }

// File: grades.js
export function calculateAvg(scores) { return 90; }

// File: app.js
import getStudents from './students.js';
import { calculateAvg } from './grades.js';
*/


// Exercise 13 - Web Storage Methods


function webStoragePlayground() {
  localStorage.setItem("key1", "value1");
  localStorage.setItem("key2", "value2");
  
  var val = localStorage.getItem("key1");
  localStorage.removeItem("key1");
  
  var keyName = localStorage.key(0);
  var len = localStorage.length;
  
  localStorage.clear();
}


// Exercise 14 - Local Storage To-Do List


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveAndRenderTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(taskText) {
  tasks.push({ text: taskText, completed: false });
  saveAndRenderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRenderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRenderTasks();
}

function clearAllTasks() {
  tasks = [];
  saveAndRenderTasks();
}


// Exercise 18 - Session Storage Multi-Step Form


function saveFormStep(stepData, currentStep) {
  sessionStorage.setItem("formData", JSON.stringify(stepData));
  sessionStorage.setItem("currentStep", currentStep);
}

function restoreFormStep() {
  const savedData = JSON.parse(sessionStorage.getItem("formData")) || {};
  const currentStep = sessionStorage.getItem("currentStep") || 1;
  return { savedData, currentStep };
}


// Exercise 19 - Cookies & Preferences Manager


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function saveUserPreferences(theme, lang) {
  setCookie("theme", theme, 30);
  setCookie("language", lang, 30);
}

function loadUserPreferences() {
  const theme = getCookie("theme") || "light";
  const lang = getCookie("language") || "English";
  return { theme, lang };
}