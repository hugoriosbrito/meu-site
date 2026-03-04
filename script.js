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
    initializeScrollEffects();
    initializeTypingAnimation();
    initializeHeroParticles();
    initializeBackToTop();
    initializeScrollProgress();
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
    
    // Atualizar logo
    const logoText = document.getElementById('nav-logo-text');
    const nameParts = portfolioData.personal.name.split(' ');
    logoText.textContent = nameParts[0] + ' ' + nameParts[nameParts.length - 1];
    
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
    document.getElementById('hero-description').textContent = personal.description;
    document.getElementById('btn-projects').textContent = ui.buttons.viewProjects;
    document.getElementById('btn-contact').textContent = ui.buttons.contact;
    
    // Badge
    const badge = document.getElementById('hero-badge');
    if (badge) badge.innerHTML = `👋 Bem-vindo ao meu portfólio`;

    // Atualizar links sociais
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = `
        <a href="${personal.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="${personal.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:${personal.email}" title="Email"><i class="fas fa-envelope"></i></a>
    `;
}

function populateAboutSection() {
    document.getElementById('about-title').textContent = portfolioData.ui.sections.about;
    
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML = portfolioData.about.map(paragraph => 
        `<p class="reveal">${paragraph}</p>`
    ).join('');

    // Add stats after about text
    const aboutSection = aboutText.parentElement;
    const statsHTML = `
        <div class="about-stats reveal">
            <div class="stat-item">
                <span class="stat-number">3+</span>
                <span class="stat-label">Anos de Experiência</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${portfolioData.projects.length}</span>
                <span class="stat-label">Projetos</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${portfolioData.certifications.length}</span>
                <span class="stat-label">Certificações</span>
            </div>
        </div>
    `;
    aboutSection.insertAdjacentHTML('beforeend', statsHTML);
}

function populateExperienceSection() {
    document.getElementById('experience-title').textContent = portfolioData.ui.sections.experience;
    
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = portfolioData.experience.map((exp, i) => `
        <div class="timeline-item ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}">
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <span class="timeline-date"><i class="far fa-calendar-alt"></i> ${exp.period}</span>
                <p>${exp.description}</p>
                <ul>
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

const PROJECT_ICONS = ['fas fa-chart-bar', 'fas fa-cube', 'fas fa-newspaper', 'fas fa-brain', 'fas fa-code', 'fas fa-database'];

function populateProjectsSection() {
    document.getElementById('projects-title').textContent = portfolioData.ui.sections.projects;
    
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map((project, i) => `
        <div class="project-card reveal">
            <div class="project-icon"><i class="${PROJECT_ICONS[i % PROJECT_ICONS.length]}"></i></div>
            <div class="project-header">
                <h3>${project.name}</h3>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" title="Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

const SKILL_ICONS = ['fas fa-code', 'fas fa-layer-group', 'fas fa-tools', 'fas fa-star'];

function populateSkillsSection() {
    document.getElementById('skills-title').textContent = portfolioData.ui.sections.skills;
    
    const skillsGrid = document.getElementById('skills-grid');
    const skills = portfolioData.skills;
    const categories = portfolioData.ui.skillCategories;
    
    const skillsHTML = `
        <div class="skill-category reveal">
            <div class="skill-category-icon"><i class="${SKILL_ICONS[0]}"></i></div>
            <h3>${categories.programming}</h3>
            <div class="skill-items">
                ${skills.programming.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percent">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="skill-category reveal">
            <div class="skill-category-icon"><i class="${SKILL_ICONS[1]}"></i></div>
            <h3>${categories.frameworks}</h3>
            <div class="skill-items">
                ${skills.frameworks.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percent">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="skill-category reveal">
            <div class="skill-category-icon"><i class="${SKILL_ICONS[2]}"></i></div>
            <h3>${categories.tools}</h3>
            <div class="skill-items">
                ${skills.tools.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percent">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="skill-category reveal">
            <div class="skill-category-icon"><i class="${SKILL_ICONS[3]}"></i></div>
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
            <div class="certification-card reveal">
                <div class="certification-icon"><i class="fas fa-certificate"></i></div>
                <h3>${cert.name}</h3>
                <div class="certification-issuer">${cert.issuer}</div>
                <div class="certification-date"><i class="far fa-calendar-alt"></i> ${cert.date}</div>
                ${cert.link ? `<a href="${cert.link}" target="_blank" class="certification-link"><i class="fas fa-external-link-alt"></i> Ver Certificado</a>` : ''}
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
        <div class="contact-item reveal-left">
            <div class="contact-item-icon"><i class="fas fa-envelope"></i></div>
            <div>
                <h3>${contact.email}</h3>
                <p><a href="mailto:${personal.email}">${personal.email}</a></p>
            </div>
        </div>
        <div class="contact-item reveal-left">
            <div class="contact-item-icon"><i class="fab fa-github"></i></div>
            <div>
                <h3>${contact.github}</h3>
                <p><a href="${personal.github}" target="_blank">${personal.github.replace('https://', '')}</a></p>
            </div>
        </div>
        <div class="contact-item reveal-left">
            <div class="contact-item-icon"><i class="fab fa-linkedin"></i></div>
            <div>
                <h3>${contact.linkedin}</h3>
                <p><a href="${personal.linkedin}" target="_blank">${personal.linkedin.replace('https://', '')}</a></p>
            </div>
        </div>
        <div class="contact-item reveal-left">
            <div class="contact-item-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div>
                <h3>${contact.location}</h3>
                <p>${personal.location}</p>
            </div>
        </div>
    `;
    
    // Labels e placeholders do formulário
    const formHTML = `
        <div class="form-group">
            <label for="name">${form.name}</label>
            <input type="text" id="name" name="name" placeholder="João Silva" required>
        </div>
        <div class="form-group">
            <label for="email">${form.email}</label>
            <input type="email" id="email" name="email" placeholder="joao@email.com" required>
        </div>
        <div class="form-group">
            <label for="subject">${form.subject}</label>
            <input type="text" id="subject" name="subject" placeholder="Como posso ajudar?" required>
        </div>
        <div class="form-group">
            <label for="message">${form.message}</label>
            <textarea id="message" name="message" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="btn-send">
            <i class="fas fa-paper-plane"></i> ${portfolioData.ui.buttons.sendMessage}
        </button>
    `;
    
    document.getElementById('contact-form').innerHTML = formHTML;
}

function populateFooter() {
    const footerText = document.getElementById('footer-text');
    footerText.textContent = `© ${new Date().getFullYear()} ${portfolioData.personal.name}. ${portfolioData.ui.footer}`;

    // Footer social links
    const footerSocial = document.getElementById('footer-social');
    if (footerSocial) {
        footerSocial.innerHTML = `
            <a href="${portfolioData.personal.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            <a href="${portfolioData.personal.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:${portfolioData.personal.email}" title="Email"><i class="fas fa-envelope"></i></a>
        `;
    }
}

// ====================================
// NAVEGAÇÃO MÓVEL
// ====================================
function initializeNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// ====================================
// EFEITOS DE SCROLL (navbar + active link)
// ====================================
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Active nav link on scroll
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => sectionObserver.observe(section));

    // Navbar scroll shrink
    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ====================================
// ANIMAÇÕES DAS HABILIDADES
// ====================================
function initializeSkillAnimations() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => { bar.style.width = width; }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ====================================
// ANIMAÇÃO DE DIGITAÇÃO
// ====================================
function initializeTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const title = portfolioData.personal.title;
    const words = title.split(' & ');

    // Build cumulative phrases: e.g. ["Desenvolvedor Python", "Desenvolvedor Python & Analista de Dados"]
    const fullPhrases = words.length > 1
        ? words.map((_, i) => words.slice(0, i + 1).join(' & '))
        : [title];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentPhrase = fullPhrases[0];

    function type() {
        currentPhrase = fullPhrases[phraseIndex % fullPhrases.length];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 50 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 1200);
}

// ====================================
// PARTÍCULAS DO HERO
// ====================================
function initializeHeroParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const PARTICLE_COUNT = 20;
    const PARTICLE_MIN_SIZE = 2;
    const PARTICLE_SIZE_VARIANCE = 4;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * PARTICLE_SIZE_VARIANCE + PARTICLE_MIN_SIZE;
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 15 + 10}s;
            animation-delay: ${Math.random() * 10}s;
            opacity: ${Math.random() * 0.4 + 0.1};
        `;
        container.appendChild(p);
    }
}

// ====================================
// BOTÃO BACK TO TOP
// ====================================
function initializeBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ====================================
// BARRA DE PROGRESSO DE SCROLL
// ====================================
function initializeScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = pct + '%';
    }, { passive: true });
}

// ====================================
// FORMULÁRIO DE CONTATO
// ====================================
function initializeContactForm() {
    // Form is populated later so use event delegation
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert(portfolioData.ui.messages.fillAllFields);
            return;
        }
        
        if (!isValidEmail(email)) {
            alert(portfolioData.ui.messages.invalidEmail);
            return;
        }
        
        alert(portfolioData.ui.messages.formSuccess);
        this.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ====================================
// SCROLL SUAVE (fallback)
// ====================================
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('btn')) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
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
    logoText.textContent = '';
    
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


