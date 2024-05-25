var toggled = false;

let circle = document.getElementById("circle");
let body = document.getElementsByTagName("body")[0];
let htag = document.getElementsByTagName("h1")[0];
let container = document.getElementById("toggle_container");

container.addEventListener("click", changeMode);

function changeMode() {
    if(!toggled) {
        htag.classList.add("color-white");
        body.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        htag.classList.remove("color-white");
        body.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
}
