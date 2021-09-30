"use strict";
// 21. Массивы и псевдомассивы

const arr = [1, 2, 13, 26, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, 6, 8];
// for (let value of arr) {
//     console.log(value);
// }

// const arr = [1, 2, 3, 6, 8];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item , i, arr) {
//     console.log(`${i}: ${item} всередині масива ${arr}`);
// });


const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));