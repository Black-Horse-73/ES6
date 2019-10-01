'use strict';

var user2 = {
   firstName: 'John',
   lastName: 'Doe',
   social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
   }
};

//деструктивное присваивание объектов
//доступ к вложенному элементу facebook
var _user = user,
    first = _user.firstName,
    last = _user.lastName,
    facebook = _user.social.facebook,
    _user$age = _user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, facebook, age);

// let {
//    firstName: first,
//    lastName: last,
//    social: {
//       facebook: fb
//    },
//    age = 25
// } = user;

// console.log(first, last, fb, age);