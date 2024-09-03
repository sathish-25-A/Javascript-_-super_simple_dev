function click1() {
  const msg = document.querySelector(".para");
  msg.innerHTML = "added";

  setTimeout(function () {
    msg.innerHTML = "";
  }, 2000);
}
