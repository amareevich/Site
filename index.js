import { hoverEffect } from "./hoverElementsFooter.js";
import { burgerMenu } from "./menuBurger.js";
burgerMenu();
hoverEffect();

const cardElements = document.querySelectorAll('.previous-card');
cardElements.forEach((el) => {
    let d = document.createElement('div');
    let add = document.createElement('div');
    let basket = document.createElement('div');
    let span = document.createElement('span');

    el.children[0].addEventListener('mouseover', () => {
        el.style.position = 'relative'
        d.style.position = 'absolute';
        d.style.zIndex = 10;
        d.style.backgroundColor = 'black';
        d.style.width = '100%';
        d.style.height = el.children[0].getBoundingClientRect().height + 'px'
        d.style.top = 0;
        d.style.right = 0;
        d.style.left = 0;
        d.style.bottom = 0;
        d.style.opacity = '0.7';
        el.children[0].before(d);

        add.style.position = 'absolute';
        add.style.display = 'flex';
        add.style.flexDirection = 'row';
        add.style.justifyContent = 'center';
        add.style.alignItems = 'center';
        add.style.zIndex = 11;
        add.style.border = '1px solid #F8F8F8'
        add.style.width = '139px';
        add.style.height = '44px';
        add.style.textAlign = 'center';
        add.style.padding = '5px';
        add.style.top = d.getBoundingClientRect().height / 2 + 'px';
        add.style.right = 0;
        add.style.left = d.getBoundingClientRect().width / 2  - 139 / 2 + 'px';;
        add.style.bottom = 0;
        el.children[0].before(add);

        span.classList.add('previous-card--span');
        basket.classList.add('previous-card--basket');
        span.textContent = 'Add to Cart';
        add.append(basket, span);

    })

    el.addEventListener('mouseleave', () => {
        if (el.contains(d)) {
            d.remove();
            add.remove();
        }
    })
})
