!function(e){var n={};function t(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(i,l,function(n){return e[n]}.bind(null,l));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5);console.log("Works!")},function(e,n,t){},function(e,n){var t,i=document.querySelector(".swiper-top"),l=i.querySelector(".swiper-container");function r(){window.innerWidth<768&&"false"===l.dataset.mobile&&(t=new Swiper(".swiper-container",{slidesOffsetAfter:32,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}}),l.dataset.mobile="true"),window.innerWidth>=768&&(l.dataset.mobile="false",l.classList.contains(".swiper-container-initialized")&&t.destroy())}r(),window.addEventListener("resize",(function(){r(),a()}));var o=i.querySelectorAll(".swiper-slide");var d=i.querySelector(".button-less"),s=i.querySelector(".button-more");function a(){d.addEventListener("click",(function(e){e.preventDefault(),function(){if(window.innerWidth>=768&&window.innerWidth<992)for(var e=6;e<o.length;e++)o[e].style.display="none";if(window.innerWidth>=992&&window.innerWidth<1366)for(var n=8;n<o.length;n++)o[n].style.display="none";if(window.innerWidth>=1366&&window.innerWidth<1408)for(var t=6;t<o.length;t++)o[t].style.display="none";if(window.innerWidth>=1408)for(var i=8;i<o.length;i++)o[i].style.display="none"}(),s.style.display="block",d.style.display="none"})),s.addEventListener("click",(function(e){e.preventDefault(),function(){if(window.innerWidth>=768)for(var e=0;e<o.length;e++)o[e].style.display="block"}(),s.style.display="none",d.style.display="block"}))}a()},function(e,n){var t=document.querySelector(".swiper-middle"),i=t.querySelector(".swiper-container");window.addEventListener("resize",(function(){d()}));var l=i.querySelectorAll(".swiper-slide");var r=t.querySelector(".button-less"),o=t.querySelector(".button-more");function d(){r.addEventListener("click",(function(e){e.preventDefault(),function(){if(window.innerWidth>=768&&window.innerWidth<992)for(var e=3;e<l.length;e++)l[e].style.display="none";if(window.innerWidth>=992&&window.innerWidth<1366)for(var n=4;n<l.length;n++)l[n].style.display="none";if(window.innerWidth>=1366&&window.innerWidth<1408)for(var t=3;t<l.length;t++)l[t].style.display="none";if(window.innerWidth>=1408)for(var i=4;i<l.length;i++)l[i].style.display="none"}(),o.style.display="block",r.style.display="none"})),o.addEventListener("click",(function(e){e.preventDefault(),function(){if(window.innerWidth>=768)for(var e=0;e<l.length;e++)l[e].style.display="block"}(),o.style.display="none",r.style.display="block"}))}d()},function(e,n){var t=document.querySelector(".wrapper_header"),i=document.querySelector(".sidebar-menu"),l=document.querySelector(".sidebar-feedback"),r=document.querySelector(".sidebar-call"),o=i.querySelector(".header__burger"),d=l.querySelector(".feedback__close"),s=r.querySelector(".call__close"),a=t.querySelector(".header__menu"),c=t.querySelector(".header__chat"),y=t.querySelector(".header__call"),u=i.querySelector(".footer__chat"),f=i.querySelector(".footer__call"),p=document.querySelector("#filter");function w(){a.addEventListener("click",(function(e){e.preventDefault(),i.style.display="flex",p.style.display="block"})),o.addEventListener("click",(function(e){e.preventDefault(),i.style.display="none","none"==l.style.display&"none"==r.style.display&&(p.style.display="none")})),c.addEventListener("click",(function(e){e.preventDefault(),l.style.display="block",p.style.display="block"})),u.addEventListener("click",(function(e){e.preventDefault(),window.innerWidth<641&&(i.style.display="none"),"block"==r.style.display&&(r.style.display="none"),l.style.display="block",p.style.display="block"})),y.addEventListener("click",(function(e){e.preventDefault(),r.style.display="block",p.style.display="block"})),f.addEventListener("click",(function(e){e.preventDefault(),window.innerWidth<641&&(i.style.display="none"),"block"==l.style.display&&(l.style.display="none"),r.style.display="block",p.style.display="block"})),d.addEventListener("click",(function(e){e.preventDefault(),l.style.display="none","none"==i.style.display&&window.innerWidth<1366&&(p.style.display="none"),window.innerWidth>1440&&(p.style.display="none")})),s.addEventListener("click",(function(e){e.preventDefault(),r.style.display="none","none"==i.style.display&&window.innerWidth<1366&&(p.style.display="none"),window.innerWidth>1366&&(p.style.display="none")})),p.addEventListener("click",(function(e){e.preventDefault(),p.style.display="none",l.style.display="none",r.style.display="none",window.innerWidth<1366&&(i.style.display="none")}))}w(),window.addEventListener("resize",(function(){w()}))}]);
//# sourceMappingURL=bundle.js.map