
$(window).load(function(){
  $(".preloader").fadeOut();
})




$(document).ready(function(){


    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});










// **************************************************************************************************

/***************************************************************************************** */
  // show and hide search box

  $(".openMySearch").click(function(){
    $(".search-holder-parent").toggleClass("show-search-box");
  })

  $(".closeSearh-btn").click(function(){
    $(".search-holder-parent").removeClass("show-search-box");
  })


/***************************************************************************************** */

// open and close sideBar

$(".bars").click(function(){
  $("nav").addClass("reset-left");
  $("body").addClass("overflowHidden");
})


$(".closeBtn").click(function(){
  $("nav").removeClass("reset-left");
  $("body").removeClass("overflowHidden");
})

// **************************************************************************************************


// nav nested menu

if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }


// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 400);
}) 


// **************************************************************************************************


//fixed nav

    
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 40) {
    $(".search-holder-parent").removeClass("show-search-box");
    $("header").addClass("sticky-header");
    if($(window).width() > 768){
      $(".logo img").addClass("logo-img-big");
    }
  } else {
    $("header").removeClass("sticky-header");
    if($(window).width() > 768){
      $(".logo img").removeClass("logo-img-big");
    }
  
  }
});






// **************************************************************************************************




  /********************************************************************************* */



// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }




/********************************************************************************* */


})







