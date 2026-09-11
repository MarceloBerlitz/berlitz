'use strict';

function setActiveLink() {
    const links = document.querySelectorAll('#menu a');
    const sections = document.querySelectorAll('main section[id]');

    const current = [...sections].find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.35 &&
               rect.bottom >= window.innerHeight * 0.35;
    });

    links.forEach(link => {
        link.classList.toggle(
            'active',
            current ? link.getAttribute('href') === `#${current.id}` : false
        );
    });
}

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('#menu a').forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('scroll', setActiveLink, { passive: true });
function fullYearsSince(dateString, now = new Date()) {
    const start = new Date(`${dateString}T00:00:00`);
    let years = now.getFullYear() - start.getFullYear();

    const anniversary = new Date(
        now.getFullYear(),
        start.getMonth(),
        start.getDate()
    );

    if (now < anniversary) {
        years--;
    }

    return Math.max(0, years);
}

function updateExperienceYears() {
    document.querySelectorAll('[data-years-since]').forEach(element => {
        const years = fullYearsSince(element.dataset.yearsSince);
        element.textContent = `${years}+`;
    });
}

window.addEventListener('load', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    updateExperienceYears();
    setActiveLink();
});
