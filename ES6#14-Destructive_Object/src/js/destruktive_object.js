let person = {
   firstName: 'John',
   lastName: 'Doe'
};

//обычное присваивание объектов
// let firstName = person.firstName;
// let lastName = person.lastName;

//деструктивное присваивание объектов
let {
   firstName,
   lastName
} = person;

console.log(firstName, lastName);

//другой вариант
// let {
//    firstName: first,
//    lastName: last
// } = person;

// console.log(first, last);