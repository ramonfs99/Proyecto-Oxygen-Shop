const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    if(navList.style.visibility === 'hidden'){
        nav.style.height = '15rem'
        navList.style.visibility = 'visible'
    }else{
        navList.style.visibility = 'hidden'
        nav.style.height = '4.375rem'
    }
});