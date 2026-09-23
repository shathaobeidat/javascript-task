//function-task1 
let arr=[30,45,60,7];
function findsmallest(arr){
let small=arr[0];
    for(let i=1;i<arr.length;i++)
        if(arr[i]<small){
            small=arr[i];
        }
        return small;
}
console.log(findsmallest([30, 45, 60, 7]));  

//function-task2

function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}

console.log(AlphabeticalOrder('hello'));

//function-task3
function factorial(n){
    if(n==0 )
        return 1;
    else 
        return n* factorial(n-1);
}
console.log(factorial(8)); 
//function-task4

function oddeven(oddeven){
    if(oddeven%2==0)
        return "even";
    else
         return "odd";
}
console.log(oddeven(9)); 

//function-task5
function addup(addv){
    let sum=0;
    for(let i=1;i<=addv;i++)
        sum+=i;
 return sum;
}
console.log(addup(8)); 

//function-task6 
function minMaxLengthAverage(arr) {

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77.,100]));


//function-task7

function countWords(str) {
    return str.split(" ").length;
}

console.log(countWords("hello from CodingAcademy!"));


//function-task8
function MultiplyByLength(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr.length;
    }

    return arr;
}

console.log(MultiplyByLength([4, 2, 5]));


//function-task9
function checkEnding(str, ending) {
    return str.endsWith(ending);
}

console.log(checkEnding("CodingSchool", "Ac"));


//function-task10
function doubleChar(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

console.log(doubleChar("Coding"));

//function-task11
function findIndex(arr, name) {
    return arr.indexOf(name)+1;
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));
