//found it!
const menu_prices = {
  burger: 60,
  steak: 80,
  fries: 50,
  salad: 70,
  sprite: 25,
  icecream: 25,
};
const menu_names = {
  burger: "Burger",
  steak: "Steak",
  fries: "Fries",
  salad: "Salad",
  sprite: "Sprite",
  icecream: "Ice Cream",
};

$(document).ready(function () {
  $("#food-order").submit(function (x) {
    let food_choice = $("#food-select").val();
    let amount = $("#food-amount").val();
    let price = menu_prices[food_choice] * Number(amount);
    $("#food-table").html(
      $("#food-table").html() +
        "<tr><td>" +
        menu_names[food_choice] +
        "</td><td>" +
        amount +
        "</td><td>₱" +
        price +
        "</td>" +
        "</tr>"
    );
    x.preventDefault();
  });
  //   let check_all = false;
  //   $("#get_all").click(function () {
  //     if (!check_all) {
  //       $(".sauce").attr("checked", true);
  //       check_all = true;
  //     } else {
  //       $(".sauce").removeAttr("checked");
  //       check_all = false;
  //     }
  //   });
  $("#get_all").click(function () {
    if ($("#get_all").prop("checked")) {
      $(".sauce").prop("checked", true);
    } else {
      $(".sauce").prop("checked", false);
    }
  });

  $(".sauce").click(function () {
    $("#get_all").prop("checked", false);
  });
});
