
//nav btn hamburger
const hamburger = document.querySelector(".navbar-toggler");
hamburger.onclick = function(){
    let navBar = document.querySelector(".nav__left");
    navBar.classList.toggle("active")
}
// change img & bgr container-grey2
function changeImg1(){
    document.getElementById('nav-img1').style.backgroundColor = "white"
   let img = document.getElementById('img-change');
   img.src = './assets/images/section-grey2.jpg';
   document.getElementById('nav-img2').style.backgroundColor = "transparent";
   document.getElementById('nav-img3').style.backgroundColor = "transparent";
}
function changeImg2(){
    document.getElementById('nav-img2').style.backgroundColor = "white"
    let img = document.getElementById('img-change');
    img.src = './assets/images/section-grey2-2.jpg';
    document.getElementById('nav-img1').style.backgroundColor = "transparent";
    document.getElementById('nav-img3').style.backgroundColor = "transparent";
 }
 function changeImg3(){
    document.getElementById('nav-img3').style.backgroundColor = "white"
    let img = document.getElementById('img-change');
    img.src = './assets/images/section-grey2-3.jpg';
    document.getElementById('nav-img1').style.backgroundColor = "transparent";
    document.getElementById('nav-img2').style.backgroundColor = "transparent";
 }

 //card-header

 function displayCard1(){
    document.getElementById('card1').style.display = "inline-block";
 }
 function displayCard2(){
    document.getElementById('card2').style.display = "block";
 }
 function displayCard3(){
    document.getElementById('card3').style.display = "block";
 }