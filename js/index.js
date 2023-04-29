"use strict";

 //burger menu

  const burger = document.querySelector('.burger');
   const burgerMenu = document.querySelector('.header__body');
 burger.addEventListener('click', burgers);
 
  function burgers(){
    burger.classList.toggle('open');
     burgerMenu.classList.toggle('active');
    document.body.style.overflow = 'visible';
     if(burger.classList.contains('open')){
        document.body.style.overflow = 'hidden';
     }
  }


  //ссылки
 
   const items = document.querySelectorAll('.menu-item');
    items.forEach(item =>{
        const menuItem = item; 
     menuItem.addEventListener('click', clicke);
    });
     function clicke(){;
        burger.classList.remove('open');
        burgerMenu.classList.remove('active');
         document.body.style.overflow = 'visible';
     }

    
     //swiper

   const swip =  new Swiper(".mySwiper", {
      loop: true,
    //  freeMode: true,
     // watchOverflow: true,
    //  conteredSlides: true,
      //observer: true,
      slidesPerView: 1.5,
      spaceBetween: 45,
      loop: true,
     
         
         
      //navigation: {
      //   nextEl: '.swiper-button-next ',
      //   prevEl: '.swiper-button-prev',
      //   },         
         
      })
      

      //scroll top

      const scrollElement = document.querySelector('.scroll-top');
       window.addEventListener('scroll', function (e){
           if(window.pageYOffset >= 2000){
            scrollElement.classList.add('act');
          }
          if(window.pageYOffset <= 1999){
            scrollElement.classList.remove('act');
          }
       });
        scrollElement.addEventListener('click', function (e){
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          scrollElement.classList.remove('act');
        })
         


       
      //взёздныи реитинг

       const rating = document.querySelectorAll('.rating');
        if(rating.length > 0){
          initRating();
        }
        function initRating(){
          var ratingActive, ratingValue;
           for(let index = 0; rating.length; index++){
            const element = rating[index];
             initRatings(element);
           }
           function initRatings(r){
            initRatingValue(r);

            innerRatigHTML();

            if(r.classList.contains('rating__set')){
              setValueRating(r);
           }
         
           function initRatingValue(r){
                ratingActive = r.querySelector('.rating__activehover');
                ratingValue = r.querySelector('.rating__value');
           }
           function innerRatigHTML(index = ratingValue.innerHTML){
              const ratingValue = index / 0.05;
               ratingActive.style.width = `${ratingValue}%`;
           }
           function setValueRating(rating){
             const inputRatingItems = document.querySelectorAll('.rating__item');
              for(let item = 0; item < inputRatingItems.length; item++){
                 const element = inputRatingItems[item];
                element.addEventListener('mouseenter', function (e){
                  initRatingValue(rating);
                  innerRatigHTML(element.value);
                });
                element.addEventListener('mouseleave', function (e){
                  innerRatigHTML();
                });
                element.addEventListener('click', function (e){
                  ratingValue.innerHTML = item + 1;
                })
              }
           }
        }
        }
        