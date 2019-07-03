// ARITHMETIC OPERATORS
let x = 10;
let y = 3;

// // console.log(x + y); //Add
// // console.log(x - y); //Subtract
// // console.log(x * y); //Multiply
// // console.log(x / y); //Divide
// // console.log(x % y); //Modulus / Division remainder
// // console.log(x ** y); // ?

// //Increment ++
// console.log(x++);
// console.log(x);
// console.log(++x);

// // Decrement --
// console.log(y--);
// console.log(y);
// console.log(--y);


// ASSIGNMENT OPERATORS
// console.log(x += 5); // x = x + 5
// console.log(x -= 5); // x = x - 5
// console.log(x *= 5); // x = x + 5


// COMPARISON OPERATORS

//Relational
// console.log(x > 5); // More than 
// console.log(x < 5); // Less than
// console.log(x >= 10); // More than or equal to 

//Equality - Strict equality (Same Type & Value (===))
// console.log(x === 10); // Equal to
// console.log('10' === 10); // equal to = false
// console.log(x !== 10); // Not equal to

//Equality - Lose equality (Same Value (==))
// console.log(x == 10); // Equal to
// console.log('10' == 10); // equal to = true
// console.log(true == 1, true == 0); // 1 = true 0, 2+ = false
// console.log(false == 1, false == 0); // 1 = true 0, 2+ = false


// TERNARY OPERATOR
// if customer < 100 points = they are a 'gold' customer,
// otherwise they are a silver customer.

// let points = 110;
// let type = points >= 100 ? 'gold' : 'silver';
// // ? = true, : = false

// console.log(type);


// LOGICAL OPERATORS

// Logical AND (&&) - Returns TRUE if both operands are TRUE
// console.log(true && true); //true because both are true
// console.log(true && false); //false because different values
// console.log(false && false); //false because both are false

//Real world Use
// let highIncome = true;
// let goodCreditScore = true;
// let loanStatus = highIncome && goodCreditScore === true ? 'Accepted' : 'Declined';
// console.log(loanStatus);

// Logical OR (||)
//returns TRUE if one of the operands is TRUE
// let highIncome = false;
// let goodCreditScore = true;
// let loanStatus = highIncome || goodCreditScore === true ? 'Accepted' : 'Declined';
// console.log(loanStatus);


// NOT (!)
// let highIncome = false;
// let goodCreditScore = false;
// let loanStatus = highIncome && goodCreditScore;
// console.log('Eligible', loanStatus);
// let applicationRefused = !loanStatus;
// console.log('Application refused:', applicationRefused);


// LOGICAL OPERATORS W/ NON-BOOLEANS

// Falsy (false) = undefined, null, 0, false, '', NaN 
// Anything that is not Falsy -> Truthy (true)

//Real world example
// let userColor = 'Red';
// let defaultColor = 'blue';
// let currentColor = undefined || defaultColor;
// //If user did not selet Color, default color is used
// console.log(currentColor);


// BITWISE OPERATORS
//Bitwise OR = |  // Works like + but it does this in units
//Bitwise AND = & // Works like - but it does this in units
// 1 = 0000000
// 1 = 0000001
// 2 = 0000010
// 3 = 0000011
// console.log(1 | 2); // result = 3
// console.log(1 & 2); // result = 0

//Real World example
// Read, Write, Execute
// 00000100, 00000110, 00000001

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | writePermission;

// console.log(myPermission);

// let message = (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message);


// OPERATORS PRECEDENCE
// Basically just BIDMAS/ BODMAS
// x = 2 + 3 * 4;
// console.log(x);

// x = (2 + 3) * 4;
// console.log(x);


// EXERCISE - Swapping Variables

let a = 'red';
let b = 'blue';

let array = [a, b];

a = array[1];
b = array[0];

console.log(a);
console.log(b);