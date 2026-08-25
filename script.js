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
$(document).ready(function () {

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
          arrows: false,

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






$(document).ready(function () {

    $('.logo-slider').slick({

        slidesToShow: 6,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 0,

        speed: 5000,
        cssEase: 'linear',

        infinite: true,

        arrows: false,
        dots: false,

        pauseOnHover: false,
        pauseOnFocus: false,

        responsive: [

            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            }

        ]

    });




    $('.logo-slider').on('mouseenter', function () {

        let slider = $(this);
        let track = slider.find('.slick-track');

   
        slider.slick('slickPause');

   
        let currentTransform = window.getComputedStyle(
            track[0]
        ).transform;

  
        track.css({
            'transition': 'none',
            'transform': currentTransform
        });

    });




    $('.logo-slider').on('mouseleave', function () {

        let slider = $(this);
        let track = slider.find('.slick-track');

        
        track.css({
            'transition': ''
        });

        
        slider.slick('slickPlay');

    });

});




   function showTab(tab) {

            const webContent = document.getElementById('webContent');
            const vpsContent = document.getElementById('vpsContent');

            const webTab = document.getElementById('webTab');
            const vpsTab = document.getElementById('vpsTab');


            /* =========================================
               ACTIVE TAB CLASSES
            ========================================= */

            const activeClasses = [
                'bg-nex',
                'text-white'
            ];


            /* =========================================
               INACTIVE TAB CLASSES
            ========================================= */

            const inactiveClasses = [
                'text-gray-900',
                'hover:bg-gray-100'
            ];


            /* =========================================
               WEB HOSTING
            ========================================= */

            if (tab === 'web') {

                // Show Web
                webContent.classList.remove('hidden');

                // Hide VPS
                vpsContent.classList.add('hidden');


                // Web = Active
                webTab.classList.add(...activeClasses);

                webTab.classList.remove(...inactiveClasses);


                // VPS = Inactive
                vpsTab.classList.remove(...activeClasses);

                vpsTab.classList.add(...inactiveClasses);

            }


 

            else if (tab === 'vps') {

                // Hide Web
                webContent.classList.add('hidden');

                // Show VPS
                vpsContent.classList.remove('hidden');


                // VPS = Active
                vpsTab.classList.add(...activeClasses);

                vpsTab.classList.remove(...inactiveClasses);


                // Web = Inactive
                webTab.classList.remove(...activeClasses);

                webTab.classList.add(...inactiveClasses);

            }

        }



        document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".nex-tpl-card");

    cards.forEach(function (card) {

        const thumb = card.querySelector(".nex-tpl-thumb");
        const img = card.querySelector(".nex-tpl-thumb img");

        if (!thumb || !img) return;


        function setScrollDistance() {

            /*
             * Image-এর actual rendered height
             */
            const imageHeight = img.getBoundingClientRect().height;


            /*
             * Image area-এর actual height
             */
            const thumbHeight = thumb.getBoundingClientRect().height;


            /*
             * যতটুকু image 450px area-এর বাইরে আছে
             * ঠিক ততটুকুই scroll হবে
             */
            const distance = Math.max(
                0,
                imageHeight - thumbHeight
            );


            /*
             * Automatically CSS variable
             */
            card.style.setProperty(
                "--scroll-distance",
                distance + "px"
            );
        }


        /*
         * Image load হওয়ার পরে calculate
         */
        if (img.complete) {
            setScrollDistance();
        } else {
            img.addEventListener(
                "load",
                setScrollDistance
            );
        }


        /*
         * Resize হলে আবার calculate
         */
        window.addEventListener(
            "resize",
            setScrollDistance
        );

    });

});