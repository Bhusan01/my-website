const menu = document.querySelector('.menu-items')
const items = document.querySelector('.u-l')
const head = document.querySelector('header')

const qoshish = () => {
    menu.classList.toggle('active')
    items.classList.toggle('active')
}
const tushish = () => {
    let windowPosition = window.scrollY > 0;
    head.classList.toggle('active', windowPosition);
}
menu.addEventListener('click', qoshish)
window.addEventListener('scroll', tushish)

