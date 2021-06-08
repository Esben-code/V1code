"use strict"

document.querySelector("button").addEventListener("click", () => {console.dir("hello world"); alert("Hello world!")});

document.querySelectorAll("li").forEach(x => { x.addEventListener("click", () => {console.dir(x.innerHTML); alert(x.innerHTML)})})