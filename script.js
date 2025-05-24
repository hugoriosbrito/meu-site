// ====================================
// SCRIPT PRINCIPAL DO PORTFÓLIO
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Verificar se os dados do portfólio estão disponíveis
    if (typeof portfolioData === 'undefined') {
        console.error('Dados do portfólio não encontrados. Verifique se o arquivo portfolio-data.js foi carregado.');
        return;
    }

    // Inicializar todas as funcionalidades
    initializePortfolio();
    initializeNavigation();
    initializeSkillAnimations();
    initializeContactForm();
});

// ====================================
// INICIALIZAÇÃO DO PORTFÓLIO
// ====================================
function initializePortfolio() {
    populateNavigationMenu();
    populateHeroSection();
    populateAboutSection();
    populateExperienceSection();
    populateProjectsSection();
    populateSkillsSection();
    populateCertificationsSection();
    populateContactSection();
    populateFooter();
}

// ====================================
// POPULAÇÃO DAS SEÇÕES
// ====================================

function populateNavigationMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navData = portfolioData.ui.nav;
    
    // Atualizar logo - removendo o nome e deixando apenas "Portfólio"
    const logoText = document.getElementById('nav-logo-text');
    logoText.textContent = 'Portfólio';
    
    // Criar menu de navegação
    const menuItems = [
        { href: '#home', text: navData.home },
        { href: '#about', text: navData.about },
        { href: '#experience', text: navData.experience },
        { href: '#projects', text: navData.projects },
        { href: '#skills', text: navData.skills },
        { href: '#certifications', text: navData.certifications },
        { href: '#contact', text: navData.contact }
    ];
    
    navMenu.innerHTML = menuItems.map(item => 
        `<a href="${item.href}" class="nav-link">${item.text}</a>`
    ).join('');
}

function populateHeroSection() {
    const personal = portfolioData.personal;
    const ui = portfolioData.ui;
    
    // Atualizar título da página
    document.getElementById('page-title').textContent = `${personal.name} - Portfólio`;
    
    // Atualizar seção hero
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('hero-description').textContent = personal.description;
    document.getElementById('btn-projects').textContent = ui.buttons.viewProjects;
    document.getElementById('btn-contact').textContent = ui.buttons.contact;
    
    // Atualizar links sociais
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = `
        <a href="${personal.github}" target="_blank"><i class="fab fa-github"></i></a>
        <a href="${personal.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
    `;
}

function populateAboutSection() {
    document.getElementById('about-title').textContent = portfolioData.ui.sections.about;
    
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML = portfolioData.about.map(paragraph => 
        `<p>${paragraph}</p>`
    ).join('');
}

function populateExperienceSection() {
    document.getElementById('experience-title').textContent = portfolioData.ui.sections.experience;
    
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <span class="timeline-date">${exp.period}</span>
                <p>${exp.description}</p>
                <ul>
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function populateProjectsSection() {
    document.getElementById('projects-title').textContent = portfolioData.ui.sections.projects;
    
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3>${project.name}</h3>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function populateSkillsSection() {
    document.getElementById('skills-title').textContent = portfolioData.ui.sections.skills;
    
    const skillsGrid = document.getElementById('skills-grid');
    const skills = portfolioData.skills;
    const categories = portfolioData.ui.skillCategories;
    
    const skillsHTML = `
        <!-- Linguagens de Programação -->
        <div class="skill-category">
            <h3>${categories.programming}</h3>
            <div class="skill-items">
                ${skills.programming.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Frameworks & Bibliotecas -->
        <div class="skill-category">
            <h3>${categories.frameworks}</h3>
            <div class="skill-items">
                ${skills.frameworks.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Ferramentas & Tecnologias -->
        <div class="skill-category">
            <h3>${categories.tools}</h3>
            <div class="skill-items">
                ${skills.tools.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Áreas de Especialização -->
        <div class="skill-category">
            <h3>${categories.specializations}</h3>
            <div class="skill-tags">
                ${skills.specializations.map(spec => `<span class="skill-tag">${spec}</span>`).join('')}
            </div>
        </div>
    `;
    
    skillsGrid.innerHTML = skillsHTML;
}

function populateCertificationsSection() {
    document.getElementById('certifications-title').textContent = portfolioData.ui.sections.certifications;
    
    const certificationsGrid = document.getElementById('certifications-grid');
    
    if (portfolioData.certifications.length === 0) {
        certificationsGrid.innerHTML = `
            <div class="no-certifications">
                <p>Certificações serão adicionadas em breve. Mantenha-se atualizado!</p>
            </div>
        `;
    } else {
        certificationsGrid.innerHTML = portfolioData.certifications.map(cert => `
            <div class="certification-card">
                <h3>${cert.name}</h3>
                <div class="certification-issuer">${cert.issuer}</div>
                <div class="certification-date">${cert.date}</div>
                ${cert.link ? `<a href="${cert.link}" target="_blank" class="certification-link">Ver Certificado</a>` : ''}
            </div>
        `).join('');
    }
}

function populateContactSection() {
    const contact = portfolioData.ui.contact;
    const personal = portfolioData.personal;
    const form = portfolioData.ui.form;
    
    document.getElementById('contact-title').textContent = portfolioData.ui.sections.contact;
    
    // Informações de contato
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
                <h3>${contact.email}</h3>
                <p><a href="mailto:${personal.email}">${personal.email}</a></p>
            </div>
        </div>
        <div class="contact-item">
            <i class="fab fa-github"></i>
            <div>
                <h3>${contact.github}</h3>
                <p><a href="${personal.github}" target="_blank">${personal.github.replace('https://', '')}</a></p>
            </div>
        </div>
        <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <div>
                <h3>${contact.linkedin}</h3>
                <p><a href="${personal.linkedin}" target="_blank">${personal.linkedin.replace('https://', '')}</a></p>
            </div>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <h3>${contact.location}</h3>
                <p>${personal.location}</p>
            </div>
        </div>
    `;
    
    // Placeholders do formulário
    document.getElementById('name').placeholder = form.name;
    document.getElementById('email').placeholder = form.email;
    document.getElementById('subject').placeholder = form.subject;
    document.getElementById('message').placeholder = form.message;
    document.getElementById('btn-send').textContent = portfolioData.ui.buttons.sendMessage;
}

function populateFooter() {
    const footerText = document.getElementById('footer-text');
    footerText.textContent = `© ${new Date().getFullYear()} ${portfolioData.personal.name}. ${portfolioData.ui.footer}`;
}

// ====================================
// NAVEGAÇÃO MÓVEL
// ====================================
function initializeNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ====================================
// ANIMAÇÕES DAS HABILIDADES
// ====================================
function initializeSkillAnimations() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar a seção de habilidades
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ====================================
// FORMULÁRIO DE CONTATO
// ====================================
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validação simples
        if (!name || !email || !subject || !message) {
            alert(portfolioData.ui.messages.fillAllFields);
            return;
        }
        
        if (!isValidEmail(email)) {
            alert(portfolioData.ui.messages.invalidEmail);
            return;
        }
        
        // Simular envio (substituir por integração real)
        alert(portfolioData.ui.messages.formSuccess);
        form.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ====================================
// UTILITÁRIOS
// ====================================

// Scroll suave para navegação (fallback para navegadores mais antigos)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('btn')) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
});