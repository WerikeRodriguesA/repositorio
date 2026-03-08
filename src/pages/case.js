import { navigate } from '../core/router.js';
import { projects } from '../data/projects.js';

export function CasePage({ id }) {
    const proj = projects.find((p) => p.id === id);
    // O projects.find() busca o projeto pelo id. Se não achar — por exemplo, alguém acessar um id inválido — redireciona para projetos automaticamente.

    if (!proj || !proj.case) {
        navigate('projects');
        return document.createElement('div');
    }

    const container = document.createElement('div');
    container.className = 'page-wrap';

    container.innerHTML = `
    <button class="back-btn">◀ &nbsp;VOLTAR AOS PROJETOS</button>

    <div class="page-header">
      <span class="page-num">${proj.num} /</span>
      <h2 class="page-title">${proj.name.toUpperCase().replace(' ', '<span> ')}...</span></h2>
    </div>

    <div class="case-grid">

      <div class="case-block full anim-fade-up" style="animation-delay:0.1s" data-label="// visão geral">
        <p>${proj.case.overview}</p>
      </div>

      <div class="case-block anim-fade-up" style="animation-delay:0.2s" data-label="// o problema">
        <p>${proj.case.problem}</p>
      </div>

      <div class="case-block anim-fade-up" style="animation-delay:0.3s" data-label="// a solução">
        <p>${proj.case.solution}</p>
      </div>

      <div class="case-block anim-fade-up" style="animation-delay:0.4s" data-label="// stack utilizada">
        <div class="skill-list">
          ${proj.case.stack.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>

      <div class="case-block anim-fade-up" style="animation-delay:0.5s" data-label="// o que aprendi">
        <p>${proj.case.learned}</p>
      </div>

    </div>
  `;

    container.querySelector('.back-btn').addEventListener('click', () => navigate('projects'));

    return container;
}