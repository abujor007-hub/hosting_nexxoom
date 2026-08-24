// $(document).ready(function(){

//     // Category slider
//     $('.category-slider').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       arrows: true,
//       dots: false,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 2500,
//       responsive: [
//         { breakpoint: 1024, settings: { slidesToShow: 4 } },
//         { breakpoint: 640,  settings: { slidesToShow: 3 } },
//         { breakpoint: 400,  settings: { slidesToShow: 2 } }
//       ]
      
//     });

//     $('.plugin-slider').slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       arrows: true,
//       dots: true,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       adaptiveHeight: false,
//       responsive: [
//         { breakpoint: 1024, settings: { slidesToShow: 3 } },
//         { breakpoint: 640,  settings: { slidesToShow: 2 } },
//         { breakpoint: 480,  settings: { slidesToShow: 1 } }
//       ]
//     });
//   });
 $(document).ready(function(){

    // Category slider
    $('.category-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        { 
          breakpoint: 1024, 
          settings: { 
            slidesToShow: 4,
            arrows: true 
          } 
        },
        { 
          breakpoint: 640,  
          settings: { 
            slidesToShow: 3,
            arrows: false  
          } 
        },
        { 
          breakpoint: 400,  
          settings: { 
            slidesToShow: 3.5,
            arrows: false , 
         
          } 
        }
      ]
    });

    // Plugin slider
    $('.plugin-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,  
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      responsive: [
        { 
          breakpoint: 1024, 
          settings: { 
            slidesToShow: 3,
            arrows: false 
          } 
        },
        { 
          breakpoint: 640,  
          settings: { 
            slidesToShow: 2,
            arrows: false 
          } 
        },
        { 
          breakpoint: 480,  
          settings: { 
            slidesToShow: 2,
            arrows: false 
          } 
        }
      ]
    });
  });

  
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const closeMenu = document.getElementById('closeMenu');


    // ================= OPEN MENU =================

    menuBtn.addEventListener('click', function () {

        mobileMenu.classList.remove('-translate-x-full');

        mobileOverlay.classList.remove('opacity-0');
        mobileOverlay.classList.remove('invisible');

    });


    // ================= CLOSE MENU =================

    function closeMobileMenu() {

        mobileMenu.classList.add('-translate-x-full');

        mobileOverlay.classList.add('opacity-0');
        mobileOverlay.classList.add('invisible');

    }


    closeMenu.addEventListener('click', closeMobileMenu);


    // ================= OVERLAY CLICK =================

    mobileOverlay.addEventListener('click', closeMobileMenu);


    // ================= ESC KEY =================

    document.addEventListener('keydown', function (event) {

        if (event.key === 'Escape') {

            closeMobileMenu();

        }

    });


     $(document).ready(function () {

            $('.main-slider').slick({

                slidesToShow: 1,
                slidesToScroll: 1,

                autoplay: true,
                autoplaySpeed: 3000,

                speed: 600,

                arrows: true,
                dots: true,

                infinite: true,

                adaptiveHeight: false

            });

        });