let container = document.querySelector("#container");
for (let i=0; i<= 16*16; i++){
    let div_i = document.createElement("div");
    div_i.classList.add('box');
    container.appendChild(div_i);
}