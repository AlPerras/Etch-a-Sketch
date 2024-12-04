const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const squarre = document.createElement("div");
    squarre.id = "grid";
    container.appendChild(squarre);
    console.log(i);
}