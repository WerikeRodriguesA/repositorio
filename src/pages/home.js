import { navigate } from '../core/router.js';

export function HomePage() {
    const container = document.createElement('div');
    container.className = 'home';

    container.innerHTML = `
    <div class="home-left">
      <p class="player-tag anim-fade-up" style="animation-delay: 0.1s">// player one</p>

      <h1 class="home-name anim-fade-up" style="animation-delay: 0.3s">
        Werike<span>Rodrigues</span>
      </h1>

      <p class="home-role anim-fade-up" style="animation-delay: 0.5s">
        Backend Developer · Java · APIs
      </p>

      <p class="home-lore anim-fade-up" style="animation-delay: 0.7s">
        Primeiro contato com tecnologia: PS2, 2011.<br>
        Desde então: curiosidade virou código,<br>
        código virou solução, solução virou missão.<br>
        Cada problema é uma fase a ser vencida.
      </p>

      <div class="stats-row anim-fade-up" style="animation-delay: 0.9s">
        <div class="stat">
          <span class="stat-label">Projetos</span>
          <span class="stat-value">04</span>
        </div>
        <div class="stat">
          <span class="stat-label">Nível</span>
          <span class="stat-value">JR</span>
        </div>
        <div class="stat">
          <span class="stat-label">Status</span>
          <span class="stat-value" style="font-size:1rem; padding-top: 0.4rem">DISPONÍVEL</span>
        </div>
      </div>
    </div>

    <nav class="home-right">
      <p class="menu-header anim-fade-up" style="animation-delay: 0.4s">
        // selecione a fase
      </p>

      <ul class="menu">
        <li class="menu-item anim-fade-up" style="animation-delay: 0.6s" data-route="about">
          <span class="item-num">01</span>
          <span class="item-label">SOBRE MIM</span>
          <span class="item-desc">LORE</span>
          <span class="item-arrow">▶</span>
        </li>
        <li class="menu-item anim-fade-up" style="animation-delay: 0.75s" data-route="projects">
          <span class="item-num">02</span>
          <span class="item-label">PROJETOS</span>
          <span class="item-desc">BUILD LOG</span>
          <span class="item-arrow">▶</span>
        </li>
        <li class="menu-item anim-fade-up" style="animation-delay: 0.9s" data-route="contact">
          <span class="item-num">03</span>
          <span class="item-label">CONTATO</span>
          <span class="item-desc">CONNECT</span>
          <span class="item-arrow">▶</span>
        </li>
      </ul>
    </nav>
  `;

    // Navegação pelo menu
    container.querySelectorAll('[data-route]').forEach((el) => {
        el.addEventListener('click', () => navigate(el.dataset.route));
    });

    return container;
}