"use strict";

var scores = [3, 4, 5];

// let [low, mid, high, higher] = scores;
// console.log(low, mid, high, higher); //3 4 5 undefined т.к. для higher нет значения в массиве

// let [low, , high] = scores; //можно игнорировать значения
// console.log(low, high); //3 5

var low = scores[0],
    rest = scores.slice(1); //синтаксис "оставшихся параметров" при котором оставшиеся значения будут преобразованы в массив, переменную ...rest можно назвать как угодно

console.log(low, rest); //3 [4, 5]