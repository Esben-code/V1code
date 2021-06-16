"use strict"

let i = 0; //this counter is important for the CreatBreakLine() function

function CreateBreakerLine() //this function makes p tag with lines of slashes  
{
    i++;
    document.querySelector('main').appendChild(window['breakerLine'+i] = document.createElement('p'));
    window['breakerLine'+i].appendChild(window['breakerTxt'+i] = document.createTextNode("//////////////////////////////////////"));
}

////////////////////////////////////////////////////////////

document.querySelector("button").addEventListener("click", () => {console.dir("hello world"); alert("Hello world!")});

////////////////////////////////////////////////////////////

document.querySelectorAll("li").forEach(x => { x.addEventListener("click", () => {console.dir(x.innerHTML); alert(x.innerHTML)})});


////////////////////////////////////////////////////////////

document.querySelector(".colordiv").addEventListener("click", () => { document.querySelector(".colordiv").style.backgroundColor = "yellow" });


//////////////////////////////////////////////////////////// 

let formPlus = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');



document.querySelector('main').appendChild(formPlus);
formPlus.appendChild(input1).setAttribute("id", "number1");
formPlus.appendChild(input2).setAttribute("id", "number2");
formPlus.appendChild(input3).setAttribute("id", "submitPlus");

 

formPlus.querySelector('#number1').setAttribute('type', "number");
formPlus.querySelector('#number2').setAttribute('type', "number");
formPlus.querySelector('#submitPlus').setAttribute('type', "submit");

formPlus.querySelector('#submitPlus').addEventListener("click", 
(x) => {  
    x.preventDefault();

    let nr1 = Number(formPlus.querySelector('#number1').value);
    console.log(nr1);

    let nr2 = Number(formPlus.querySelector('#number2').value);
    console.log(nr2);

    alert(nr1 + nr2);
})

CreateBreakerLine(); //calls the function.

////////////////////////////////////////////////////////////

let formMoms = document.createElement('form');
let inputMoms1 = document.createElement('input');
let inputMoms2 = document.createElement('input');

document.querySelector('main').appendChild(formMoms);
formMoms.appendChild(inputMoms1).setAttribute("id", "numberMoms1");
formMoms.appendChild(inputMoms2).setAttribute("id", "submitMoms");

formMoms.querySelector('#numberMoms1').setAttribute('type', "number");
formMoms.querySelector('#submitMoms').setAttribute('type', "submit");

formMoms.querySelector('#submitMoms').addEventListener("click", 
(x) => {  
    x.preventDefault();

    let baseNr = Number(formMoms.querySelector('#numberMoms1').value);
    let moms = Number(baseNr * 0.25);
    let discountedNr = Number(baseNr * 0.9);

    console.log('Base price: ' + baseNr);
    console.log('Moms: ' + moms);
    console.log('Discounted: ' + discountedNr);
    console.log('total price: ' + (discountedNr + moms));

});

CreateBreakerLine();

////////////////////////////////////////////////////////////

let formMail = document.createElement('form');
let inputMailTxt = document.createElement('input');
let inputMailSubmit = document.createElement('input');

document.querySelector('main').appendChild(formMail);
formMail.appendChild(inputMailTxt).setAttribute("id", "inputMailTxt");
formMail.appendChild(inputMailSubmit).setAttribute("id", "inputSubmitMail");

formMail.querySelector('#inputMailTxt').setAttribute('type', "text");
formMail.querySelector('#inputSubmitMail').setAttribute('type', "submit");

formMail.querySelector('#inputSubmitMail').addEventListener(
    "click", (x) => {
        x.preventDefault();

        let mail = formMail.querySelector('#inputMailTxt').value;
        let re = /\w{2,99}@.+\..+/

        console.log(mail);
        console.log(re);

        if (mail.search(re) == -1) {
            alert('This mail is NOT valid.');
        }
        else 
        {
            alert('This mail is valid.');
        }

});

CreateBreakerLine();

////////////////////////////////////////////////////////////




