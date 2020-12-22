window.addEventListener("resize", windowSize);
windowSize();
function windowSize () {
    let windowWidth = window.screen.availWidth;

        if(windowWidth < 768) {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }
        else {
            let buttonMore = document.querySelector('.swiper-look-more__btn');
            let swiperImage = document.querySelector('.swiper-look-more__image');
            let buttonMoreContainer = document.querySelector('.swiper-look-more');

            buttonMore.addEventListener('click',function (evt){
                let hiddenItem = document.querySelectorAll('.swiper__slide_hidden');
                let isNotHaveClass = !hiddenItem[0].classList.contains('swiper__slide_show');

                evt.preventDefault();

                if (isNotHaveClass) {
                   for (let i = 0; i < hiddenItem.length; i++) {
                            hiddenItem[i].classList.add('swiper__slide_show');
                   }
                   buttonMore.textContent = 'Скрыть';
                   swiperImage.classList.add('rotate');
                   buttonMoreContainer.classList.add('swiper-look-more_top');
                }
                else {
                   for (let i = 0; i < hiddenItem.length; i++) {
                   hiddenItem[i].classList.remove('swiper__slide_show');
                   }
                   buttonMore.textContent = 'Показать все';
                   swiperImage.classList.remove('rotate');
                   buttonMoreContainer.classList.remove('swiper-look-more_top');

                }

            });
        }

}