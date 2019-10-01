'use strict';

var person = {
   firstName: 'John',
   lastName: 'Doe'
};

//обычное присваивание объектов
// let firstName = person.firstName;
// let lastName = person.lastName;

//деструктивное присваивание объектов
var firstName = person.firstName,
    lastName = person.lastName;


console.log(firstName, lastName);

//другой вариант
// let {
//    firstName: first,
//    lastName: last
// } = person;

// console.log(first, last);