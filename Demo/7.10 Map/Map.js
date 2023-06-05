function runActivity() {
  const fruit_prices = new Map([
    ["apple", 10],
    ["banana", 20],
    ["orange", 30],
  ]);
  console.log(fruit_prices.size);
  console.log(fruit_prices.has("banana"));
  console.log(fruit_prices.values());
  fruit_prices.forEach(function (value, key) {
    console.log(key + " " + value);
  });
  let choice = Number(prompt("Add a fruit? 0: Yes, ANY KEY: No"));
  if (choice == 0) {
    let name = prompt("What fruit would you like to add?");
    let price = prompt("What is the price of " + name);
    fruit_prices.set(name, price);
    console.log("Added " + name);
  }
  choice = Number(prompt("Add another fruit? 0: Yes, ANY KEY: No"));
  if (choice == 0) {
    let name = prompt("What fruit would you like to add?");
    let price = prompt("What is the price of " + name);
    fruit_prices.set(name, price);
    console.log("Added " + name);
  }
  choice = prompt("What would you like to buy?");
  console.log("The price of " + choice + " is " + fruit_prices.get(choice));
  let del = prompt("What fruit would you like to delete?");
  fruit_prices.delete(del);
  choice = prompt("What would you like to buy?");
  console.log("The price of " + choice + " is " + fruit_prices.get(choice));

  const enemies = [];
  enemies[0] = new Map([
    ["name", x],
    ["hp", 300],
    ["stat_defense", 100],
  ]);

  console.log(enemies[0].get("name"));
}
