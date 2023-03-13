//----------------------------------------SWIPER--------------------------------------//


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    autoplay: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        
      },
  
    

    autoplay: {
        delay: 2000,
      },

    });


 
   


document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 767){
     const slider = new Swiper('.conditions-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    
    
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        
      },
    
    });
  }
})
    

  

//----------------------------------------TOGGLE (CHICKS)--------------------------------------//

let btn = document.getElementById('btn');

function leftClick() {
    btn.style.left = '0'
};

function rightClick() {
   
    btn.style.left = "110px"
};

//----------------------------------------TOUCH/PC--------------------------------------//


const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
}else {
  document.body.classList.add('_pc');
}

//----------------------------------------OPENING LANGUAGE LIST------------------------//

const langArrow = document.querySelector('.lang-item__arrow');
if(langArrow) {
    const langBody = document.querySelector('.nav-menu__lang');
    langArrow.addEventListener("click", function(e) {
        langBody.classList.toggle('._active');
    })
}


//---------------------------------------BURGER ICON--------------------------------------//

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}




