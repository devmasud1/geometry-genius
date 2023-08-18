function calculateTriangle() {
  const triangleBase = getInput("triangle-base");
  const triangleheight = getInput("triangle-height");
  if (isNaN(triangleBase && triangleheight)) {
    alert("Please insert a number");
    return;
  }
  const triangleArea = 0.5 * triangleBase * triangleheight;
  areaInput("triangle-area", triangleArea);
  calculationDetails("Triangle", triangleArea);
}

function calculateRectangle() {
  const rectangleWidth = getInput("rectangle-width");
  const rectanglelength = getInput("rectangle-length");

  if (isNaN(rectangleWidth && rectanglelength)) {
    alert("Please insert a number");
    return;
  }
  else{
    const rectangleArea = rectangleWidth * rectanglelength;
    areaInput("rectangle-area", rectangleArea);
    calculationDetails("Rectangle", rectangleArea);
  }
 
}

function calculateParallelogram() {
  const parallelogramBase = getInput("parallelogram-base");
  const parallelogramHeight = getInput("parallelogram-height");
  if (isNaN(parallelogramBase && parallelogramHeight)) {
    alert("Please insert a number");
    return;
  }
  const parallelogramArea = parallelogramBase * parallelogramHeight;
  areaInput("parallelogram-area", parallelogramArea);
  calculationDetails("Parallelogram", parallelogramArea);
}

function calculateRhombus() {
  const rhombusWidth = getInput("rhombus-width");
  const rhombusHeight = getInput("rhombus-height");
  if (isNaN(rhombusWidth && rhombusHeight)) {
    alert("Please insert a number");
    return;
  }
  const rhombusArea = 0.5 * rhombusWidth * rhombusHeight;
  areaInput("rhombus-area", rhombusArea);
  calculationDetails("Rhombus", rhombusArea);
}

function calculatePentagon() {
  const pentagonWidth = getInput("pentagon-width");
  const pentagonHeight = getInput("pentagon-height");
  if (isNaN(pentagonWidth && pentagonHeight)) {
    alert("Please insert a number");
    return;
  }
  const pentagonArea = 0.5 * pentagonWidth * pentagonHeight;
  areaInput("pentagon-area", pentagonArea);
  calculationDetails("Pentagon", pentagonArea);
}

function calculatEellipse() {
  const ellipseWidth = getInput("ellipse-width");
  const ellipseHeight = getInput("ellipse-height");
  if (isNaN(ellipseWidth && ellipseHeight)) {
    alert("Please insert a number");
    return;
  }
  const ellipseArea = 3.14 * ellipseWidth * ellipseHeight;
  areaInput("ellipse-area", ellipseArea);
  calculationDetails("Ellipse", ellipseArea);
}

// reusable  inputValue
function getInput(Id) {
  const inputFieldId = document.getElementById(Id);
  const inputValue = inputFieldId.value;
  const value = parseFloat(inputValue);
  return value;
}

// reusable  area text
function areaInput(Id, area) {
  console.log(area);
  const areaId = document.getElementById(Id);
  areaId.innerText = area;
}

// area calculation
let count = 0;
function calculationDetails(name, value) {
  const calculationDetail = document.getElementById("calculation-details");

  const count = calculationDetail.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-5");
  p.innerHTML = `${
    count + 1
  }. ${name} ${value} cm<sup>2</sup> <button class="btn btn-sm btn-danger ml-2">convert</button>`;
  calculationDetail.appendChild(p);
}
