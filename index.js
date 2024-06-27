// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  let left = dodger.style.left.replace("px", "");
  function moveDodgerRight() {
    let newPosition = parseInt(left, 10);

    if (left < 360) {
      dodger.style.left = `${newPosition + 1}px`;
    }
}

