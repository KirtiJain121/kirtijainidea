$( ".bd" ).addClass( "background1" );

 
            jQuery(document).ready(function($) {
             $('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
     autoplay:true,
     loop:true,
      autoplayTimeout:2500,
    autoplayHoverPause:true

});
        
            });

             jQuery(document).ready(function($) {

              var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

 });
 


 window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}