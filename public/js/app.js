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

 


//  carousel part  
let currentSlide = 0;
let slides = document.querySelectorAll('.slide');

function showSlide(index) {
   slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
   });
}

document.getElementById('nextBtn').addEventListener('click', () => {
   currentSlide = (currentSlide + 1) % slides.length;
   showSlide(currentSlide);
});

document.getElementById('prevBtn').addEventListener('click', () => {
   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
   showSlide(currentSlide);
});


setInterval(() => {
   currentSlide = (currentSlide + 1) % slides.length;
   showSlide(currentSlide);
}, 3000); 





const topBtn = document.querySelector('.top-btn');

window.onscroll = function () {
    topBtn.classList.toggle('visible', window.scrollY > 300);
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};





// 2eme caro 
let currentcaro = 0;
let slides2 = document.querySelectorAll('.testimonial-card');
let slidesToShow = 3;

function showSlides(startIndex) {
   slides2.forEach((slide, i) => {
      slide.style.display = (i >= startIndex && i < startIndex + slidesToShow) ? 'block' : 'none';
   });
}

document.getElementById('nextBtn').addEventListener('click', () => {
   currentcaro = (currentcaro + 1) % slides2.length;
   if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
   showSlides(currentcaro);
});

document.getElementById('prevBtn').addEventListener('click', () => {
   currentcaro = (currentcaro - 1 + slides2.length) % slides2.length;
   if (currentcaro < 0) currentcaro = slides2.length - slidesToShow;
   showSlides(currentcaro);
});

setInterval(() => {
   currentcaro = (currentcaro + 1) % slides2.length;
   if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
   showSlides(currentcaro);
}, 3000);


showSlides(currentcaro);


// gallery part
const modal = document.getElementById("carouselModal");
const modalImg = document.querySelector(".carousel-image");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const openBtn2 = document.getElementById("openModalBtn2");
const openBtn3 = document.getElementById("openModalBtn3");
const openBtn4 = document.getElementById("openModalBtn4");
const openBtn5 = document.getElementById("openModalBtn5");
const openBtn6 = document.getElementById("openModalBtn6");
const openBtn7 = document.getElementById("openModalBtn7");
const openBtn8 = document.getElementById("openModalBtn8");






// Image URLs
const images = [
  "./public/images/tuscan-grilled.jpg",
  "./public/images/mozzarella.jpg", "./public/images/events-slider-1.jpg",
];

let currentIndex = 0;

function showImage(index) {
  modalImg.src = images[index];
}



openBtn.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn2.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn3.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn4.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn5.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn6.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn7.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};
openBtn8.onclick = function() {
  modal.style.display = "block";
  showImage(currentIndex);
};



closeBtn.onclick = function() {
  modal.style.display = "none";
};



nextBtn.onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

prevBtn.onclick = function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

