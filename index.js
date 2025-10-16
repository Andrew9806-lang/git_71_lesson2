const root = document.querySelector("#root");
const title = document.querySelector("h1");
const button2 = document.querySelector("#background-button2");
const button = document.querySelector("#background-button");

const changeBackground = ()=>{
    root.style.background = "red";
};

const changeTitle = ()=>{
    title.textContent = "Technologies: GIT";
}

button.addEventListener("click",changeBackground);
button2.addEventListener("click", changeTitle);
