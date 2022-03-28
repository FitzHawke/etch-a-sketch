function darkenCell() {
    this.classList.add("dark-cell");
}

function destroyGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.removeEventListener("mouseover", darkenCell);
        cell.remove();
    });
}

function buildGrid(gridSize) {
    const board = document.querySelector(".board");
    let cellSize = 600 / gridSize;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("cell");
            div.setAttribute(
                "style",
                `width: ${cellSize}px; height: ${cellSize}px`
            );
            board.appendChild(div);
        }
    }

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", darkenCell);
    });
}

const slider = document.querySelector(".size");
slider.addEventListener("input", () => {
    const chosen = document.querySelector(".chosen");
    chosen.textContent = slider.value;
});

const size = document.querySelector(".resize");
size.addEventListener("click", () => {
    destroyGrid();
    buildGrid(slider.value);
});

buildGrid(slider.value);
