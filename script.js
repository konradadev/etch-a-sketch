//Etch-a-Sketch script
function createCells(numberOfCells){
    const container = document.querySelector(".container");
    for(let j=0; j<numberOfCells*numberOfCells; j++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        container.appendChild(cell);
    }
    container.style.setProperty("grid-template-columns", `repeat(${numberOfCells}, auto)`);
    container.style.setProperty("grid-template-rows", `repeat(${numberOfCells}, auto)`);
}

createCells(100);