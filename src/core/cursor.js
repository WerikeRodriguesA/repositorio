export function initCursor() {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseover', (e) => {
        const interactive = e.target.closest('button, a, [data-route], [data-back], li');
        if (interactive) {
            cursor.classList.add('hover');
        } else {
            cursor.classList.remove('hover');
        }
    });
}