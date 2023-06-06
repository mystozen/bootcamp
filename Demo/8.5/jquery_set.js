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

  $("img.bag-preview").mouseenter(function () {
    let source = $(this).prop("src");
    $("#bag-display").prop("src", source);
  });

  $("td.note-item").click(function () {
    // $(this).addClass("bg-danger");
    // $(this).removeClass("bg-danger");
    $(this).toggleClass("bg-danger");
  });

  $("img.painting").mouseenter(function () {
    $(this).removeClass("painting-small");
    $(this).addClass("painting-large");
    let desc = $(this).prop("alt");
    $("#painting-caption").text(desc);
  });

  $("img.painting").mouseleave(function () {
    $("img.painting").addClass("painting-small");
    $("img.painting").removeClass("painting-large");
    $("#painting-caption").text("");
  });
});
