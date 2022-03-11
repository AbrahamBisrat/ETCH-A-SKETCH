function p(text){
    console.log(text);
}
p("hellow js");
const row = 16;
const col = 16;
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
    'width': '6.25%',
    'height': '25%',
    'border': '1px dashed green',
    'background-color': 'yellow',
};
Array.from(containerEach).forEach(x => Object.assign(x.style, containerEachStyles));
// p(containerEach);