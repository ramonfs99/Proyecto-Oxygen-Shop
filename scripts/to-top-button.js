const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function toggleScrollToTopBtn() {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

function scrollToTopWithDelay() {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 200);
}

function initScrollToTop() {
  window.addEventListener('scroll', toggleScrollToTopBtn);
  scrollToTopBtn.addEventListener('click', scrollToTopWithDelay);
}

window.addEventListener('DOMContentLoaded', initScrollToTop);