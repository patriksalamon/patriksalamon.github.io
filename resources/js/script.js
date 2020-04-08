$(document).ready(function() {

    /* For the sticky navigation */
    // $('.js--section-about').waypoint(function(direction){

    //     if(direction == 'down'){
    //         $('nav').addClass('sticky');
    //     }else{
    //         $('nav').removeClass('sticky');
    //     }
    // },{
    // offset: '60px;'
    // });
    
    /*---- Javascript smooth scrolling ----*/
    // document.querySelector('.js--scroll-to-features').addEventListener('click',function(e){

    //     document.querySelector('#food-delivery').scrollIntoView({ 
    //         behavior: 'smooth' 
    //       });

    //       e.preventDefault();
    // });

    /*HTML SCROLL-BEHAVIOR: SMOOTH */

    /* Scroll on buttons */
    // $('.js--scroll-to-plans').click(function (){
    //     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    // });

    // $('.js--scroll-to-features').click(function (){
    //     $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    // });

      /* Animations on scroll */
      $('.js--wp-1').waypoint(function(direction){
          if(direction == 'down'){
            $('.js--wp-1').addClass('animated fadeIn');
          }else{
            $('.js--wp-1').removeClass('animated fadeIn');
          }
      },{
      offset: '50%'
      });

      $('.js--wp-2').waypoint(function(direction){
          
            $('.js--wp-2').addClass('animated fadeInUp');
    },{
    offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        if(direction == 'down'){
        $('.js--wp-3').addClass('animated fadeIn');
        }else{
            $('.js--wp-3').removeClass('animated fadeIn');
        }
    },{
    offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        if(direction == 'down'){
        $('.js--wp-4').addClass('animated pulse');
        }else{
            $('.js--wp-4').removeClass('animated pulse');
        }
    },{
    offset: '50%'
    });

    $('.js--wp-5').waypoint(function(direction){
      if(direction == 'down'){
      $('.js--wp-5').addClass('animated fadeIn');
      }else{
          $('.js--wp-5').removeClass('animated fadeIn');
      }
  },{
  offset: '50%'
  });
});

/* Vanilla JS */

/* Sticky navigation */
window.onscroll = function() { stickyNavigation()};

const navbar = document.querySelector('nav');
const stickyPoint = document.querySelector('.section-about');
const sticky = stickyPoint.offsetTop;

function stickyNavigation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}


/* Mobile nav */
document.querySelector('.js--nav-icon').addEventListener('click', function(){

  const nav = document.querySelector('.main-nav');
  const icon = document.querySelector('#nav-icon');
  const iconName = icon.getAttribute('name');

  if(iconName == 'menu-outline'){
  
    icon.setAttribute('name', 'close-outline');
    nav.style.display = 'block';
    nav.classList.remove('animated','fadeOutUp');
    nav.classList.add('animated','fadeInDown');

  }else{

    icon.setAttribute('name', 'menu-outline');
    nav.classList.remove('animated', 'fadeInDown');
    nav.classList.add('animated', 'fadeOutUp');

    setTimeout(() => {

      nav.style.display = 'none';
      nav.classList.remove('animated', 'fadeOutUp');

    }, 300);
  }
});

/* Form email send */
document.getElementById('btn-form').addEventListener('click', function(){

  const name = document.querySelector('input[type=text]');
  const email = document.querySelector('input[type=email]');
  const message = document.querySelector('textarea');

  window.open(`mailto:${email.value}?subject=Message from ${name.value}&body=${message.value}`);

  setTimeout(() => {

    name.value = "";
    email.value = "";
    message.value = "";

  }, 1000);
  });
  
