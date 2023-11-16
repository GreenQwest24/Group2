const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const collapsibleMenu = docment.querySelector('.collapsible-menu');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
    if(navbar.classList.contains('show-menu')){
        collapsibleMenu.style.maxHeight = collapsibleMenu.scrollHeigth + 'px';
        setTimeout(() => {
            collapsibleMenu.style.overflow = 'visible'
        }, 3000);
    }else{
        collapsibleMenu.style.maxHeight =  '0px';
        collapsibleMenu.style.maxHeight = '0px';


    }
});