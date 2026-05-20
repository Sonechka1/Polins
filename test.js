// Mоbile menu 
const mobileMenu = document.querySelector('.header_mobile_menu');
const btnMobileMenu =  document.querySelector('.header_mobile_btn_menu');
const  headerList = document.querySelectorAll('.header_mobile_nav_item')
let isActive= false;
btnMobileMenu.addEventListener('click', (e)=>{
   e.preventDefault();
   mobileMenu.classList.toggle('header_mobile_menu--close');
   btnMobileMenu.classList.toggle('header_mobile_btn_menu--active');
   console.log(headerList);
});

headerList.forEach((item)=>{
    item.addEventListener('click' , ()=>{
       
        headerList.forEach((elem)=>{
            elem.classList.remove('active')
        })
    });
});


function setActiveMenuItem() {
    const currentWindow  = window.location.pathname;
    headerList.forEach((item)=>{
      const link = item.querySelector('a');
      if(link && link.pathname === currentWindow)   {
        item.classList.add('active');
      }
});

}
setActiveMenuItem();

 var swiper = new Swiper(".mySwiper", {
     autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "cards",
      grabCursor: true,
  });