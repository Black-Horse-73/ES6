"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var scores2 = [3, 4];

var loww = scores2[0],
    midd = scores2[1],
    _scores2$ = scores2[2],
    highh = _scores2$ === undefined ? 5 : _scores2$; //highh = 5   - значение по умолчанию

console.log(loww, midd, highh); //3 4 5

var scores3 = [3, 4, [5, 6]];

var lowww = scores3[0],
    middd = scores3[1],
    _scores3$ = _slicedToArray(scores3[2], 2),
    highhh = _scores3$[0],
    highhher = _scores3$[1];

console.log(lowww, middd, highhh, highhher); //3 4 5 6