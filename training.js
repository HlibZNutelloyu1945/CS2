document.addEventListener("DOMContentLoaded", function () {
  function randInt(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }

  let aimImg = document.querySelector("#target");

  let countAim = 0;

  while (countAim < 10) {
    aimImg.addEventListener("mouseover", function () {
        aimImg.style.top = randInt(0, 1000) + "px";
        aimImg.style.left = randInt(0, 1000) + "px";
    });
    countAim += 1;
  }
});
