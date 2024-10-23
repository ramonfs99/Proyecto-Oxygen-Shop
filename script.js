const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    console.log('hamburger clicked!')
    if(navList.style.visibility === 'hidden'){
        nav.style.height = '15rem'
        navList.style.visibility = 'visible'
    }else{
        navList.style.visibility = 'hidden'
        nav.style.height = '4.375rem'
    }
});

const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollableHeight <= 0) {
        progressBar.style.width = '100%';
        return;
      }

    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    progressBar.style.width = scrolledPercentage + '%';
  }
  window.addEventListener('scroll', updateProgressBar);