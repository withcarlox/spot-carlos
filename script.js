// script.js

// Menu toggle for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Offset for fixed header
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header shadow/behavior (optional, already blurred)
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Dark / Light Mode Toggle
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('bx-sun');
    document.body.classList.toggle('light-mode');
};

// --- Internationalization (i18n) ---
const translations = {
    pt: {
        "nav-logo": "Portfólio",
        "nav-inicio": "Início",
        "nav-sobre": "Sobre mim",
        "nav-hab": "Minhas Habilidades",
        "nav-cert": "Certificados",
        "nav-proj": "Projetos",
        "hero-code": "SELECT * FROM my_portfolio;",
        "hero-role": "Analista de <span class='highlight'>Dados</span>",
        "hero-btn": "Visualizar CV",
        "about-title": "<span class='tag'>&lt;/</span>Sobre <span class='white-text'>Mim<span class='tag'>&gt;</span></span>",
        "about-1": "Profissional de dados especializado em <span class='bold-white'>SQL</span>, <span class='bold-white'>Análise de Dados</span> e <span class='bold-white'>Business Intelligence</span>, focado em transformar dados brutos em insights cruciais pautados pelo negócio.",
        "about-2": "Com sólido background em desenvolvimento de software, abordo problemas com uma mentalidade de engenharia — construindo fluxos de dados escaláveis, pipelines ETL confiáveis e modelos de dados bem estruturados. Atuo em todo o ciclo de vida: desde a extração até o monitoramento de KPIs.",
        "about-3": "Tenho experiência prática na análise de dados operacionais, métricas de logística e customer experience (CX), traduzindo bases complexas em relatórios claros que suportam a tomada de decisões estratégicas das equipes e da liderança.",
        "skills-title": "<span class='tag'>&lt;/</span>Minhas <span class='white-text'>Habilidades<span class='tag'>&gt;</span></span>",
        "cert-title": "<span class='tag'>&lt;/</span>Meus <span class='white-text'>Certificados<span class='tag'>&gt;</span></span>",
        "cert-google-title": "Google Data Analytics Professional",
        "cert-google-desc": "Certificação Profissional do Google em Análise de Dados",
        "cert-view": "<i class='bx bx-link-external'></i> Visualizar",
        "proj-title": "<span class='tag'>&lt;/</span>Meus <span class='white-text'>Projetos<span class='tag'>&gt;</span></span>",
        "proj-btn": "Ver Projeto",
        "proj-dev-title": "Em desenvolvimento",
        "proj-dev-desc": "Estou trabalhando em novos e empolgantes projetos. Em breve eles estarão disponíveis aqui!",
        "footer-text": "&copy; 2024 Carlos Amaral. Todos os direitos reservados."
    },
    en: {
        "nav-logo": "Portfolio",
        "nav-inicio": "Home",
        "nav-sobre": "About me",
        "nav-hab": "My Skills",
        "nav-cert": "Certificates",
        "nav-proj": "Projects",
        "hero-code": "SELECT * FROM my_portfolio;",
        "hero-role": "Data <span class='highlight'>Analyst</span>",
        "hero-btn": "View Resume",
        "about-title": "<span class='tag'>&lt;/</span>About <span class='white-text'>Me<span class='tag'>&gt;</span></span>",
        "about-1": "Data professional specialized in <span class='bold-white'>SQL</span>, <span class='bold-white'>Data Analysis</span>, and <span class='bold-white'>Business Intelligence</span>, focused on transforming raw data into structured datasets, dashboards, and actionable business insights.",
        "about-2": "My background in software development and automation allows me to approach data problems with an engineering mindset, building scalable data workflows, reliable ETL pipelines, and well-structured data models. I work across the data lifecycle — from extraction to KPI monitoring.",
        "about-3": "I have hands-on experience analyzing operational data, logistics metrics, and customer experience data, translating complex datasets into clear insights that support business teams and leadership.",
        "skills-title": "<span class='tag'>&lt;/</span>My <span class='white-text'>Skills<span class='tag'>&gt;</span></span>",
        "cert-title": "<span class='tag'>&lt;/</span>My <span class='white-text'>Certificates<span class='tag'>&gt;</span></span>",
        "cert-google-title": "Google Data Analytics Professional",
        "cert-google-desc": "Google Data Analytics Professional Certificate",
        "cert-view": "<i class='bx bx-link-external'></i> View",
        "proj-title": "<span class='tag'>&lt;/</span>My <span class='white-text'>Projects<span class='tag'>&gt;</span></span>",
        "proj-btn": "View Project",
        "proj-dev-title": "Under development",
        "proj-dev-desc": "I am working on new and exciting projects. They will be available here soon!",
        "footer-text": "&copy; 2024 Carlos Amaral. All rights reserved."
    }
};

const langPtBtn = document.getElementById('lang-pt');
const langEnBtn = document.getElementById('lang-en');

function setLanguage(lang) {
    // Update active class on buttons
    if(lang === 'pt') {
        langPtBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    } else {
        langEnBtn.classList.add('active');
        langPtBtn.classList.remove('active');
    }

    // Update texts in DOM
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

langPtBtn.addEventListener('click', () => setLanguage('pt'));
langEnBtn.addEventListener('click', () => setLanguage('en'));
