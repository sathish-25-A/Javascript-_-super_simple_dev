function click1() {
  const btn = document.querySelector(".btn");

  btn.innerHTML = "loading";
  setTimeout(function () {
    btn.innerHTML = "compeleted";
  }, 1000);
}
