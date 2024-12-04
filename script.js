// want to get random color
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid (size) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid");
        square.setAttribute("style", `width: calc(100% / ${size} - 2px); height: calc(100% / ${size} - 2px); transition: background-color 0.3s`);
        let interationCount = 0;
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomRGBColor();
            if (interationCount < 10) {
                interationCount++;
                let newOpacity = interationCount * 0.1;
                newOpacity = Math.min(newOpacity, 1);
                square.style.opacity = newOpacity;
            }
        });
        container.appendChild(square);
    }
}

const btn = document.querySelector("#new-sketch");
btn.addEventListener("click", () => {
    const container = document.querySelector("#container")
    let size = null;

    while (true) {
        size = prompt("What size do you wnat your grid?");

        if (size === null || size.trim() === "") {
            alert("You canceled the prompt.");
            break;
        }

        // Convert to number and check if it's valid
        size = Number(size);
        if (!isNaN(size) && 0 < size && size <100) {
            container.textContent = "";
            createGrid(size);
            break;
        } else {
            alert("Invalid input. You must enter a number between 1 and 100")
        }
    }
});