//Etch-a-Sketch script
function createCells(numberOfCells){
    clearBoard(currentCells);
    const container = document.querySelector(".container");
    for(let i=0; i<numberOfCells*numberOfCells; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.addEventListener("mouseover", (e) => {
            if(mouseDown===true){
                e.target.style.setProperty("background-color", "black");
            }
        });
        container.appendChild(cell);
    }
    container.style.setProperty("grid-template-columns", `repeat(${numberOfCells}, auto)`);
    container.style.setProperty("grid-template-rows", `repeat(${numberOfCells}, auto)`);
    currentCells = numberOfCells;
}

function clearBoard(currentCells){
    const container = document.querySelector(".container");
    for(let i=0; i<currentCells; i++){
        container.removeChild("div");
    }
}


let mouseDown = false;

document.body.onmouseenter = () => {
    if(mouseDown === true){
        mouseDown = false;
    }
}

document.body.onmousedown = () =>{
    mouseDown = true;
}
document.body.onmouseup = () =>{
    mouseDown = false;
}

let currentCells = 0;
createCells(16);
console.log(currentCells);
