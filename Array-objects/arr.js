

// 1. 
let obj1 = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(obj1.name, obj1.age, obj1.gender);


//2

let obj2 = {
    name: "Adam",
    age: 25
};

obj2.gender = "male";

console.log(obj2);



let obj3 = {
    name: "Adam",
    age: 25
};

console.log(obj3.name);


// ======================================================
            2 - JavaScript Array


// 1. 
let arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (num1) {
    console.log(num1);
});


//2

let arr2 = ["cherry", "apple", "banana"];

arr2.sort();

console.log(arr2);


//3

let arr3 = ["apple", "banana", "cherry"];

arr3.reverse();

console.log(arr3);


//4

let arr4a = [1, 2, 3];
let arr4b = [4, 5, 6];

let arr4c = arr4a.concat(arr4b);

console.log(arr4c);

//5

let arr5 = [1, 2, 3, 4, 5, 6];

let arr5Result = arr5.slice(0, 2).concat(arr5.slice(4));

console.log(arr5Result);

//6


let arr6 = [1, 2, 3, 4, 5];

let arr6Result = arr6.splice(2, 1);

console.log(arr6Result);


//7

let arr7 = [1, 2, 3, 4, 5];

let arr7Index = arr7.indexOf(2);

console.log(arr7Index);

//8

let arr8 = [1, 2, 3, 4, 5];

let arr8String = arr8.join(",");

console.log(arr8String);

//9

let arr9String = "1,2,3,4,5";

let arr9 = arr9String.split(",");

console.log(arr9);

//10

let arr10 = [1, 2, 3, 4, 5];

console.log(arr10.length);


//11

let arr11 = [1, 2, 3, 4, 5];

for (let num2 of arr11) {
    console.log(num2);
}


//12

let arr12 = [1, 2, 3, 4, 5];

console.log(Array.isArray(arr12));

