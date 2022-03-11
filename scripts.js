function p(text){
    console.log(text);
}
p("hellow js");
const col = 50;
const row = 50;
const container = document.querySelector(".container");

let containerStyles = {
    'display': 'flex',
    'flex': '1',
    'flex-wrap': 'wrap',
    'width': '100%',
    'height': '100%',
};
// Object.assign(containerEach.style, containerEachStyles);
Object.assign(container.style, containerStyles);
for(let i = 0; i < row * col; i++){
    container.appendChild(document.createElement('div'));
}
const containerEach = document.querySelectorAll('.container div');
let containerEachStyles = {
    'width': `${100/col}%`,
    'height': `${100/row}%`,
    'border': '1px dashed green',
    'background-color': `#${Math.floor(Math.random()*16777215).toString(16)}`,
};
Array.from(containerEach).forEach(x => {
        Object.assign(x.style, containerEachStyles);
        // x.addEventListener('mouseover', hoverEffect);
    });
container.addEventListener('mouseover', hoverEffect);
function hoverEffect(event){
    // p("hovered, clean bubble");
    // this.style.backgroundColor = 'white';
    event.target.style.backgroundColor = 'white';
}
// p(containerEach);
