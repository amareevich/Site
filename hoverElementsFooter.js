export function hoverEffect () {
    Array.from(document.querySelectorAll('svg')).forEach ((el) => {
        el.addEventListener('mouseover', (e) => {
            e.stopImmediatePropagation();
            const color = '#F16D7F';
            el.children[1].setAttribute('fill', color);
        });
        el.addEventListener('mouseleave', (e) => {
            e.stopImmediatePropagation();
            const color = 'black';
            el.children[1].setAttribute('fill', color)
        });
    });
}