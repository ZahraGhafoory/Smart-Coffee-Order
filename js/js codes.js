// --- Part 1: Login & Access Control ---

let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
    
  if (username === "admin") {
    role = "admin";
    securityLevel = "high";
    alert("Welcome admin! Your access is " + securityLevel)
  } else {
    role = "user";
    securityLevel = "low";
    alert("Welcome user! Your access is " + securityLevel)
  }

} else {
  alert("Invalid username and password!");
}

// Part 2: Coffee Shop Order Calculator 

let Name = prompt("What is your name?");
let age = Number(prompt("Enter your age:"));
let coffeeType = prompt("Choose your coffee (espresso, latte, cappuccino):");
let quantity = Number(prompt("How many cups do you want?"));

// Set price per cup

let pricePerCup = 0;
if (coffeeType === "espersso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("Invalid coffee type.")
}

// Calculate totals

let originalTotal = pricePerCup * quantity;
let discount = 0;
if (age < 18 || age > 60) {
  discount = originalTotal * 0.30
}
let finalTotal = originalTotal - discount;

// Part 3: Bill Splitter wit tip

let numPeople = Number(prompt("ow many people are splitting the bill? (1, 2 or 3)"));
let tipPercent = Number(prompt("ENter tip percentage (0, 5, 10 or 15):"));

let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / numPeople;

// Output

alert(`
  Hello ${Name}!
  You ordered ${quantity} ${coffeeType}(s)
  Orginal total: ${originalTotal.toFixed(2)}
  Discount: $${discount.toFixed(2)}
  Tip: $${tipAmount.toFixed(2)}
  Total with tip: $${totalWithTip.toFixed(2)}
  Split between ${numPeople} people $${amountPerPerson.toFixed(2)} each `);

//   It has problems I must work on it
//   console.log(
//     Hello: Zahra \n You ordered: Esperso  \n Orginal total: 1 \n Discount: 10% \n  Tip: 000 \n  Total with tip: 000 \n Split between people: "...."
//   )
