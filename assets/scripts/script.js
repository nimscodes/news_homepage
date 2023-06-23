const menu = document.querySelector('.menu');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = menu.getAttribute('data-visible');
    console.log(visibility);

    if (visibility === "false"){
        menu.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if (visibility === "true"){
        menu.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
    
})

