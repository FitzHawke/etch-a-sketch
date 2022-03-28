const board = document.querySelector('.board');
let gridSize = 16;
let cellSize = window.getComputedStyle(board).width / gridSize;
console.log(cellSize);
for (let i = 0; i<gridSize; i++){
    for (let j=0; j<gridSize; j++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.setAttribute('style', `width: ${cellSize}px; height: ${cellSize}px`);
        board.appendChild(div);
    }
}