function runActivity() {
  const numbers = [];
  let x = false;

  while (x == false) {
    let number = Number(prompt("Give me a number"));
    numbers.push(number);
    let choice = Number(
      prompt("Would you like to add another number? 0: No, Any key: Yes")
    );
    if (choice == 0) {
      x = true;
    }
  }

  console.log(numbers);
  //   const names = [];
  //   for (let i = 0; i < 5; i++) {
  //     let name = prompt("Give me a name.");
  //     names.push(name);
  //   }
  //   console.log(names);
  //   console.log(names[0]);
  //
  //   const fishes = ["bangus", "tilapia", "tuna", "salmon", "shark"];
  //   fishes.push("yellowfin");
  //   for (let i = 0; i < fishes.length; i++) {
  //     console.log("Fish #" + i + ": " + fishes[i]);
  //     if (fishes[i] == "shark") {
  //       alert("DANGER! SHARK WARNING");
  //     }
  //   }
  //   console.log(fishes);
  //   console.log(fishes.length);
  //   fishes[0] = "milkfish";
  //   console.log(fishes[1]);
  //   console.log(fishes[0]);
  //   console.log(fishes.sort());
  //   console.log(fishes.reverse());
  //    let name = "Daiben Sanchez";
  //   console.log(name.length);
  //   const num = [];
  //   for (let i = 0; i <= 100; i++) {
  //     num[i] = Number(prompt("Give me a number"));
  //   }
}
