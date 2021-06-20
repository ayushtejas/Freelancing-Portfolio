$(".carousel").owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause: true,
    // nav:true,
    responsive: {
      0:{
        items:1
        // nav: false
      },
      600:{
        items:2
        // nav: false
      }
    }
});
$(window).scroll(function(){
  if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
  }
  else{
    $('.scroll-up-btn').removeClass("show");
  }
});
$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop:0});
});
$('.one').click(function(){
  window.location.href='resume.html';
});
$('.two').click(function(){
  window.location.href='resume2.html';
});

var typed=new Typed(".prof",{
  strings:['professional','Stylish','Cutting Edge'],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});
