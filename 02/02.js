import "./02.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function sizeChange() {
  const windowSize = window.innerWidth;
  if (windowSize < 800) {
    document.body.style.backgroundColor = "red";
  } else if (1000 < windowSize) {
    document.body.style.backgroundColor = "yellow";
  } else if (800 <= windowSize <= 1000) {
    document.body.style.backgroundColor = "teal";
  }
}

function init() {
  window.addEventListener("resize", sizeChange);
}

init();
