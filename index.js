// index.js (starter for Objects Lab)

// 1. Make a simple object
const person = {
  name: "Ezekiel",
  age: 24,
  city: "Nairobi"
};

// 2. Get values using dot notation
console.log(person.name); // Ezekiel
console.log(person.age);  // 24

// 3. Get values using bracket notation
console.log(person["city"]); // Nairobi

// 4. Object with another object inside
const user = {
  username: "zee",
  contact: {
    email: "zee@example.com",
    phone: "0712345678"
  }
};

console.log(user.contact.email); // zee@example.com
console.log(user["contact"]["phone"]); // 0712345678

// 5. Use Object.keys() to get property names
const animals = {
  dog: 2,
  cat: 4,
  bird: 1
};

console.log(Object.keys(animals));   // ["dog", "cat", "bird"]

// 6. Use Object.values() to get the values
console.log(Object.values(animals)); // [2, 4, 1]

// 7. Another example to practice
const car = {
  brand: "Toyota",
  model: "Hilux",
  year: 2022,
  specs: {
    fuel: "Diesel",
    doors: 4
  }
};

console.log(car.brand);          // Toyota
console.log(car["model"]);      // Hilux
console.log(car.specs.fuel);     // Diesel
console.log(Object.keys(car));   // ["brand", "model", "year", "specs"]
console.log(Object.values(car)); // ["Toyota", "Hilux", 2022, { fuel: "Diesel", doors: 4 }]
