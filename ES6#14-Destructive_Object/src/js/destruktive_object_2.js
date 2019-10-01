//другой вариант
let {
   firstName: first,
   lastName: last,
   age = 25
} = {
   firstName: 'John',
   lastName: 'Doe'
};

console.log(first, last, age);