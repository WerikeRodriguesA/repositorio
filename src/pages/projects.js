import { navigate } from '../core/router.js';
import { projects } from '../data/projects.js';

export function ProjectsPage() {
    const container = document.createElement('div');
    container.className = 'page-wrap';

    container.innerHTML = `
    <button class="back-btn">◀ &nbsp;VOLTAR AO MENU</button>
    <div class="page-header">
      <span class="page-num">02 /</span>
      <h2 class="page-title">PROJ<span>ETOS</span></h2>
    </div>
    <div class="projects-grid"></div>
  `;

    const grid = container.querySelector('.projects-grid');

    projects.forEach((proj, i) => {
        const card = document.createElement('div');
        card.className = 'project-card anim-fade-up' + (proj.disabled ? ' disabled' : '');
        card.style.animationDelay = `${0.1 + i * 0.1}s`;

        card.innerHTML = `
      <div class="proj-id">${proj.num}</div>
      <div class="proj-name">${proj.name}</div>
      <p class="proj-desc">${proj.desc}</p>
      <div class="proj-footer">
        <div class="proj-tags">
          ${proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>
        <button class="btn-case" ${proj.disabled ? 'disabled' : ''}>
          ${proj.disabled ? 'EM BREVE' : 'VER CASE ▶'}
        </button>
      </div>
    `;

        if (!proj.disabled) {
            card.querySelector('.btn-case').addEventListener('click', () => {
                navigate('case', { id: proj.id });
            });
        }

        grid.appendChild(card);
    });

    container.querySelector('.back-btn').addEventListener('click', () => navigate('home'));

    return container;
}