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