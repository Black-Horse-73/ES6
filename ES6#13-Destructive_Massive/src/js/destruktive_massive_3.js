let scores2 = [3, 4];

let [loww, midd, highh = 5] = scores2; //highh = 5   - значение по умолчанию

console.log(loww, midd, highh); //3 4 5

let scores3 = [3, 4, [5, 6]];

let [lowww, middd, [highhh, highhher]] = scores3;
console.log(lowww, middd, highhh, highhher); //3 4 5 6