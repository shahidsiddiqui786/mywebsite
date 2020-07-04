 let nav = document.querySelector('.navigation_nav');
 let navbg = document.querySelector('.navigation_background');
 let menu = document.querySelector('.menu');

menu.addEventListener('click', function() {
    this.classList.toggle('active');
     nav.classList.toggle('nav_active_nav');
     navbg.classList.toggle('nav_active_background');
});
