//loop-task1

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
let i = 1;

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
}
//loop-2
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
//loop3
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//loop 3-2
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//loop-4
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}
//5
function fizzBuzzRecursive(num) {

    if (num > 100) {
        return;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }

    fizzBuzzRecursive(num + 1);
}

fizzBuzzRecursive(1);
//6
function fizzBuzzRecursive(num) {

    if (num > 100) {
        return;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }

    fizzBuzzRecursive(num + 1);
}

fizzBuzzRecursive(1);
//7
function banknotes(amount, notes) {

    let result = [];

    for (let note of notes) {

        while (amount >= note) {
            result.push(note);
            amount -= note;
        }
    }

    return result;
}

console.log(banknotes(57, [25, 10, 5, 1]));
//8
function countCharacter(str, char) {
    let count = 0;

    str = str.toLowerCase();
    char = char.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));
//9-a
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
//9-b
for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//9-c
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
//9-d
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//10
let str = "CodingAcademy";
//print elements
let arr = [7, 500, "KH404", "black", 36];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
//reverse order
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

//even-odd arrays
let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    } else {
        odds.push(numbers[i]);
    }

}

console.log(evens);
console.log(odds);
//meals 
let proteins = [
    "chicken", "pork", "tofu", "beef", "fish", "beans"
];

let grains = [
    "rice", "pasta", "corn", "potato", "quinoa", "crackers"
];

let vegetables = [
    "peas", "green beans", "kale", "edamame", "broccoli", "asparagus"
];

let beverages = [
    "juice", "milk", "water", "soy milk", "soda", "tea"
];

let desserts = [
    "apple", "banana", "more kale", "ice cream", "chocolate", "kiwi"
];
function createMeals(numberOfMeals) {

    let meals = [];

    for (let i = 0; i < numberOfMeals; i++) {

        let meal = [
            proteins[i % proteins.length],
            grains[i % grains.length],
            vegetables[i % vegetables.length],
            beverages[i % beverages.length],
            desserts[i % desserts.length]
        ];

        meals.push(meal);
    }

    return meals;
}

console.log(createMeals(5));
