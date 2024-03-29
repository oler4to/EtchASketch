const container = document.querySelector('#container');
const grid = document.querySelector('#grid');
const gridDimensions = document.querySelector('#gridDimensions');
const buttons = document.querySelector('#buttons');
const createGridButton = document.createElement('button');
const defaultButton = document.createElement('button');
const colorButton = document.createElement('button');

gridDimensions.textContent = "16 X 16";

let defaultDimensions = 16;
let defaultMode = 'default';
let defaultColor = '#2f2f2f';
let rgb = '';
let currentDimensions = defaultDimensions;
let currentColor = defaultColor;
let currentMode = defaultMode;

function getDim(){
  let getNum = prompt('Please enter a number between(or) 1 and 100');
  currentDimensions = getNum;
  if(currentDimensions > 100 || currentDimensions < 1){
    gridDimensions.textContent = "Try Again";
  } else{
  gridDimensions.textContent = `${currentDimensions} X ${currentDimensions}`;
  }
}

createGridButton.textContent = "Create New Grid";
defaultButton.textContent = "Default";
colorButton.textContent = "Rainbow";

buttons.appendChild(createGridButton);
buttons.appendChild(defaultButton);
buttons.appendChild(colorButton);

function setGridMode(mode) {
  currentMode = mode;
}

defaultButton.onclick = () => setGridMode('default');
colorButton.onclick = () => setGridMode('color');

function randomColor() {
  let R = Math.floor(Math.random() * 256)
  let G = Math.floor(Math.random() * 256)
  let B = Math.floor(Math.random() * 256)
  rgb = `rgb(${R},${G},${B}`
}

function createGrid() {
  grid.style.gridTemplateColumns = `repeat(${currentDimensions}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${currentDimensions}, 1fr)`
  
  function changeColor(target){
    if(currentMode == 'color'){
      randomColor();
      currentColor = rgb;
      target.style.background = currentColor;
    } else if(currentMode == 'default'){
      currentColor = defaultColor;
      target.style.background = currentColor;
    }
  }
  
  if(currentDimensions > 100 || currentDimensions < 1){
    alert('Please enter a number BETWEEN(OR) 1 and 64')
  } else{
    for(i = 0; i < (currentDimensions * currentDimensions); i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.style.border = "1px solid black";
    cell.addEventListener('click', () => (
    changeColor(cell)
    ));
    grid.appendChild(cell)
  }
  if(currentDimensions > 100 || currentDimensions < 1)for(i = 0; i < (currentDimensions * currentDimensions); i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.style.border = "1px solid black";
    cell.addEventListener('click', () => (
    changeColor(cell)
    ));
    grid.appendChild(cell)
  }
  }
}

function clear(){
  grid.innerHTML = ''
}
createGrid();

createGridButton.addEventListener('click', () => (
  clear(),
  getDim(),
  createGrid()
  ))