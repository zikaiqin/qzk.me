// Run main once content loaded
document.addEventListener('DOMContentLoaded', main);

function main() {
    // Section IDs
    const sections = Object.freeze({
        about: 'about',
        works: 'works',
        contact: 'contact',
    });

    // Bind listeners to nav links
    bindNavLinks(sections);

    // Default to #about
    if (!window.location.hash || !(window.location.hash.slice(1) in sections)) {
        setHash(`#${sections.about}`);
    }

    // Listen to manual hash change
    window.addEventListener('hashchange', ({ oldURL }) => {
        onHashChange(sections, oldURL.split('#')[1]);
    });

    // Inject build date
    injectDate();

    // Inject resume link
    injectLink();
}

function bindNavLinks(sections) {
    Object.values(sections).forEach((sectionID) => {
        const navLink = document.getElementById(`nav-${sectionID}`);
        navLink.addEventListener('click', () => {
            setHash(`#${sectionID}`);
        });
    });
}

function setHash(newHash) {
    history.replaceState(null, '', newHash);
}

function onHashChange(sections, oldHash) {
    if (window.location.hash.slice(1) in sections) {
        setHash(window.location.hash);
    } else {
        setHash(`#${oldHash}`);
    }
}

function injectDate() {
    let dateStr;
    try {
        dateStr = __BUILD_DATE__.split('T')[0];
    } catch {
        return;
    }
    const dateEl = document.getElementById('update');
    dateEl.textContent = `Last update: ${dateStr}`;

    const copyEl = document.getElementById('copy');
    const pubYear = copyEl.textContent;
    const curYear = dateStr.split('-')[0];
    if (pubYear !== curYear) {
        copyEl.textContent = `${pubYear}-${curYear}`;
    }
}

function injectLink() {
    const link = document.getElementById('resume-link');
    link.setAttribute('href', __RESUME_URL__);
}
