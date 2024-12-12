document.addEventListener("DOMContentLoaded", function () {
  function randInt(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }

  let aimImg = document.querySelector("#target");
  let catchCount = 0;
  let countAim = 0;
  let scoreText = document.querySelector(".score");
  let timeText = document.querySelector(".time");

  while (countAim < 1) {
    aimImg.addEventListener("mouseover", function () {
      let cord_x = randInt(0, 1350);
      let cord_y = randInt(0, 500);
      if (cord_y < 130 && cord_y > 500) {
        cord_y = randInt(0, 500);
      }
      aimImg.style.top = cord_y + "px";
      aimImg.style.left = cord_x + "px";
      catchCount += 1;
      scoreText.textContent = "Твій рахунок: " + catchCount;
    });
    countAim += 1;
  }

  let time_seconds = 0;
  let time_minutes = 0;
  let time_hours = 0;
  let time_seconds2 = 0;
  function seconds_make() {
    setTimeout(function () {
      time_seconds2 += 1;
      console.log(time_seconds2)
      seconds_make();
    }, 1000);
  }
  function time_make() {
    setTimeout(function () {
      time_seconds += 1;
      if (time_seconds % 60 == 0) {
        time_seconds = 0;
        time_minutes += 1;
        if (time_minutes % 60 == 0) {
          time_minutes = 0;
          time_hours += 1;
        }
      }
      timeText.textContent = `Твій час: s: ${time_seconds} m: ${time_minutes}`;
      if (time_minutes) {
        timeText.textContent = `Твій час: ${time_minutes}m ${time_seconds}s`;
      } else if (time_hours) {
        timeText.textContent = `Твій час: ${time_hours}h ${time_minutes}m`;
      }
      time_make();
    }, 1000);
  }
  time_make();
  seconds_make();


});

// document.addEventListener("mousemove", function (e) {
//   let x = e.pageX
//   let y = e.pageY
//   console.log(`X: ${x} and Y: ${y}`)
// })
