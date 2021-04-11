// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navigation').style.opacity = 0.9;
    } else {
      document.querySelector('#navigation').style.opacity = 1;
    }
  });

// Smooth Scrolling


