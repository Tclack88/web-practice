function squared(num){
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    if (num == 1){
        return 1;
    } else if (num == 0){
        return 1;
    } else{
        let x = num;
        while (x > 1){
            x -= 1;
            num *= x;
        }
        return num;
    }
}

document.addEventListener("DOMContentLoaded", event =>{
  const input = document.querySelector('.numberInput');
  const para = document.querySelector('p');
  input.addEventListener("change", () => {
    const num = parseFloat(input.value);

    if (isNaN(num)){
        para.textContent = "You need to enter a number";
    } else {
        para.textContent = `${num} squared is ${squared(num)} \r\n`;
        // para.appendChild(document.createElement("br"));
        para.textContent += `${num}! is ${factorial(num)}`;
    }
  })  
})