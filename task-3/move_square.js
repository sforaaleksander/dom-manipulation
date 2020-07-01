// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();

const moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
};

const values = {
    "right": 1,
    "left": -1,
    "up": -10,
    "down": 10
}

let cell;
let cells;


function createCell(index) {
    const div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.setAttribute("id", index);

    div.innerHTML = "&nbsp;";

    const container = document.querySelector(".container");
    container.setAttribute("style", "display:flex; flex-wrap:wrap;");
    container.appendChild(div);
}

function hundredCells() {
    for (let i = 0; i < 100; i++) {
        createCell(i);
    }
}

function deactivateCell(){
    this.classList.toggle("active");
    cells.forEach(cell => cell.addEventListener('click', initCell));
    document.removeEventListener("keypress", keyPressed);
}

function initCell(){
    cells.forEach(cell => cell.removeEventListener('click', initCell));
    cell = this;
    cell.classList.add('active');
    cell.addEventListener('click', deactivateCell);
    document.addEventListener("keypress", keyPressed);
}

function initGrid() {
    hundredCells()
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('click', initCell));
}

function main() {
    initGrid();
}

function moveRight(){
    move(values.right);
}

function moveLeft(){
    move(values.left);
}

function moveUp(){
    move(values.up);
}

function moveDown(){
    move(values.down);
}

function move(where) {
    let currentId = parseInt(cell.id);
    let nextId = currentId + where;
    if ( nextId > 99 || nextId < 0){
        return;
    }
    cell.removeEventListener('click', deactivateCell);
    cell.classList.toggle("active");
    cell = document.getElementById(nextId);
    cell.addEventListener('click', deactivateCell);
    cell.classList.toggle("active");
}

function keyPressed(){
    moves[event.keyCode]();
}

main();
  