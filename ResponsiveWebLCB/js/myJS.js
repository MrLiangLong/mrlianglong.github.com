/**
 * Created by asus on 2016/12/21.
 */
$(document).ready(function(){
   
   $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000
      /* margin: 10,
       nav: true,
       loop: true*/,
       responsive: {
           0: {
               items: 1
           }/*,
           600: {
               items: 2
           },
           1000: {
               items: 3
           }*/
       }
    })
});

