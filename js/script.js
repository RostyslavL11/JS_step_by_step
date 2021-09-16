"use strict";
// 2.16

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 210;
}

showFirstMessage("HELLO");
console.log(num);

////

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function calc(a, b) {
//     return (a + b);
//     console.log("you can't use this one")
// }

/////

function ret() {
    let num = 50;


//////

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

///////

const logger = function() {
    console.log('hello');
};

logger(); 

const calc = (a, b) => {
    console.log(1);
    return a + b;
};