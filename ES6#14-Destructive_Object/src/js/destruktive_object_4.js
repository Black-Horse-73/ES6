let user = {
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

let {
   firstName: first,
   lastName: last,
   social: {
      facebook
   },
   age = 25
} = user;

function post(url, {
   data: {
      firstName,
      lastName
   },
   cashe
}) {
   console.log(firstName, lastName, cashe)
}
let result = post('api/users', {
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

let {
   firstName,
   lastName,
   social: {
      twitter
   }
} = getUserInfo();

console.log(firstName, lastName, twitter);