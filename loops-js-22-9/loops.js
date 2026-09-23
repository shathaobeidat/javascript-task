
// 1. While Loop


let n1 = 1;

while (n1 <= 10) {
    console.log(n1);
    n1++;
}


// 2. For Loop - Array


let a2 = [1, 2, 3, 4, 5];

for (let i2 = 0; i2 < a2.length; i2++) {
    console.log(a2[i2]);
}


// 3. Even Numbers


for (let n3 = 0; n3 <= 10; n3 += 2) {
    console.log(n3);
}


// 4. Sum from 1 to 10


let s4 = 0;

for (let i4 = 1; i4 <= 10; i4++) {
    s4 += i4;
}

console.log(s4);


// 5. Largest Number


let a5 = [1, 2, 3, 4, 5];
let max5 = a5[0];

for (let i5 = 1; i5 < a5.length; i5++) {
    if (a5[i5] > max5) {
        max5 = a5[i5];
    }
}

console.log(max5);


// 6. Average


let a6 = [1, 2, 3, 4, 5];
let s6 = 0;

for (let i6 = 0; i6 < a6.length; i6++) {
    s6 += a6[i6];
}

let avg6 = s6 / a6.length;

console.log(avg6);

// 7. Factorial


let n7 = 5;
let f7 = 1;

for (let i7 = 1; i7 <= n7; i7++) {
    f7 *= i7;
}

console.log(f7);


// 8. Fibonacci


let n8 = 10;
let a8 = 0;
let b8 = 1;

for (let i8 = 0; a8 <= n8; i8++) {
    console.log(a8);

    let c8 = a8 + b8;
    a8 = b8;
    b8 = c8;
}


// 9. Prime Numbers


let n9 = 20;

for (let x9 = 2; x9 <= n9; x9++) {

    let p9 = true;

    for (let d9 = 2; d9 < x9; d9++) {

        if (x9 % d9 === 0) {
            p9 = false;
            break;
        }
    }

    if (p9) {
        console.log(x9);
    }
}


// 10. 2D Array


let a10 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i10 = 0; i10 < a10.length; i10++) {

    for (let j10 = 0; j10 < a10[i10].length; j10++) {
        console.log(a10[i10][j10]);
    }
}


// 11. Reverse Array


let a11 = [1, 2, 3, 4, 5];

for (let i11 = a11.length - 1; i11 >= 0; i11--) {
    console.log(a11[i11]);
}



// 12. Specific Step


let a12 = [1, 2, 3, 4, 5];
let st12 = 2;

for (let i12 = 0; i12 < a12.length; i12 += st12) {
    console.log(a12[i12]);
}



// 13. Frequency


let a13 = [1, 2, 1, 3, 2, 1];
let x13 = 1;
let c13 = 0;

for (let i13 = 0; i13 < a13.length; i13++) {

    if (a13[i13] === x13) {
        c13++;
    }
}

console.log(c13);


// 14. map()


const heros14 = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros14 = heros14.map((h14, i14) => {
    return {
        hero: h14.name,
        power: h14.power,
        id: i14
    };
});

console.log(newHeros14);



// 15. filter()


const words15 = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
];

function long15(arr15) {
    return arr15.filter((w15) => w15.length > 7);
}

const result15 = long15(words15);

console.log(result15);



// 16. reduce()


const nums16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum16 = nums16.reduce((total16, n16) => {

    if (n16 % 5 === 0) {
        return total16 + (n16 * n16);
    }

    return total16;

}, 0);

console.log(sum16);