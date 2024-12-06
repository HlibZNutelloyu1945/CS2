document.addEventListener("DOMContentLoaded", function () {
  let logo = document.querySelector(".logo");
  let clickCount = 0;
  const sound = new Audio("the-rake-scream.mp3");
  let gif = document.querySelector("#gif");

  logo.addEventListener("click", function () {
    clickCount += 1;
    if (clickCount == 50) {
      sound.play();
      clickCount = 0;
      gif.classList.remove("is-hidden");
      setTimeout(function () {
        gif.classList.add("is-hidden");
      }, 2000);
    }
  });
   

});

