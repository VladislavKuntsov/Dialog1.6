const devices = document.querySelector('.devices');
const devicesContainer = devices.querySelector('.swiper-container');
/*  let mySwiperMiddle; */

/*  function mobileSliderMiddle() {
    if (window.innerWidth < 768 && swiperMiddleContainer.dataset.mobile === 'false') {
        mySwiperMiddle = new swiperMiddle('.swiper-container', {
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })
        swiperMiddleContainer.dataset.mobile = 'true';
    } 

     if (window.innerWidth >= 768) {
        swiperMiddleContainer.dataset.mobile = 'false';
           
        if (swiperMiddleContainer.classList.contains('.swiper-container-initialized')) {  
            mySwiperMiddle.destroy();
        }
    }
} */
    /* mobileSliderMiddle(); */
    window.addEventListener('resize', () => {
        /* mobileSliderMiddle(); */
        showLessMoreMiddle();
    });

    var slidesDevices = devicesContainer.querySelectorAll('.swiper-slide');
    
    
    function showLessMiddle() {
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            for(let i = 3; i < slidesDevices .length; i++) {
                
                slidesDevices[i].style.display = "none";
            }
        }

        if(window.innerWidth >= 992  &&  window.innerWidth < 1366) {
            for(let i = 4; i < slidesDevices.length; i++) {
                slidesDevices[i].style.display = "none";
            }
        }
        if(window.innerWidth >= 1366 && window.innerWidth < 1408) {
            for(let i = 3; i < slidesDevices.length; i++) {
                slidesDevices[i].style.display = "none";
            }
        } 

         if(window.innerWidth >= 1408) {
            for(let i = 4; i < slidesDevices.length; i++) {
                
                slidesDevices[i].style.display = "none";
            }
        } 
    }

    function showMoreMiddle   () {
        if(window.innerWidth >= 768) {
            for(let i = 0; i < slidesDevices .length; i++) {
                slidesDevices[i].style.display = 'block';
                
            }
        }
 
    }

    var less = devices.querySelector('.button-less');
    var more = devices.querySelector('.button-more');

    function showLessMoreMiddle () {
        less.addEventListener('click', function(evt) { 
            evt.preventDefault();
            
            showLessMiddle();
            more.style.display = 'block';
            less.style.display = 'none';
        })
    
        more.addEventListener('click', function(evt) { 
            evt.preventDefault();
            
            showMoreMiddle ();
            more.style.display = 'none';
            less.style.display = 'block';
        })
    }   
    showLessMoreMiddle ();