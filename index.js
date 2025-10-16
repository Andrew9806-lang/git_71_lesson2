const root = document.querySelector("#root");
const button = document.querySelector("#background-button");

const changeBackground = ()=>{
    root.style.background = "red";
};
button.addEventListener("click",changeBackground);
