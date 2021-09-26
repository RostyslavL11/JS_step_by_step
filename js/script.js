"use strict";
// 2.20 Объекты, деструктуризация объектов (ES6)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Властивість ${i} має значення ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Властивість ${key} має значення ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// як взнати яка кількість пар ключ - значення є в середині обєкта?


const fruts = {
    names: "apple",
    count: 4,
    color: "red",
    tasty: {
        sweet: 3,
        bitter: 1
    }
};

console.log(Object.keys(fruts).length);