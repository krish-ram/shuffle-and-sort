function sort(numbers) {
  numbers.sort((a, b) => a - b);
  generateBoxes(numbers);
  return numbers;
}

function shuffle(numbers) {
  numbers.sort(() => Math.random() - 0.5);
  generateBoxes(numbers);
  return numbers;
}

function generateBoxes(numbers) {
  let list = document.getElementById("numbers");
  list.innerHTML = "";
  for (let num of numbers) {
    var div = document.createElement("DIV");
    div.className = `number-${num}`;
    div.innerText = num;
    list.appendChild(div);
  }
}

function documentLoad() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  generateBoxes(numbers);

  document.getElementById("sort").onclick = () => {
    numbers = sort(numbers);
  };
  document.getElementById("shuffle").onclick = () => {
    numbers = shuffle(numbers);
  };
}
