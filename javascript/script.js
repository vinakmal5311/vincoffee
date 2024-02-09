// toogle active
const navbarNav = document.querySelector('.navbarNav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// toogle cart
    const shoppingCart = document.querySelector('.shoppingCart')
    document.querySelector('#shoppingButton').onclick = (e) => {
        shoppingCart.classList.toggle('active');
        e.preventDefault();
    }

// toogle seacrh
const search = document.querySelector('.search')
const searchBox = document.querySelector('#searchBox')

document.querySelector('#searchButton').onclick = (e) => {
    search.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// bebas klik
const menu = document.querySelector('#menu');
const sb = document.querySelector('#searchButton');
const kr = document.querySelector('#shoppingButton');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !search.contains(e.target)) {
        search.classList.remove('active');
    }
    if(!kr.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});
