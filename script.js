//Etch-a-Sketch script
function changeColorDown(e){
    if(mouseDown===false){
        e.target.style.setProperty("background-color", "black");
        e.target.setAttribute("class", "cellchosen");
    }
}

function changeColorOver(e){
    e.stopPropagation();
    if(mouseDown===true){
        e.target.style.setProperty("background-color", "black");
        e.target.setAttribute("class", "cellchosen");
    }else{
        changeColorHover(e);
    }
}

function changeColorHover(e){
    if(e.target.getAttribute("class")!=="cellchosen"){
        e.target.setAttribute("class", "cell cellhover")
    }
}
function changeColorBackHover(e){
    if(e.target.getAttribute("class")!=="cellchosen"){
        e.target.setAttribute("class", "cell")
    }
}

function createCells(numberOfCells){
    clearBoard();
    const container = document.querySelector(".container");
    for(let i=0; i<numberOfCells*numberOfCells; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.removeEventListener("pointercancel", PointerEvent);
        cell.addEventListener("mousedown", changeColorDown);
        cell.addEventListener("mouseenter", changeColorOver);
        cell.addEventListener("mouseleave", changeColorBackHover);
        cell.addEventListener("mouseup", ()=>{mouseDown=false});
        container.appendChild(cell);
    }
    container.style.setProperty("grid-template-columns", `repeat(${numberOfCells}, auto)`);
    container.style.setProperty("grid-template-rows", `repeat(${numberOfCells}, auto)`);
    currentCells = numberOfCells;
}

function clearBoard(){
    const container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}


let mouseDown = false;

window.onmouseenter = () => {
    if(mouseDown === true){
        mouseDown = false;
    }
}
window.onmousedown = () =>{
    mouseDown = true;
}
window.onmouseup = () =>{
    mouseDown = false;
}

document.removeEventListener("pointercancel", PointerEvent);

window.onpointercancel = () =>{
    mouseDown = false;
}

let currentCells = 0;
createCells(16);

const clearButton = document.querySelector("#clear");
const changeSizeButton = document.querySelector("#changesize");

clearButton.addEventListener("click", () => {
    createCells(currentCells);
});
changeSizeButton.addEventListener("click", () => {
    // let numberOfCells = Math.round(Number(prompt("Type x in to make x by x grid")));
    // while (numberOfCells < 1 && numberOfCells > 100){
    //     alert("Wrong value. Accepted values: 1-100.");
    //     numberOfCells = Math.round(Number(prompt("Type x in to make x by x grid")));
    // }
    const numberOfCells = document.getElementById("newsize").value;
    if(numberOfCells > 100){
        alert("Maximum value is 100");
        return;
    }else if(numberOfCells < 1){
        alert("Minimum value is 1");
        return;
    }
    createCells(numberOfCells);
});
