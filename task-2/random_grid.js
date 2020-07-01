function main() {
    hundredCells();
    const cells = document.querySelectorAll(".cell");
    for (let cell of cells) {
        setTimeout(cell.setAttribute("style", "height: 3vh; width: 3vw; border: solid black 0.1em; background-color: green;"), 1000);
        console.log("loop");
    }
}


function hundredCells(){
    for (let i=0;i<100;i++){
        createCell();
    }
}


function createCell() {
    const div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.setAttribute("style", "height: 3vh; width: 3vw; border: solid black 0.1em; background-color: blue;");
    div.innerHTML = "&nbsp;";
    
    const container = document.querySelector(".container");
    container.setAttribute("style", "display:flex; flex-wrap:wrap; align-items:");
    container.appendChild(div);
}

main();
