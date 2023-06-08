function runActivity() {
  function getSum(x, y, z) {
    let sum = x + y;
    z(sum);
  }

  function print(x) {
    alert(x);
    console.log(x);
  }

  function showMessage(x) {
    $(document).ready(function () {
      $("#message").text(x);
    });
  }

  getSum(5, 5, showMessage);
  // print("hello");
  // showMessage("hi");
}
