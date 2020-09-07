$(document).ready(function(){
   headerMobMenu();
});

function headerMobMenu() {
   $(".nav-burger").on('click', function () {
         var $parent = $("body");
         if ($parent.hasClass('sidebar-mob')) {
            $parent.removeClass('sidebar-mob');
         } else {
            $parent.addClass('sidebar-mob');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".nav-burger, .sidebar").length) {
         if ($("body").hasClass("sidebar-mob")) {
            $("body").removeClass("sidebar-mob");
         }
      }
   });
}