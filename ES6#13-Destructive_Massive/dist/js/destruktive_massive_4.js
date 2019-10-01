'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var scores4 = [3, 4, [5, 6]];

var a = scores4[0],
    b = scores4[1],
    _scores4$ = _slicedToArray(scores4[2], 2),
    c = _scores4$[0],
    d = _scores4$[1];

console.log(a, b, c, d); //3 4 5 6

function computeScore(_ref) {
   var _ref2 = _slicedToArray(_ref, 3),
       a = _ref2[0],
       b = _ref2[1],
       c = _ref2[2];

   console.log(a, b, c); //3 4 5
}

computeScore([3, 4, 5]);

function getScores() {
   return [3, 4, 5];
}
//деструктивное присваивание для того что бы вытащить значения из функции
var scores5 = getScores(); //в виде массива
console.log(scores5); //[3, 4, 5]

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    e = _getScores2[0],
    j = _getScores2[1],
    i = _getScores2[2]; // в виде чисел


console.log(e, j, i); //3 4 5

//деструктивное присваивание для того что бы быстро поменять значения переменных
var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log('Yes is', yes); //Yes is No
console.log('No is', no); //No is Yes