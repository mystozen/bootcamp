function runActivity() {
  let x = ["carrot", "lettuce", "eggplant"];
  const vegetables = new Set(x);
  vegetables.add("pumpkin");
  console.log(vegetables);
  vegetables.add("carrot");
  console.log(vegetables);
  vegetables.forEach(function (vegetable) {
    if (vegetable == "eggplant") {
      console.log("This is an eggplant!");
    }
    console.log(vegetable);
  });
  //   console.log(vegetables.clear());
  console.log(vegetables.delete("eggplant"));
  console.log(vegetables.has("lettuce"));
  //   console.log(vegetables.values());
}
