/* Control Bargur Button and Navigation links */
const nav = document.querySelector('header > nav');
const pipelinesBtn = document.querySelector('header > nav > div');
const navLinks = document.querySelectorAll('header > nav > ul > li > a');

// Add class to burger button is opened to deal with us from css
pipelinesBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle("opened");
    nav.classList.toggle('showed');
});

// Add class to each link is clicked to deal with us from css
navLinks.forEach( link => {
    link.addEventListener('click', (e) => {
        e.target.classList.toggle('clicked');
    })
});


// open each link when clicked and move to section by smooth way
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.tagName === 'A'){
            const sectionid = e.target.getAttribute('href');
            // both codes as the same
            // console.log(e.target.getAttribute('href')); // result = #about
            // console.log(link.getAttribute('href')); // result = #about
            document.querySelector(sectionid).scrollIntoView({
                behavior: "smooth",
            });
        }
        pipelinesBtn.classList.remove('opened');
        nav.classList.remove('showed');
        e.target.classList.remove('clicked');
    })
});



// When Press Escape close bargur button and hide ul
document.addEventListener('keydown', (e) => {
    if (!pipelinesBtn.getAttribute('class').includes('opened'))
        return;
    else if(e.key === 'Escape'){
        pipelinesBtn.classList.remove('opened');
        nav.classList.remove('showed');
        navLinks.forEach(link => link.classList.remove('clicked'));
    }
})

// When Press click on any part of page close bargur button and hide ul
document.addEventListener('click', e => {
    if(!pipelinesBtn.contains(e.target) && !navLinks.forEach(link => link.contains(e.target))){
        pipelinesBtn.classList.remove('opened');
        nav.classList.remove('showed');
        navLinks.forEach(link => link.classList.remove('clicked'));
    }
})

console.log(pipelinesBtn);
console.log(navLinks);