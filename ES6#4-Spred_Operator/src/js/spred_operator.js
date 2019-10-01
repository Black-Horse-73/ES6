let staticLanguage = ['C', 'C++', 'Java'];
let dynamicLanguage = ['JavaScrypt', 'PHP', 'Ruby'];

let languages = [staticLanguage, 'C#', dynamicLanguage, 'Python'];

console.log(languages); //(4) [Array(3), "C#", Array(3), "Python"]

languages = [...staticLanguage, 'C#', ...dynamicLanguage, 'Python']; // оператор разворота разворачивает массив внутри другого массива или функции
console.log(languages); //["C", "C++", "Java", "C#", "JavaScrypt", "PHP", "Ruby", "Python"]
console.log(...staticLanguage); //C C++ Java

function add(x, y, z) {
   console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(numbers); //1,2,3undefinedundefined  неправильная передача  массива
add(...numbers); //6  правильная передача  массива