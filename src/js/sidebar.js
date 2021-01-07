const wrapperHeader = document.querySelector('.wrapper_header');
const sidebarMenu = document.querySelector('.sidebar-menu'); 
const sidebarFeedback =  document.querySelector('.sidebar-feedback');
const sidebarCall =  document.querySelector('.sidebar-call');

let buttonMenuClose = sidebarMenu.querySelector('.header__burger'); //кнопка для закрытия menu
let buttonFeedbackClose = sidebarFeedback.querySelector('.feedback__close');
let buttonCallClose = sidebarCall.querySelector('.call__close');

let buttonMenuOpen = wrapperHeader.querySelector('.header__menu'); //кнопка для открытия menu
let buttonFeedbackOpen = wrapperHeader.querySelector('.header__chat'); //кнопка открытия обратной связи
let buttonCallOpen = wrapperHeader.querySelector('.header__call'); //кнопка открытия звонка
let buttonFeedbackOpen2 = sidebarMenu.querySelector('.footer__chat');
let buttonCallOpen2 =sidebarMenu.querySelector('.footer__call');

let filter = document.querySelector('#filter');

function openCloseSidebar () {
    buttonMenuOpen.addEventListener('click', function(evt) { 
        evt.preventDefault();
        sidebarMenu.style.display = 'flex';
        filter.style.display = 'block';
    })

    buttonMenuClose.addEventListener('click', function(evt) { 
        evt.preventDefault();
        sidebarMenu.style.display = 'none';
        if(sidebarFeedback.style.display == 'none' & sidebarCall.style.display == 'none'){
          filter.style.display = 'none';   
        }
    })

    buttonFeedbackOpen.addEventListener('click', function(evt) { 
        evt.preventDefault();
        
        sidebarFeedback.style.display = 'block';
        filter.style.display = 'block';
        
    })

    buttonFeedbackOpen2.addEventListener('click', function(evt) { 
        evt.preventDefault();
        if(window.innerWidth < 641){        ///// хочу убрать меню при маленьком экране
            sidebarMenu.style.display = "none"
        }
        if(sidebarCall.style.display == 'block'){   /////// здесь
            sidebarCall.style.display = 'none';
        }
        
        sidebarFeedback.style.display = 'block';
        filter.style.display = 'block';
    })
 
    buttonCallOpen.addEventListener('click', function(evt) { 
        evt.preventDefault();
        
        sidebarCall.style.display = 'block';
        filter.style.display = 'block';
       
    })

    buttonCallOpen2.addEventListener('click', function(evt) { 
        evt.preventDefault();
        if(window.innerWidth < 641){              ///// хочу убрать меню при маленьком экране
            sidebarMenu.style.display = "none"
        }
        if(sidebarFeedback.style.display == 'block'){ //// здесь
            sidebarFeedback.style.display = 'none';
        }
        
        sidebarCall.style.display = 'block';
        filter.style.display = 'block';
    })
    
    buttonFeedbackClose.addEventListener('click', function(evt) {    //закрытие обратной связи
        evt.preventDefault();
        sidebarFeedback.style.display = 'none';
        if(sidebarMenu.style.display == "none" && window.innerWidth < 1366){
        filter.style.display = 'none';     
        } if(window.innerWidth > 1440) {
            filter.style.display = 'none'; 
        }
        
    })
    buttonCallClose.addEventListener('click', function(evt) {   //закрытие заказать звонок
        evt.preventDefault();
        sidebarCall.style.display = 'none';
        if(sidebarMenu.style.display == "none" && window.innerWidth < 1366){
            filter.style.display = 'none';     
        } if(window.innerWidth > 1366) {
            filter.style.display = 'none'; 
        }  
    })

    filter.addEventListener('click', function(evt) {
        evt.preventDefault();
        filter.style.display = 'none'; 
        sidebarFeedback.style.display = 'none';
        sidebarCall.style.display = 'none';
        if( window.innerWidth < 1366){
            sidebarMenu.style.display = 'none';
        }
    })
}  


openCloseSidebar ();

window.addEventListener('resize', () => {
    openCloseSidebar ();
});