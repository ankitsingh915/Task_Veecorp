// hamburger

let lara = document.getElementById('ham1');
    lara.addEventListener('click', funct);
let mnavi = document.getElementById('home');
let closebtn = document.getElementById("closebtn")

function funct(){
    mnavi.style.display == "block"  ? mnavi.style.display = "none"  : mnavi.style.display = "block" ;
    closebtn.style.display == "block"  ? closebtn.style.display = "none"  : closebtn.style.display = "block" ;
}

function hide(){
    mnavi.style.display == "block"  ? mnavi.style.display = "none"  : mnavi.style.display = "block" ;
    closebtn.style.display = "none"
}