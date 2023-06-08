try {
  let num = 1;
  num.toUpperCase();
} catch (err) {
  console.log(err.message);
  //console.error("An error has occurred!");
  $(document).ready(function () {
    $("#error").text("An error has occurred! " + err.message);
  });
}

try {
  let x = Number(prompt("Give me a number from 1 to 100."));
  if (x < 1) {
    throw "Number can not be less than 1!";
  } else if (x > 100) {
    throw "Number can not be greater than 100!";
  }
} catch (err) {
  $(document).ready(function () {
    $("#error").text(err);
    console.log(err);
  });
} finally {
  console.log("Test finished!");
}
