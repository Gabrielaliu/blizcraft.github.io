
let navBtn = document.querySelector('#menu-bar');
let navForm = document.querySelector('.navbar');
let navClose = document.querySelector('#nav-close');


window.onscroll = () =>{
  navForm.classList.remove('active');
};
navBtn.addEventListener('click', () =>{
  console.log('clicked');
  navForm.classList.add('active');
  navForm.style.transition = "all .5s";
});

navClose.addEventListener('click', () =>{
  navForm.classList.remove('active');
});


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}

const Swiper = new swiper(".swiper.home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }
    });
  };
});  

var swiper = new swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
     autoplay: {
         delay: 2500,
         disableOnInteraction: false,
     },
     breakpoints: {
          640: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
     }
});
