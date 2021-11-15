const nav = document.querySelector('nav');

nav.addEventListener('scroll', () => {
    const x = window.scrollY;
    if (x >= 80) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
});