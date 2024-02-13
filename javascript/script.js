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


// bebas klik
const menu = document.querySelector('#menu');
const kr = document.querySelector('#shoppingButton');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!kr.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});
