"Use strict"

var gallery = document.querySelector(".gallery"); // Hent elementet med klassen "gallery"

console.dir(gallery);

gallery.addEventListener("click", function(e) {
    console.log(e); // Udskriv klikeventet i konsollen for at se, hvilke properties man kan arbejde med

    if(e.target.tagName == "IMG") // Hvis brugeren har klikket på et element med tagget "IMG"
    {
        var newSrc = e.target.src.split("-"); // Tag src-atributten fra det element, der er klikket på (billedets sti/navn) og split det ved _ tegnet. Herefter lægges det over i variablet newSrc som et array, hvor fx thumb placeres på index 0 og abril.jpg placeres på index 1
        var overlay = document.createElement("div"); // Opret et nyt div-element, som skal bruges som overlay
        overlay.classList.add("overlay"); // Tilføj klassen .overlay på det nye div-element
        document.body.appendChild(overlay); // Sæt det nye div-element ind i din HTML-kode ved at tilføje det under body-elementet

        var newImage = document.createElement("img"); // Opret et nyt img-element
        newImage.setAttribute("src", newSrc[0] + "-" + newSrc[1] + ".jpg"); // Giv det nye img-element en src-attribut, som du tager fra array'et, hvor du splittede navnet fra den thumbnail, der blev klikket på (se linje 9)

        overlay.appendChild(newImage); // Tilføj det nye img-element til det div-element, som blev oprettet i linje 10

        overlay.addEventListener("click", function() // Tilføj en eventListener til det nye div-element for at holde øje med, om brugeren klikker på overlayet
        {
            if (overlay) // Hvis overlay variablen eksisterer og indeholder noget (der er lavet et overlay)
            {
                overlay.remove(); // Fjern overlayet igen/slet det div-element, som blev oprettet i linje 10
                // overlay.parentNode.removeChild(overlay); - gammel metode, som man er sikker på virker i alle browsere
            }

        });

    }
})




var slideshow = document.querySelector(".slideshow"); // Hent articlen som indeholder slideshowet
var slides = slideshow.querySelectorAll("img"); // Hent alle billeder som er på siden (det kunne også være i slideshow-articlen)
var dots = document.querySelector(".dotArea"); // Hent det område, som dots'ene skal være i
var i = 0; // Start tæller

// Løkke til at oprette det samme antal dots, som jeg har billeder
for (var j = 0; j < slides.length; j++) // For alle de billeder, som ligger på HTML siden
{
    var newDot = document.createElement("div"); // Opret en nyt div, som skal blive til en dot
    newDot.classList.add("dot"); // Giv den klassen dot
    dots.appendChild(newDot); // Tilføj den til dot-området
}

var allDots = document.querySelectorAll(".dot"); // Hent alle de dots, som er blevet oprettet

allDots[0].classList.add("active"); // Sæt den første dot til aktiv

setInterval(slideshowSlider, 5000); // Kald funktionen slideshowSlider med 5000 milisekunders mellemrum

function slideshowSlider()
{
    if (i == slides.length - 1) // Hvis tælleren er nået til antal billeder
    {
        i = 0; // Nulstil tæller
    }
    else
    {
        i++; // Ellers tæl tæller en op
    }

    slides[i].classList.add("currentImg"); // Sæt klassen currentImg på det aktuelle billede (sætter opacity til 1)
    allDots[i].classList.add("active"); // Sæt klassen active på den aktuelle dot (sætter farven lidt mørkere)

    if (i == 0)
    {
        slides[slides.length - 1].classList.remove("currentImg"); // Hvis tælleren er 0, skal currentImg fjernes fra det sidste billede (det som var currentImg lige før)
        allDots[slides.length - 1].classList.remove("active"); // Hvis tælleren er 0, skal active fjernes fra den sidste dot (som var active lige før)
    }
    else
    {
        slides[i-1].classList.remove("currentImg"); // Fjern currentImg fra det forrige billede, som var currentImg lige før
        allDots[i-1].classList.remove("active"); // Fjern active fra den forrige dot, som var active lige før
    }

    
}

