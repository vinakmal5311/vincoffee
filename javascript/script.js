// toogle active
const navbarNav = document.querySelector('.navbarNav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// bebas klik
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});