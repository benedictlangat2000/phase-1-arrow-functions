// Declare a function using a function expression
const greet1 = function(name) {
    console.log(`Hello, ${name}!`);
  };
  
  greet1("John"); // Output: Hello, John!
  
  // Declare a function using arrow syntax
  const greet2 = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  greet2("John"); // Output: Hello, John!
  
  // Situations where arrow functions are used
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6, 8, 10]
  
  const person = {
    name: "John",
    greet: function() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    },
  };
  
  person.greet(); // Output: Hello, John!
  
  // Declare a function expression called divide
const divide = function(number1, number2) {
    const parsedNumber1 = parseFloat(number1);
    const parsedNumber2 = parseFloat(number2);
  
    if (isNaN(parsedNumber1) || isNaN(parsedNumber2)) {
      return 20;
    }
  
    return parsedNumber1 / parsedNumber2;
  };
  
  console.log(divide(2000, 100)); // Output: 20
  
  
  // Declare an arrow function called square
  const square = (number) => {
    return number * number;
  };
  
  console.log(square(5)); // Output: 25
  
  // Declare an arrow function called add
  const add = (number1, number2) => {
    return number1 + number2;
  };
  
  console.log(add(2, 3)); // Output: 5
  