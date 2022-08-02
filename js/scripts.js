$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".header").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".header").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){document.documentElement.scrollTop = 0;});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".header__navigation").toggleClass("active");
    $(".header__navigation").toggleClass("sp");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

// divider ----

// $(".option").click(function(){
//   $(".option").removeClass("active");
//   $(this).addClass("active");
  
// });

$('.with-caption').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom mfp-img-mobile',
  image: {
    verticalFit: true,
    titleSrc: function(item) {
      return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
    }
  },
  zoom: {
    enabled: true
  }
});