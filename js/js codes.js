// *section One: Login & Access...
let username = prompt('Enter your Username "Admin or User" :');
let password = prompt("Enter your Password :");
let role = "";
let securityLevel = "";

if ((username === "Admin" || username === "User") && password === "12345678") {
    
  if (username === "Admin") {
    role = "admin";
    securityLevel = "high";
    alert("Welcome Admin! Your access is " + securityLevel)
  } else {
    role = "user";
    securityLevel = "low";
    alert("Welcome User! Your access is " + securityLevel)
  }

} else {
  alert("Invalid Username and Password!");
}



//TRY AGAIN...

//*Section Two: Coffee Order Calculator... 
let Name = prompt("What is your Name?");
let age = Number(prompt("Please enter your age:"));
let coffeeType = prompt("Choose your coffee fom the chart > (Espresso, Latte, Cappuccino):");
let quantity = Number(prompt("How many cups would you like to order?"));



//*Set Price For Each Cup...
let pricePerCup = 0;
if (coffeeType === "Espersso") {
  pricePerCup = 2.5;
} else if (coffeeType === "Latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "Cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("Invalid coffee type.")
}



//*Calculate-Totals...
let originalTotal = pricePerCup * quantity;
let discount = 0;
if (age < 18 || age > 60) {
  discount = originalTotal * 0.30
}
let finalTotal = originalTotal - discount;



//*Section Three: Bill-Splitter-Wit-Tip...
let numPeople = Number(prompt('Oh! There are lots of people splitting the bill? "1, 2, 3, 4 or 5" '));
let tipPercent = Number(prompt('Enter tip percentage "0, 5, 10 or 15" :'));
let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / numPeople;



//*Final-Allert-Output...
alert(`
  Hello ${Name}!
  You ordered ${quantity} ${coffeeType}(s)
  Orginal total: ${originalTotal.toFixed(2)}
  Discount: $${discount.toFixed(2)}
  Tip: $${tipAmount.toFixed(2)}
  Total with tip: $${totalWithTip.toFixed(2)}
  Split between: ${numPeople} people $${amountPerPerson.toFixed(2)} each `);


  
//*Final-Allert-Output-Example-ON-Console... 
  console.log(`How can I make sure I ordered successfully ?\nThis is an example for you!\nIf you recive a messege like this while ordering your coffee, it means you have ordered successfully. `)
   const nameEx = "Zahra";
   const typeOrder = "Cappuccino";
   const origTotal = 20;
   const disc = "20%";
   const tp = null;
   const totalTp = null;
   const splitBet = null;
   console.log(`Hello: ${nameEx}`);
   console.log(`You ordered: ${typeOrder}`);
   console.log(`Orginal total: ${origTotal}`);
   console.log(`Discount: ${disc}`);
   console.log(`Tip: ${tp}`);
   console.log(`Total with tip: ${totalTp}`);
   console.log(`Split between: ${splitBet}`); 
