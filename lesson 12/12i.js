let message = 0;

function inc() {
  if (message >= 0) {
    message += 1;
  }

  Update();
}
function des() {
  if (message > 0) {
    message -= 1;
  } else  {
    alert("not a value");
  }
  Update();
}

function Update() {
  document.title = `(${message}) notifications`;
}
setInterval(() => {
  if (document.title === "12i") {
    Update();
  } else {
    document.title = "12i";
  }
}, 500);
