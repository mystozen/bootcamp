$(document).ready(function () {
  $("#food-order").submit(function (x) {
    let item_select = $("#food-select").val();
    let amount = $("#food-amount").val();
    let item_name;
    let price;
    let total_price;
    let new_item;
    let i = true;
    while (i) {
      switch (item_select) {
        case "burger":
          item_name = "Burger";
          price = 60;
          break;
        case "steak":
          item_name = "Steak";
          price = 80;
          break;
        case "fries":
          item_name = "Fries";
          price = 50;
          break;
        case "salad":
          item_name = "Salad";
          price = 70;
          break;
        case "sprite":
          item_name = "Sprite";
          price = 25;
          break;
        case "icecream":
          item_name = "Ice Cream";
          price = 25;
          break;
      }
      total_price = amount * price;
      i = false;
    }
    let foodtable = $("#food-table").html();
    new_item =
      "<tbody><tr><td>" +
      item_name +
      "</td><td>" +
      amount +
      "</td><td>" +
      "₱ " +
      total_price +
      ".00" +
      "</td></tr></tbody>";
    foodtable = foodtable.replace("</tbody>", new_item);
    $("#food-table").html(foodtable);

    x.preventDefault();
  });

  $("#get_all").change(function () {
    if (this.checked) {
      $(".sauce").prop("checked", true);
    } else {
      $(".sauce").prop("checked", false);
    }
  });
});
