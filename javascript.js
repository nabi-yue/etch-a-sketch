let gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".resize-button");
let numberOfRowsAndColumns = 0;

function randomColor() {
    return number = Math.floor(Math.random()*255)
}

function createNewGrid(numberOfRowsAndColumns){
    gridContainer.innerHTML = "";
    for(let row = 0; row < numberOfRowsAndColumns;row++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridContainer.appendChild(gridRow);
            
        for(let columns = 0; columns < numberOfRowsAndColumns;columns++){
            let gridCells = document.createElement("div");
            gridCells.classList.add("grid-cell");
            gridCells.style.opacity = 1;
            gridCells.addEventListener("mouseover", (e)=> {
                opacity = parseFloat(e.target.style.opacity)
                if(!e.target.classList.contains("hovered-over")){
                    e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                    e.target.classList.add("hovered-over");
                } else {
                    e.target.style.opacity = opacity - 0.1;
                }
            });
            gridRow.appendChild(gridCells);
        };
    };
};

createNewGrid(16);

resetButton.addEventListener("click", () => {
    let numberOfRowsAndColumns = prompt("Enter the number of cells you want next!");

    if(numberOfRowsAndColumns>100){
        alert("Too big!");
    } else {
        createNewGrid(numberOfRowsAndColumns);
    }
});