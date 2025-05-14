const containerEl = document.querySelector(".container");
const containerStyle = window.getComputedStyle(containerEl);
const containerWidth = containerStyle.getPropertyValue("width");

const modifyButton = document.querySelector("button");
let squareNumber = 0;

function removeSquares() {
  document.querySelectorAll(".square").forEach((el) => el.remove());
}

function addSquares(numberEachSide) {
  const squareWidth = Math.floor((containerWidth.slice(0, -2) / numberEachSide) * 10) / 10;

  for (let i = 1; i <= numberEachSide ** 2; i++) {
    const squareEl = document.createElement("div");
    squareEl.classList.add("square");
    squareEl.style.width = `${squareWidth}px`;

    containerEl.appendChild(squareEl);
  }
}

modifyButton.addEventListener("click", () => {
  let promptNumber = +prompt(
    "Enter the square number on each side  (Less than 100)"
  );
  if (
    promptNumber >= 0 &&
    promptNumber <= 100 &&
    Number.isInteger(promptNumber)
  ) {
    squareNumber = promptNumber;
    removeSquares();
    addSquares(squareNumber);
  } else {
    alert("invalid value");
  }
});

// #2
// function addSquares2(numberEachSide) {
//   for (let i = 1; i <= (numberEachSide); i++) {
//     const squareWrapperEl = document.createElement("div");
//     squareWrapperEl.classList.add("squareWrapper");
//     containerEl.appendChild(squareWrapperEl);
//     for (let j = 1; j <= numberEachSide; j++) {
//       const squareEl = document.createElement("div");
//       squareEl.classList.add("square");
//       squareWrapperEl.appendChild(squareEl);
//     }
//   }
// }
