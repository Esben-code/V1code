var bank = 'nordea' //ids = jysk, dansk, nordea 


var jyskeBank =
{
    bankNavn: 'Jyske Bank',
    bankAdr: 'Skattelyvej 1',
    bankZip: '2222',
    bankBy: 'Solsiden',
    bankTlfNr: '+45 1234 1234',
    bankMail: 'kontakt@jyskebank.nu',
    bankSender: 'Claus Clausen',
    bankSenderTitle: 'Administrerende direktør',
    bankImg: 'img/logo_jb.png',
    bankImgAltTxt: 'Jyske Bank Logo'

}

var nordea =
{
    bankNavn: 'Nordea',
    bankAdr: 'Købtgade 6',
    bankZip: '1548',
    bankBy: 'Gåserød',
    bankTlfNr: '+45 8484 4848',
    bankMail: 'info@nordea.dk',
    bankSender: 'Karl Smart',
    bankSenderTitle: 'CCO',
    bankImg: 'img/logo_nd.png',
    bankImgAltTxt: 'Nordea Logo'

}

var danskeBank =
{
    bankNavn: 'Danske Bank',
    bankAdr: 'Tæppetovet 7',
    bankZip: '2000',
    bankBy: 'Pjort',
    bankTlfNr: '+45 7777 7778',
    bankMail: 'indbakke@danskebank.her',
    bankSender: 'Hodja Ali',
    bankSenderTitle: 'Administrerende direktør',
    bankImg: 'img/logo_db.png',
    bankImgAltTxt: 'Danske Bank Logo'

}



var firmanavn = document.querySelectorAll('.bankNavn');
var firmaadresse = document.querySelectorAll('.bankAdr');
var firmapost = document.querySelectorAll('.bankZip');
var firmaby = document.querySelectorAll('.bankBy');
var firmatlf = document.querySelectorAll('.bankTlfNr');
var firmamail = document.querySelectorAll('.bankMail');
var firmalogo = document.querySelectorAll('.bankImg');
var firmasender = document.querySelectorAll('.bankSender')
var firmatitle = document.querySelectorAll('.bankSenderTitle')

firmanavn.forEach(udskiftBankNavn)
firmaadresse.forEach(udskiftBankAdr)
firmaby.forEach(udskiftBankBy)
firmamail.forEach(udskiftBankMail)
firmapost.forEach(udskiftBankZip)
firmasender.forEach(udskiftBankSender)
firmatitle.forEach(udskiftBankSenderTitle)
firmatlf.forEach(udskiftBankTlfNr)
firmalogo.forEach(udskiftBankImg)



function udskiftBankNavn(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankNavn;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankNavn;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankNavn;
    }   
}

function udskiftBankAdr(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankAdr;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankAdr;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankAdr;
    }   
}

function udskiftBankZip(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankZip;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankZip;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankZip;
    }   
}

function udskiftBankBy(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankBy;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankBy;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankBy;
    }   
}

function udskiftBankTlfNr(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankTlfNr;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankTlfNr;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankTlfNr;
    }   
}

function udskiftBankMail(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankMail;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankMail;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankMail;
    }   
}

function udskiftBankSender(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankSender;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankSender;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankSender;
    }   
}

function udskiftBankSenderTitle(element)
{
    if(bank == "jysk")
    {
        element.innerHTML = jyskeBank.bankSenderTitle;
    }
    else if(bank == "dansk")
    {
        element.innerHTML = danskeBank.bankSenderTitle;
    }
    else if(bank == "nordea")
    {
        element.innerHTML = nordea.bankSenderTitle;
    }   
}

function udskiftBankImg(element)
{
    if(bank == "jysk")
    {
        element.setAttribute("src", jyskeBank.bankImg);
        element.setAttribute("alt", jyskeBank.bankImgAltTxt);
    }
    else if(bank == "dansk")
    {
        element.setAttribute("src", danskeBank.bankImg);
        element.setAttribute("alt", danskeBank.bankImgAltTxt);
    }
    else if(bank == "nordea")
    {
        element.setAttribute("src", nordea.bankImg);
        element.setAttribute("alt", nordea.bankImgAltTxt);
    }  
    
}