let scores4 = [3, 4, [5, 6]];

let [a, b, [c, d]] = scores4;
console.log(a, b, c, d); //3 4 5 6

function computeScore([a, b, c]) {
   console.log(a, b, c); //3 4 5
}

computeScore([3, 4, 5]);


function getScores() {
   return [3, 4, 5]
}
//деструктивное присваивание для того что бы вытащить значения из функции
let scores5 = getScores(); //в виде массива
console.log(scores5); //[3, 4, 5]
let [e, j, i] = getScores(); // в виде чисел
console.log(e, j, i); //3 4 5

//деструктивное присваивание для того что бы быстро поменять значения переменных
let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is', yes); //Yes is No
console.log('No is', no); //No is Yes