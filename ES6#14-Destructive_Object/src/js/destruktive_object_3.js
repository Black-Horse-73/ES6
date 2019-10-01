let user2 = {
   firstName: 'John',
   lastName: 'Doe',
   social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
   }
};

//деструктивное присваивание объектов
//доступ к вложенному элементу facebook
let {
   firstName: first,
   lastName: last,
   social: {
      facebook
   },
   age = 25
} = user;

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