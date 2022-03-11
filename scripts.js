function p(text){
    console.log(text);
}
p("hellow js");
const DEFAULT_COLOR = 'white';
let gridSize = 16;
const controller = document.querySelector('#controller');
const container = document.querySelector(".container");
controller.addEventListener('click', function(event){
    let size = Number(prompt("Enter Grid size : "));
    // clean the previous result
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    if(size < 100)
        makeGrid(size);
    else // default size
        makeGrid(25);
})
function makeGrid(gridSize){

    let containerStyles = {
        'display': 'flex',
        'flex': '1',
        'flex-wrap': 'wrap',
        'width': '60%',
        'height': '60%',
        'flex-basis': '60%',
        'flex-grow': '0',
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

    // container.addEventListener('click', hoverEffect);
    container.addEventListener('mousedown', hoverEffect, false);
    container.addEventListener('mousemove', hoverEffectMoving, false);

    let isClicked = false;
    function hoverEffect(event){
        event.target.style.backgroundColor = 'black';
        isClicked = true;
    }
    
    function hoverEffectMoving(event){
        if(isClicked)
            event.target.style.backgroundColor = 'black';
    }

}

makeGrid(gridSize);

function resetColor(){
    Array.from(document.querySelectorAll('.container div')).forEach(
        x => x.style.backgroundColor = DEFAULT_COLOR
    );
};