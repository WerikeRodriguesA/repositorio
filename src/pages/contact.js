import { navigate } from '../core/router.js';

export function ContactPage() {
    const container = document.createElement('div');
    container.className = 'page-wrap';

    container.innerHTML = `
    <button class="back-btn">◀ &nbsp;VOLTAR AO MENU</button>

    <div class="page-header">
      <span class="page-num">03 /</span>
      <h2 class="page-title">CON<span>TATO</span></h2>
    </div>

    <div class="contact-grid">

      <a class="contact-item anim-fade-up" style="animation-delay:0.1s"
         href="mailto:werikera@gmail.com">
        <span class="contact-label">// email</span>
        <span class="contact-value">werikera@gmail.com</span>
        <span class="contact-hint">clique para enviar ▶</span>
      </a>

      <a class="contact-item anim-fade-up" style="animation-delay:0.2s"
         href="https://github.com/WerikeRodriguesA" target="_blank" rel="noopener">
        <span class="contact-label">// github</span>
        <span class="contact-value">github.com/WerikeRodriguesAlves</span>
        <span class="contact-hint">ver repositórios ▶</span>
      </a>

      <a class="contact-item anim-fade-up" style="animation-delay:0.3s"
         href="https://www.linkedin.com/in/dev-werike-rodrigues-alves/" target="_blank" rel="noopener">
        <span class="contact-label">// linkedin</span>
        <span class="contact-value">linkedin.com/in/dev-werike-rodrigues-alves</span>
        <span class="contact-hint">conectar ▶</span>
      </a>

      <div class="contact-item anim-fade-up" style="animation-delay:0.4s">
        <span class="contact-label">// localização</span>
        <span class="contact-value">Brasil 🇧🇷</span>
        <span class="contact-hint">aberto a trabalho remoto</span>
      </div>

      <div class="contact-note anim-fade-up" style="animation-delay:0.5s">
        Aberto a <span>estágios</span> e oportunidades <span>júnior</span>.<br>
        Se o problema é real e o código importa, quero fazer parte.
      </div>

    </div>
  `;

    container.querySelector('.back-btn').addEventListener('click', () => navigate('home'));

    return container;
}