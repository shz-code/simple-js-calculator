const inpTags = document.querySelectorAll(".inp"),
  displayBox = document.getElementById("display");

function addToResult(value) {
  displayBox.value += value;
}

inpTags.forEach((item) => {
  item.addEventListener("click", (e) => {
    let val = e.target.innerHTML;
    addToResult(val);
  });
});

function remove() {
  displayBox.value = "";
}

function calculate() {
  let result = eval(displayBox.value);
  displayBox.value = result;
  console.log(result);
}
