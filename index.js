// Javascript - It is Web based programming language

// const { use } = require("react");

// Most popular we broswers is made up of javascript

// document.getElementById("myH1").textContent = "Hello students";

// document.getElementById("myP").textContent = `welcome to javascript world`;

// variable - a container that stores the value

// decalration  let a;

// let var const
// assigment  a = 10;

// Datatypes

// primitive and non primitive

// primitive

// int
// Float
// double
// char
// boolean

// non primitive

// array
// string
// object
// collections(List, set, map, qoue)

// let a;

// a = 10;

// let b;

// b = 20;

// let c = 10;

// console.log(c);

// let age = 24;
// let price = 10.45;
// let gpa = 2.4;
// let isStudent = true;
// let name = "siva"

// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof name);

// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}`);
// console.log(`Your gpa is ${gpa}`);

// Type coversion - coverting one datatype into another type (srings, numbers, boolean)

// let age = window.prompt("How old are you? ");

// age = age + 1; = age += 1;

// age = Number(age);

// age = String(age);

// age += 1;

// console.log(typeof age);
// console.log(age);

// let a = "apple";
// let b = "orange";
// let c = "kiwi";
// let d = 3;

// a = Number(a);
// b = String(b);
// c = Boolean(c);
// d = Boolean(d);

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);

// const - a varaible taht cant be change

// const PI = 3.14159;

// let radius;

// let circumfernce;

// PI = 6789.678;

// radius = window.prompt("Enter the radius");

// radius = Number(radius);

// circumfernce = 2 * PI * radius;

// console.log(circumfernce);10

// conditional statement

// if
// if else
// ternery
// switch
// nested if

// let age = 10;

// // if(age >= 18) {
// //    console.log("You can vote");
// // }

// if(age >= 18) {
//     console.log("you can vote");
// } else {
//     console.log("you cannot vote");
// }

// let isStudent = true;

// if (isStudent) {
//     console.log("you are student");
// } else{
//     console.log("you are not student");
// }

// nested if

// let age = 8;
// let hasLicense = true;

// if(age >= 18) {
//     console.log("You are old enough to drive");

//     if(hasLicense) {
//         console.log("you have your license");
//     } else {
//         console.log("you do not have license yet");
//     }

// } else {
//     console.log("You must be 18+ to have a license");
// }

// ladder if else statement

// if(age >= 18) {
//     console.log("you can vote");
// } else if(age < 0) {
//     console.log("You have not born yet!!!");
// } else {
//     console.log("You canot vote");
// }

// Ternary operator - a shortcut for if and else statment help us to assign a varibale based on a condtion

// condition ? codeIfTrue : codeIfFalse;

// let age = 1;

// if(age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }

// const result = age >= 18 ? "you can vote" : "you cannot vote";

// console.log(result);

// let purschaseAmount = 50;

// let discount = purschaseAmount >= 100 ? 10 : 0;

// console.log(`you total is ₹${purschaseAmount - purschaseAmount * (discount / 100)}`);

// switch - can be effiecnt replacement for to many else if statement

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let day = 3456789;

// switch (day) {
//   case 1:
//     console.log("It is monday");
//     break;
//   case 2:
//     console.log("It is tuesday");
//     break;
//   case 3:
//     console.log("It is wednesday");
//     break;
//   case 4:
//     console.log("It is thursday");
//     break;
//   case 5:
//     console.log("It is friday");
//     break;
//   case 6:
//     console.log("It is saturday");
//     break;
//   case 7:
//     console.log("It is sunday");
//     break;

//   default:
//     console.log("Invalid input");
//     break;
// }

// let testScore = 65;

// let grade;

// switch (true) {
//     case testScore >= 90:
//         grade = "A";
//         break;
//     case testScore >= 80:
//         grade = "B"
//         break;
//     case testScore >= 70:
//         grade = "C"
//         break;
//     case testScore >= 60:
//         grade = "D"
//         break;

//     default:
//         console.log("invail mark");
//         break;
// }

// console.log(grade);

// String and methods -  built in methods which allow us to manipulate and work with text (strings)

// clooection of character called string 'u'
// "colbnm"

// let userName = "mani_student";

// let result = userName.startsWith(" ");
// let result = userName.endsWith("i");
// let result = userName.includes(" ");

// console.log(result);

// let res = result
//   ? "Your username cant be space in between"
//   : console.log(userName);

// console.log(res);

// if(result) {
//   console.log("Your username cant starts with space");

// } else {
//     console.log(userName);

// }

// console.log(userName.repeat());

// console.log(userName.toLowerCase());

// console.log(userName.trim());
// console.log(userName.length);

// postion or index 0 to n-1
// length = 4 (n)

// const result = userName.charAt(3)
// console.log(result);

// const result = userName.indexOf("a");
// console.log(result);

// const result = userName.lastIndexOf("a");
// console.log(result);

// let phoneNumber = "91-98988-78776";

// phoneNumber = phoneNumber.replaceAll("-", "₹");

// console.log(phoneNumber);

// String slicing - creating a substring from a protion of another string

// string.slice(start, end);

// const fullName = "Siva kumar";

// const email = manikandan@gmail.com;

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstChar = fullName.slice();
// let lastChar = fullName.slice();

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// Method chaining - calling one methods after  another method

// in one contionous line of code

// no method chaining

// let username = window.prompt("Enter your username");

// username  = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase(); // M

// // anistudent

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;
// console.log(username);

// let username = window.prompt("Enter your username");
//                     M
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// logical operators - used to combine or manipulate boolean values (true or false)

// AND = &&
//  OR = ||
// NOT = !

// const temp = -100;
//     true        false
// if(temp > 0 && temp <= 30) {
//     console.log("The weather is good");
// } else {
//     console.log("the weather is bad");
// }

// const temp = 20;
//     false       true
// if(temp <=0 || temp > 30) {
//     console.log("The weather is bad");
// } else {
//     console.log("the weather is good");
// }

// not operator - we can able to flip boolean
// true -> false
//  fasle -> true

// const isSunny = true;

// if(!isSunny) {
//     console.log("it is cloudy");
// } else {
//     console.log("it is sunny");
// }

// = assignment operator
// == comparison operator (coampre if value are equal)
// === strict equaltiy operator (compare if values & datatype are equal)

// != inequality operator // this will return true if two values not equal
// !== strict inequality operator // value and dayatype difffernt means retrurn true

// const PI = 3.14;

// if(PI == "3.14") {
//     console.log("That is Pi");
// } else {
//     console.log("That is not PI");
// }

// if(PI === 3.14) {
//     console.log("That is Pi");
// } else {
//     console.log("That is not PI");
// }
// //    number        string
// // value = 3.14  value = 3.14
// if(PI != "3.14") {
// console.log("This is not PIE");
// } else {
// console.log("That is PIE");
// }

//    number        string
// // value = 3.14  value = 3.14
// if (PI !== "3.14") {
//   console.log("This is not PIE " + true);
// } else {
//   console.log("That is PIE " + false);
// }

// Control statement or looping statement

1 - 10;

// intializaion - were we start

// condition - based true or false
// true - loop will run or exxute the code
// false - loop will stop

// operator(increase or decrease the value) -  were we stop

// increement and decremennt operator

// types of loops

// while loop, do-while,

//   for loop, for each loop

// while - Entry control loop

// do while - Exit control loop

// let i = 1;  // were we start

// while(i < 4) {   // consdition - were we stop

//     console.log(i);
//     i++;  // increase or decrase the value  // i =2, 3, 4, 5
// }

// do {

//     console.log(i);
//     i++;

// } while (i <= 4);

// i = 4

//        1       2       4
// for(let i = 1; i <= 3; i++) {
//     // 3step
//     console.log(i);
// }

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// 1 < 10

// 1 < 10

// 10 > 1
// 9 > 1
// 1 >= 1
// i >= 1

// for(let i = 10; i >= 1; i--) {
//       console.log(i);
// }

// task 1

// x
// y
// x
// y
// x

// task 2

// 0
// 0
// 0
// 0
// 1
// 1
// 1
// 1

// task 3

// x
// x
// x
// x
// y y y y y

// nested loop

// for(let i = 1; i < 5; i++) {
//     console.log(`the current value of i is: ${i}`);
//     for(let j = 1; j < 3; j++) {
//         console.log(`j: ${j}`);
//     }
// }

// 2 X 1 = 2
// 2 X 2 = 4

// let height = 3;
// let pattern = "";

// //             3 <=  3
// for(let i = 1; i <= height; i++) {
//     console.log(i);
// //                 0 < 3
//     for(let j = 0; j < i; j++) {
//         pattern = pattern + "* ";
//     }

//     pattern += "\n";

// }

// console.log(pattern);

//        *
//     *  *
// *  *  *

// Functions - a section of reusable code, declare once, reuse it whenever we want

// call the functions to execute the code

// console.log("Happy birthday to you");
// console.log("Happy birthday to you ");
// console.log("Happy birthday dear you");
// console.log("Happy birthday to you");

// helloWorld

// function happyBirthday(userName, age) {
//   console.log("Happy birthday to you");
//   console.log("Happy birthday to you ");
//   console.log(`Happy birthday dear ${userName}`);
//   console.log("Happy birthday to you");
//   console.log(`you are ${age} years old`);
// }

// happyBirthday("Mani", 20);

// function add(a, b) {
//     let result = a + b;
//     return result;
// }

// function add(a, b) {
//     return a + b;
// }

// let answer = add(2, 4);

// console.log(`the anser is ${answer}`);

// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(1));

// function isValidEmail(email) {
//    if(email.includes("@")) {
//     return true;
//    } else {
//     return false;
//    }
// }

//is validUsername

// Mani#123

// console.log(isValidEmail("mani@gmail.com"));
// console.log(isValidEmail("mani.com"));

// add(2, 4) = result

// Vraibale scope - where a variable is regonised and accessible(local vs global)

// let x = 1;
// let x = 9;

// function func1() {
//     let x = 1;
//     console.log(x);
// }
// function func2() {
//      let x = 8;
//     console.log(x);
// }

// // func1();
// func2();

// Array - a varibale like structure that can hold more than 1 value

// length = 3
// index = [0 to 2]

// let vegetables = ["carrot", "tomato", "beetroot", "coconut", "onion", "beans"];

// vegetables.push("potato");
// vegetables.pop();
// vegetables.unshift("chilli");
// vegetables.shift();

// let numOfVeggies = vegetables.length;
// let index = vegetables.indexOf("beetroot");

// console.log(vegetables);
// console.log(vegetables[0]);
// console.log(vegetables[1]);
// console.log(vegetables[2]);
// console.log(numOfVeggies);
// console.log(index);

//vegetables[3] = "potato";

//console.log(vegetables);

// for

//                2
// for(let i = vegetables.length - 1; i >= 0; i--) {
//    console.log(vegetables[i]);
// }

// for each

// vegetables.sort().reverse();

// for(let vegetable of vegetables) {
//     console.log(vegetable);
// }

// spread operator - ... allow an iteration such as array or string to be expanded into spereate elements (unpack the elements)

// let numbers = [1, 2, 3, 4, 5];

// let maximum = Math.max(...numbers);

// console.log(...numbers);

// console.log(maximum);

// let username = "manikandan student";

// let letter = [...username].join("/");

// shallow copy - means it is differnt data structue  were it contains identical value

// let fruits = ["apple", "orange", "banana"];

// let veggies = ["carrot", "onion", "beans"];

// let foods = [...fruits, ...veggies, "eggs", "milk"];

// console.log(foods);

// rest parameters = (...rest) allow a function work with a variable , number of argumnets by bundling them into an array

// spread - expands an arrray into seprate elements
// rest - bundles seprate elements into an array

// function openFridge(...foods) {
//     console.log(foods);
//     console.log(...foods);
// }

// const food1 = "veg rice";
// const food2 = "egg rice";
// const food3 = "Dosa";
// const food4 = "idly";

// openFridge(food1, food2, food3, food4);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 3, 5, 10);

// console.log(`your total is ${total}`);

// function combineStrings(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr", "Mani", "student", "90191");

// console.log(fullName);

// callbacks - a function that is passed as an argument to another function

// used to handling asynchrouns operations

// Reading a file
// Network requests (APIs)
// Interacting with database

// Hey, when you are done, call this next

// hello(wait);

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function leave() {
//     console.log("Leave");
// }

// function wait() {
//     console.log("Wait");
// }

// function goodBye() {
//     console.log("goodbye");
// }

// sum(displayConsole, 10, 20);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// function displayPage(result) {
//      document.getElementById("myH1").textContent = result;
// }

// forEach - method used to iterate over the elements of an array and apply a specified function (callback) to each element

// array.forEach(callback);
// element, Index, array are provide - the location of an array

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function square(element, index, array) {
//      array[index] = Math.pow(element, 2);
// }

// function display(element) {
//    console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "kiwi"];

// fruits.forEach(captilise);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//    array[index] = element.toUpperCase();
// }

// function captilise(element, index, array) {
//    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element) {
//    console.log(element);
// }

// .map() - accepts a callback and applies that function to each element of an array, that return a new array

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

// const students = ["mani", "siva", "ganesh"];

// const stuUpper = students.map(uppercase);

// console.log(stuUpper);

// function uppercase(element){
//     return element.toUpperCase();
// }

// const dates = ["2026-1-06", "2025-2-23"];

// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// .filter() = creates a new array by filter put elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element) {
//     return element % 2 === 0;
// }

// const ages = [24, 25, 16, 15, 26, 18];

// const adults = ages.filter(isAdult);

// console.log(adults);

// function isAdult(element) {
//     return element >= 18;
// }

//

// .reduce = reduce the elements og an array to a single value

// const prices = [10, 10, 20, 40, 60];

// const total = prices.reduce(sum);

// console.log(`₹${total.toFixed(2)}`);
// //
// //           previousEle,  next
// function sum(accumlator, element) {
//     return accumlator + element;
// }

// const grades = [80, 60, 80, 100, 90];

// const maximum = grades.reduce(getmax);
// const maximum = grades.reduce(function getmax(accum, ele) {
//     return Math.max(accum, ele);
// });

// console.log(maximum);

// function exprssion  - way to definne the function as values or variable

// arrow function - a consise way to write function exprssions .
// (parameters) => some code

// function hello() {
//     console.log("Hello");
// }

// const hello = function() {
//      console.log("Hello");
// }

// const hello = (name, age) => {
//   console.log(`hello ${name}`);
//   console.log(`You are ${age} old`);
// };

// hello("mani", 23);

// setTimeout(function hello() {
//     console.log("hello");
// }, 2000);

// setTimeout(() => console.log("hello"), 2000);

// function hello() {
//     console.log("hello");
// }

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const total = numbers.reduce((a, e) => a + e)

// console.log(total);
// console.log(squares);
// console.log(evenNums);

// Destructuring - extract values from array and objects {} [] then assign them to variables in a convenient way

// [] - to perform arry destructing
// {} - to perform object destructuring

// Example 1 -
// swap the values of two variables

// let a = 1;
// let b = 2;
// console.log(a, b);
// destructuring = creating a array
// [a, b] = [b, a];

// console.log(a, b);

// Example 2
// we can swap the elements in an arrary

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// Example 3 - assign array elements to variables

// const colors =  ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor, secondColor, thirdColor);
// console.log(extraColors);

// ex 4
// extract value from object

// const employee1 = {
//     firstname: "mani",
//     lastName: "siva",
//     age: 20,
//     job: "Software Engineer",
// }
// const employee2 = {
//     firstname: "ganesh",
//     lastName: "kumar",
//     age: 23,
// }

// const { firstname, lastName, age, job } = employee2;

// console.log(firstname);
// console.log(lastName);
// console.log(age);
// console.log(job);

// example 5 - Destructing in function parametrs

// function displayEmployee({firstname, lastName, age, job="unemployee"}) {
//    console.log(firstname, lastName, age, job);
// }

// const employee1 = {
//     firstname: "mani",
//     lastName: "siva",
//     age: 20,
//     job: "Software Engineer",
// }
// const employee2 = {
//     firstname: "ganesh",
//     lastName: "kumar",
//     age: 23,
// }

// displayEmployee(employee2);

// closure - function defines inside another function
// the inner function has access to the vraiables and scope of the outer function
// allow for private varaibles and state maintaence
// used frequantly in in framework - Vue, react, angualr

// function outer() {
//     let message = "hello students";
//     function inner() {
//        console.log(message);
//     }
//     inner();
// }

// outer();

// function createaCounter() {  // class 
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`count increased to ${count}`);
//   }


//   return { increment };
// }


//     object
// const counter = createaCounter();

// counter.increment();
// counter.increment();
// counter.increment();


// synchronous - Excutes line by line consecutively in a sequntail manner 
// code that wiats for an operation to compelte

// Asynchronous - allow multiple operations to be performed concurrently without waiting 
// does not block the execution flow and allow the program to continue

// I/O operations/ API Calls/ Fetching the data
// callbacks, promises, async/await


// setTimeout(()=>{console.log("task 1")}, 3000);

// console.log("task 2");
// console.log("task 3");
// console.log("task 4");




