function createRow(){
    let rowNumber = findRowNumber() + 1;
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
    const removeButton = createRemoveButton(rowNumber);
    form.appendChild(removeButton)

    document.querySelector(".container").appendChild(form);
}

function createRemoveButton(index){
    console.log("Adding remove button");
    const button = document.createElement("button");
    button.innerHTML = "Remove item";
    button.setAttribute("for", `item ${index}`);
    button.setAttribute("id", index);
    button.addEventListener('click', removeRow);
    return button;
}

function removeRow(){
    const element = event.target;
    const previous1 = element.previousSibling;
    const previous2 = previous1.previousSibling;
    element.remove();
    previous1.remove();
    previous2.remove();
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
    let addButton = document.getElementById("add_row");
    addButton.addEventListener('click', createRow);
}

main();
 

