// navbar toggle 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');


let navBar = document.querySelector('.navlink');
let menuBar = document.querySelector('#menubtn');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

// scroll seclaction sticky navbar
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    })



    // --------------- striky navbar ------------------

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

// ------------ Home Type script section --------------

var typed = new Typed(".mulipal-text", {
    strings: ["Web Desinger", "Web Developer", "Graphic Desinger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




//---------------- scroll reveal aniamtion ------------

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('section h1, .about-cantent .bootam h4', { origin: 'top' });

ScrollReveal().reveal('.col-1, .custbtn, .services-cantent, .contact-cantent, section h3, .about-cantent .bootam .social-media', { origin: 'bottom' });

ScrollReveal().reveal('.col-1 h2, .about-cantent .col-1 h2, .service-cantent .box, .portfolio-contact', { origin: 'left' });

ScrollReveal().reveal('.col-1 h4, .col-1 p, .about-cantent .col-1 p, .about-cantent .col-2, .contact-cantect', { origin: 'right' });