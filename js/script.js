"use strict";
// 22. Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// let a = 5,
//     b = a;

// b = a + 5;

// console.log(b);
// console.log(a);



// const obj = {
//     a: 5, 
//     b:1
// };

// const copy = obj; // посилання
// copy.a = 10;

// console.log(copy);
// console.log(obj);
// ___________________________________



// створюємо копію обєкту за допомогою функції 
// яка за допомогою цикла вона створить новий обєкт 
// вже перебираючи старі властивості які вже були в нашому обєкті 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7, 
        y:4
    }
};

const  newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);
// // _____________________________
// зєднуємо обєкт add з обєктом numbers 

const add = {
    d: 17,
    e:20 
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// метод щоб створили копію масиву

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'hello';

console.log(newArray);
console.log(oldArray);

// 4 спосіб створення поверхневої копії з вик. оператора розвороту 

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'bloger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

    
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const narArrray = [...array];


const q = {
    one: 1, 
    two: 2
};

const newQ = {...q};

console.log(newQ);