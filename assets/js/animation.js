var type = new Typed(".auto-typed", {
    strings: ["Student.", "Gamer.", "Programmer.", "Developer."],
    typeSpeed: 150,
    backSpeed: 30,
    loop: true.Typed
})

document.addEventListener('DOMContentLoaded', function () {
    animateProgressBars();
  });

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach((bar) => {
      const targetWidth = parseFloat(bar.getAttribute('aria-valuenow'));
      let currentWidth = 0;

      // Function to update the width of the progress bar
      function updateWidth() {
        if (currentWidth < targetWidth) {
          currentWidth += 1; // Adjust the animation speed as needed
          bar.style.width = `${currentWidth}%`;
          requestAnimationFrame(updateWidth);
        }
      }

      updateWidth();
    });
  }
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  