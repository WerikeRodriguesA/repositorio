import { navigate } from '../core/router.js';

export function AboutPage() {
    const container = document.createElement('div');
    container.className = 'page-wrap';

    container.innerHTML = `
    <button class="back-btn">◀ &nbsp;VOLTAR AO MENU</button>

    <div class="page-header">
      <span class="page-num">01 /</span>
      <h2 class="page-title">SOBRE <span>MIM</span></h2>
    </div>

    <div class="about-grid">

      <div class="about-block full anim-fade-up" style="animation-delay:0.1s" data-label="// origem">
        <p>
          Tudo começou com um PlayStation 2. Não foi numa aula, não foi num curso —
          foi na curiosidade de entender como aquilo funcionava. Desde então, tecnologia
          deixou de ser entretenimento e virou linguagem. Hoje falo essa linguagem profissionalmente.
        </p>
      </div>

      <div class="about-block anim-fade-up" style="animation-delay:0.25s" data-label="// mentalidade">
        <p>
          Prefiro resolver do que reclamar. Cada bug é um puzzle,
          cada entrega é uma fase zerada. Honestidade e comprometimento
          não são palavras de currículo — são o jeito que eu trabalho.
        </p>
      </div>

      <div class="about-block anim-fade-up" style="animation-delay:0.35s" data-label="// objetivo">
        <p>
          Buscar o próximo nível toda semana. Aprender nunca é demais.
          Quero construir sistemas que resolvam problemas reais,
          com código limpo e arquitetura que dure.
        </p>
      </div>

      <div class="about-block full anim-fade-up" style="animation-delay:0.45s" data-label="// stack">
        <div class="skill-list">
          <span class="skill-tag">Java</span>
          <span class="skill-tag">Spring Boot</span>
          <span class="skill-tag">REST APIs</span>
          <span class="skill-tag">SQL</span>
          <span class="skill-tag">HTML5</span>
          <span class="skill-tag">CSS3</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">Git</span>
        </div>
      </div>

    </div>
  `;

    container.querySelector('.back-btn').addEventListener('click', () => navigate('home'));

    return container;
}