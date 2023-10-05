const divContainer = document.querySelector('#divContainer')

//Color selection
let colorSelection = 'colorBlack';
const blackButton = document.querySelector('#blackButton');
const rainbowButton = document.querySelector('#rainbowButton');
const eraserButton = document.querySelector('#eraserButton');

blackButton.addEventListener('click', () => {
    colorSelection = 'colorBlack';
})

rainbowButton.addEventListener('click', () => {
    colorSelection = 'colorRainbow';
})

eraserButton.addEventListener('click', () => {
    colorSelection = 'colorEraser';
})

const makeColor = (e) => {
    let targetDiv = e.target;
    if (colorSelection === 'colorBlack') {
        targetDiv.style.backgroundColor = 'black';
    } else if (colorSelection === 'colorEraser') {
        targetDiv.style.backgroundColor = 'white';
    } else if (colorSelection === 'colorRainbow') {
        const randomColor = 
    Math.floor(Math.random()*16777215).toString(16);
        targetDiv.style.backgroundColor = "#" + randomColor;
    } 
};

//Generate Divs function
const generateDivGrid = (amount) => {
divContainer.innerHTML = '';
    for(let i = 0; i < amount; i++){ 
     const row = document.createElement("div"); 
     row.className = `row`; 
     row.style.display = 'flex';
     row.style.flex = '1';
     row.style.flexDirection = 'Column';
     divContainer.appendChild(row);
     for (let x = 0; x < amount; x++) {
        const cell = document.createElement("div"); 
        cell.id = "sketchBox"; 
        cell.style.flex = '1';
        cell.addEventListener('mouseover', makeColor);
        row.appendChild(cell); 
    } 
}
};

//Default load
window.onload = generateDivGrid(16);

//Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("sizeSlider");
output.textContent = slider.value + " x " + slider.value;

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
    generateDivGrid(this.value);
  }

