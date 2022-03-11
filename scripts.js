function p(text){
    console.log(text);
}
p("hellow js");
const DEFAULT_COLOR = 'white';
let gridSize = 16;
const container = document.querySelector(".container");
const rangeSlider = document.querySelector("input[type='range']");
rangeSlider.addEventListener('input', function(event){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    makeGrid(rangeSlider.value);
})
function makeGrid(gridSize){

    let containerStyles = {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'width': '700px',
        'height': '700px',
        'box-shadow': '2px 2px 10px black'
    };
    Object.assign(container.style, containerStyles);
    for(let i = 0; i < gridSize * gridSize; i++){
        let each = document.createElement('div');
        each.className = 'each';
        container.appendChild(each);
    }
    const containerEach = document.querySelectorAll('.container div');
    let containerEachStyles = {
        'width': `${100/gridSize}%`,
        'height': `${100/gridSize}%`,
        // 'border': '.5px solid green',
        // 'background-color': `#${Math.floor(Math.random()*16777215).toString(16)}`,
        'background-color': 'white',
    };
    Array.from(containerEach).forEach(x => Object.assign(x.style, containerEachStyles));
    container.addEventListener('mouseover', hoverEffect, false);

    function hoverEffect(event){
        event.target.style.backgroundColor = 'black';
    }
}

makeGrid(gridSize);

function resetColor(){
    Array.from(document.querySelectorAll('.container div')).forEach(
        x => x.style.backgroundColor = DEFAULT_COLOR
    );
};