// This program does the following:
// 1. Ask the user to select a product.
// 2. Sell the product.
function runActivity() {
  let cash = 1000;
  //   if (!(cash == 900) && cash < 5000) {
  //     console.log("This is true");
  //   } else {
  //     console.log("This is false");
  //   }
  let choice = Number(
    prompt("Would you like to buy an Aquaflask for 600 pesos? 0: Yes, 1: No")
  );
  if (!choice == 0 && cash >= 600) {
    console.log("Thank you for buying my Aquaflask!");
    cash -= 600;
  } else {
    console.log("Awww too bad.");
  }

  choice = Number(
    prompt(
      "Would you like to buy a chicken joy bucket meal for 500 pesos? 0: Yes, 1: No"
    )
  );
  if (choice == 0 && cash >= 500) {
    console.log("Bida ang saya!");
    cash -= 500;
  } else {
    console.log("Salbahe.");
  }

  console.log("You have " + cash + " left.");
}
