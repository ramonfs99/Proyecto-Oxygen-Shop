const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
  progressBar.style.width = scrolledPercentage + '%';
}

window.addEventListener('scroll', updateProgressBar);



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