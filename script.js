const container = document.querySelector('#container');
const grid = document.querySelector('#grid');
const gridDimensions = document.querySelector('#gridDimensions');
const buttons = document.querySelector('#buttons');
const createGrid = document.createElement('button');
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
  console.log(currentDimensions);
}

getDim();

createGrid.textContent = "Create New Grid";
defaultButton.textContent = "Default";
colorButton.textContent = "Rainbow";

buttons.appendChild(createGrid);
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