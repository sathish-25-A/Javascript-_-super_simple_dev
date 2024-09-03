let time;

function click1() {
  const msg = document.querySelector(".para");
  msg.innerHTML = "added";
  clearTimeout(time);

  time = setTimeout(function () {
    msg.innerHTML = "";
  }, 2000);
}
