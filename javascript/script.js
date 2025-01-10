jQuery(document).ready(function () {

    //2차메뉴
    $('.gnb>li').mouseover(function () {
        $('.depth-02').stop().slideDown(500);
        $('.gnb .bg').stop().slideDown(500);
    }).mouseout(function () {
        $('.depth-02').stop().slideUp(500);
        $('.gnb .bg').stop().slideUp(500);
    });

    //메인비주얼
    let mainVisual = document.querySelector('.main_visual');
    let slide = mainVisual.querySelectorAll('.slide');
    let prevBtn = mainVisual.querySelector('.prev');
    let nextBtn = mainVisual.querySelector('.next');

    let i = 0;
    nextBtn.addEventListener('click', () => {
        i++;
        //console.log(nextBtn);
        if(i >= slide.length) {
            i = 0;
        }
        slide.forEach(item => {
            item.classList.remove('active');
        });
        slide[i].classList.add('active');
    });//nextBtn

    prevBtn.addEventListener('click', () => {
        i--;
        if(i < 0) {
            i = 0;
        }
        slide.forEach(item => {
            item.classList.remove('active');
        })
        slide[i].classList.add('active');
    });//prevBtn

    setInterval(() => {
        i++;
        if(i >= slide.length) {
            i = 0;
        }
        slide.forEach(item => {
            item.classList.remove('active');
        })
        slide[i].classList.add('active');
    }, 5000);


    //베스트메뉴
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });

});//jquery end