let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
//обычное присваивание
// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

//деструктивное присваивание
// let js, php, py, rb;
// [js, php, py, rb] = languages;

//другой вариант
let [js, php, py, rb] = languages;

console.log(js, php, py, rb);