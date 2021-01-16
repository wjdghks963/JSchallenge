const selectValue = document.querySelector(".ss");

const findValue = () => {
  const currentValue = selectValue.options[selectValue.selectedIndex].value;
  localStorage.setItem("country", currentValue);
};

function init() {
  selectValue.addEventListener("change", findValue);
}

init();
