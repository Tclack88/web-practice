let SIDE_LENGTH = 16;

let container = document.querySelector("#container");

// TO DEBUG: trying to set style here instead of hardcoding in stylesheet
// let box = document.querySelector(".box");
let box_padding = 10;
let box_border = 1;
// box.style.cssText=`padding: ${box_padding}px; border: ${box_border}px;`
let box_side = `${(box_border + box_padding)*2*SIDE_LENGTH}px`;
container.style.width = box_side;

for (let i=0; i< SIDE_LENGTH**2; i++){
    let div_i = document.createElement("div");
    div_i.classList.add('box');
    // div_i.addEventListener("pointerdown", (event) => {
    //     let button = event.buttons;
    //     console.log(button);
    //     if (button == 1){
    //         div_i.style.backgroundColor = 'black';
    //     }
    // });

    div_i.addEventListener("pointermove" , (event) =>{
        div_i.style.backgroundColor = 'black';
    });

    container.appendChild(div_i);
}
