let button = document.querySelector("#modal")
let button2 = document.querySelector("#modal2")
let mmodal = document.querySelector(".modal")
button.addEventListener("click",() => {
   mmodal.style.display = "block"
});
button2.addEventListener("click",() => {
    mmodal.style.display = "none"
    alert("thank you, we will call you soon")
 })