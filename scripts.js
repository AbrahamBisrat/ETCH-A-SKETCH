function p(text){
    console.log(text);
}
p("hellow js");
let gridSize = 16;
const controller = document.querySelector('#controller');
controller.addEventListener('click', function(event){
    let size = Number(prompt("Enter Grid size : "));
    
    if(size < 100)
        makeGrid(size);
    else
        makeGrid(25);
})
function makeGrid(gridSize){
    const container = document.querySelector(".container");

    let containerStyles = {
        'display': 'flex',
        'flex': '1',
        'flex-wrap': 'wrap',
        'width': '100%',
        'height': '97%',
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
        'border': '.5px solid green',
        // 'background-color': `#${Math.floor(Math.random()*16777215).toString(16)}`,
        'background-color': 'grey',
    };
    Array.from(containerEach).forEach(x => Object.assign(x.style, containerEachStyles));

    container.addEventListener('mouseover', hoverEffect);
    function hoverEffect(event){
        event.target.style.backgroundColor = 'white';
    }
}
gridSize = Number(prompt('Enter Grid Size: '));
makeGrid(gridSize);