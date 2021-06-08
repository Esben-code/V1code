"use strict";

let menu = document.getElementById('menu');

console.log(menu);
console.log("////////////");

////////////

let activeMenu = document.getElementsByClassName('active');

console.log(activeMenu);
console.log("////////////");

////////////

let allh = document.querySelectorAll('h1');

allh.forEach(element => { console.log(element);
    
});

console.log("////////////");

////////////

let allp = document.querySelectorAll('p');

allp.forEach(element => { console.log(element);

})

console.log("////////////");

////////////

let allImg = document.querySelectorAll('img');

allImg.forEach(element => { element.setAttribute("alt", "Billedet er underlagt copyright");
})

console.log("////////////");

////////////

document.querySelector('h1').innerHTML = "Overskriften er udskifted";

console.log("////////////");


////////////

document.querySelectorAll('h1').forEach(x => { x.classList.add("title")});

console.log("////////////");

////////////

document.querySelectorAll("li").forEach(x => { console.log(x)});

console.log("////////////");

////////////

let playground = document.querySelector('ID#playground')

////////////

////////////

////////////

////////////

////////////

////////////

