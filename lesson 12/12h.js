let message = 0;

function inc() {
  message += 1;
  Update();
}
function des() {
  message -= 1;
  Update();
}

function Update() {
  document.title = `(${message}) notifications`;
}
setInterval(() => {
  if (document.title === "12g") {
    Update();
  } else {
    document.title = "12g";
  }
}, 500);
