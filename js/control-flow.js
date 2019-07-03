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

function checkSpeed(speed) {

    const speedLimit = 70;
    speed = Math.floor(speed);
    let points = (speed - speedLimit) / 5;

    return (points >= 12) ?
        'Suspended' : 'Valid ' + (12 - points) + ' points remain';

}


console.log(checkSpeed(300));