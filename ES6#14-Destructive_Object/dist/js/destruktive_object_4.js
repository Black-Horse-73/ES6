'use strict';

var user = {
   firstName: 'John',
   lastName: 'Doe',
   social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
   }
};

function post(url, config) {
   config.data;
   config.cashe;
}
//обычное присваивание
// let result = post('api/users', {
//    data: user,
//    cashe: folse
// });

var first = user.firstName,
    last = user.lastName,
    facebook = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


function post(url, _ref) {
   var _ref$data = _ref.data,
       firstName = _ref$data.firstName,
       lastName = _ref$data.lastName,
       cashe = _ref.cashe;

   console.log(firstName, lastName, cashe);
}
var result = post('api/users', {
   data: user,
   cashe: false
});

function getUserInfo() {
   return {
      firstName: 'John',
      lastName: 'Doe',
      social: {
         facebook: 'johndoe',
         twitter: 'jdoe'
      }
   };
}

var _getUserInfo = getUserInfo(),
    firstName = _getUserInfo.firstName,
    lastName = _getUserInfo.lastName,
    twitter = _getUserInfo.social.twitter;

console.log(firstName, lastName, twitter);