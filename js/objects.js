// BASICS
// Object-oriented Programing (OOP)
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//  console.log('draw');

//     }
// };

// circle.draw(); // Referred as Method


// FACTORY FUNCTIONS
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// console.log(createCircle(2));


// CONSTRUCTOR FUNCTIONS
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);


// DYNAMIC NATURE OF OBJECTS
// const circle = {
//     radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function () {}

// delete circle.radius;
// delete circle.draw;

// console.log(circle);


// CONSTRUCTOR PROPERTY

// new String(); // => '', "". ``
// new Boolean(); // => true, false
// new Number(); // 1, 2, 3 etc...

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// console.log(circle.constructor); // <<<


// FUNCTIONS are OBJECTS

//examples
// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.prototype);
// console.log(Circle.caller);

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// `);

// const circle1 = new Circle1(1);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// Circle.call({}, 1);
// Circle.apply({}, [1]);
// // =
// const circle = new Circle(1);


// VALUE vs REFERENCE TYPES
//Primitives are copied by their value
//Objects are copied by their reference
// let x = {
//     value: 10
// };
// let y = x;

// // x = 20;
// x.value = 20;

// let obj = {
//     value: 10
// };
// let number = 10;

// function increase(obj) {
//     number++;
//     obj.value++;
//     console.log(obj);
// }
// console.log(obj);
// console.log(number);

// increase(obj);

// console.log(obj);
// console.log(number);


// ENUMERATING PROPERTIES OF AN OBJECT
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('drawing');
//     }
// }

// for (let key in circle)
//     console.log(circle[key]);

// for (let key of Object.keys(circle))
//     console.log(key);
// if ('color' in circle) console.log('yes');


//returns Object's reference title(s) as Array
// console.log(Object.keys(circle));
// returns Object's reference title(s) & their content as Array
// console.log(Object.entries(circle));


// CLONING AN OBJECT
const circle = {
    radius: 1,
    draw() {
        console.log('drawing');
    }
}


// for (let key in circle)
//     another[key] = circle[key];
//equivalent to
// another['radius'] = circle['radius'];

//Alternative (fast method + lets you include references)
// const another = Object.assign({}, circle);

//Even faster Alternative (fastest cloning Method)
// const another = {
//     ...circle
// };

// console.log(another);


// GARBAGE COLLECTION
// Auto delicate (object) memory


// -- BUILT IN OBJECTS ---
// MATH OBJECT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// console.log(Math.round(Math.random() * 10));
// console.log(Math.max(1, 2, 3)); // returns largest integer

// STRING
//String primitive & Escape Notations
// const msg = ' hello\n buckoroo ';
// console.log(typeof msg, msg.length);
// console.log(msg[0], msg[1]);
// console.log('e:', msg.includes('e'), 'E:', msg.includes('E'));
// console.log('Ends with "o":', msg.endsWith('o'));
// console.log('index sentence starts at', msg.indexOf('buckoroo'));
// console.log(msg.replace('hello', 'what\'s going on'));
// console.log(msg.toUpperCase());
// console.log(msg.trim()); // removes 1st & last space of String
// console.log(msg.split(' '));


//String object
// const another = new String('hi');
// console.log(typeof another);

// TEMPLATE LITERALS => tl
// const name = 'John';
// const msg = 'It\'s a String literal\n sentence ' + name + ' :)';

// console.log(msg);

// const tlMsg =
//     `Tt's a Template literal
//     sentence ${name} :)`;

// console.log(tlMsg);

// DATE
// const now = new Date();
// const date1 = new Date('July 5 2019 09:00');
// const date2 = new Date(2019, 06, 06); // 2019/ 07 / 05

// now.setFullYear(2017);

// console.log(now);
// console.log(now.toDateString());
// console.log(now.toISOString());
// console.log(date1);
// console.log(date2);


// Exercise 1- Address Object
//Street, city, zipCode
//showAddress(address)

// const address = {
//     street: 'Main Street',
//     city: 'Manchester',
//     zipCode: 'X21 4BJP'
// };

// function showAddress(address) {
//     for (let key in address)
//         console.log(address[key]);
// }

// showAddress(address);


// Exercise 2- Factory and Constructor Functions
// const address = {
//     street: 'Main Street',
//     city: 'Manchester',
//     zipCode: 'X21 4BJP'
// };
// // Factory
// function createAddress(street, city, zipCode) {
//     return {
//         street: street,
//         city: city,
//         zipCode: zipCode
//     }
// }

// const createdAddress = createAddress('a', 'b', '1');

// for (let key in createdAddress)
//     console.log(createdAddress[key]);

// // Constructor
// function CreateAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const createdAddress2 = new CreateAddress('x', 'y', '0');

// for (let key in createdAddress2)
//     console.log(createdAddress2[key]);


// Exercise 3- Object Equality

// function CreateAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const address1 = new CreateAddress('x', 'y', '0');
// const address2 = new CreateAddress('x', 'y', '0');
// const address3 = address1;


// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipCode === address2.zipCode
// }

// console.log(areEqual(address1, address2));

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// console.log(areSame(address1, address2));


// Exercise 4- Blog Post Object
//title , body, author, views, comments (author, body), isLive

// const report = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 5,
//     comments: [{
//         author: 'a',
//         body: 'b'
//     }],
//     isLive: true
// }


// Exercise 5- Constructor Functions


// function Draft(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

// const draft = new Draft('a', 'b', 'c');

// console.log(draft);


// Exercise 6- Price Range Object

// const priceRanges = [{
//         label: '$',
//         tooltip: 'Inexpensive',
//         min: 0,
//         max: 10
//     },
//     {
//         label: '$',
//         tooltip: 'Moderate',
//         min: 11,
//         max: 20
//     },
//     {
//         label: '$',
//         tooltip: 'Expensive',
//         min: 21,
//         max: 30
//     }
// ];

// let restaurants = [{
//     average: 5
// }];

// console.log(restaurants[0].average);

// function calcPriceRange(priceRanges, restaurants) {
//     for (let priceRange of priceRanges) {
//         restaurants.forEach(function (restaurant) {
//             if (restaurant.average <= priceRange.max &&
//                 restaurant.average > priceRange.min)
//                 return console.log(priceRange.label, priceRange.tooltip);
//         });
//     }
// }

// calcPriceRange(priceRanges, restaurants);