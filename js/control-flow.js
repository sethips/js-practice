// IF & ELSE

//If hour is between 6am & 12pm: Good morning!
//If it is between 12pm & 6pm: Good afternoon!
//Otherwise: Good evening!

// let hour = 18;
// let message = 'Good evening!';

// if (hour >= 6 && hour < 12)
//     message = 'Good morning!';
// else if (hour >= 12 && hour < 19)
//     message = 'Good afternoon!';
// else
//     message;

// console.log(message);

// SWITCH CASE
// let role = "mod";

// switch (role) {
//   case "guest":
//     console.log("Guest User");
//     break;

//   case "mod":
//     console.log("Moderator User");
//     break;

//   default:
//     console.log("Unknown User");
// }

// lOOPS

//For loop
// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

//While loop
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

//Do-while loop
// let i = 0;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

//Infinite loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     //   i++; //No Incrementation = Infinite loop  
// }
// while (true) {
// }

//For-in loop
// const person = {
//     name: 'Mosh',
//     age: 30
// }

// for (let key in person)
//     console.log(person[key]);

// const colors = ['red', 'blue', 'green'];

// for (let index in colors)
//     console.log(index, colors[index]);

//For-of loop
// const colors = ['red', 'blue', 'green'];

// for (let color of colors)
//     console.log(color);

//Break & Continue
// let i = 0;
// while (i <= 6) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }


// EXERCISE 1 - Max of Two Numbers
//Write a function that takes two numbers &
//returns the maximum of the two.

// function max(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }
// console.log(max(92, 89));

// EXERCISE 2 - Landscape or Portrait
// function isLandscape(width, height) {
//     return (width > height);
// }
// console.log(isLandscape(100, 120));

// EXERCISE 3 - FizzBuzz
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 & 5 => FizzBuzz
//Not divisible by 3 or 5 => Number
//If input !== Number => "Not a number"

// function fizzBuzz(num) {
//     if (typeof num === 'number')
//         if (num % 3 == 0)
//             if (num % 5 == 0)
//                 return 'FizzBuzz';
//             else
//                 return 'Fizz';
//         else if (num % 5 == 0)
//             return 'Buzz';
//         else
//             return num;
//     else
//         return NaN;

// }

// console.log(fizzBuzz(5));


// EXERCISE 4 - Demerit Points
//Speed Limit = 70 
//Every +5 from speed limit = +1 point
// 12 points -> Suspended

// function checkSpeed(speed) {

//     const speedLimit = 70;
//     speed = Math.floor(speed);
//     const points = (speed - speedLimit) / 5;

//     return (points >= 12) ?
//         'Suspended' : 'Valid ' + (12 - points) + ' points remain';

// }


// console.log(checkSpeed(80));


// EXERCISE 5 - Even and Odd Numbers

// function showNumbers(num) {
//     for (let count = 0; count <= num; count++) {
//         console.log(count, (count % 2 === 0) ? 'EVEN' : 'ODD');
//     }
// }

// showNumbers(10);

// EXERCISE 6 - Count Truthy

// const array = [undefined, 0, null, '', 1, 2, 3];

// function countTruthy(array) {
//     let count = 0;
//     for (const value of array) {
//         if (value)
//             count++;
//     }
//     return count;
// }

// console.log(countTruthy(array));


// EXERCISE 7- String Properties
// const movie = {
//     title: 'movieTitle',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'directorName'
// }

// for (const key in movie) {
//     if (typeof movie[key] === 'string')
//         console.log(key, movie[key]);
// }


// EXERCISE 8- Sum of Multiples of 3 and 5

// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i < limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;
//     }
//     return sum;
// }

// console.log(sum(10));


// EXERCISE 9 - Grade
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// const marks = [100, 110, 60];

// function calcAverage(array) {
//     let sum = 0;

//     for (let value of array)
//         sum += value;

//     return sum / array.length;
// }

// function gradeCalc(marks) {
//     const average = calcAverage(marks);

//     if (average <= 59) return 'F';
//     if (average <= 69) return 'D';
//     if (average <= 79) return 'C';
//     if (average <= 89) return 'B';
//     if (average <= 100) return 'A';

//     return average;
// }

// console.log(gradeCalc(marks));


// EXERCISE 10 - Stars
// function showStars(rows) {
//     for (let row = 0; row < rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }

// showStars(10);


// EXERCISE 11 - Prime Numbers

//My faulty solution
// for (let i = 0; i <= 10; i++) {
//     let zero = [];
//     let h;
//     for (let y = 2; y <= 20; y++) {
//         // console.log(i % y);
//         let calc = i % y;
//         if (calc === 0)
//             zero.push(calc);
//         if (zero.length <= 1)
//             h = calc;
//     }

//     console.log(h);
// }

//Good solution
// function calcPrimes(num) {
//     for (let factor = 2; factor < num; factor++)
//         if (num % factor === 0)
//             return false;
//     return true;
// }

// function showPrimes(limit) {
//     for (let num = 2; num <= limit; num++)
//         if (calcPrimes(num)) console.log(num);
// }

// showPrimes(10);