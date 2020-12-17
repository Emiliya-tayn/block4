let burgerOpen = document.querySelector('.header-menu__btn_theme-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let burgerClose = mobileMenu.querySelector('.header-mobile-menu__btn');




burgerOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    mobileMenu.classList.add('mobile-menu_show');

})
burgerClose.addEventListener('click', function (){
    mobileMenu.classList.remove('mobile-menu_show');
})
