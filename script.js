const container = document.querySelector('#container')
const grid = document.querySelector('#grid')
const gridDimensions = document.querySelector('#gridDimensions')
const buttons = document.querySelector('#buttons')
const createGrid = document.createElement('button')
const defaultButton = document.createElement('button')
const colorButton = document.createElement('button')

let defaultDimensions = 16
let defaultMode = 'default'
let defaultColor = '#2f2f2f'
let rgb = ''
let currentColor = defaultColor
let currentMode = defaultMode

