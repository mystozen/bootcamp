$(document).ready(function () {
  $("#change_name").click(function () {
    let old_name = $("#name").text();
    alert("Hello, " + old_name + "!");
    let name = prompt("Change your name?");
    $("#name").text(name);
  });

  $("#add_employee").click(function () {
    let curr_table = $("#employee_list").html();
    let name = prompt("What is the employee's name?");
    let position = prompt("What is the employee's position?");
    let new_entry = "<tr><td>" + name + "</td><td>" + position + "</td></tr>";
    $("#employee_list").html(curr_table + new_entry);
  });

  $(".required").hide();
  $(".form-text").blur(function () {
    if ($(".form-text").val() == "") {
      $(".required").show();
    } else {
      $(".required").hide();
    }
  });
});
