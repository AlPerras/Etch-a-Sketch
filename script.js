function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function grid (size) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size * size; i++) {
        const squarre = document.createElement("div");
        squarre.id = "grid";
        squarre.setAttribute("style", `width: calc(100% / ${size} - 2px); height: calc(100% / ${size} - 2px); transition: backgroun-color 0.3s`);
        container.appendChild(squarre);
        squarre.addEventListener("mouseenter", () => {
            squarre.style.backgroundColor = getRandomRGBColor();
        });
    };
}

const btn = document.querySelector("#new-sketch");
btn.addEventListener("click", () => {
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
            grid(size);
            break;
        } else {
            alert("Invalid input. You must enter a number between 0 and 100")
        }
    }
});