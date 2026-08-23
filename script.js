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
            arrows: false  // arrow বন্ধ থাকবে
          } 
        },
        { 
          breakpoint: 400,  
          settings: { 
            slidesToShow: 3,
            arrows: false  // arrow বন্ধ থাকবে
          } 
        }
      ]
    });

    // Plugin slider
    $('.plugin-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,  // arrow বন্ধ থাকবে সব স্ক্রিনে
      dots: true,
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
            slidesToShow: 1,
            arrows: false 
          } 
        }
      ]
    });
  });

    // Off-canvas mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('mobileOverlay');

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebarFn() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebarFn);
    overlay.addEventListener('click', closeSidebarFn);

    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeSidebarFn();
    });
