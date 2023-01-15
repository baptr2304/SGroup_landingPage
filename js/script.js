
//nav btn hamburger
const hamburger = document.querySelector(".navbar-toggler");
hamburger.onclick = function () {
   let navBar = document.querySelector(".nav__left");
   navBar.classList.toggle("active");

}

// change img & bgr container-grey2
function changeImg1() {
   document.getElementById('nav-img1').style.backgroundColor = "white"
   let img = document.getElementById('img-change');
   img.src = './assets/images/section-grey2.jpg';
   document.getElementById('nav-img2').style.backgroundColor = "transparent";
   document.getElementById('nav-img3').style.backgroundColor = "transparent";
}
function changeImg2() {
   document.getElementById('nav-img2').style.backgroundColor = "white"
   let img = document.getElementById('img-change');
   img.src = './assets/images/section-grey2-2.jpg';
   document.getElementById('nav-img1').style.backgroundColor = "transparent";
   document.getElementById('nav-img3').style.backgroundColor = "transparent";
}
function changeImg3() {
   document.getElementById('nav-img3').style.backgroundColor = "white"
   let img = document.getElementById('img-change');
   img.src = './assets/images/section-grey2-3.jpg';
   document.getElementById('nav-img1').style.backgroundColor = "transparent";
   document.getElementById('nav-img2').style.backgroundColor = "transparent";
}

//card-header

var x = document.getElementById("card1");
var y = document.getElementById("card2");
var z = document.getElementById("card3");
function displayCard1() {

   if(x.style.display === "none"){
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
   }
   else {
      x.style.display = "none";
   }
}
function displayCard2() {

   if(y.style.display === "none"){
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
   }
   else {
      y.style.display = "none";
   }
}
function displayCard3() {
   if(z.style.display === "none"){
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
   }
   else {
      z.style.display = "none";
      
   }
}
//  //popup gallery 


const gallery = document.getElementById('gallery-container');
const viewer = new Viewer(gallery);





