const navLi = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section__block');

// window scroll function
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;

        console.log(sectionTop);
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('.nav__link[href*= ' + current + ']').classList.add('active');
    });
});