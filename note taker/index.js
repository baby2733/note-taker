const body = document.querySelector('body');
const lightt = document.querySelector(".lightt");
const dark = document.querySelector(".dark");

const submit = document.getElementById("submit");
const box = document.querySelector(".box");

const pop = document.querySelector(".pop");
const log = document.querySelector(".log-in");
const x = document.querySelector(".x");


dark.onclick = function(){
    body.classList.replace('light','dark');
}

lightt.onclick = function(){
    body.classList.replace('dark','light')
}


submit.onclick = function(){
  
    const div = document.createElement('div');
    div.className = "div";
    box.appendChild(div);
    let text = document.getElementById("space").value;
    div.textContent = text;
}


log.addEventListener("click", () => {
    pop.classList.add("show");
}) 

x.addEventListener("click", () => {
    pop.classList.remove("show");
})