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

let currentRoute = 'home';
const app = document.getElementById('app');

function render(routeName, params = {}) {
    app.style.opacity = '0';

    setTimeout(() => {
        app.innerHTML = '';
        const PageFn = routes[routeName];
        if (!PageFn) return;

        const page = PageFn(params);
        app.appendChild(page);

        app.style.opacity = '1';
        currentRoute = routeName;
    }, 250);
}

export function navigate(routeName, params = {}) {
    render(routeName, params);
}

export function initRouter() {
    app.style.transition = 'opacity 0.25s ease';
    render('home');
}