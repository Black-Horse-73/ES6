/*var; //изменяемая, переменная глобальной области видимости, поднимается (можно использовать до её объявления)
let; //изменяемая, видимость ограничена блоком кода ({...} фигурными скобками), не поднимается (нельзя использовать до её объявления)
const; //неизменяется, может быть как глобальной, так и локальной внутри блока, в котором она объявлена*/

var first = document.querySelectorAll('.first');
var second = document.querySelectorAll('.second');

for (var i = 0; i < first.length; i++) {
   var fir = first[i];
   fir.innerText = i;
   fir.onclick = function (e) {
      console.log(i); //при нажатии на любую кнопку выведется 5 т.к. var глобальная и видна всем функциям в коде
   };
}

for (let i = 0; i < second.length; i++) {
   let sec = second[i];
   sec.innerText = i;
   sec.onclick = function (e) {
      console.log(i); //при нажатии на любую кнопку выведется значение єтой кнопки т.к. let локальная и видна тоько в своей функции
   };
}