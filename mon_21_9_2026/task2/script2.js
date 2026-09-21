//1
let cash=1000;
let li=500;

console.log(cash/li);

//2
let rev=1000;
let exp=500;

console.log(rev-exp);

//3
let tli=1000;
let equity=500;

console.log(tli+equity);

//4
let prft=1000;
let sales=500;

console.log(prft*sales);

//5
let arr=[1,2,3];

console.log((arr[0]+arr[1]+arr[2])/arr.length);

//6
let price=150;
let desc=0.30;
console.log(150-price*desc);

8
let age=prompt("inter your age");
if(age > 18 && age <30)
    console.log("true");
else   console.log("false ");


//9
console.log(2**3);

//10
console.log(10%4);
//****String   **** */

//1
let str = "Welcome to Orange";
console.log(str.toUpperCase());

//2
console.log(str.substring(8, 10));
//3
console.log(str.replace("Welcome to", "Hello from"));

//4
console.log(str.toLowerCase());

//5
console.log(str.length);
//6
console.log(str.replace("Orange", '"Orange"'));
//7
console.log(str.concat(" Jordan"));


string-part2
let strin=prompt("inter the text");

let result2 = strin[0] + strin.slice(1).replaceAll(strin[0], "*");

console.log(result2);


//****Arrays **********/
let arr1 = ["Coding","Academy","By","Orange"] ;
//1
arr1.push("Jordan");
console.log(arr1);
//2
console.log(arr1.slice(0, 2));
//3
arr1.unshift("Welcome", "To");
console.log(arr1);
//4
 arr1= ["Coding","Academy","By","Orange"] ;
console.log(arr1.slice(1));
//5
console.log(arr1.join(" "));
//6
console.log(arr1);
//7
console.log([arr1[0], arr1[3]]);

///Arrays-part2///////
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//1
vegetables.pop();
//2
fruit.shift();
//3
console.log(fruit.indexOf("orange"));
//4
fruit.push(12);
console.log(fruit);
//5
console.log(vegetables.length);
//6
vegetables.push(vegetables.length);
console.log(vegetables);
//7
let food=fruit.concat(vegetables);
console.log(food);
//8
food.splice(4, 2);
console.log(food);
//9
food.reverse();
//10
var result = food.join(",");
console.log(result);

/////conditionals///////

let age2 = Number(prompt("Enter your year of birth"));

if (age2 > 60) {
    console.log("You may join the seniors’ program.");
}
else if (age2 > 30) {
    console.log("You are not eligible. You may join other programs.");
}
else if (age2 >= 18 && age2 <= 30) {
    console.log("You are eligible. Start your application.");
}
else {
    console.log("You may join the kids' program.");
}


//fun1
function switchCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }

    return result;
}

console.log(switchCase("OrAnGe"));
//fun2
function camelCase(str) {
    let result = "";
    let capitalize = true;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === " ") {
            capitalize = true;
        } 
        else {
            if (capitalize) {
                result += str[i].toUpperCase();
                capitalize = false;
            } 
            else {
                result += str[i];
            }
        }
    }

    return result;
}

console.log(camelCase("Coding Academy by Orange"));
//3
function removeElement(arr, element) {
    let index = arr.indexOf(element);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    return arr;
}

console.log(
    removeElement(["Coding", "Academy", "By", "Orange"], "By")
);

//functions//

//even-odd 
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//fun 2
function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
//fun 3
function largestNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
//fun 4
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

//fun 5
function isInRange(num, min, max) {
    return num >= min && num <= max;
}
//6
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

