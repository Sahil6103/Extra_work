let calc_input = document.querySelector(".calc-input");

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    calc();
  }

  if (e.key == "Escape") {
    calc_input.value = "";
  }
});

function calc() {
  let val = eval(calc_input.value);
  calc_input.value = val;
}
