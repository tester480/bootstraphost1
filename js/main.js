$(document).ready(function(){
   
});

function mobSearch() {
   $(".search-mob__btn").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-search')) {
            $parent.removeClass('mob-search');
         } else {
            $parent.addClass('mob-search');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".search-mob__btn, .header__search").length) {
         if ($(".header").hasClass("mob-search")) {
            $(".header").removeClass("mob-search");
         }
      }
   });
}

function headerMobMenu() {
   $(".header__burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('header-menu')) {
            $parent.removeClass('header-menu');
         } else {
            $parent.addClass('header-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__burger, .header__menu-mob").length) {
         if ($(".header").hasClass("header-menu")) {
            $(".header").removeClass("header-menu");
         }
      }
   });
}