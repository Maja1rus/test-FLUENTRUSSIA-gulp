//mobile nav

const navBtn = document.querySelector('.header-top__btn--mobile')
const iconBtn = document.querySelector('.header-top__btn--icon')
const menuMobile = document.querySelector('.header-top__nav--mobile')
const body = document.querySelector('body');

navBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('nav__mobile--active')
    iconBtn.classList.toggle('top__btn--active')
    body.classList.toggle('modal-open')  
    
})
