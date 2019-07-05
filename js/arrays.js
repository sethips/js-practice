// ADDING ELEMENTS
// const numbers = [3, 4];

// //Add to end
// numbers.push(5, 6);

// //Add to Middle
// numbers.unshift(1, 2);

// //Add to Middle
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);


// FINDING ELEMENTS
// Primitives
// const numbers = [1, 2, 2, 3, 4];

// console.log(numbers.indexOf(2));
// console.log(numbers.lastIndexOf(2));

// console.log(numbers.indexOf(2) !== -1); 
// console.log(numbers.includes(1)); 

// Reference Types
// const courses = [{
//         id: 1,
//         name: 'a'
//     },
//     {
//         id: 2,
//         name: 'b'
//     },
// ];

// const course = courses.find(function (course) {
//     return course.name === 'a';
// });

// ARROW FUNCTIONS

// const course = courses.find(course => course.name === 'a');

// console.log(course);


// REMOVING ELEMENTS
// const num = [1, 2, 3];

// //Remove end
// // console.log(num.pop());

// //Remove Middle
// console.log(num.splice(1, 1));

// //Remove End
// // console.log(num.shift());
// console.log(num);


// EMPTYING AN ARRAY
// let numbers = [1, 2, 3];

// // //Solution 1
// // numbers = [];

// Solution 2
// numbers.length = 0;//<<<

// //Solution 3
// // numbers.splice(0, numbers.length);

// // while (numbers.length > 0)
// //     numbers.pop();

// console.log(numbers);


// COMBINING AND SLICING ARRAYS
//Primitive
// let first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // const sliceCopy = combined.slice();
// // const sliced = combined.slice(2, 4);

// // console.log(combined);
// // console.log(sliceCopy);
// // console.log(sliced);

// // Referenced
// first = [{
//     id: 1
// }];

// first[0].id = 10;

// console.log(first.concat(second));

// THE SPREAD OPERATOR
// const combined = [...first, 'a', ...second];

// console.log(combined);


// ITERATING AN ARRAY
// const numbers = [1, 2, 3];

// // numbers.forEach(number => console.log(number));

// // JOINING ARRAYS
// const join = numbers.join(','); //uncomment line 108 to work
// console.log(join);

// const msg = 'This is my first message';
// const parts = msg.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);