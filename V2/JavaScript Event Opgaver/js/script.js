"use strict"

document.querySelector("button").addEventListener("click", () => {console.dir("hello world"); alert("Hello world!")});

document.querySelectorAll("li").forEach(x => { x.addEventListener("click", () => {console.dir(x.innerHTML); alert(x.innerHTML)})});

document.querySelector(".colordiv").addEventListener("click", () => { document.querySelector(".colordiv").style.backgroundColor = "yellow" });




let form = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');

document.querySelector('main').appendChild(form);
form.appendChild(input1).setAttribute("id", "number1");
form.appendChild(input2).setAttribute("id", "number2");
form.appendChild(input3).setAttribute("id", "submit");

form.querySelector('#number1').setAttribute('type', "number");
form.querySelector('#number2').setAttribute('type', "number");
form.querySelector('#submit').setAttribute('type', "submit");

form.querySelector('#submit').addEventListener("click", 
(x) => {  
    x.preventDefault()

    let nr1 = Number(form.querySelector('#number1').value);
    console.log(nr1);

    let nr2 = Number(form.querySelector('#number2').value);
    console.log(nr2)

    alert(nr1 + nr2)
})


