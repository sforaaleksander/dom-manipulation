function main() {
    hundredCells();
    setTimeout(randomCellColorChange, 1000);
    console.log("loop");
}

function randomCellColorChange() {
    const cells = document.querySelectorAll(".cell");
    for (let cell of cells) {
        cell.style.backgroundColor = "#2980b9";
    }
    let randomNumber = Math.floor(Math.random() * 100);
    const randomCell = document.getElementById(randomNumber);
    randomCell.style.backgroundColor = "#e67e22";
}


function hundredCells() {
    for (let i = 0; i < 100; i++) {
        createCell(i);
    }
}


function createCell(index) {
    const div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.setAttribute("id", index);

    div.innerHTML = "&nbsp;";

    const container = document.querySelector(".container");
    container.setAttribute("style", "display:flex; flex-wrap:wrap;");
    container.appendChild(div);
}

main();
