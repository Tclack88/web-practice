document.addEventListener("DOMContentLoaded", event => {

    const btn = document.querySelector("button");
    const txt = document.querySelector("p");

    btn.addEventListener("click", updateBtn);

    function updateBtn() {
        if (btn.textContent == "Start Machine") {
            btn.textContent = "Stop Machine";
            txt.textContent = "the machine is ON. weeepee!";
        } else {
            btn.textContent = "Start Machine";
            txt.textContent = "the machine is OFF";
        }
    }
});