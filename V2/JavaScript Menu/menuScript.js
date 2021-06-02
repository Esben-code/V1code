var menu = {
    'home': 'home.html',
    'products': 'products.html',
    'pricing': 'pricing.html',
    'vision': 'vision.html',
    'about': 'about.html',
    'contact': 'contact.html'
}

var nav = document.createElement('nav');
var ul = document.createElement('ul');


document.querySelector('body').appendChild(nav);
nav.appendChild(ul);

for (key in menu ) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var txt = document.createTextNode(key);
    var link = (menu[key])

    ul.appendChild(li);

    li.appendChild(a);

    a.appendChild(txt);

    a.href = link;

    a.classList.add('menuLinks')
    li.classList.add('menuListItems')
}


nav.classList.add('menu')
ul.classList.add('menuUl')











// var nav = document.createElement('nav');
// var ul = document.createElement('ul');
// var homeli = document.createElement('li');
// var homea = document.createElement('a');
// var productsli = document.createElement('li');
// var productsa = document.createElement('a');
// var pricingli = document.createElement('li');
// var pricinga = document.createElement('a');
// var visionli = document.createElement('li');
// var visiona = document.createElement('a');
// var aboutli = document.createElement('li');
// var abouta = document.createElement('a');
// var contactli = document.createElement('li');
// var contacta = document.createElement('a');

// // var li = document.createElement('li');
// // var a = document.createElement('a');

// var hometxt = document.createTextNode('Home');
// var productstxt = document.createTextNode('Products');
// var pricingtxt = document.createTextNode('Pricing');
// var visiontxt = document.createTextNode('Vision');
// var abouttxt = document.createTextNode('About');
// var contacttxt = document.createTextNode('Contact');


