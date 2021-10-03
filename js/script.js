"use strict";
// 23. Основы ООП, прототипно-ориентированное наследование

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);


// __________________________
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = {
//     health: 100
// };

// // jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);
// // jonh обєкт якому я хочу назначити прототип
// //  soldier обєкт прототип якого ми встановлюємо 

// jonh.sayHello();

// console.log(jonh.armor);

// _______________________________
// коли ми створюємо протоп до неіснуючого обєкту 

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);


jonh.sayHello();

