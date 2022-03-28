function resetBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.remove("dark-cell");
    });
}

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

function getSize() {
    return window.prompt(
        "How many cells do you want per row of the grid?",
        "16"
    );
}

buildGrid(16);

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetBoard);

const size = document.querySelector(".size");
size.addEventListener("click", () => {
    newSize = getSize();
    destroyGrid();
    buildGrid(newSize);
});
