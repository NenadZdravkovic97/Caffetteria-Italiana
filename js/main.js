let menuBtn = document.querySelector('#menu-btn');
let navDiv = document.querySelector('#nav');
let navItems = document.querySelector('#nav-items');

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('active');
    if (navDiv.classList.contains('active') && navItems.classList.contains('active')) {
        navDiv.classList.remove('active');
        navItems.classList.remove('active');
    } else {
        navDiv.classList.add('active');
        navItems.classList.add('active');
    }
});