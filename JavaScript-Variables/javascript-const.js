// Using const
const age = 25;
console.log(age); // Output: 25
// age = 30;      // ❌ This will cause an error: Assignment to constant variable

// 1. Const with a number
const pi = 3.14159;
console.log("Pi is:", pi);

// 2. Const with an array (we can change the elements)
const fruits = ["🍎", "🍌", "🍇"];
console.log("Fruits:", fruits);

// Adding a new fruit
fruits.push("🍉");
console.log("Fruits after adding:", fruits);

// 3. Const with an object
const person = { name: "Alice", age: 25 };
console.log("Person:", person);