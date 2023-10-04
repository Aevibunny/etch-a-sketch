const divContainer = document.querySelector('#divContainer')
const singleDiv = document.createElement('div');
singleDiv.style.border = '2px solid blue';
singleDiv.style.flex = '1 0';
const rowDiv = document.createElement('div')

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
        cell.className = "sketchBox"; 
        cell.style.border = '1px solid blue';
        cell.style.flex = '1';
        row.appendChild(cell); 
    } 
}
};

//Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("sizeSlider");
output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value;
    generateDivGrid(this.value);
  }

// Click effect