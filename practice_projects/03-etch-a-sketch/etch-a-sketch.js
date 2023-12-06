let SIDE_LENGTH = 50;

let container = document.querySelector("#container");

// TO DEBUG: trying to set style here instead of hardcoding in stylesheet
let box_padding = 3;
let box_border = 0;
// let box = document.querySelector(".box");
// console.log(box.style.cssText);
// box.style.cssText=`padding: ${box_padding}px; border: ${box_border}px;`
let box_side = `${(box_border + box_padding)*2*SIDE_LENGTH}px`;
container.style.width = box_side;


for (let i=0; i< SIDE_LENGTH**2; i++){
    let div_i = document.createElement("div");
    div_i.classList.add('box');
    div_i.style.cssText=`padding: ${box_padding}px; border: ${box_border}px black solid;`

    div_i.addEventListener("mousedown" , (ev) =>{
        if (ev.buttons == 1){
            div_i.style.backgroundColor = 'black';
        }
    });

    div_i.addEventListener("mouseover" , (ev) =>{
        if (ev.buttons == 1){
            div_i.style.backgroundColor = 'black';
        }
    });


    container.appendChild(div_i);
}

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', ()=> {
    let boxes = Array.from(container.children);
    boxes.forEach(element => {
        element.style.backgroundColor = '#EEE';
    });
    // container.children.map.style.backgroundColor = '#EEE';
});