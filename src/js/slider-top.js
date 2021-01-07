const swiperTop = document.querySelector('.swiper-top');
const slider = swiperTop.querySelector('.swiper-container');
 let mySwiper;

 function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper('.swiper-container', {
            slidesOffsetAfter: 32,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })
        slider.dataset.mobile = 'true';
    } 

     if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
           
        if (slider.classList.contains('.swiper-container-initialized')) {  
            mySwiper.destroy();
        }
    }
}
    mobileSlider();
    window.addEventListener('resize', () => {
        mobileSlider();
        showLessMore();
    });

    var slidesTop = swiperTop.querySelectorAll('.swiper-slide');
    
    
    function showLess() {
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            for(let i = 6; i < slidesTop .length; i++) {
                slidesTop[i].style.display = "none"; 
            }
        }

        if(window.innerWidth >= 992  && window.innerWidth < 1366 ) {
            for(let i = 8; i < slidesTop.length; i++) {
                slidesTop[i].style.display = "none"; 
            }
        }

         if(window.innerWidth >= 1366 && window.innerWidth < 1408) {
            for(let i = 6; i < slidesTop.length; i++) {
                slidesTop[i].style.display = "none";
            }
        } 
        if(window.innerWidth >= 1408 ) {
            for(let i = 8; i < slidesTop.length; i++) {
                slidesTop[i].style.display = "none";
            }
        } 
    }

    function showMore   () {
        if(window.innerWidth >= 768) {
            for(let i = 0; i < slidesTop .length; i++) {
                slidesTop[i].style.display = 'block';
            }
        }
    }

    var less = swiperTop.querySelector('.button-less');
    var more = swiperTop.querySelector('.button-more');

    function showLessMore () {
        less.addEventListener('click', function(evt) { 
            evt.preventDefault();
            
            showLess();
            more.style.display = 'block';
            less.style.display = 'none';
        })
    
        more.addEventListener('click', function(evt) { 
            evt.preventDefault();
            
            showMore ();
            more.style.display = 'none';
            less.style.display = 'block';
        })
    }   
    showLessMore ();