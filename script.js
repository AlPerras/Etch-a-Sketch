const container = document.querySelector("#container");

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 256; i++) {
    const squarre = document.createElement("div");
    squarre.id = "grid";
    // squarre.className = [i];
    container.appendChild(squarre);
    squarre.addEventListener("mouseenter", () => {
        squarre.style.transition = "0.3ms";
        squarre.style.backgroundColor = getRandomRGBColor();
    });
};
