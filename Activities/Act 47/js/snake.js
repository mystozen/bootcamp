$(document).ready(function () {
  let hunger_bar = 100;
  let excersize_bar = 100;
  let sleep_bar = 100;
  let alive = true;

  $("#hungerbut").click(function () {
    if (alive) {
      hunger_bar = 100;
      sleep_bar -= 5;
      $("#hunger_bar").prop(`style`, `width: ${hunger_bar}%`);
      $("#sleep_bar").prop(`style`, `width: ${sleep_bar}%`);

      $("#result").html("You have feed with Drake");
    }
  });
  $("#exbut").click(function () {
    if (alive) {
      excersize_bar = 100;
      $("#ex_bar").prop(`style`, `width: ${excersize_bar}%`);
      $("#result").html("You Drake excersize");
    }
  });
  $("#sleepbut").click(function () {
    if (alive) {
      sleep_bar = 100;
      $("#sleep_bar").prop(`style`, `width: ${sleep_bar}%`);
      $("#result").html("You make drake to sleep");
    }
  });

  function hungerBar() {
    if (hunger_bar == 0) {
      hunger_bar = 0;
      $("#result").html("Drake is died in hunger");
    } else {
      hunger_bar--;
      $("#hunger_bar").prop(`style`, `width: ${hunger_bar}%`);
      console.log(hunger_bar);
    }
  }
  function exBar() {
    if (excersize_bar == 0) {
      excersize_bar = 0;
      $("#result").html("Drake is died in excersize");
    } else {
      excersize_bar--;
      $("#ex_bar").prop(`style`, `width: ${excersize_bar}%`);
    }
  }
  function sleepBar() {
    if (sleep_bar == 0) {
      sleep_bar = 0;
      $("#result").html("Drake is died in sleep");
    } else {
      sleep_bar--;
      $("#sleep_bar").prop(`style`, `width: ${sleep_bar}%`);
    }
  }
  setInterval(hungerBar, 1000);
  setInterval(exBar, 3000);
  setInterval(sleepBar, 5000);
});
