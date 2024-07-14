export function burgerMenu () {
    const menuElement = document.querySelector('.navigation__lk').children[0];
    const dopMenu = document.querySelector('.menuBurger')
    menuElement.addEventListener('click', () => {
        menuElement.parentElement.classList.toggle('open');
        if (menuElement.parentElement.classList.contains('open')) {
            dopMenu.style.display = 'flex';
        } else {
        dopMenu.style.display = 'none';
        }
    });
}