// // In a series of variables store:
// A string
// A number
// A Boolean.
var name = "Marisi";
var year = 1994;
var isFromMexico = true;

// Add two numbers
console.log(2 + 2);

// Use the shorthand to add 1 to a number
var num = 0;
num++;

// Use the shorthand to remove 1 from a number
var num = 5;
num--;

var num = 1;
num -= 1;

// Concatenate two string
var name = "Marisi";
var lastName = "Gonzalez";
console.log(name + lastName);

// Create an IF statement which checks if a variable matches another variable, if so it should console log a messagw
var age = 29;
var age = 29;

if (age === age) {
  console.log("You are the same age");
}

// Extend one of the IF statements to check if two things are true, if so show a message
var age = 29;
var drinks = true;
if (age > 18 && drinks === true) {
  console.log("You have free bar");
}
// Store in a variable someone’s name, age and height. Choose between an object and an array.

var person1 = {
  name: "Marisi",
  age: 29,
  height: 1.65,
};

// Create a function that accepts two numbers, adds them and returns the result
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(5 + 9));

// Create a defensive check inside the function that handles if the inputs to the function are invalid/non existent
if (typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("Both inputs must be numbers");
}


// Create an array containing a few items
const shoppingList = ["tortillas", "cheese", "tomatoes", "chicken"];


// Loop over the array using:
// for of
for (const item of shoppingList) {
  console.log(item);
}

// for each
const shoppingList = ["tortillas", "cheese", "tomatoes", "chicken"];
shoppingList.forEach(function(item) {
  console.log(item);
});


// for (the full blown one)
const shoppingList = ["tortillas", "cheese", "tomatoes", "chicken"];

for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}
// 5. Create an object
var person = {
    name:"Marisi";
    age: 29,
    gender:"female",
    loves:"corgis"
};
// 6. Add an item to the above object (using . syntax)
person.location = "United Kingdom";

// 7. Add an item to the above object dynamically (using the [] syntax)
person["ocupation"] = "Software Engineer"

// 8. Loop over the object using for in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
