function sum(limit){
    if (typeof limit !== `number`){
        return "The value passed is not a nummber"
    }
}
if (!isFinite(limit)) {
     return "The value passed is not a number";
  }
   if (Math.floor(limit) !== limit) {
    return "The value passed is not a number";
  }
  let total = 0
  for (let i = 0; i <= Math.abs(limit); i++) {
    total += i;
  }
  if (limit < 0){
    let signedTotal = 0;
      if (limit >= 0) {
          for (let i = 0; i <= limit; i++) {
              signedTotal += i;
          }
      } else {
          for (let i = 0; i >= limit; i--) {
              signedTotal += i;
          }
      }
      return signedTotal;
  }
   return (limit * (limit + 1)) / 2

console.log(`sum(5): ${sum(5)}`);          
console.log(`sum(10): ${sum(10)}`);
console.log(`sum(-3): ${sum(-3)}`)

_____________________________________________________________________________________________________
function factorial(n){
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
         return "Invalid input: Must be a non-negative integer.";
    }
}
if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

_____________________________________________________________________________________________________

function funkyMath(...args) {
  const numArgs = args.length;

  if (numArgs === 2) {
    return args[1] - args[0];
  } else if (numArgs === 3) {
    return args[0] + args[1] + args[2];
  } else if (numArgs === 4) {
    const sum1 = args[0] + args[1];
    const sum2 = args[2] + args[3];
    return sum1 / sum2;
  } else {
    return "Invalid number of arguments. Please provide 2, 3, or 4 arguments.";
  }
}
const result2Args = funkyMath(5, 10);
console.log(`funkyMath(5, 10) -> Output: ${result2Args}`)

_______________________________________________________________________________________________________

const originalArray = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];
const evenNumbers = [];

for (const number of originalArray) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  } else {
    evenNumbers.push(number);
  }
}

oddNumbers.sort((a, b) => a - b);

console.log("Original array:", originalArray);
console.log("New array with odd numbers (sorted):", oddNumbers);
console.log("Array with remaining even numbers:", evenNumbers)

________________________________________________________________________________________________________

const me = {
  firstName: "Alonzo", 
  lastName: "Gravel",   
  age: 22,           
  favouriteColour: "Black",
  dreamCar: "Gofl G8" // 
};

console.log(`My name is ${me.firstName} ${me.lastName}.`);
console.log(`I am ${me.age} years old.`);
console.log(`My dream car is a ${me.dreamCar}.`)
__________________________________________________________________________________________________________

delete me.age;
console.log(me);