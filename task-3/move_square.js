// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();

// const moves = {
//     '97': moveLeft,
//     '115': moveDown,
//     '119': moveUp,
//     '100': moveRight
// };

let cell;


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

function initCell(){
    cell = this;
    cell.classList.add('active');
}

function main() {
    hundredCells()
    placeColor();
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('click', initCell));

}

function placeColor(){
    let randomNumber = Math.floor(Math.random() * 100);
    const randomCell = document.getElementById(randomNumber);
    randomCell.focus();
}

main();
  