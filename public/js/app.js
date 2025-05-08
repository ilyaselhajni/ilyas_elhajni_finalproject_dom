let button = document.querySelector("#modal")
let button2 = document.querySelector("#modal2")
let button3 = document.querySelector("#modal3")
let mmodal = document.querySelector(".modal")
let mybody = document.querySelector('body')
let header = document.querySelector('#header')
button.addEventListener("click",() => {
   mmodal.style.display = "block"
});
button2.addEventListener("click",() => {
    mmodal.style.display = "none"
    alert("thank you, we will call you")
 })
 button3.addEventListener("click",() => {
    mmodal.style.display = "block"
 });

// window.addEventListener("scroll", () => {
//     header.style.backgroundColor = "black";
//     header.style.top = 0;
//  });
 let hamburger = document.getElementById('hamburger');
 let navLinks = document.getElementById('nav-links');
 let closee = document.getElementById('bi-x')
 hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
  }); hamburger.addEventListener('click', () => {
    closee.classList.toggle('show');
  });
 closee.addEventListener("click",() => {
    navLinks.style.display = "none"
 })
 