//task 1
function getProperties(obj) {
    return Object.keys(obj);
}

let person = {
    name: "Shatha",
    age: 22,
    city: "Irbid"
};

console.log(getProperties(person));

//task2
function countProperties(obj) {
    return Object.keys(obj).length;
}

let person2 = {
    name: "Shatha",
    age: 22,
    city: "Irbid"
};

console.log(countProperties(person2));
//task 3
function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let person3 = {
    name: "Shatha",
    age: 22
};

let address = {
    city: "Irbid",
    country: "Jordan"
};

console.log(combineObjects(person3, address));
//task 4
function convertToUppercase(obj) {

    let newObj = {};

    for (let key in obj) {
        newObj[key] = obj[key].toUpperCase();
    }

    return newObj;
}

let person5 = {
    name: "shatha",
    city: "irbid"
};

console.log(convertToUppercase(person5));
//task5
function removeNullProperties(obj) {

    let newObj = {};

    for (let key in obj) {

        if (obj[key] !== null) {
            newObj[key] = obj[key];
        }

    }

    return newObj;
}

let person6 = {
    name: "Shatha",
    age: null,
    city: "Irbid",
    phone: null
};

console.log(removeNullProperties(person6));
//7
function getSortedProperties(obj) {
    return Object.keys(obj).sort();
}

let person7 = {
    zebra: 10,
    apple: 20,
    name: "Shatha",
    city: "Irbid"
};

console.log(getSortedProperties(person7));