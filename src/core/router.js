import { HomePage } from '../pages/home.js';
import { AboutPage } from '../pages/about.js';
import { ProjectsPage } from '../pages/projects.js';
import { ContactPage } from '../pages/contact.js';
import { CasePage } from '../pages/case.js';

const routes = {
    home: HomePage,
    about: AboutPage,
    projects: ProjectsPage,
    contact: ContactPage,
    case: CasePage,
};

const app = document.getElementById('app');
const loader = document.getElementById('page-loader');

function showLoader() {
    loader.classList.remove('done');
    loader.classList.add('loading');
}

function hideLoader() {
    loader.classList.add('done');
    setTimeout(() => {
        loader.classList.remove('loading', 'done');
    }, 300);
}

function render(routeName, params = {}) {
    showLoader();
    app.style.opacity = '0';

    setTimeout(() => {
        app.innerHTML = '';

        const PageFn = routes[routeName];
        if (!PageFn) return;

        const page = PageFn(params);
        app.appendChild(page);

        app.style.opacity = '1';
        hideLoader();
    }, 300);
}

export function navigate(routeName, params = {}) {
    render(routeName, params);
}

export function initRouter() {
    app.style.transition = 'opacity 0.3s ease';
    render('home');
}