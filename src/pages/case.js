export function CasePage(params) {
    const el = document.createElement('div');
    el.textContent = 'Case: ' + (params.id || '');
    return el;
}