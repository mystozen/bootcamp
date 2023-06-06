//replace and add number
$(document).ready(function () {
  $("#studentButton").click(function () {
    let old_name = $("#student-count").text();
    old_name++;
    document.getElementById("student-count").innerHTML = old_name;
  });
  //changing theme color
  $("#darkMode").click(function () {
    $("nav.dark-mode").toggleClass("bg-gray");
    $("nav.dark-mode").toggleClass("bg-dark");
    $("nav.dark-mode").toggleClass("navbar-light");
    $("nav.dark-mode").toggleClass("navbar-dark");
    $("#darkMode").toggleClass("btn-dark");
    $("#darkMode").toggleClass("btn-light");
    $("#darkMode").toggleClass("text-dark");
    $("#darkMode").toggleClass("text-light");
    $("header").toggleClass("bg-light");
    $("header").toggleClass("text-white");
    $("div.dark-mode").toggleClass("bg-dark");
    $("div.dark-mode").toggleClass("bg-white");
    $("div.dark-mode").toggleClass("text-light");
    $("div.dark-mode").toggleClass("text-white");
    $("body.dark-mode").toggleClass("bg-dark");
    $("body.dark-mode").toggleClass("bg-white");
  });
});
