"use strict";
// 29. Действия с элементами на странице
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// // майже не вик.
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});


// створюємо текстові вузли (елемнети без оболочки тега)
const text = document.createTextNode('Here I am');

// створюємо елемент 
const div = document.createElement('div');

div.classList.add('black');
// вик. дерево DOM
// добавляємо div. в кінець body 

// document.body.append(div);


wrapper.append(div);
// wrapper.appendChild(div); //old



// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); //old


// circles[0].remove();
// wrapper.removeChild(hearts[1]);  //old


// заміняємо один елемент іншим 
hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// як додавати якись текст чи html код просто в елементи 
// div.textContent = "Hello";
div.innerHTML = "<h1>Hello world</h1>";

// спочатку вказуємо елемент над яким будуть махінації
div.insertAdjacentHTML("afterend", '<h1>Hello</h1>');