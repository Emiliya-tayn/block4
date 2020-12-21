let buttonMore = document.querySelector('.repair-brands-look-more__btn');
let show = document.querySelectorAll('.repair-brands-list__item_show');
let swiperImage = document.querySelector('.repair-brands-look-more__image');

buttonMore.addEventListener('click',function (evt){
    let hiddenItem = document.querySelectorAll('.swiper__item_hidden');
    let isNotHaveClass = !hiddenItem[0].classList.contains('swiper__item_show');

    evt.preventDefault();

    if (isNotHaveClass) {
        for (let i = 0; i < hiddenItem.length; i++) {
            hiddenItem[i].classList.add('repair-brands-list__item_show');
        }
        buttonMore.textContent = 'Скрыть';
        swiperImage.classList.add('rotate');
    }
    else {
        for (let i = 0; i < hiddenItem.length; i++) {
            hiddenItem[i].classList.remove('repair-brands-list__item_show');
        }
        buttonMore.textContent = 'Показать все';
        swiperImage.classList.remove('rotate');
    }

});