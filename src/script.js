let burgerOpen = document.querySelector('.header-menu__btn_theme-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let burgerClose = mobileMenu.querySelector('.header-mobile-menu__btn');
let hiddenWrapper = document.querySelector('.container');
let page = document.querySelector('.body');
let mobileSwiper = document.querySelector('.swiper');



burgerOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    mobileMenu.classList.add('mobile-menu_show');
    hiddenWrapper.classList.add('container_hidden');
    page.classList.add('body_unscrollable');
    mobileSwiper.classList.add('container_hidden');

})
burgerClose.addEventListener('click', function (){
    mobileMenu.classList.remove('mobile-menu_show');
    hiddenWrapper.classList.remove('container_hidden');
    page.classList.remove('body_unscrollable');
    mobileSwiper.classList.remove('container_hidden');
})
