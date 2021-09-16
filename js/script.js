"use strict";
// 2.17
// const arr = [1, 2, 4];
// console.log(str[2]); 

// метод зміни регістра
const str = "test";
console.log(str.toUpperCase());
// 
// 
const strtwo = "teSt";
console.log(strtwo.toLowerCase());
// 
// 
const fruit = "Some fruit";
console.log(fruit.indexOf("t"));
// 
// 
const logg = "Hello world";
console.log(logg.slice(6, 10));
// 
// 
const loggg = "Hello world";
console.log(loggg.slice(-5, -1));
// 
// 
const logggg = "Hello world";
console.log(logggg.substring(6, 11));
// 
// 
const loggggg = "Hello world";
// ту ми вказуємо довжину (скільки символів нам треба вирізати) 
// (тут з шостої позиції та 5 символів)
console.log(loggggg.substr(6, 5));
// 
// 
// 
// -----методи чисел---------
const num = 12.2;
console.log(Math.round(num));
// метод який вик. на числа  
// і переводить число в іншу систему числення
const test = "12.2px";
console.log(parseInt(test));
// 
// метод щоб взяти якесь число чи строку і попернути нам в десятичному варіанті 
const testt = "12.2px";
console.log(parseFloat(testt));
