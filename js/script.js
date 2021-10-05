"use strict";
// 26. Динамическая типизация в JS

// to string 

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкатинація - коли ми щось складаємо зі строкою 
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

// формуємо стилі за допомогою коду JS і там нам треба передавати стілі у вигляді строки 
const fontSize = 26 + 'px';

// To Number
// 1)
console.log(typeof(Number('4')));

// 2) вик. унарний +
console.log(typeof(Number(+'5')));

// 3)
console.log(typeof(parseInt("15px", 10)));

// 4)+promt
let answ = +prompt("Hello", "");

// To boolen
// 0, '', null, undefined, NaN 

let switcher = null;

if (switcher) { 
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}