const display = document.getElementById("screen");

function togglemode() {
  document.body.classList.toggle("light");
}

function addexp(exp) {
  if (display.innerText === "Error") {
    display.innerText = "";
  }
  display.innerText += exp;
}

function result() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

function clr() {
  display.innerText = "";
}

function bckspc() {
  display.innerText = display.innerText.slice(0, -1);
}
