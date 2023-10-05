const divContainer = document.querySelector('#divContainer')
const singleDiv = document.createElement('div');
singleDiv.style.border = '2px solid blue';
singleDiv.style.flex = '1 0';
const rowDiv = document.createElement('div')

let colorSelection = 'colorBlack';

const makeBlack = (e) => {
    let targetDiv = e.target;
    if (colorSelection === 'colorBlack') {
        targetDiv.style.backgroundColor = 'black';
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
        cell.addEventListener('mouseover', makeBlack);
        row.appendChild(cell); 
    } 
}
};

// Default load
window.onload = generateDivGrid(16);

//Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("sizeSlider");
output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
    generateDivGrid(this.value);
  }

// Click effect
// const sketchBox = document.querySelector('#sketchBox')

// const makeBlack = (e) => {
//     let targetDiv = e.target;
//     targetDiv.style.backgroundColor = 'red';
// }

// sketchBox.addEventListener('click', makeBlack);
