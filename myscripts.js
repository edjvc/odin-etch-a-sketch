const containerEl = document.querySelector(".container");
const containerStyle = window.getComputedStyle(containerEl);
const containerWidth = containerStyle.getPropertyValue("width");

const modifyButton = document.querySelector("button");
let squareNumber = 0;

function removeSquares() {
  document.querySelectorAll(".square").forEach((el) => el.remove());
}

function addSquares(numberEachSide) {
  const squareWidth =
    Math.floor((containerWidth.slice(0, -2) / numberEachSide) * 100) / 100;

  for (let i = 1; i <= numberEachSide ** 2; i++) {
    const squareEl = document.createElement("div");
    squareEl.classList.add("square");
    squareEl.style.width = `${squareWidth}px`;
    squareEl.style.aspectRatio = "1 / 1";
    squareEl.style.backgroundColor = "#3d3d3d";
    // squareEl.style.border = "1px solid black";

    containerEl.appendChild(squareEl);
  }
}

modifyButton.addEventListener("click", () => {
  let promptNumber = parseInt(
    prompt("Enter the square number on each side  (max: 100)")
  );
  if (promptNumber >= 0 && promptNumber <= 100 && promptNumber) {
    squareNumber = promptNumber;
    removeSquares();
    addSquares(squareNumber);
    addRainbowHover();
    scratchOff();
  } else {
    alert("invalid value");
  }
});

function addRainbowHover() {
  containerEl.addEventListener("mouseover", (e) => {
    if (e.target.className === "square") {
      const val1 = Math.floor(Math.random() * 256);
      const val2 = Math.floor(Math.random() * 256);
      const val3 = Math.floor(Math.random() * 256);

      e.target.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
    }
  });
  containerEl.addEventListener("mouseout", (e) => {
    if (e.target.className === "square") {
      // const val1 = Math.floor(Math.random() * 256);
      // const val2 = Math.floor(Math.random() * 256);
      // const val3 = Math.floor(Math.random() * 256);

      // e.target.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;

      e.target.style.backgroundColor = "#3d3d3d";
    }
  });
}

function scratchOff() {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((el) => {
    el.style.opacity = "1";
  });

  containerEl.addEventListener("mouseover", (e) => {
    if (e.target.className === "square") {
      const currentOpacity = parseFloat(e.target.style.opacity);
      if (currentOpacity >= 0) {
        e.target.style.opacity = currentOpacity - 0.2;
      }
    }
  });

  containerEl.style.backgroundImage = "url(./image/etch-background.png)";
  containerEl.style.backgroundPosition = "center";
  containerEl.style.backgroundSize = "cover";
}

// // this doesn't work, haven't figure out, probably CSS update issue on browser.
// function addRainbowHover() {
//   const dynamicStyle = document.createElement("style");
//   document.head.appendChild(dynamicStyle);
//   containerEl.addEventListener("mouseover", (e) => {
//     if (e.target.className === "square") {
//       const val1 = Math.floor(Math.random() * 256);
//       const val2 = Math.floor(Math.random() * 256);
//       const val3 = Math.floor(Math.random() * 256);
//       dynamicStyle.innerText = `
//         .rainbowHover:hover {
//           background-color: rgb(${val1}, ${val2}, ${val3});
//         }
//       `;
//       e.target.classList.add("rainbowHover");
//     }
//   });
// }

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
