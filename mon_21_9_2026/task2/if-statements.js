//part1
let age = Number(prompt("Enter your age:"));

if (age > 18) {
    console.log("You are an adult");
}
//part2
let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log("The number is even");
}
//part 3
let char = prompt("Enter a character:");

if (/^[a-zA-Z]$/.test(char)) {
    console.log("It's a letter");
}
//part 4
let list = JSON.parse(prompt("Enter an array:"));

if (Array.isArray(list)) {
    console.log("It's an array");
}
//part5
let x = Number(prompt("Enter a number:"));

if (typeof x === "number" && x > 0) {
    console.log("x is a positive number");
}
//part 6
let z = Number(prompt("Enter a number:"));

if (z % 3 === 0) {
    console.log("z is a multiple of 3");
}
//part 7
let password = prompt("Enter your password:");

if (password.length >= 8) {
    console.log("Your password is strong");
}
//p8
let age2 = Number(prompt("Enter your age:"));

if (age2 >= 18 && age2 <= 65) {
    console.log("You are of working age");
}
//p9
let color = prompt("Enter a color:");

if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color");
}

//p10
function isValidNumber(value) {

    if (!isNaN(value)) {
        console.log(value + " is a valid number");
    } else {
        console.log(value + " is not a number");
    }
}

let input = prompt("Enter a value:");

isValidNumber(input);
