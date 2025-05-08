let button = document.querySelector("#modal")
let button2 = document.querySelector("#modal2")
let button3 = document.querySelector("#modal3")
let mmodal = document.querySelector(".modal")
let mybody = document.querySelector('body')
let header = document.querySelector('#header')

// modal button 
button.addEventListener("click",() => {
   mmodal.style.display = "block"
   mybody.addEventListener("click", (event) => {
      if (!mmodal.contains(event.target) && event.target !== button) {
         mmodal.style.display = "none";
      }
   });
});
button2.addEventListener("click",() => {
    mmodal.style.display = "none"
    alert("thank you, we will call you")
 })
button3.addEventListener("click", () => {
   mmodal.style.display = "block";
   mybody.addEventListener("click", (event) => {
      if (!mmodal.contains(event.target) && event.target !== button3) {
         mmodal.style.display = "none";
      }
   });
});


// navbar links in the mobile virsion
 let hamburger = document.getElementById('hamburger');
 let navLinks = document.getElementById('nav-links');
 let closee = document.getElementById('bi-x')
 hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

  });
  
  hamburger.addEventListener('click', () => {
    closee.classList.toggle('show');
  });

if (closee) {
  closee.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closee.classList.remove('show');
  });
}


//  data filter section
let alltabs = document.querySelector('#all1')
let menuitems = document.querySelector('.menu-items')
let starters = document.querySelectorAll('.starters')
let starter = document.querySelector('#starters')
let salads = document.querySelector('#salads')
let speciality = document.querySelectorAll('.specialty')
let specialitys = document.querySelectorAll('#specialty')
let salad = document.querySelectorAll('.salad')

alltabs.addEventListener('click', () => {
   starters.forEach(item => {
      item.style.display = "grid";
   });
   speciality.forEach(element => {
      element.style.display = "grid";
   });
   salad.forEach(element => {
      element.style.display = "grid";
   });
});
starter.addEventListener('click' , () => {
   starters.forEach(item => {
      item.style.display = "grid";
   });
   speciality.forEach(element => {
      element.style.display = "none";
   });
   salad.forEach(element => {
      element.style.display = "none";
   });
})
salads.addEventListener('click', () => {
   salad.forEach(item => {
      item.style.display = "grid";
   });
   starters.forEach(element => {
      element.style.display = "none";
   });
   speciality.forEach(element => {
      element.style.display = "none";
   });
});
specialitys.forEach(special => {
   special.addEventListener('click', () => {
      speciality.forEach(item => {
         item.style.display = "grid";
      });
      starters.forEach(element => {
         element.style.display = "none";
      });
      salad.forEach(element => {
         element.style.display = "none";
      });
   });
});



// specials part 
document.querySelectorAll('.specials-menu button').forEach((item) => {
   item.addEventListener('click', () => {
     document.querySelectorAll('.specials-menu button').forEach(btn => btn.classList.remove('active'));
     item.classList.add('active');
   });
 });
 
 let modibutton = document.querySelector('#modi');
 let undebutton = document.querySelector('#unde');
 let pariabutton = document.querySelector('#paria');
 let nostbutton = document.querySelector('#nost');
 let iustobutton = document.querySelector('#iusto');
 
 let modi = document.querySelectorAll('.modi');
 let unde = document.querySelectorAll('.unde');
 let paria = document.querySelectorAll('.paria');
 let nost = document.querySelectorAll('.nost');
 let iusto = document.querySelectorAll('.iusto');
 
 modibutton.addEventListener('click', () => {
   modi.forEach(item => item.style.display = "flex");
   unde.forEach(item => item.style.display = "none");
   paria.forEach(item => item.style.display = "none");
   nost.forEach(item => item.style.display = "none");
   iusto.forEach(item => item.style.display = "none");
 });
 
 undebutton.addEventListener('click', () => {
   unde.forEach(item => item.style.display = "flex");
   modi.forEach(item => item.style.display = "none");
   paria.forEach(item => item.style.display = "none");
   nost.forEach(item => item.style.display = "none");
   iusto.forEach(item => item.style.display = "none");
 });
 
 pariabutton.addEventListener('click', () => {
   paria.forEach(item => item.style.display = "flex");
   modi.forEach(item => item.style.display = "none");
   unde.forEach(item => item.style.display = "none");
   nost.forEach(item => item.style.display = "none");
   iusto.forEach(item => item.style.display = "none");
 });
 
 nostbutton.addEventListener('click', () => {
   nost.forEach(item => item.style.display = "flex");
   modi.forEach(item => item.style.display = "none");
   unde.forEach(item => item.style.display = "none");
   paria.forEach(item => item.style.display = "none");
   iusto.forEach(item => item.style.display = "none");
 });
 
 iustobutton.addEventListener('click', () => {
   iusto.forEach(item => item.style.display = "flex");
   modi.forEach(item => item.style.display = "none");
   unde.forEach(item => item.style.display = "none");
   paria.forEach(item => item.style.display = "none");
   nost.forEach(item => item.style.display = "none");
 });

 
 





