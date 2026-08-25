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

});






function showTab(tab) {

  const webContent = document.getElementById('webContent');
  const vpsContent = document.getElementById('vpsContent');

  const webTab = document.getElementById('webTab');
  const vpsTab = document.getElementById('vpsTab');


  if (tab === 'web') {

    webContent.classList.remove('hidden');
    vpsContent.classList.add('hidden');

    webTab.classList.add(
      'bg-[#4357c4]',
      'text-white'
    );

    webTab.classList.remove(
      'text-gray-900',
      'hover:bg-gray-100'
    );


    vpsTab.classList.remove(
      'bg-[#4357c4]',
      'text-white'
    );

    vpsTab.classList.add(
      'text-gray-900',
      'hover:bg-gray-100'
    );

  }


  if (tab === 'vps') {

    vpsContent.classList.remove('hidden');
    webContent.classList.add('hidden');

    vpsTab.classList.add(
      'bg-[#4357c4]',
      'text-white'
    );

    vpsTab.classList.remove(
      'text-gray-900',
      'hover:bg-gray-100'
    );


    webTab.classList.remove(
      'bg-[#4357c4]',
      'text-white'
    );

    webTab.classList.add(
      'text-gray-900',
      'hover:bg-gray-100'
    );

  }

}




 // Popup elements
    const videoModal = document.getElementById('videoModal');
    const popupVideo = document.getElementById('popupVideo');


    // ========================================================
    // OPEN VIDEO
    // ========================================================

    function openVideo(videoPath) {

        // Set video source
        popupVideo.src = videoPath;

        // Show popup
        videoModal.classList.remove('hidden');
        videoModal.classList.add('flex');

        // Disable background scrolling
        document.body.classList.add('overflow-hidden');

        // Load video
        popupVideo.load();

        // Try autoplay
        popupVideo.play().catch(function(error) {

            console.log('Autoplay blocked:', error);

        });

    }


    // ========================================================
    // CLOSE VIDEO
    // ========================================================

    function closeVideo() {

        // Stop video
        popupVideo.pause();

        // Remove source
        popupVideo.removeAttribute('src');

        // Reset video
        popupVideo.load();

        // Hide popup
        videoModal.classList.add('hidden');
        videoModal.classList.remove('flex');

        // Enable page scrolling
        document.body.classList.remove('overflow-hidden');

    }


    // ========================================================
    // CLICK OUTSIDE POPUP
    // ========================================================

    videoModal.addEventListener('click', function(event) {

        if (event.target === videoModal) {

            closeVideo();

        }

    });


    // ========================================================
    // ESC KEY
    // ========================================================

    document.addEventListener('keydown', function(event) {

        if (event.key === 'Escape') {

            closeVideo();

        }

    });
