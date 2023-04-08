// Global Variables
const container = document.querySelector(".grid-container");
const sizeBtn = document.querySelector("#sizeBtn");
let size = 16;

//   Fills the container with "grid-element" divs
function fillGrid(size) {
  const elementSize = 600 / size;

  for (i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    container.appendChild(gridElement);
    console.log(size);
  }

  //   Changing element size based on container size
  const gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((gridElement) => {
    gridElement.style = `
                        height: ${elementSize}px;
                        width: ${elementSize}px;
        `;
  });
}

// Resets container and fills it based on new size
function changeGridSize(value) {
  size = value;
  container.innerHTML = "";
  fillGrid(size);
}

// Recursive prompt that rejects invalid input.
function askSize() {
  let newSize = prompt("Please select grid size (1-40)");
  return isNaN(newSize) || +newSize > 40 || +newSize < 1 ? askSize() : newSize;
}

// Event Listeners

// Hover effect
container.addEventListener("mouseover", function (e) {
  e.target.classList.add("filled");
});

// Change size button
sizeBtn.addEventListener("click", function (e) {
  size = askSize();
  changeGridSize(size);
  console.log(`Grid size changed to ${size}.`);
});

// Creating default grid
fillGrid(size);
