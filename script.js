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
  currentDimensions = prompt('Please enter a number between(or) 1 and 100')
  if(currentDimensions > 100 || currentDimensions < 1){
    gridDimensions.textContent = "Try Again"
  } else{
  gridDimensions.textContent = `${currentDimensions} X ${currentDimensions}`
  }
}