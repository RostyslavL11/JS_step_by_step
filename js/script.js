"use strict";
// 28. Получение элементов со страницы 
// старіші методи
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// новіші методи 
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const onebtn = document.querySelector('button');
console.log(onebtn);

