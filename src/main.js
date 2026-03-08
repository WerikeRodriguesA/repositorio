import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/home.css';

import { initRouter } from './core/router.js';
import { initCursor } from './core/cursor.js';

function initHUD() {
    const hud = [
        { cls: 'hud-corner hud-tl', html: 'WRA_DEV<span class="blink">█</span>' },
        { cls: 'hud-corner hud-tr', id: 'hud-time' },
        { cls: 'hud-corner hud-bl', html: 'v1.0.0 — PORTFOLIO' },
        { cls: 'hud-corner hud-br', html: 'STATUS: <span style="color:var(--accent)">ONLINE</span>' },
    ];

    hud.forEach(({ cls, html, id }) => {
        const el = document.createElement('div');
        el.className = cls;
        if (id) el.id = id;
        if (html) el.innerHTML = html;
        document.body.appendChild(el);
    });

    function updateClock() {
        const el = document.getElementById('hud-time');
        if (el) el.textContent = new Date().toLocaleTimeString('pt-BR', { hour12: false });
    }
    updateClock();
    setInterval(updateClock, 1000);
}

initHUD();
initCursor();
initRouter();