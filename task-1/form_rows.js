function createRow(){
    console.log("create row replay!");
    let rowNumber = findRowNumber() + 1;
    console.log("creating row");
    const label = document.createElement("label");
    label.setAttribute("for", `item_${rowNumber}`);
    label.innerHTML = `Item ${rowNumber}:`;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", `item_${rowNumber}`);
    input.setAttribute("id", `item_${rowNumber}`);

    const form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.appendChild(label);
    form.appendChild(input);

    document.querySelector(".container").appendChild(form);
}

function findRowNumber(){
    // let innerHtml = document.querySelector('label:last-of-type').innerHTML;
    // console.log(innerHtml);
    // let rowNum = innerHtml.replace("Item ", "");
    // rowNum = rowNum.replace(":","");
    let elements = document.querySelectorAll('label');

    return elements.length;
}

function main() {
    console.log("clicked!");
    let button = document.getElementById("add_row");
    button.addEventListener('click', createRow);
}

main();
 

